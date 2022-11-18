// function wheelDecorator(constructor: Function) {
//   constructor.prototype.wheels = 4;
// }
// function dateDecorator(constructor: Function) {
//   constructor.prototype.date = new Date();
// }


// //stacking
// @wheelDecorator 
// @dateDecorator
// class Car {

//}
// const b = new Car();
// console.log((<any>b).date);
// console.log((<any>b).wheels);




//factories
function getName(name: string) {
    return function (constructor:Function) {
        constructor.prototype.name= name;
    } 
}

@getName("rahul")
class Person {
    
}
const n=new  Person()
console.log((<any>n).name);