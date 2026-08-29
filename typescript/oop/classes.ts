//class > template
class Player {
    //attributes/properties/fields >> variables
    name: string = "";
    age: number = 0;
    number: number = 0;
    position: string = "";
    club: string = "";


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
let ronaldo = new Player();
ronaldo.name = "Cristiano Ronaldo"; //assigning values to the attributes of the class
ronaldo.age = 39;
ronaldo.number = 7;
ronaldo.position = "Forward";
ronaldo.club = "Al Nassr";
ronaldo.displayPlayerInfo(); //calling the method of the class
console.log(ronaldo);


let messi = new Player();
messi.name = "Lionel Messi";
messi.age = 36;
messi.number = 10;
messi.position = "Forward";
messi.club = "Inter Miami";
messi.displayPlayerInfo();
console.log(messi);


let neymar = new Player();
neymar.name = "Neymar";
neymar.age = 32;
neymar.number = 11;
neymar.position = "Forward";
neymar.club = "Al Hilal";
neymar.displayPlayerInfo();

