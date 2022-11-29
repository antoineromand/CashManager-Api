import { CompanyDTO } from "./register.dto";

export class TransactionDTO {
    company!: string;
    client_email!: string;
    amount!: number;
}