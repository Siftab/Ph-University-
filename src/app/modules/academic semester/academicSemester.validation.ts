import { z } from 'zod';

// Define the TMonth schema
const TMonth = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);

// Define the TacademicSemester schema
export const zodAcademicSemesterSchema = z.object({
  body: z.object({
    name: z.enum(['Atumn', 'Summer', 'Falll']),
    code: z.enum(['01', '02', '03']),
    year: z.date(),
    startMonth: TMonth, 
    endMonth: TMonth,
  }),
});
