// const obj = require("./module1.js")
// const obj2 =require("./brands.js")

 //instead of writing object we can write a key names
// const {variabl,fun} =require("./calculate/brands.js")  
// const {billing} =require("./calculate/bill.js")
const {variabl,fun,billing} =require("./calculate/index")
var a=2;
var b=4;

console.log(a+b);
const name ="Roadster"
// obj.calcuSum(a,b);
// console.log(obj.y);

// console.log(obj2.z);
console.log(variabl);
// obj2.brands(name)
fun(name)
billing(a,b)
