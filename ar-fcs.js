//Arrow Functions in JavaScript

//Original way of writing a function, but there is a better way to write this function which is an arrow function
function hello()
{
    console.log("Hello");
}
hello();


//Arrow Function - better way of writing a function

const Hello = () => {
    console.log("Hello");
}
Hello();


const greet = (name) => {
    console.log(`Hello ${name}`);// ${variable} - This is a place holder, which stores the value of the variable in the print statement 
}
greet("Aakarsh");

//In the below function, we are creating a function which stores the name and age of a person, usng arrow functions.
const details = (myName,age) => {
    console.log(`Hello ${myName}`);
    console.log(`You are ${age} years old`);
}
details("Aakarsh",18);

//setTimeout Function - This function allows us to print or perform a task after a desired ampunt of time set by the programmer

setTimeout(newfunc, 3000);//3000 Milliseconds = 3 Seconds

function newfunc(){
    console.log("Hello, World!");
}

//Doing the same thing using a more used method, arrow function

const newFuncs = () => {
    console.log("Hello, Life!");
}
setTimeout(newFuncs, 2000);
