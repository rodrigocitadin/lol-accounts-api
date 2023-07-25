import { IsBoolean, IsDecimal, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Prisma } from '@prisma/client';

type Elo =
  "UNRANKED"
  | "IRON"
  | "BRONZE"
  | "SILVER"
  | "GOLD"
  | "PLATINUM"
  | "EMERALD"
  | "DIAMOND"
  | "MASTER"
  | "GRANDMASTER"
  | "CHALLENGER"

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
  sold?: boolean

  @IsInt()
  @IsOptional()
  level?: number;

  @IsString()
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
