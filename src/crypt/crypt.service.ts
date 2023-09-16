import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

@Injectable()
export class CryptService {
  constructor(
    private configService: ConfigService,
  ) { }

  private gen = this.configService.get<string>('GEN_CRYPT_KEY');
  private key = scryptSync(this.gen, 'salt', 24);
  private algorithm = "aes-192-cbc";
  private iv = randomBytes(16);

  cryptPassword(psw: string): string {
    const cipher = createCipheriv(this.algorithm, this.key, this.iv);

    let encrypted = cipher.update(psw, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }


  decryptPassword(encryptedText: string): string {
    const decipher = createDecipheriv(this.algorithm, this.key, this.iv);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}
