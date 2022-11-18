interface Person{
    name:string;
    id:number;
    
}
interface Person{
    age:number|string;
    gender:string;

}

let obj:Person={
    name: "Rahul",
    id: 101,
    age: 22,
    gender: "male",
}
console.log(obj.id,obj.name,obj.age,obj.gender);
