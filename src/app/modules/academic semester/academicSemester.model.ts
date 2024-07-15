import { model, Schema } from "mongoose";
import { TacademicSemester, TMonth } from "./academicSemester.interface";

const months :TMonth[] = [
     "January"
    , "February"
    , "March"
    , "April"
    , "May"
    , "June"
    , "July"
    , "August"
    , "September"
    , "October"
    , "November"
    , "December"]



export const academicSemesterSchema= new Schema<TacademicSemester>({

    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    startMonth:{
        type:String
        ,enum:months
    }, 
    endMonth:{
        type:String,
        enum:months
    }


})
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


export const AcademicSemester = model<TacademicSemester>("AcademicSemester",academicSemesterSchema)