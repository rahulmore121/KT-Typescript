import lodash from "lodash";

//variable copy wont copy the refernce but copy only value
// let num = 20;
// let num1 = num;
// num1 = 22;
// console.log(num);
// console.log(num1);

//object copy
// object copy copies the reference instead values like array objects

//shalllow copy copies the reference bot the value

let obj1 = {
  name: "rahul",
  age: 20,
  address: {
    state: "karnataka",
    city: "dharwad",
  },

  add: function (a: number, b: number) {
    return a + b;
  },
  date: new Date(),
};

let obj2 = obj1;

obj2.age = 33;

console.log("using shallow copy", obj1);
console.log(typeof obj1.date);
//console.log(obj2);

//deepcopy copies the values instead reference

//1.using Object assign method

//let objre = Object.assign({}, obj1);
let objre = { ...obj1};
objre.name = "object assign";

//it wont work for nested objects ,suppose if we change any nested object it will get effect to original object
objre.address.city = "belgaum";
console.log("using Object assign ", objre);

//2.using JSON Stringify

//it wont work for function inside objects,that is its doesnt include function of original object
// let json = JSON.parse(JSON.stringify(obj1));
// json.name = "json type";

// console.log("using JSON Stingify", json);
// console.log(typeof json.date);


// //3.using lodash
// let l = lodash.cloneDeep(obj1);
// l.name = "json type";

// console.log("using spread operator refernce", l);
// console.log(typeof l.date);



//you have to deep copy nested objects from one nested oobject to another nested object without using any prebuild deepcopy method

let object1={
  name:"rahul",
  age:22,
  address:{
    street:"plot 102",
    city:"belgaum"
  }
}
let object2={}
