import express from 'express'
import { academicSemesterControllers } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { zodAcademicSemesterSchema } from './academicSemester.validation'



const router = express.Router()

router.post('/create-academic-semester'
    ,validateRequest(zodAcademicSemesterSchema)
    ,academicSemesterControllers.createAcdemicSemester
    // ,(req,res)=>{
    //     res.send("woriking")
    // }
)




export const academicSemesterRoute = router