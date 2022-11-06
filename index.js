/*console.log("I like pizza!");
console.log("It's really good!");

window.alert("I REALLY LIKE PIZZA"); // This is a commnet!
*/

/*
let firstName="Can";
let age=23;
let student=true;

console.log("Hello ", firstName);
console.log("You are ", age);
console.log("Enrolled: ", student);

document.getElementById("p1").innerHTML="Hello " + firstName;
document.getElementById("p2").innerHTML="You are " + age + " years old";
document.getElementById("p3").innerHTML="Enrolled: " + student;
*/
/*
let student = 20;

let extraStudent = student % 3;

console.log(extraStudent);
*/

/*
// How to accept user input
// easy way with a window promt

//let username = window.prompt("What's your name?");
//console.log(username);

let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
}
*/

/*

let age = window.prompt("How old are you?");
console.log(typeof age); // age returns string, before convert process,when you define let, you must be type conversion
age = Number(age);
age += 1;
console.log(typeof age);
console.log("Happy birthday! You are " + age + " years old");
*/

/*
//let pi = 3.14159;
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);
circumference = 2*PI*radius;
console.log("The circumference is : ", circumference);
console.log(typeof radius);

// The Result : const PI --> constants type variables does not change.
*/

/*
let x = 3.14;
//x = Math.round(x); // rounds given that variables
//console.log(x);

//x = Math.floor(x); // returns the greatest integer less than given number
//console.log(x);

//x = Math.ceil(x); // returns the smallest integer greater than given number
//console.log(x);

//x = Math.pow(x, 2);

//x = Math.sqrt(x);


console.log(x);
*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Side C : " + c;
}