let username = "admin";
let password = null;


if (username === "admin" && password === "admin123") {
    console.log("user logged in successfully");
}
else if (username === null) {
    console.log("username is required");
}
else if (password === null) {
    console.log("password is required");
}
else {
    console.log("username or password is incorrect");
}




// Nested if statement
let age = 12;

if (age > 0) {
    if (age >= 18) {
        console.log("you are eligible to vote");
    }
    else {
        console.log("you are not eligible to vote");
    }
}

else {
    console.log("age must be greater than 0");
}


//simplified if statement
age = 12;
age > 18 ? console.log("you are eligible to vote") : console.log("you are not eligible to vote");