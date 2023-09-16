import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma.module';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { CryptModule } from './crypt/crypt.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, AccountModule, UserModule, AuthModule, TransactionModule, CryptModule],
})
export class AppModule { }
