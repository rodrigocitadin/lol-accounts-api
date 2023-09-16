import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

@Injectable()
export class CryptService {
  constructor(
    configService: ConfigService,
    gen = configService.get<string>('GEN_CRYPT_KEY'),
    private algorithm = "aes-192-cbc",
    private key = scryptSync(gen, 'salt', 24),
    private iv = randomBytes(16)
  ) { }

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
