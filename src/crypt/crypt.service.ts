import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';
import { algorithm, iv, key } from './constants';

@Injectable()
export class CryptService {
  constructor() { }

  cryptPassword(psw: string): string {
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(psw, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
  }


  decryptPassword(encryptedText: string): string {
    const decipher = createDecipheriv(algorithm, key, iv);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}
