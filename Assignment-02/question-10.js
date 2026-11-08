console.log("Question 10")

var balance=25000
var pin=+prompt("Q10 Enter Your PIN : ")

if(pin==1234){

    var withdrawalAmount=+prompt("Q10 Enter Withdrawal Amount : ")

    if(withdrawalAmount<=0){
        console.log("Invalid Withdrawal Amount")
    }
    else if(withdrawalAmount > balance){
        console.log("Insufficient Balance")
    }
    else if(withdrawalAmount%500!=0){
        console.log("Amount must be a multiple of Rs. 500")
    }
    else{
        balance= balance-withdrawalAmount

        console.log("Withdrawal Successful!")
        console.log("Withdrawn Amount: Rs.",withdrawalAmount)
        console.log("Remaining Balance: Rs.",balance)
    }

}
else{
    console.log("Incorrect PIN")
}