import { body } from "express-validator";

export const authValidate = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('age').optional().isNumeric(),
    body('roleId').isNumeric()
];

export const loginValidate = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
];