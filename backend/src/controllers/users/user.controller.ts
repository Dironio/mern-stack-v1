import { Request, Response } from "express";
import userService from "../../services/users/user.service";

class UserController {
    async auth(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.auth();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.login();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }


    
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.getAll();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.getOne();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.update();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.delete();
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

export default UserController;