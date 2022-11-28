import { Role } from "@app/utils"

export interface CompanyDTO {
    name: string,
    icon: string,
}

export interface UserDTO {
    email: string,
    password: string,
    role: Role,
    company: CompanyDTO
}