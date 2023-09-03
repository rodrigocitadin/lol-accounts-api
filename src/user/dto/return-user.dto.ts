// import { OmitType } from "@nestjs/swagger";
// import { CreateUserDto } from "./create-user.dto";

import { User } from "@prisma/client";

// export class ReturnUserDto extends OmitType(CreateUserDto, ['password'] as const) { }

export type ReturnUserDto = Pick<User, "id" | "email" | "balance" | "username">;
