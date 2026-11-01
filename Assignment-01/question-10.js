console.log("Question 10 ")

let english = +prompt("Q10 Enter your English subject marks : ")
let math = +prompt("Q10 Enter your Math subject marks : ")
let pst = +prompt("Q10 Enter your PST subject marks : ")
let chemistry = +prompt("Q10 Enter your Chemistry subject marks : ")
let physics = +prompt("Q10 Enter your Physics subject marks : ")

let obtainedMarks = english + math + pst + chemistry + physics;
let totalMarks = 500;

let percentage = (obtainedMarks/totalMarks)*100

console.log("Obtained Marks : ", obtainedMarks)
console.log("Total Marks : ", totalMarks)
console.log("Percentage : " , percentage)