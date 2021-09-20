var readline = require("readline-sync");
var num = readline.question("enter the num");
if (num%10 == 3 && num % 3 == 0){
    console.log("it is divisible")
}else{
    console.log("not")
}