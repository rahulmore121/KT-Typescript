//property decorator is same as method decorator but have only 2 parameters target and key since it is not recommende because decorators are invoked before the constructor 
//if we trying access the instance varibable we cant since constructor need to be invoked hence propery decorator doesnt have more power




function getNames(target: any, key:string) {
   console.log(target)//gives complete detail about the class 
   console.log(key);//name of the variable
   //apart from this it doest provide anything
  }



  class Car{
    @getNames
    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
  }
