import { Request, Response } from "express";
import userService from "../../services/users/user.service";

class UserController {
    async auth(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.auth(req.body);
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.login(req.body);
            return res.status(201).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }



    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.getAll(req.query);
            return res.status(200).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.getOne(String(req.params.id));
            return res.status(200).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const result = await userService.update(req.body, res.locals.userId);
            return res.status(200).json(result);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    // async delete(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const result = await userService.delete(String(req.params.id), res.locals.userId);
    //         return res.status(201).json(result);
    //     } catch (e) {
    //         console.log(e);
    //         return res.status(500).json(e);
    //     }
    // }
}

export default UserController;