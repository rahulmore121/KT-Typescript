function carDecorator(constructor: Function) {
  constructor.prototype.wheels = 4;
  constructor.prototype.getWheels = function () {
    return this.wheels;
  };
}

@carDecorator
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

const car = new Car("audi");
console.log(car.brand);
console.log((<any>car).getWheels());

@carDecorator
class Bike {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

const b = new Bike("bmw");
console.log(b.brand);
console.log((<any>b).getWheels());

export {};


