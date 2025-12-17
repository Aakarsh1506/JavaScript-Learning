//Array Methods in JavaScript

//Map Functions 

const numbers = [1,2,3,4,5];

const newArr = numbers.map((n) =>{ //The map function basically creates a new array which performs a function on each element of the previous array and stores it in the old array
    return n*n;
});
console.log(newArr);


const nums = [1,2,3,4,5];

const nArray = nums.map((n) => {
    return Math.pow(n,3); //This function returns cube of each number of the old array using map function
});
console.log(nArray);


const prices = [10,30,25,12,37.5];

const updatedPrices = prices.map((prices) => {
    return prices*0.5;
});
console.log(updatedPrices);
console.log(prices);


//Updating values in an array in which each element is an array

const products = [
  { name: "Laptop", price: 499, color: "white" },
  { name: "Smartphone", price: 899, color: "black" },
  { name: "Headphones", price: 50, color: "white" },
  { name: "Tablet", price: 199, color: "grey" },
  { name: "Keyboard", price: 210, color: "blue" }
];

const productNames = products.map((product) => {
  return product.name;
});

console.log(productNames);
