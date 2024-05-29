//logical operator 
/*
let a = 20;
let b = 30;
let cond1 = a < b;
let cond2 = a === 3;
console.log(cond1 && cond2);
console.log(cond1);
//conditional statements

let age = 18;
if(age >= 18){
    console.log("eligible to vote");
}
if(age < 18){
    console.log("not eleigible to vote");
}

let color;
let mode = "dark";
if(mode === "dark"){
    color = "black";
}
if(mode == "light"){
    color = "white";
}
console.log(color);


let age = 22;
if(age >= 18){
    console.log("eligible");
}else {
    console.log("not eligible");
}
// odd or even
let num = 4;
a = num % 2;
if(a === 0){
    console.log(num, "is even");
} else{
    console.log("odd");
}

let age = 18;
if(age < 18){
    console.log("not eligible");
}
else if(age = 18){
    console.log("wait one more year to vote");
} else{
    console.log("eligible to vote");
}
//ternary operator
age >= 18 ? console.log("adult") : console.log("not adult");

//switch statement
const expr = "mangoes";
switch(expr){
    case 'tomatoes':
        console.log("red tomatoes");
    break;
    case "mangoes":
    case "papayas":
        console.log("yellow mangoes");
    break;
    default:
        console.log("out of ${expr}.");
}

// loops in javascript
for(let i = 1; i <= 7; i++){
    console.log("javascript");
}
console.log("loop has ended.");

// calc sum of 1 to 5
let sum = 0;
for(let i = 1; i<=5; i++){
    sum = sum + i;
}
console.log("sum - ", sum);
console.log("loop ended");

//print 1 to 5
for(let o = 1; o<= 5; o++){
    console.log(o);
}*/

//for of loop used for arrays and strings
let str = "ananya";
let size = 0;
for(let i of str){ //iterator = for characters
    console.log(i);
    size++;
}
console.log("string size", size);

//  FOR IN LOOP- for(let key in objvar); used for objects and arrays
let student = {
    name : "ananya",
    place : "meerut",
};
for(let key in student){
    console.log(key, student[key]);
}