import { Router } from "express";
import UserController from "../../controllers/users/user.controller";

const userRouter: Router = Router();
const userController = new UserController;

userRouter.post('/auth', userController.auth);
userRouter.post('/login', userController.login);

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getOne);

userRouter.patch('/', userController.update);
// userRouter.delete('/:id', userController.delete);


export default userRouter;