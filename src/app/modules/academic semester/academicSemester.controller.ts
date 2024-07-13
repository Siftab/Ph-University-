import { Request, RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";



const createAcdemicSemester :RequestHandler= (req,res,next)=>catchAsync(
    async(req,res)=>{

    }
)


export const academicSemesterControllers = {
    createAcdemicSemester
}