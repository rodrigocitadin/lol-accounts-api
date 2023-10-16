import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { AccountService } from 'src/account/account.service';
import { UserService } from 'src/user/user.service';
import { Decimal } from '@prisma/client/runtime/library';
import { SoldAccountDto } from './dto/sold-account.dto';
import { ReturnFindDto } from './dto/return-find.dto';
import { CryptService } from 'src/crypt/crypt.service';

@Injectable()
export class TransactionService {
  constructor(
    private crypt: CryptService,
    private prisma: PrismaService,
    private accountService: AccountService,
    private userService: UserService,
  ) { }

  async create(createTransactionDto: CreateTransactionDto): Promise<SoldAccountDto> {
    const account = await this.accountService.findByIdWithPsw(createTransactionDto.accountId)
    const { balance } = await this.userService.findById(createTransactionDto.userId);
    const newPayerBalance = Decimal.sub(balance, account.price);

    if (newPayerBalance.lessThanOrEqualTo(0)) {
      throw new BadRequestException("Insufficient balance");
    }

    const transaction = await this.prisma.transaction.create({
      data: {
        payeeId: account.ownerId,
        accountId: account.id,
        ammount: account.price,
      }
    })

    await this.prisma.userTransaction.create({
      data: {
        userId: createTransactionDto.userId,
        transactionId: transaction.id,
        ammount: account.price,
      }
    })

    const payee = await this.userService.findById(account.ownerId);
    const newPayeeBalance = Decimal.add(payee.balance, account.price);

    await this.userService.update(account.ownerId, { balance: newPayeeBalance });
    await this.userService.update(createTransactionDto.userId, { balance: newPayerBalance });
    await this.accountService.update(account.id, { sold: true });

    const decryptedPassword: string = this.crypt.decryptPassword(account.password);

    const soldAccount: SoldAccountDto = {
      username: account.username,
      email: account.email,
      password: decryptedPassword,
    }

    return soldAccount;
  }

  async findById(id: string): Promise<ReturnFindDto> {
    const received = await this.prisma.transaction.findMany({ where: { payeeId: id } });
    const sent = await this.prisma.userTransaction.findMany({ where: { userId: id } });

    return {
      receivedTransactions: received,
      sentTransactions: sent,
    }
  }
}
