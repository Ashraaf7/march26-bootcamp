//class > template
class Player {
    //attributes/properties/fields >> variables
    name: string = "";
    age: number = 0;
    number: number = 0;
    position: string = "";
    club: string = "";
    static counter: number = 0; //counter to keep track of the number of players created

    //constructor >> special method to initialize the object
    //    constructor() {

    //     }
    constructor(name: string, age: number, number: number, position: string, club: string) {
        //body of the constructor
        this.name = name;
        this.age = age;
        this.number = number;
        this.position = position;
        this.club = club;
        Player.counter++; //increment the counter by 1
    }
    //methods >> functions
    displayPlayerInfo(): void {
        console.log("---- Player Info -----");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Number: ${this.number}`);
        console.log(`Position: ${this.position}`);
        console.log(`Club: ${this.club}`);
    }

    static resetCounter(): void {
        Player.counter = 0;
    }
}

//objects 
let ronaldo = new Player("Ronaldo", 40, 7, "Forward", "Al Nassr"); //calling the constructor of the class
ronaldo.displayPlayerInfo(); //calling the method of the class
console.log(ronaldo);


let messi = new Player("Messi", 36, 10, "Forward", "Inter Miami");
messi.displayPlayerInfo();
console.log(messi);


let neymar = new Player("Neymar", 32, 11, "Forward", "Al Hilal");
neymar.displayPlayerInfo();

let mbappe = new Player("Mbappe", 25, 7, "Forward", "Real Madrid");
mbappe.displayPlayerInfo();

let salah = new Player("Salah", 31, 11, "Forward", "Trabzonspor");


console.log(`number of players: ${Player.counter}`);

Player.resetCounter(); //reset the counter to 0

console.log(`number of players: ${Player.counter}`);

