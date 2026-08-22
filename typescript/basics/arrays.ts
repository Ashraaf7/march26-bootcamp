let names: string[] = ["Ahmed", "Mohamed", "Ali", "Sara"];

let ages: number[] = new Array(20, 25, 30, 35);


names.push("Aya");
names.unshift("Omar");
names.pop();
names.shift();

for (let name in names) {
    console.log(names[name]);
}