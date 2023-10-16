// import { OmitType } from "@nestjs/swagger";
// import { CreateAccountDto } from "./create-account.dto";

// export class ReturnAccountDto extends OmitType(CreateAccountDto, ['password'] as const) { }

import { Account } from "@prisma/client";

export type ReturnAccountDto = Omit<Account, "password" | "createdAt" | "updatedAt">

export const returnAccountQuery = {
  id: true,
  username: true,
  email: true,
  ownerId: true,
  sold: true,
  price: true,
}
