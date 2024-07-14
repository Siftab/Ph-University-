import  { TacademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'


 

  const createAcademicSemesterIntoDB = async(payload:TacademicSemester)=>{


    const result = await AcademicSemester.create(payload)

    return  result;

  }



 export  const academicSemesterServices = {
    createAcademicSemesterIntoDB
  }