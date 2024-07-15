import {  RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicSemesterServices } from "./academicSemester.services";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
// import {academicSemesterServices} from './'



const createAcdemicSemester = catchAsync(
    async(req,res)=>{
      // console.log("showing from  controller")
        
         const result = await academicSemesterServices.createAcademicSemesterIntoDB(req.body)

         
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created succesfully',
    data: result,
  })

    }
)


export const academicSemesterControllers = {
    createAcdemicSemester
}