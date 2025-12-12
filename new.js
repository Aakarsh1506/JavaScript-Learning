//Objects in JavaScript
let person = 
{
    name: 'Aakarsh',
    age: 18,
    height: 180
};
console.log(person);

//Changing the name of the object

//Method 1: Dot Notation(Commonly used as it is concise)
person.name = 'Manu';
console.log(person.name); // Calling the modified name

//Method 2: Bracket Notation
person['name'] = 'Singh';
console.log(person['name']); // Can print the name using the bracket method 
console.log(person.name);//Can use this method to print the name even though it is written in bracket notation

//When we dont know what the user is selecting, we use the bracket notation
let selection = 'name';
person[selection] = 'Genius';
console.log(person.name);