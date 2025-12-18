//Filter Methods in JavaScript

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(n => n%2===0); //Using this filter method, we can filter the number of even numbers in a given array and do more functions
console.log(evenNumbers);


const products = [
  { name: "Laptop", price: 499, color: "white" },
  { name: "Smartphone", price: 899, color: "black" },
  { name: "Headphones", price: 50, color: "white" },
  { name: "Tablet", price: 199, color: "grey" },
  { name: "Keyboard", price: 210, color: "blue" }
];

const affordableProducts = products.filter(product => product.price <200); //Using the filter function here, we can filter the prices of the products which are below 200 and print them
console.log(affordableProducts);

const newArr = products.filter(product => { //This is usefule if we want to add filter to our website
    return product.color === "white" && product.price >200;
});
console.log(newArr);


const number = [1,2,3,4,5,6,7,8,9,10];

const oddNumbers = number.filter(n => n%2!==0);//Function to print off numbers from a given array and copying it to a new array
console.log(oddNumbers);