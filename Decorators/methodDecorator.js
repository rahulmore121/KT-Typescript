var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getdetails(target, key, descriptor) {
    /*
      target: contains our target(the function, class, property that we want to do something with it)
      * key: In method decorator, it is the name of the method.
      * descriptor: It is a property descriptor and it gives us the child function(method) in descriptor.value and we can change the behaviors of the method.
      * writable,ennumerable,
  
  */
    descriptor.writable = false; //doesnt allow to ovreride
}
function add(a, b) {
    return function (target, key, descriptor) {
        console.log(a + b);
        var a1 = descriptor.value;
        console.log(a1);
    };
}
var Book = /** @class */ (function () {
    function Book(name) {
        this.name = name;
    }
    // @getdetails
    Book.prototype.getprice = function () {
        console.log("300rs");
    };
    __decorate([
        add(10, 20)
        // @getdetails
    ], Book.prototype, "getprice");
    return Book;
}());
// const b=new Book("java")
// b.getprice=function(){
// console.log("hello")
// }
