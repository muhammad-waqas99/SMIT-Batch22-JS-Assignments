console.log("Question 9")

var age=+prompt("Q9 Enter Your Age : ")
var experience=+prompt("Q9 Enter Your Experience in Years : ")
var javascriptKnowledge =prompt("Q9 Do You Know JavaScript? (yes/no) : ")

if(age<0 || experience<0){
    console.log("Invalid Age or Experience")
}
else if(age>=18 && age<=30 && experience>=1 && javascriptKnowledge=="yes"){
    console.log("Congratulations! You are eligible to apply.")
}
else{
    console.log("Sorry! You do not meet the requirements.")
}