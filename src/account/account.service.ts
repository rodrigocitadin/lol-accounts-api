import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  create(createAccountDto: CreateAccountDto) {
    // todo
  }

  findAll() {
    // todo
  }

  async findOne(id: string) {
    const user = await this.prisma.account.findFirst({
      where: { id }
    });

    if (!user) throw new NotFoundException

    return user;
  }


  update(id: number, updateAccountDto: UpdateAccountDto) {
    // todo
  }

  remove(id: number) {
    // todo
  }
}
