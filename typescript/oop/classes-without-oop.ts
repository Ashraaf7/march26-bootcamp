//without oop 

//Player 1 > name ,age , number , position ,club
let player1Name = "Ronaldo";
let player1Age = 40;
let player1Number = 7;
let player1Position = "Forward";
let player1Club = "Al Nassr";


//Player 2 > name ,age , number , position
let player2Name = "Messi";
let player2Age = 36;
let player2Number = 10;
let player2Position = "Forward";
let player2Club = "Inter Miami";

//Player 3 > name ,age , number , position
let player3Name = "Neymar";
let player3Age = 32;
let player3Number = 11;
let player3Position = "Forward";
let player3Club = "Al Hilal";

function displayPlayerInfo(name: string, age: number, number: number, position: string, club: string): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Number: ${number}`);
    console.log(`Position: ${position}`);
    console.log(`Club: ${club}`);
}

displayPlayerInfo(player1Name, player1Age, player1Number, player1Position, player1Club);
displayPlayerInfo(player2Name, player2Age, player2Number, player2Position, player2Club);
displayPlayerInfo(player3Name, player3Age, player3Number, player3Position, player3Club);


