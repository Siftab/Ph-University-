import express from 'express'
import { academicSemesterControllers } from './academicSemester.controller'



const router = express.Router()

app.post('/create-academic-semester',academicSemesterControllers.createAcdemicSemester)