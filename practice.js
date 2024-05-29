/*alert("hello");
let name = prompt("hello!!!");
console.log(name);

//get user to input a number using prompt("enter a number"). check if the number is a multiple of 5 or not.
let number = prompt("enter a number:");
a = number % 5;
if(a === 0){
    console.log("the number is a multiple of 5");
} else {
    console.log("the number is not a multiple of 5");
}

//write a code which can give grades to students according to their scores:
//80-100: A
//70-89: B
//60-69: C
//50-59: D
//0-49: F
let grade = prompt("enter marks");
if(grade >= 80 && grade <= 100){
    console.log("A");
} else if(grade >= 70 && grade <=89){
    console.log("B");
} else if(grade >= 60 && grade <= 69){
    console.log("C");
} else if(grade >= 50 && grade <= 59){
    console.log("D");
} else {
    console.log("F");
}

//print all even numbers from 0 to 100
for(let i = 0; i <= 100; i++){
    if(i % 2  != 0){
        console.log(i);
    }
}

//create a game where you can start with any random game number. Ask user to keep guessing the game number until user enters the correct value.
game = 50;
let num = prompt("guess a number:");
while( num != game){
    num = prompt("guess again:");
}
console.log("you won!!!");

// prompt the user to enter their full name. generate a username for them based on the input.
//start username with @ followed by their full name and ending with the fullname length
let name = prompt("enter full name without spaces");
let username = "@" + name + name.length;
console.log(username);

//for a given array with marks of students->[85, 97, 44, 37, 76, 60] find average marks of the class
let marks = [85, 97, 44, 37, 76, 60];
for(let i = 0; i<=5; i++){
    console.log(marks[i]);
}
let sum = 0;
for(let val of marks){
    sum += val;
}
console.log(sum);
avg = sum / marks.length;
console.log(avg);

//for a given array with prices of 5 items-> [250, 645,300, 900, 50] all items have an offer of 10% off on them. change the array to store final price after applying offer.
let items = [250, 645,300, 900, 50];
let i = 0;
for(let i = 0; i < items.length; i++){
let offer = items[i]/10;
items[i] -= offer;
} console.log(items);


//create an array to store companies ->["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"]
//remove the first company from the array, remove uber and add ola in its place, add amazon at the end
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(companies);
//remove the first company from the array
companies.shift();
console.log(companies);
//remove uber and add ola in its place
companies.splice(2, 1, "ola");
//add amazon at the end
companies.push("amazon");
console.log(companies);


//create a function using the function keyword that takes a string as an argument and returns the of vowels in the string
function vowel(str){
    let count = 0;
for(const char of str){
    console.log(char);
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
       count++; 
    }
} console.log(count);
}
//using arrow function
const countvowel = (str) => {
    let count = 0;
for(const char of str){
    console.log(char);
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
       count++; 
    }
} console.log(count);
}
console.log(countvowel);

//for a given array of numbers, print the square of each value using the for each loop
let arr = [1, 6, 3, 4, 5];
let calcsq = (num, index) => {
    console.log(num, num*num, index);
};
arr.forEach(calcsq);

arr.forEach((num) => {
    console.log(num**2);
})

//we are given array of marks of students. filter out the marks of the student who scored 90+.
let marks = [20, 40, 60, 77, 80, 90, 98, 96];
let a = marks.filter((val) =>{
    return val >= 90;
});
console.log(a);


//take a number n as input from user. create an array from 1 to n, use the reduce method to calculate the sum of all numbers in the array. use the reduce method to calculate the product of all numbers in the array.
let n = prompt("enter a number:");
let arr = [];
for(let i = 1; i <= n; i++){
    arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((result, current) =>{
    return result + current;
});
console.log("sum", sum);
let product = arr.reduce((result, current) =>{
    return result * current;
});
console.log("product", product);

//create a h2 heading element with text- "Hello JavaScript". Append "from Apna College students" to this text using JS.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College students";

//create 3 divs with common class name "box", access them and add some unique text yo each of them.
let divs = document.querySelectorAll(".box");
console.log(divs.innerText);
let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

//create a new button element. Give it a text "click me!", background color of red andtext color of white.
//insert the button as the first element inside the body tag.
let newElement = document.createElement("button");
newElement.innerText = "click me!";
newElement.style.backgroundColor = "red";
newElement.style.color = "white";
document.querySelector("body").prepend(newElement);

//create a <p> tag in htm, give it a class and some styling, now create a new class in css and try to append this class to the <p>
//element.(did you notice how you overwrite the class name when you add a new one? solve this problem using classList.)
let para = document.querySelector("p");
//para.classList.add("newClass");
para.classList;

//create a toggle button that changes the screen to darkmode when clicked and lightmode when clicked again.
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";//dark

modebtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});//for light-dark mode

//css code 
.dark{
    background-color: black;
    color: white;
}
.light{
    background-color: white;
    color: black;
}
*/
