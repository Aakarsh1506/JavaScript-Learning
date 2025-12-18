//Conditional Statements in JavaScript

let age = 13;
if(age>=18){ //Conditional Statement used to determine by age f a person is eligible to vote or not
    console.log("You are eligible to Vote.");
}
else{
    console.log("You are not eligible to Vote.");
}

let time = 18; //Military Time
if(time<12){
    console.log("Good Morning!");
}
else if(time>=12 && time<=18){
    console.log("Good Afternoon!");
}
else if(time>=18 && time<=22){
    console.log("Good Evening!");
}
else if(time>=22 && time<=24){
    console.log("Good Night!");
}
else{
    console.log("Invalid Time");
}

//Branched If Statements
let myAge = 18;
let hasLicense = false;

if (myAge >= 16){
  console.log("You are old enough to drive");

  if (hasLicense){
    console.log("You have your license!");
  } 
  else{
    console.log("You do not have your license yet!");
  }
}
else{
  console.log("You must be 16+ to have a license");
}
