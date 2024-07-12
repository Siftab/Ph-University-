import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.validation';

const router = express.Router();
const validateRequest = (schema: AnyZodObject) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const zodParsedData = await schema.parseAsync({ body: req.body })
            next()

        } catch (error) {
                        next(error)

        }
    }
}

router.post('/create-student', validateRequest(studentValidations.studentValidationSchema), UserControllers.createStudent);

export const UserRoutes = router;
