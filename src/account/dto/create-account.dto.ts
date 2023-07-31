import { IsBoolean, IsDecimal, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Region, Elo, Prisma } from '@prisma/client';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsOptional()
  verifiedEmail: boolean;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsBoolean()
  @IsOptional()
  sold?: boolean;

  @IsEnum(Region)
  @IsNotEmpty()
  region: Region;

  @IsInt()
  @IsOptional()
  level?: number;

  @IsEnum(Elo)
  @IsOptional()
  elo?: Elo

  @IsInt()
  @IsNotEmpty()
  blueEssence: number;

  @IsInt()
  @IsNotEmpty()
  skinQuantity: number;

  @IsInt()
  @IsNotEmpty()
  championQuantity: number;

  @IsDecimal()
  @IsNotEmpty()
  price: Prisma.Decimal;
}
