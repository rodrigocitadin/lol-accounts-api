import { IsBoolean, IsDecimal, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Prisma } from '@prisma/client';

enum Elo {
  UNRANKED,
  IRON,
  SILVER,
  GOLD,
  PLATINUM,
  ESMERALD,
  DIAMOND,
  MASTER,
  GRANDMASTER,
  CHALLENGER,
}

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional()
  sold: boolean

  @IsInt()
  @IsOptional()
  level: number;

  @IsEnum(Elo)
  @IsOptional()
  elo: Elo

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
