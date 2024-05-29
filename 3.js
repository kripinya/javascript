
//strings in js- strings used to represent text
// create string either in '' or ""
/*
let str = "ananya";
//str length
str.length 
//str index
str[0]; str[2];
console.log(str[2]);
*/
// TEMPLATE LITERALS IN STRINGS
/*
let sentence = `this is a template literal, special string`;
console.log(sentence);
let obj = {
    plane: "sukhoi",
    airbase: "gangtok"
};
let output = `the fighter jet ${obj.plane} takes off from ${obj.airbase} airbase.`;
console.log(output);
//string interpolation- to create strings by doing substituition of placeholders
//escape characters- \n- next line \t= tab space
//string methods- built in functions to manipulate strings
let str = "ananya";
console.log(str);
let nstr = str.toUpperCase();
console.log(nstr);
let sstr = str.toLowerCase();
console.log(sstr);
console.log(str.trim()); //removes white spaces from start and end
//str.slice(start,end?)- returns part of the string end value is non inclusive
console.log(str.slice(2,5));
let str1 = "karn";
console.log(str.concat(str1)) //joins str2 with str1
console.log(str.replaceAll("a","x"));
console.log(str.charAt(2));
*/
//ARRAYS IN JAVASCRIPT
let planes = ["su30mki", "mirage2000", "mig21"];
console.log(planes);
console.log(planes.length);
//looping over an array
for(let i = 0; i<= 1; i++){
    console.log(planes[i]);
}
for(let el of planes){
    console.log(el);
    console.log(el.toUpperCase());
}

//array methods in js
//push() =>add to end
//pop() => delete from end and return
// tostring() => converts array to string
let fjets = ["su30mki", "pilatuspc7", "mig21"];
console.log(fjets);
fjets.push("mirage2000", "mig29k", "jaguar", "hawk");
console.log(fjets);
fjets.pop();
console.log(fjets);
let num = [30, 40, 50, 60];
num.toString();
console.log(num);
//concat() joins multiple arrays and returns the result
console.log(fjets.concat(num));
//unshift() add to start
fjets.unshift("kiranm2");
console.log(fjets);
// shift delete from start and return
fjets.shift();
console.log(fjets);
console.log(fjets.slice(0,3));
//splice() changes original array(add, remove, replace)
//adding element
fjets.splice(1, 0, "namah");
console.log(fjets);