console.log("Quesion 03")

let age = +prompt("Q3 - Enter Your Age : ")

if(age>=18){
    console.log("You are Eligible for vote")
}
else if(age<18 && age>=0){
    console.log("You are not Eligible for vote")
}
else{
    console.log("Invalid Age")
}