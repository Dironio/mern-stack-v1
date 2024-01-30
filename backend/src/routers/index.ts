import { Router } from "express";
import userRouter from "./users/user.router";


const router: Router = Router();

router.use('/users', userRouter);


export default router;