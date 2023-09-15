import { IsBoolean, IsDecimal, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Decimal } from "@prisma/client/runtime/library";

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

  @IsDecimal()
  @IsNotEmpty()
  price: Decimal;
}
