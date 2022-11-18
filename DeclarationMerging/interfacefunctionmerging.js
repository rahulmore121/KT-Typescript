var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.getNumber = function () {
        return 100;
    };
    person.prototype.getName = function () {
        return "Rahul";
    };
    return person;
}());
var u1 = new person();
console.log(u1.getName());
console.log(u1.getNumber());
