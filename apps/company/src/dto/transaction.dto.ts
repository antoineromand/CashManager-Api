import { TransactionState } from "@app/utils";

export class TransactionDTO {
    company!: string;
    client_email!: string;
    amount!: number;
    state!: TransactionState;
}