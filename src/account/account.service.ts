import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma.service';
import { Account } from '@prisma/client';
import { cryptPassword } from './utils/cryptPassword';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    createAccountDto.password = cryptPassword(createAccountDto.password);

    const account: Account = await this.prisma.account.create({ data: createAccountDto })

    if (!account) throw new BadRequestException();

    return account;
  }

  async findAll(): Promise<Account[]> {
    const accounts: Account[] = await this.prisma.account.findMany();

    return accounts;
  }

  async findOne(id: string): Promise<Account> {
    const account: Account = await this.prisma.account.findFirst({
      where: { id }
    });

    if (!account) throw new NotFoundException();

    return account;
  }

  async update(id: string, updateAccountDto: UpdateAccountDto): Promise<Account> {
    if (updateAccountDto.password) {
      updateAccountDto.password = cryptPassword(updateAccountDto.password);
    }

    const updatedAccount: Account = await this.prisma.account.update({
      where: { id },
      data: updateAccountDto
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
