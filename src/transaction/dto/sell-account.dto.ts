import { PickType } from "@nestjs/swagger";
import { CreateAccountDto } from "src/account/dto/create-account.dto";

export class SellAccountDto extends PickType(CreateAccountDto, ['username', 'email', 'password'] as const) { }
