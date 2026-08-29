//parent class (abstract class)
abstract class Employee {
    protected name: string = "";
    protected id: number = 0;
    protected age: number = 0;
    protected image: string = "";
    protected mobile_number: number = 0;


    constructor(name: string, id: number, age: number, image: string, mobile_number: number) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.image = image;
        this.mobile_number = mobile_number;
    }

    protected displayEmployeeDetails() {
        console.log("================================");
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Age: ${this.age}`);
        console.log(`Employee Image: ${this.image}`);
        console.log(`Employee Mobile Number: ${this.mobile_number}`);
        console.log(`Employee Type: ${this.constructor.name}`);
    }

}

class fullTimeEmployee extends Employee {
    salary: number = 0;
    constructor(name: string, id: number, age: number, image: string, mobile_number: number, salary: number) {
        super(name, id, age, image, mobile_number);
        this.salary = salary;
    }
    displayEmployeeDetails() {
        super.displayEmployeeDetails();
        console.log(`Employee Salary: ${this.salary}`);
    }
}
class freelanceEmployee extends Employee {
    hourly_rate: number = 0;
    number_of_hours: number = 0;
    constructor(name: string, id: number, age: number, image: string, mobile_number: number, hourly_rate: number, number_of_hours: number) {
        super(name, id, age, image, mobile_number);
        this.hourly_rate = hourly_rate;
        this.number_of_hours = number_of_hours;
    }
    displayEmployeeDetails() {
        super.displayEmployeeDetails();
        console.log(`Employee Hourly Rate: ${this.hourly_rate}`);
        console.log(`Employee Number of Hours: ${this.number_of_hours}`);
    }
}

let empployee1 = new fullTimeEmployee("Ahmed", 1, 30, "image1.jpg", 1234567890, 50000);
empployee1.displayEmployeeDetails();


let empployee2 = new freelanceEmployee("Ali", 2, 25, "image2.jpg", 9876543210, 100, 40);
empployee2.displayEmployeeDetails();

//let mohamed = new Employee("Mohamed", 3, 28, "image3.jpg", 1122334455);