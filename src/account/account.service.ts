import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma.service';
import { Account } from '@prisma/client';
import { cryptPassword } from './utils/cryptPassword';
import { ReturnAccountDto } from './dto/return-account.dto';

@Injectable()
export class AccountService {
  constructor(
    private prisma: PrismaService,
    private returnAccount = {
      id: true,
      username: true,
      email: true,
      verifiedEmail: true,
      ownerId: true,
      sold: true,
      region: true,
      level: true,
      elo: true,
      blueEssence: true,
      skinQuantity: true,
      championQuantity: true,
      price: true,
    }
  ) { }

  async create(createAccountDto: CreateAccountDto): Promise<ReturnAccountDto> {
    createAccountDto.password = cryptPassword(createAccountDto.password);

    const account: ReturnAccountDto = await this.prisma.account.create({
      data: createAccountDto,
      select: this.returnAccount,
    })

    if (!account) throw new BadRequestException();

    return account;
  }

  async findAll(): Promise<ReturnAccountDto[]> {
    const accounts: ReturnAccountDto[] = await this.prisma.account.findMany({
      select: this.returnAccount,
    });

    return accounts;
  }

  async findOne(id: string): Promise<ReturnAccountDto> {
    const account: ReturnAccountDto = await this.prisma.account.findFirst({
      where: { id },
      select: this.returnAccount,
    });

    if (!account) throw new NotFoundException();

    return account;
  }

  async update(id: string, updateAccountDto: UpdateAccountDto): Promise<ReturnAccountDto> {
    if (updateAccountDto.password) {
      updateAccountDto.password = cryptPassword(updateAccountDto.password);
    }

    const updatedAccount: ReturnAccountDto = await this.prisma.account.update({
      where: { id },
      data: updateAccountDto,
      select: this.returnAccount,
    })

    if (!updatedAccount) throw new BadRequestException();

    return updatedAccount;
  }

  async remove(id: string): Promise<void> {
    const account: Account = await this.prisma.account.delete({
      where: { id }
    })

    if (!account) throw new NotFoundException();
  }
}
