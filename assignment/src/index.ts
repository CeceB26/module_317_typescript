// @ts-check

class Vehicle {
  status: "started" | "stopped" = "stopped";
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}


function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}


const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

/*class NCycle {
  status: "started" | "stopped" = "stopped";
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }
}*/

class NCycle<T> {
  status: "started" | "stopped" = "stopped";
  make: T | T[];
  model: T | T[];
  wheels: number;

  constructor(make: T | T[], model: T | T[], wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }
}
const n1 = new NCycle<string>("Honda", "CBR", 2);
n1.print(); // This is a Honda CBR NCycle.

const n2 = new NCycle<string>(["Honda", "Yamaha"], ["CBR", "R1"], 2);
n2.print(1); // This NCycle has a Yamaha R1 at 1.

const n3 = new NCycle<string>(["Honda"], "CBR", 2);
n3.print(); // This NCycle was not created properly.

