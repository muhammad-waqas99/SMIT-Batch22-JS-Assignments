console.log("Question 6")

var percentage=+prompt("Q6 Enter Your Percentage : ")

if(percentage<0 || percentage>100){
    console.log("Invalid Percentage")
}
else if(percentage>=90){
    console.log("Your Grade is A+")
}
else if(percentage>=80){
    console.log("Your Grade is A")
}
else if(percentage>=70){
    console.log("Your Grade is B")
}
else if(percentage>=60){
    console.log("Your Grade is C")
}
else if(percentage>=50){
    console.log("Your Grade is D")
}
else{
    console.log("Your Grade is Fail")
}