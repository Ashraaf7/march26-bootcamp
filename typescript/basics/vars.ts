let name = "Ahmed";
let number = 50;

name = "Ashraf";
number = 100;

console.log(name);
console.log(number);

{
    //local scope
    let myName = "Ahmed"; // let is local scoped
    console.log(myName);
}

console.log(myName); // will throw an error because myName is not defined in this scope


{
    //local scope
    var myNumber = 60; // var is global scoped

}
console.log(myNumber);


const myAge = 30; // const is local scoped and cannot be reassigned
myAge = 40; // will throw an error because myAge is a constant and cannot be reassigned