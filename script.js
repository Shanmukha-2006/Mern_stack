
console.log("Hello, World!");
//Re-declaration and Re-assignment
var a;//Global Scope
a=10;
var a;
a=20;
let b=10;//Block Scope
//re initialize
b=20;
//cant re-declare but can re-assign
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
    //Data Types
var num=10;
var str="Shanmukha";//'' "" ''
var bool=true;
var un;
var nu=null;
var symbol=Symbol("sym");
var big=1234567890123456789012345678901234567890n;
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof symbol);
console.log(typeof big);    

var arr=[1,2,3,4,5];//Array is an object in JavaScript
console.log(typeof arr);
var obj={
    name:"Shanmukha",
    age:25,
    city:"Hyderabad"
}//object literal
console.log(typeof obj);
*/
var a=10;
var b=20;
//ARITHMETIC OPERATORS

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//RELATIONAL OPERATORS
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
//logical opeartors
var a=true;
var b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);


