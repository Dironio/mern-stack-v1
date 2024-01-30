export interface CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName?: string;
    avatar?: string;
    age?: number;
    roleId?: number;
}

export interface LoginUserDto {
    email: string;
    password: string;
}

export interface GetUserDto {
    id?: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    age?: number;
    roleId?: number;
}

export interface UpdateUserDto {
    firstName?: string;
    lastName?: string;
    avatar?: string;
    age?: number;
    roleId?: number;
}