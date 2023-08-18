import { Transaction, UserTransaction } from "@prisma/client";

export class ReturnFindDto {
  receivedTransactions: Transaction[];
  sentTransactions: UserTransaction[];
}
