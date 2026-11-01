console.log("Question 06")

let product1= +prompt("Q6 Enter the price of first product")
let product2= +prompt("Q6 Enter the price of second product")
let product3= +prompt("Q6 Enter the price of third product")

let totalBill = product1+product2+product3;
let discount = totalBill *0.10
let discountBill = totalBill-discount

console.log("Total Bill : ", totalBill)
console.log("Discount 10% : ", discount)
console.log("Total Bill After Discount : ", discountBill)