//property decorator is same as method decorator but have only 2 parameters target and key since it is not recommende because decorators are invoked before the constructor 
//if we trying access the instance varibable we cant since constructor need to be invoked hence propery decorator doesnt have more power
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getName(target, key) {
    console.log(target); //gives complete detail about the class 
    console.log(key); //name of the variable
    //apart from this it doest provide anything
}
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    __decorate([
        getName
    ], Car.prototype, "name");
    return Car;
}());
