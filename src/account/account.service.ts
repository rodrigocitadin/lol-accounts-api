import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

type FindOneData = {
  id?: string,
  email?: string,
  username?: string,
}

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  create(createAccountDto: CreateAccountDto) {
    // todo
  }

  findAll() {
    // todo
  }

  findOne(data: FindOneData) {
    // todo
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    // todo
  }

  remove(id: number) {
    // todo
  }
}
