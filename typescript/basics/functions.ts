
//function defination
function sum(x: number, y: number, z?: number): number {
    let result = x + y + (z ?? 0);
    console.log("Sum of three numbers is: ");
    console.log(result);
    return result;
}

//function call
let result = sum(10, 20, 30);
console.log("Returned value from sum function: " + result);
//sum(10, 20, 30, 40); // This will cause an error because the function expects exactly 3 arguments
sum(1, 2, 3); // This will work fine and output 6
sum(5, 10, 15); // This will work fine and output 30
sum(1.5, 2.5, 3.5); // This will work fine and output 7.5
sum(10, 20); // This will work fine and output 30 (z is optional and defaults to 0)


function login(username: string, password: string) {
    //type username 
    //type password
    // click on remember me checkbox
    //click login button
}

login("admin", "password123"); // This will work fine


function greet() {
    console.log("Sba7 elfol")
}

greet(); // This will work fine and output "Sba7 elfol"




//arrow function

function add(x: number, y: number): number {
    return x + y;
}

const addArrow = (x: number, y: number) => console.log(x + y);

addArrow(5, 10); // This will work fine and output 15