import { CreateUserDto } from "../../controllers/models/user.model";
import { User, UserModel } from "../models/user.model";
import bcrypt from 'bcrypt';

class UserService {
    async auth(dto: CreateUserDto): Promise<User> {
        const { password, ...other } = dto;

        const candidate: User | null = await UserModel.findOne({
            email: dto.email,
        });

        if (candidate) {
            console.log('Email занят');
            throw Error('Этот email уже занят');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(dto.password, salt);

        const newUser = new UserModel<CreateUserDto>({
            ...other,
            password: hash,
        });

        return await newUser.save();
    }

    async login(): Promise<User> {

    }



    async getAll(): Promise<User> {

    }

    async getOne(): Promise<User> {

    }

    async update(): Promise<User> {

    }

    async delete(): Promise<User> {

    }
}

const userService = new UserService;
export default userService;