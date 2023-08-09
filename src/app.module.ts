import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma.module';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AccountModule, UserModule, AuthModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
