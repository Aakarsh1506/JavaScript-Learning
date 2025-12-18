//Reduce Methods in JavaScript
const prices = [10,35,43,27,36,81]; 

const totalPrice = prices.reduce((total,currentPrice)=>{ //The reduce function, reduces the entire array into one value, like here it added all the values and printed its sum
    return total+currentPrice;
},0);//We need to put 0 over here as an initial value, the program can work with this in this case without putting the zero but not everytime
console.log(totalPrice);

//The same method can be used for strings too

const words = ['Hello',',',' World!'];

const sentence = words.reduce((result,word)=>{ //In this case we created an array of 3 word and made it into a sentence using reduce method
    return result+word;
},'');
console.log(sentence);

// Applying Map, Filter and Reduce all in a single example

const products = [
  { name: "Laptop", price: 499, color: "white", inShoppingCart: true },
  { name: "Smartphone", price: 899, color: "black", inShoppingCart: false },
  { name: "Headphones", price: 50, color: "white", inShoppingCart: false },
  { name: "Tablet", price: 199, color: "grey", inShoppingCart: true },
  { name: "Keyboard", price: 210, color: "blue", inShoppingCart: false }
];

const cartTotal = products.filter(p => p.inShoppingCart) //Filters all the items in the shopping cart
                        .map(p => p.price * 0.5) //Applies 50% discount to all the items in the shopping cart
                        .reduce((total, price) => { //Calculates and returns the sum of all the elements in the cart after a 50% discount is applied
                           return total + price;
                        }, 0);
console.log(cartTotal);


  