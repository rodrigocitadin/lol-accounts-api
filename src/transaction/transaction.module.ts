import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaModule } from 'src/prisma.module';
import { UserModule } from 'src/user/user.module';
import { AccountModule } from 'src/account/account.module';
import { CryptModule } from 'src/crypt/crypt.module';

@Module({
  imports: [PrismaModule, UserModule, AccountModule, CryptModule],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule { }
