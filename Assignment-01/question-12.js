console.log("Question 12")

let basicSalary = +prompt("Q12 - Basic Salary")
let houseAllowance = basicSalary * 0.20
let medicalAllowance = basicSalary * 0.10
let taxDeduction = basicSalary *0.05
let grossSalary = basicSalary + medicalAllowance + houseAllowance
let netSalary = grossSalary-taxDeduction

console.log("Basic Salary : " , basicSalary)
console.log("House Allowance : " , houseAllowance)
console.log("Medical Allowance : ", medicalAllowance)
console.log("Tax Deduction 5% : " , taxDeduction)
console.log("Gross Salary : " , grossSalary)
console.log("Net Salary : " , netSalary)