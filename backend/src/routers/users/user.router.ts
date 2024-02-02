import { Router } from "express";
import UserController from "../../controllers/users/user.controller";
import authCheck from "../../middleware/check.auth";
import errorHandler from "../../middleware/error.handler";
import { authValidate, loginValidate } from "../../middleware/auth.validate";

const userRouter: Router = Router();
const userController = new UserController;

userRouter.post('/auth', authValidate, errorHandler, userController.auth);
userRouter.post('/login', loginValidate, errorHandler, userController.login);

userRouter.get('/', userController.getAll);
userRouter.get('/:id', authCheck, userController.getOne);

userRouter.patch('/', authCheck, userController.update);
// userRouter.delete('/:id', authCheck, userController.delete);


export default userRouter;