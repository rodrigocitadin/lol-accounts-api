import { OmitType } from "@nestjs/swagger";
import { CreateAccountDto } from "./create-account.dto";

export class ReturnAccountDto extends OmitType(CreateAccountDto, ['password'] as const) { }
