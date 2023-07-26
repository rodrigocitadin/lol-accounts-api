import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma.service';
import { Account } from '@prisma/client';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account: Account = await this.prisma.account.create({ data: createAccountDto })

    if (!account) throw new BadRequestException;

    return account;
  }

  findAll() {
    // todo
  }

  async findOne(id: string) {
    const account = await this.prisma.account.findFirst({
      where: { id }
    });

    if (!account) throw new NotFoundException

    return account;
  }


  update(id: number, updateAccountDto: UpdateAccountDto) {
    // todo
  }

  remove(id: number) {
    // todo
  }
}
