
function param(target: any, key:string,param:number) {
    console.log(target)//gives complete detail about the class 
    console.log(key);//name of the variable
    //apart from this it doest provide anything

    console.log(param);
    
   }

   class Param{

    name:string;
    constructor(name:string)
    {
        this.name=name;
    }
  
    getprice(name:string,@param age:number) {
      console.log("300rs");
    }
  }