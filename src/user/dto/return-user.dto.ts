import { User } from "@prisma/client";

export type ReturnUserDto = Pick<User, "id" | "email" | "balance" | "username">;
