import { PickType } from "@nestjs/swagger";
import { CreateAccountDto } from "src/account/dto/create-account.dto";

export class SoldAccountDto extends PickType(CreateAccountDto, ['username', 'email', 'password'] as const) { }
