export type TMonth = 
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

// Usage example:
// const currentMonth: Month = "July";


export type TacademicSemester = {
    name:"Atumn"|"Summer"|"Falll",
    code:"01"|"02"|"03",
    year: string,
    startMonth: TMonth,
    endMonth:TMonth
}