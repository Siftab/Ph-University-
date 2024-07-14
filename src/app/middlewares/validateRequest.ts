import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

const validateRequest = (schema: AnyZodObject) => {

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("ami vitore aslam")

            const zodParsedData = await schema.parseAsync({ body: req.body })
            console.log(zodParsedData,req.body)
            next()
            console.log("ami baire gelam")

        } catch (error) {
                        next(error)

        }
    }
}


export default validateRequest