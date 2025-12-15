//Strings in JavaScript

let myStr = "I am Aakarsh\"\"I study in NMIMS, MPSTME\"\"I am a first year BTech IT Student";
console.log(myStr);


//Concatenating 2 strings

let adjective = "Amazing?";
let sent = "What a player Messi is, Is'nt he ";

sent+=adjective; // Using the += allows us to store the value senetence in the same variable which was declared earlier without having to change it or create a new variable
console.log(sent);


//Length of a String

let myName = "Aakarsh Singh";
console.log(myName.length); //Using this function, we can print the length of the string


//Specific Letter of a string

let isName = "Aakarsh Singh";
console.log(isName[0]);//Gives the first letter of the string
console.log(isName[10]);//Gives the 11th Character or a letter of the string
//both of the above examples work as an array when indexing(counting).

//Changing an alreadt created string

let cat = "Jello World";//Original String
cat = "Hello World!";//Changed string, you cannot change a single character of a pre existing string, you have to change the whole string
console.log(cat);

//Finding last letter of the string wihtou knoing the lenght initially
let str = "Messi is the GOAT!";
let lastLetter = str[str.length-1];//This gives us the last letter of the string str, which is !
console.log(lastLetter);

