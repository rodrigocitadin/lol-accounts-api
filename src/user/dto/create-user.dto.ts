import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
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

  @IsDecimal()
  @IsOptional()
  balance: Decimal
}
