import { ConfigService } from '@nestjs/config';
import { scryptSync, createDecipheriv, randomBytes, createCipheriv } from 'node:crypto';

const configService: ConfigService = new ConfigService;

const algorithm = 'aes-192-cbc';
const password = configService.get<string>('GEN_CRYPT_KEY');
const key = scryptSync(password, 'salt', 24);
const iv = randomBytes(16);


export function cryptPassword(password: string): string {
  const cipher = createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

export function decryptPassword(encryptedText: string): string {
  const decipher = createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
