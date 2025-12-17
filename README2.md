// DIFFERENT TYPES OF FUNCTIONS IN JAVASCRIPT

JavaScript has a wide range of built-in functions and methods for various tasks. Here's a general list, categorized for clarity:
Array Methods (Higher-Order Functions)
These methods operate on arrays and often take a function as an argument:
map(): Creates a new array by calling a provided function on every element in the calling array.
filter(): Creates a new array with all elements that pass the test implemented by the provided function.
reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
forEach(): Executes a provided function once for each array element.
find(): Returns the value of the first element in the provided array that satisfies the provided testing function.
includes(): Determines whether an array (or string) includes a certain value among its entries, returning true or false as appropriate.
Data & String Functions
These are used for manipulating data types and strings:
JSON.stringify(): Converts a JavaScript object or value to a JSON string.
JSON.parse(): Parses a JSON string, constructing the JavaScript value or object described by the string.
String(): Converts a value to a string.
parseInt() / parseFloat(): Parses a string argument and returns an integer or a floating-point number, respectively.
toUpperCase() / toLowerCase(): Converts a string to uppercase or lowercase letters.
split(): Divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
Control & Asynchronous Functions
These manage the execution flow of your code, especially for operations that take time:
setTimeout(): Executes a function, or specifies a code snippet, once after a delay. (3:08)
setInterval(): Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
async/await: Keywords used to simplify asynchronous code, making it look more like synchronous code.
Global Functions
These are built-in functions available globally in JavaScript:
isNaN(): Determines whether a value is an illegal number (Not-a-Number).
isFinite(): Determines whether a value is a finite number.
eval(): Evaluates JavaScript code represented as a string. (Use with caution due to security risks)
Function Types
Beyond specific functions, JavaScript also allows for different ways to define and use functions:
Function Declarations: Standard way to define a named function (e.g., function myFunction() {}).
Arrow Functions: A concise way to write function expressions, especially useful for simple functions or callbacks (0:04, 0:35, 3:05, 4:24).
Anonymous Functions: Functions without a name, often used as arguments to other functions (callbacks).
Async Functions: Functions designed to work with async/await for asynchronous operations.
This list is not exhaustive but covers many of the fundamental and commonly used JavaScript functions and concepts