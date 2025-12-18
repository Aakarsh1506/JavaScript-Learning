//Destructuring an Array
//For Destructuring and array , we use []


//Swapping Two Numbers

let a = 1;
let b = 2;

[a,b] = [b,a]; //Swappping the values
console.log(a);
console.log(b);


//Swapping Two elements of an Array

const colours = ["Red", "Green", "Blue", "Black", "White"];
console.log(colours);
[colours[0],colours[4]] = [colours[4],colours[0]]; //Swapping the first and last element of the array
console.log(colours);


//Assigning array elements to variables

const colors = ["Red", "Blue", "Green", "Black", "White"];
const [firstColor, secondColor, thirdColor, ...extracolors] = colors; //Assigning elements of the array color to each variable
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extracolors);//...extracolors is a rest parameter which is used fro assigning the remaining value of an array to a new array


