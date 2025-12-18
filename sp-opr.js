//Spread Operator in JavaScript
//This operator spreads the elements of an array which can be then used in the program

const numbers = [1,2,3,4,5];

const maximum = Math.max(...numbers);//Using the ... spreads the elements of the array which is then further used to calculate the largest number from the array
const minimum = Math.min(...numbers);
console.log(numbers);//Prints the entire array
console.log(maximum);//Prints the highest number in the array
console.log(minimum);

//This can be used in strings too not necesarilly arrays or numbers

const username = "Aakarsh Singh";
const letters = [...username].join("");//Spreads each letter of the string and prints it in another array
console.log(letters);
//.join() function is used to join all the letters of the string and we can add any character between it to join them or use no characters also 


//We can add two arrays using the spread operator

const numb = [1,2,3,4,5];
const lett = ['a','b','c','d','e'];

const summ = [...numb, ...lett];//Here we added both the arrats using the spread operator
console.log(summ);

const final = [...numb, ...lett, "Hello", "Guys"]// We can add elements to the array using the spread operator and also by directly adding elements like in thsi example
console.log(final);
