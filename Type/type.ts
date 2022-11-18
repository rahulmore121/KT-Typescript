//  1 :partial type 
//take the generic parameter interface

/* interface User{
    name:string,
    age:number
}

let obj:Partial<User>={
    name:"rahul"
}

console.log(obj.name)
console.log(obj.age)*/


// 2: required type
//take generic parameter as interface

/* interface User{
    name:string,
    age?:number
}

let obj:Required<User>={
    name:"rahul",
    age:20
}

console.log(obj.name)
console.log(obj.age)*/


//3: ReadOnly type
//take generic parameter as interface

/*interface User{
    name:string,
    age:number
}

let obj:Readonly<User>={
    name:"rahul",
    age:20
}

obj.name="sahil"
console.log(obj.name)
console.log(obj.age)*/




//4: Record type 
//usually work for objects
//take the 2 generic parameter <key,value>  ie type of key and type of value



/*let obj:Record<string,number>={
    apple:10,
    mango:20,

    //grapes:"green"
}

console.log(obj.apple)
console.log(obj.mango)*/



//5:Pick type
//works on interface
//it take 2 parameters <interface,value that to be picked from inteface>
/*

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  //description:"hello"
};*/


//6:Omit type
//works on interface
//it take 2 parameters <interface,value that to be omitted from inteface>

/*
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Omit<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  //title: "Clean room",
  //completed: false,
  description:"hello"
};
*/

//7: exclude type 
//take 2 parameter <union ,exclude member>

type a={
    id:number,
    name:string,
}
type b={
    userid:number,
    username:string
}

let val:Exclude<a | b ,a>={
userid: 1,
username: "rahul"
}
console.log()




//8: Extract type 
//takes 2 parameter <what to extract,from what > result contain the elements that are same in both
/*
type avilable="tea"| "coffe" | "lemonade";

type likes="tea" | "coffe" |"panka"

let james:Extract<avilable,likes> ;
james="tea"
james="coffe"
//james="lemonade"
//james="panka"
*/


//9 :nonnullable type
//which will exclude null and undefined
/*
type non=string|null|undefined;


function f1(name:NonNullable<non>){
    console.log(name)
}
f1(null);*/


//let obj:NonNullable<string|number|null|undefined>="rahul"

//let obj1:NonNullable<string|number>=undefined,



//10 returntype type
/*
function sum(num:number){
    return num
}

let obj:ReturnType<typeof sum>=30;
let obj1:ReturnType<typeof sum>="rahul";

*/


//11:instance type

class C {
  x = 0;
  y = 0;
}
type T0 = InstanceType<typeof C>;

// let obj:T0={
// x: 0,
// y: 0
// }