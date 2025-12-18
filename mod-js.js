//ES6 Modules in JavaScript


import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'; //Importing the pre written code from the file mathUtil.js

console.log(PI);

let val1 = getCircumference(10);
console.log(`${val1.toFixed(2)}cm`);//Using .toFixed function to fix the value to 2 decimal places

let val2 = getArea(10);
console.log(`${val2.toFixed(2)}cm`);

let val3 = getVolume(10);
console.log(`${val3.toFixed(2)}cm`);
