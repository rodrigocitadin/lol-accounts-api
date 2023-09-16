import { Module } from '@nestjs/common';
import { CryptService } from './crypt.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [CryptService]
})
export class CryptModule {}
