console.log("Question 04");

let num1 = +prompt("Enter First Number:");
let num2 = +prompt("Enter Second Number:");
let num3 = +prompt("Enter Third Number:");

if (num1 >= num2 && num1 >= num3) {
    console.log(num1, "is the largest number.");
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(num2, "is the largest number.");
}
else {
    console.log(num3, "is the largest number.");
}