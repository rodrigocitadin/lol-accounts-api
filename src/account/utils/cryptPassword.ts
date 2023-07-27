import { ConfigService } from '@nestjs/config';
import { createDecipheriv, createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const configService: ConfigService = new ConfigService;

const gen = configService.get<string>('GEN_CRYPT_KEY');
const iv = randomBytes(16);

export async function cryptPassword(password: string): Promise<string> {
  const key = (await promisify(scrypt)(gen, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const encryptedText = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);

  return String(encryptedText);
}

export async function decryptPassword(encryptedText: Buffer): Promise<string> {
  const key = (await promisify(scrypt)(gen, 'salt', 32)) as Buffer;
  const decipher = createDecipheriv('aes-256-ctr', key, iv);

  const decryptedText = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final(),
  ]);

  return String(decryptedText);
}