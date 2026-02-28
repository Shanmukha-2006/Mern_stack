var a=10;
if(a%2===0){
    console.log(`${a} is Even`);
}
else{
    console.log(`${a} is Odd`);
}
var mark=85;
if(mark>=90){
    console.log("Grade S");
}
else if(mark>=80){
    console.log("Grade A");
}
else if(mark>=70){
    console.log("Grade B");
}
else if(mark>=60){
    console.log("Grade C");
}
else if(mark>=50){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

var a=4;
const result=a%2===0?`${a} is Even`:`${a} is Odd`;
console.log(result);

var score=85;
const grade=score>=90?"S":score>=80?"A":score>=70?"B":score>=60?"C":score>=50?"D":"F";
console.log(grade);
var day=4;
switch(day){
    case 1:
        console.log("Sunday"); 
        break;     
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}
//loopin statements(for,while,do-while)
for(let i=1;i<=5;i++){
    console.log(i);
}
var num=1234;
var count=0;
while(num>0){
    num=Math.floor(num/10);
    count++;
}
console.log(`Number of digits: ${count}`);
var a=0;
do{
    console.log("Example of do-while loop");
}
while(a!==0);
function add(a,b){
    var a=20;
    var b=10;
    console.log(a+b);
}
add();

function add(a,b){
    console.log(a+b);
}
add(10,20);
var add=()=>{
    console.log("Arrow Function");
}
add();

var add=(a,b)=>{
    console.log(a+b);
}
add(10,20); 
//spread operator
var arr=[1,2,3]
var arr2=[...arr,4,5,6]
console.log(arr2)

var {name,age,dept,contact}={
    name:'Shanmukha',
    age:25,
    dept:['Ds','CSE'],
    contact:{
        mobile:1234567890,
        mail:"shanmukhasunny3@gmail.com"
    }
}
console.log(name);
console.log(age);
console.log(dept);
console.log(contact);   

var arr=[10,20,30,40,50];
for(let i in arr){
    console.log(i,arr[i]);
}
 

var obj={
    name:"Shanmukha",
    age:25,
    isactive:true
}
for(let key in obj){
    console.log(key,":",obj[key]);
}

var arr=[10,20,30,40,50];
for(let val of arr){
    console.log(val);
}

arr.forEach((val,index)=>{
    console.log(index,val);
})

var arr=[1,2,3,4,5];
var newArr=arr.map((val)=>(val*2));
console.log(newArr);

var evenArr=arr.filter((val)=>(val%2===0));
console.log(evenArr);

var total=arr.reduce((sum,val)=>(sum+val),0);
console.log(total);




