import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaModule } from 'src/prisma.module';
import { CryptModule } from 'src/crypt/crypt.module';

@Module({
  imports: [PrismaModule, CryptModule],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule { }
