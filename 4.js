//functions in javascript
//function definition- function functionName()
/*
function myfunction(msg, m){ //parameter -> input
    console.log(msg);
}

//function call/invoke
myfunction("javascript"); //argument
//function helps in redundancy minimization

function sum(x, y){
    //local variable are x and y => vars that are used specially function
    s = x + y;
    return s;
}//function parameters are local variables and they have block scope(variables valid till the block of code)
let b = sum(1, 4);
console.log(b);

//arrow functions - compact way of writing a function
//const functionName = (para1, para2...) => {
    //do some task}
const arrowSum = (a, b) => {
    return a+b;
};
console.log(arrowSum);
//function for multiplication
const mul = (c, d) => {
    return c*d;
};
mul(3, 5);
console.log(mul)

const print = () => {
    console.log("nksehbrkvabu");
};
console.log(print);

//for each loop in arrays
//arr.forEach(callbackFunction) callbackfunction- function to execute for each element in the array
//a callback is a function passed as an argument to another function.
let arr = ["bidar", "kalaikunda", "adampur", "kozikhode", "delhi"];
arr.forEach((value, index, array)=> { //has 3 parameters- (values, index, array)
    console.log(value.toUpperCase(), index, array);
})

//MAP => creates a new array with the results of some operation, the value its callback returns are used to form new array.
//arr.map(callbackfunc(value, index, array))
//let newArr = arr.map((val) =>{ return value*2;})
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let newArr = num.map((val) => {
return val*val;
});
console.log(newArr);
//filter
let arr2 = num.filter((val) => {
    return val % 2 === 0;
});
console.log(arr2)
//reduce
const output= num.reduce((res, curr) => {
    return res > curr ? prev : curr;
});
console.log(output);

alert("hello!");
//window object
//window object represents an open window in a browser. it is browser's object(not javascript's)and automatically created by browser.
window.console.log("helooooo");//it is a global object with lots of properties and methods.
//DOM(document object model)- when a web page is loaded browser creates a document object model of the page.

console.dir(document.body.childNodes);
//tagName => returns tag for element nodes
//innerText=> returns the text content of the element and all its children
//innerHTML: returns the plain text or HTML contents in the element
//textContent=> returns textual content even for hidden elements

//getAttribute(attr) ->to get the attribute value
//setAttribute(attr, value) -> to set the attribute value
//style => node.style
let div = document.querySelector("div");
console.log("div");
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//set attribute
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));

let div = document.querySelector("div");
div.style.backgroundColor = "green";
//div.style.visibility = "hidden";
div.style.fontsize = "43px";
div.innerText = "hello!!!";
*/
/*
//inserting elements-
1. node.append(el) //adds at the end of the node(inside)
2. node.prepend(el) //adds at the start of the node.
3. node.before(el) //adds before the node(outside)
4. node.after(el) //adds after the node(outside)
//delete element
~ node.remove() //removes the node

let newbtn = document.createElement("button");
newbtn.innerText = "click me";
console.log(newbtn);
let div = document.querySelector("div");
//div.append(newbtn);
//div.prepend(newbtn);
//div.before(newbtn);
//div.after(newbtn);
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> hi, imnew!!!</i>";
document.querySelector("body").prepend(newHeading);
let para = document.querySelector("p");
para.remove();
newHeading.remove();
*/
//events in javascript- change in state of an object is k/a as an event. events are firedto notify code of interesting changes that may affect the code execution
/*mouse events(click, doubleclick etc)
    keyboard events(keypress, keyup, keydown etc)
    form events(submit, change, focus etc)
    print and even many more.
    */
   //event handling in js-> 
   /*
   node.event= () => {
    //handle here;
   }
   let btn1 = document.querySelector("#btn1");
   btn1.onclick = (e) => {
    console.log("handler1");
    let a = 25; 
    a++;
    console.log(a)
   };
   let div = document.querySelector("div");
   div.onmouseover = () => {
   console.log("you are inside div");
};

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
//event listeners
//node.addEventListener(event, callBack)
//node.removeEventListener(event, callBack) //the callback reference should be same to remove
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (evt) =>{
    console.log("button1was clicked- handler1");
});

btn1.addEventListener("click", () =>{
    console.log("button1was clicked- handler2");
});

//btn1.addEventListener("click", () =>{
  //  console.log("button1was clicked- handler3");});

const handler3 = () => {
    console.log("button1was clicked- handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () =>{
    console.log("button1was clicked- handler4");
});

btn1.removeEventListener("click", handler3);
*/