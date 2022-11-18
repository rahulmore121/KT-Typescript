/*In simple words, enums allow us to declare a set of named constants

There are three types of enums:

Numeric enum
String enum
Heterogeneous enum*/

//1.Numeric enum

//Here, enum values start from zero and increment by 1 for each member.
enum count {
  one,
  two,
  three,
}
console.log(count.one);

//The first member is initialized with the numeric value 1. The remaining members will be incremented by 1 from the numeric value of the first value
enum Fruites {
  apple = 1,
  mango,
  grapes,
}
console.log(Fruites.apple);
console.log(Fruites.mango);

//It is not necessary to assign sequential values to Enum members. They can have any values.
enum Car {
  bmw = 2000,
  audi = 2300,
  benz = 500,
}
console.log(Car.audi);
console.log(Car.benz);
console.log(Car.bmw);

//The enum can be used as a function parameter or return type,

function getCar(name: string): Car {
  if (name === "audi") {
    return Car.audi;
  }
  return Car.bmw;
}

console.log("the cost of car is ",getCar("bmw"));
