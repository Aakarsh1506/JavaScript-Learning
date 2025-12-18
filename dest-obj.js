//Destructuring an Objecte in JavaScript

const person1 = {
    firstName: "Aakarsh",
    lastName: "Singh",
    age: 18,
    job: "Student"
}

const person2 = {
    firstName: "Vivek",
    lastName: "Singh",
    age: 52,
    job: "Consultant"
}

const person3 = {
    firstName: "Aashita",
    lastName: "Singh",
    age: 13
}

const {firstName, lastName, age, job="Unemployed"} = person1; //Extracting details from object
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//Destructuring in Function Parameter using the above created objects

function displayPerson({firstName, lastName, age, job}){
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}
displayPerson(person1);