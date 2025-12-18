//File to be imported in mod-js.js file

//To use this set of program in other program we need to add export in front of every variable, functions etc.
//Formulas for Circle 
export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius; 
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius * radius;
}
