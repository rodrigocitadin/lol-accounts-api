import { User } from "@prisma/client";

export type AuthUser = Omit<User, "password">;
