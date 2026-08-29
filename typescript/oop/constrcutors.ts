//class > template
class Player {
    //attributes/properties/fields >> variables
    name: string = "";
    age: number = 0;
    number: number = 0;
    position: string = "";
    club: string = "";

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


