import  { TacademicSemester, TacademicSemesterCodeMapper } from './academicSemester.interface'
import { AcademicSemester,  } from './academicSemester.model'


 

  const createAcademicSemesterIntoDB = async(payload:TacademicSemester)=>{



    const academicSemesterCodeMapper:TacademicSemesterCodeMapper = {
      Atumn: "01"
      ,Summer:"02"
    ,Falll:"03"

    }


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