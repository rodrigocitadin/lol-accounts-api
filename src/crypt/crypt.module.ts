import { Module } from '@nestjs/common';
import { CryptService } from './crypt.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [CryptService],
  exports: [CryptService],
})
export class CryptModule {}
