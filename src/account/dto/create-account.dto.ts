import { IsBoolean, IsDecimal, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Region, Elo, Prisma } from '@prisma/client';
import { ApiProperty } from "@nestjs/swagger";

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  verifiedEmail: boolean;

  @ApiProperty()
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  sold?: boolean;

  @ApiProperty()
  @IsEnum(Region)
  @IsNotEmpty()
  region: Region;

  @ApiProperty({ required: false })
  @IsInt()
  @IsOptional()
  level?: number;

  @ApiProperty({ required: false })
  @IsEnum(Elo)
  @IsOptional()
  elo?: Elo

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  blueEssence: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  skinQuantity: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  championQuantity: number;

  @ApiProperty({ type: Number })
  @IsDecimal()
  @IsNotEmpty()
  price: Prisma.Decimal;
}
