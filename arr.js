//Arrays in Javascript
let selectedColors = ['Red', 'Blue', 'Black', 'Sky'];//Array Initialisation
console.log(selectedColors);

console.log(selectedColors[0]);//Printing Array Element 1
console.log(selectedColors[2]);//Printing Array Element 3


selectedColors[4] = 'Green';//Length of the array can be increased directly
console.log(selectedColors);

//When we make an array in JS it automatically gets some properties like lenght etc
console.log(selectedColors.length);

let numbers = [10,15,30,40,50];
numbers[1] = 20;// Using this we can modify the content of the array without changing the whole array unline strings
console.log(numbers);