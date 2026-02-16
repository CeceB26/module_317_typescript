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
printAll(): void {
  const makeIsArray = Array.isArray(this.make);
  const modelIsArray = Array.isArray(this.model);

  // Case 1: make + model are NOT arrays
  if (!makeIsArray && !modelIsArray) {
    console.log(`This is a ${String(this.make)} ${String(this.model)} NCycle.`);
    return;
  }

  // Case 2: make + model ARE arrays -> print all matching index pairs
 const make = this.make;
const model = this.model;

if (Array.isArray(make) && Array.isArray(model)) 
    {
    const maxLen = Math.min(make.length, model.length);
  // use make[i], model[i] inside

 // If there are no pairs to print, treat as improperly created
    if (maxLen === 0) {
      console.log("This NCycle was not created properly.");
      return;
    }
}

    for (let i = 0; i < maxLen; i++) {
      const makeAt = this.make;
      const modelAt = this.model;

      // “matching pairs” means both exist at the same index
      if (makeAt !== undefined && modelAt !== undefined) {
        console.log(`This NCycle has a ${String(makeAt)} ${String(modelAt)} at ${i}.`);
      }

    return;
  }


  // Case 3: mismatched types (one array, one not) -> improperly created
  console.log("This NCycle was not created properly.");
}
}

const n1 = new NCycle<string>("Honda", "CBR", 2);
n1.print(); // This is a Honda CBR NCycle.

const n2 = new NCycle<string>(["Honda", "Yamaha"], ["CBR", "R1"], 2);
n2.print(1); // This NCycle has a Yamaha R1 at 1.

const n3 = new NCycle<string>(["Honda"], "CBR", 2);
n3.print(); // This NCycle was not created properly.

