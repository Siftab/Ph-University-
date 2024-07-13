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



const academicSemesterSchema= new Schema<TacademicSemester>({

    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    year:{
        type:Date,
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

export const AcademicSemester = model<TacademicSemester>("AcademicSemester",academicSemesterSchema)