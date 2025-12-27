//While Loops in JavaScript

//While loops work while the given condition is true, as soon as the condition changes the loop breaks

let i = 1;
while(i<=5){
    console.log("Hello, World!");
    i++;
}

let username = "";

while(username===""){
    username = window.prompt('Enter Your Name: '); // window.prompt is an input command for the user to input values whil the program works
}

console.log(`Hello ${username}`); 

//Do-While loops in Javacript

// In do while loops the condition gets executed atleast once and then checks the while condition


let age;

do{
    age = window.prompt('Enter your Age: '); //The function is executed atleast once before the condition is checked
}while(age==="" || age===null)
    console.log(`Your age is ${age} yrs`);


// Basic login using window.prompt code

let loggedIn = false;
let user;
let password;

while(!loggedIn){

    user = window.prompt('Enter your Username: ');
    password = window.prompt('Enter you Password: ');

    if(user === "Aakarsh1506" && password === "pass@123"){
        loggedIn = true;
        console.log("Your are logged In, Welcome!");
    }
    else{
        console.log("Invalid Credentials, Please try again!!");
    }
}
