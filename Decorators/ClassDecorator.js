"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function carDecorator(constructor) {
    constructor.prototype.wheels = 4;
    constructor.prototype.getWheels = function () {
        return this.wheels;
    };
}
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car = __decorate([
        carDecorator
    ], Car);
    return Car;
}());
var car = new Car("audi");
console.log(car.brand);
console.log(car.getWheels());
var Bike = /** @class */ (function () {
    function Bike(brand) {
        this.brand = brand;
    }
    Bike = __decorate([
        carDecorator
    ], Bike);
    return Bike;
}());
var b = new Bike("bmw");
console.log(b.brand);
console.log(b.getWheels());
//factories and stacking decorators
