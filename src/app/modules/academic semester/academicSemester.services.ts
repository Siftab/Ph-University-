import  { TacademicSemester, TacademicSemesterCodeMapper } from './academicSemester.interface'
import { AcademicSemester,  } from './academicSemester.model'
import { academicSemesterCodeMapper } from './academicSemesterConstant'


 

  const createAcademicSemesterIntoDB = async(payload:TacademicSemester)=>{



    


    if(academicSemesterCodeMapper[payload.name]!== payload.code){
      throw new Error("code not matching with semester name ")
    }


    const result = await AcademicSemester.create(payload)

    return  result;

  }




  // middilewears 



  

 export  const academicSemesterServices = {
    createAcademicSemesterIntoDB
  }