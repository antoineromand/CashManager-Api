import { Role } from "@app/utils"

export class CompanyDTO {
    name: string;
    icon: string;
}

export class UserDTO {
    email: string;
    password: string;
    role: Role;
    company: CompanyDTO;
}