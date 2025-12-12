//Functions in JavaScript

function greet()
{
    console.log('Hello, How are you?');
} //We dont need to put a ; here because it is not a statement

greet();//Calling the Function
 
function hola(name) //Name is the parameter to the function hola
{
    console.log('Hello ' + name);
}

hola('Aakarsh'); //Aakarsh is the Argument to the function hola


// A function can have multiple parameters
function greets(name, lastName)
{
    console.log('Hello ' + name + ' ' + lastName);
}

greets('Aakarsh', 'Singh');


function square(num)
{
    return num*num;
}
console.log(square(5));//Calling the function inside the console

let sq = square(5);//sq variable is calling the square funcion and storing the value of the number 5 squared
console.log(sq);
//console.log() is also a function which is predefined
