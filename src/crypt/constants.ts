import { ConfigService } from "@nestjs/config";
import { randomBytes, scryptSync } from "crypto";

const configService: ConfigService = new ConfigService;

const gen = configService.get<string>('GEN_CRYPT_KEY');

export const key = scryptSync(gen, 'salt', 24);
export const algorithm = "aes-192-cbc";
export const iv = randomBytes(16);
