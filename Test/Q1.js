class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }
}
const myCar = new Car('toyota', 'corolla', '2022');
console.log(myCar.getDetails());