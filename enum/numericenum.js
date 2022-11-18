/*In simple words, enums allow us to declare a set of named constants

There are three types of enums:

Numeric enum
String enum
Heterogeneous enum*/
//1.Numeric enum
//Here, enum values start from zero and increment by 1 for each member.
var count;
(function (count) {
    count[count["one"] = 0] = "one";
    count[count["two"] = 1] = "two";
    count[count["three"] = 2] = "three";
})(count || (count = {}));
console.log(count.one);
//The first member is initialized with the numeric value 1. The remaining members will be incremented by 1 from the numeric value of the first value
var Fruites;
(function (Fruites) {
    Fruites[Fruites["apple"] = 1] = "apple";
    Fruites[Fruites["mango"] = 2] = "mango";
    Fruites[Fruites["grapes"] = 3] = "grapes";
})(Fruites || (Fruites = {}));
console.log(Fruites.apple);
console.log(Fruites.mango);
//It is not necessary to assign sequential values to Enum members. They can have any values.
var Car;
(function (Car) {
    Car[Car["bmw"] = 2000] = "bmw";
    Car[Car["audi"] = 2300] = "audi";
    Car[Car["benz"] = 500] = "benz";
})(Car || (Car = {}));
console.log(Car.audi);
console.log(Car.benz);
console.log(Car.bmw);
//The enum can be used as a function parameter or return type,
function getCar(name) {
    if (name === "audi") {
        return Car.audi;
    }
    return Car.bmw;
}
console.log("the cost of car is ", getCar("bmw"));
