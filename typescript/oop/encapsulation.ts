class Player {
    //attributes/properties/fields >> variables
    private name: string = "";
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
        if (age < 0) {
            console.log("Age cannot be negative");
            this.age = 0;
        }
        else {
            this.age = age;
        }
        this.number = number;
        this.position = position;
        this.club = club;
        Player.counter++; //increment the counter by 1
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setAge(age: number): void {
        if (age < 0) {
            console.log("Age cannot be negative");
        }
        else {
            this.age = age;
        }
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


let player1 = new Player("Lionel Messi", -5, 10, "Forward", "Inter Miami");

//player1.name = "Lionel Andress Messi"; //accessing the name property of player1 object
//player1.age = -5;

player1.setName("Lionel Andress Messi"); //calling the setName method of player1 object

player1.setAge(-5); //calling the setAge method of player1 object

console.log(player1.getName())

player1.displayPlayerInfo(); //calling the displayPlayerInfo method of player1 object

