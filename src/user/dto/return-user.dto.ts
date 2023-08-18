import { OmitType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class ReturnUserDto extends OmitType(CreateUserDto, ['password'] as const) { }
