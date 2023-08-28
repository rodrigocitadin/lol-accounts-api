import { User } from "@prisma/client";

export type AuthUser = Pick<User, "id" | "username">;
