console.log("Question 5")

var username = prompt("Q5 Enter Your Username : ")
var password =prompt("Q5 Enter Your Password : ")

if(username=="admin" && password=="admin123"){
    console.log("Login Successfully")
}
else if(username!="admin"){
    console.log("Invalid Username")
}
else{
    console.log("Incorrect Password")
}
