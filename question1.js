var readline= require("readline-sync");
var num1 = readline.question("enter the number");
var num2 = readline.question("enter the num");
var num3 = readline.question("enter the num")
if (num1 > num2 && num1 > num3){
    console.log("num1 is greater")
}else if (num2 > num1 && num2 > num3){
    console.log("num2 is greater")
}else{
    console.log("num3 is greater")
}