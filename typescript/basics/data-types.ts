let name: string;

name = "Ahmed"; // valid assignment


let age: number = 30;


let isStudent: boolean = false;


let nullValue: null = null;
console.log(nullValue);

let undefinedValue: undefined = undefined;
console.log(undefinedValue);

//name >> Name 

let x: any;
x = 50;
x = "Ahmed";
x = true;
x = null;
x = undefined;


let y: number | string | boolean; // union type

y = 25; //number
y = "25"; // string
y = true;