var readlineSync = require("readline-sync")
var num = readlineSync.question("enter the num:");
if (num%5==0 && num%15==0){
    console.log("it is divisible")
}else{
    console.log("it is not divisble")
}