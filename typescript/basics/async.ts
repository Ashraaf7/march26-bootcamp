// Synchronous programming
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");

// Asynchronous programming

console.log("1");
console.log("2");
setTimeout(() => {
    console.log("3");
}, 3000);
console.log("4");
console.log("5");
console.log("6");

async function getPets() {
    const pets = await fetch("https://petstore.swagger.io/v2/pet/9"); //wait for the response to be resolved
    console.log(await pets.json());
}

//function calling
getPets();



// async > promise > resolved / rejected / pending


//await type username > 2 sec
//click on login button