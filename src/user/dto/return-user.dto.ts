import { User } from "@prisma/client";

export type ReturnUserDto = Pick<User, "id" | "email" | "balance" | "username">;

export const returnUserQuery = {
  id: true,
  email: true,
  balance: true,
  username: true,
}
