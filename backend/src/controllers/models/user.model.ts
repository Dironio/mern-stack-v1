export interface CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    avatar?: string;
    age?: number;
    roleId?: number;
}