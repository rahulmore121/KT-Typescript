function getdetails(target: any, key:string, descriptor: PropertyDescriptor) {
  /*
    target: contains our target(the function, class, property that we want to do something with it)
    * key: In method decorator, it is the name of the method.
    * descriptor: It is a property descriptor and it gives us the child function(method) in descriptor.value and we can change the behaviors of the method. 
    * writable,ennumerable,

*/
descriptor.writable=false;//doesnt allow to ovreride
}
function add(a:number,b:number){
  return function(target:any,key:string,descriptor:PropertyDescriptor){
    console.log(a+b)
    
  }
}

class Book {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @add(10,20)
   // @getdetails
  getprice() {
    console.log("300rs");
  }
}

// const b=new Book("java")
// b.getprice=function(){
// console.log("hello")
// }
