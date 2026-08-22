let response = {
    id: 1,
    name: "Ashraf",
    token: "adsfdafdsf34234"
};

let userInfo = {
    email: "ashraf@test.com",
    hobbies: ["coding", "reading", "gaming"]
};

let user = { ...response, ...userInfo };

console.log(user);


//type of object
type User = {
    email: string,
    password: string,
}

let user1: User = {
    email: "ashraf@test.com",
    password: "securepassword123",
    // address: "123 Main St" // Error: Object literal may only specify known properties, and 'address' does not exist in type 'User'.
};