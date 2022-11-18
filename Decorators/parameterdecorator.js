var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function param(target, key, param) {
    console.log(target); //gives complete detail about the class 
    console.log(key); //name of the variable
    //apart from this it doest provide anything
    console.log(param);
}
var Param = /** @class */ (function () {
    function Param(name) {
        this.name = name;
    }
    Param.prototype.getprice = function (name, age) {
        console.log("300rs");
    };
    __decorate([
        __param(1, param)
    ], Param.prototype, "getprice");
    return Param;
}());
