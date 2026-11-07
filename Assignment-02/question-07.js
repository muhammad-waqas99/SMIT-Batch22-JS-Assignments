console.log("Question 7")

var purchaseAmount =+prompt("Q7 Enter Your Purchase Amount : ")

var discountPercentage=0
var discountAmount=0
var finalAmount =0

if(purchaseAmount<0){
    console.log("Invalid Purchase Amount")
}
else if(purchaseAmount>=10000){
    discountPercentage =20
}
else if(purchaseAmount>=5000){
    discountPercentage= 10
}
else if(purchaseAmount>=2000){
    discountPercentage=5
}
else{
    discountPercentage=0
}

if(purchaseAmount>=0){
    discountAmount = purchaseAmount * discountPercentage / 100
    finalAmount = purchaseAmount - discountAmount

    console.log("Original Amount: Rs.",purchaseAmount)
    console.log("Discount:",discountPercentage+"%")
    console.log("Discount Amount: Rs.",discountAmount)
    console.log("Final Amount: Rs.",finalAmount)
}