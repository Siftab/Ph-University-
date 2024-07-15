import  { TacademicSemester } from './academicSemester.interface'
import { AcademicSemester, academicSemesterSchema } from './academicSemester.model'


 

  const createAcademicSemesterIntoDB = async(payload:TacademicSemester)=>{


    const result = await AcademicSemester.create(payload)

    return  result;

  }




  // middilewears 

  academicSemesterSchema.pre("save", async function(next){

    const isSemesterExists = await  AcademicSemester.findOne({
      name:this.name,
      year:this.year
    })
    console.log(isSemesterExists)

    if(isSemesterExists){
      throw new Error("semester already exists")
    }

    next()

  })

  

 export  const academicSemesterServices = {
    createAcademicSemesterIntoDB
  }