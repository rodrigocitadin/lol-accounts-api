import { OmitType } from "@nestjs/swagger";
import { CreateAccountDto } from "./create-account.dto";

export class ReturnUserDto extends OmitType(CreateAccountDto, ['password'] as const) { }
