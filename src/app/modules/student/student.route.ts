import express, { NextFunction, Request, Response } from 'express';
import { StudentControllers } from './student.controller';
import { AnyZodObject, ZodObject } from 'zod';

const router = express.Router();
// shenabahini 
const validateRequest = (schema: AnyZodObject) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const zodParsedData = schema.parseAsync({ body: req.body })
        next()
    }
}

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
