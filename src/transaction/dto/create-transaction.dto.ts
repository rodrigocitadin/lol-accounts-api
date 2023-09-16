import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTransactionDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  accountId: string;
}
