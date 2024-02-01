import { CreateUserDto, GetUserDto, LoginUserDto, UpdateUserDto } from "../../controllers/models/user.model";
import { User, UserLogin, UserModel } from "../models/user.model";
import bcrypt from 'bcrypt';
import JWT from "jsonwebtoken";

class UserService {
    async auth(dto: CreateUserDto): Promise<User> {
        const { password, ...other } = dto;

        const candidate: User | null = await UserModel.findOne({
            email: dto.email,
        });

        if (candidate) {
            console.log('Email занят');
            throw new Error('Этот email уже занят');
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new UserModel<CreateUserDto>({
            ...other,
            password: hash,
        });

        return await newUser.save();
    }

    async login(dto: LoginUserDto): Promise<UserLogin> {
        const candidate: User | null = await UserModel.findOne<User>({
            email: dto.email,
        });

        if (!candidate) {
            console.log('email не найден');
            throw new Error('Неверный логин или пароль');
        }

        const validPass = await bcrypt.compare(dto.password, candidate.password);

        if (!validPass) {
            console.log('неправильный пароль');
            throw Error('Неверный логин или пароль');
        }

        const token = JWT.sign(
            { userId: candidate.id },
            String(process.env.jwt),
            { expiresIn: String(process.env.jwtExpires) }
        );

        return { token, userId: candidate.id };
    }



    async getAll(dto: GetUserDto): Promise<User[]> {
        const users = await UserModel.find<User>(dto);
        return users;
    }

    async getOne(id: string): Promise<User | null> {
        const user = await UserModel.findById<User>(id);
        return user;
    }

    async update(dto: UpdateUserDto, id: string): Promise<User | null> {
        const user = await UserModel.findOneAndUpdate<User>(
            { id: id },
            { $set: dto },
            { new: true }
        );

        if (!user) {
            console.log('пользователь не найден');
            throw Error('Пользователь не найден');
        }

        return user;

    }

    // async delete(id: string, userId: string): Promise<User> {
    //     const user = await UserModel.findOneAndDelete<User>(
    //         {
    //             id: id,
    //             userId: userId
    //         }
    //     );

    //     if (!user) {
    //         console.log('пользователь не найден');
    //         throw Error('Пользователь не найден');
    //     }

    //     return user;
    // }
}

const userService = new UserService;
export default userService;