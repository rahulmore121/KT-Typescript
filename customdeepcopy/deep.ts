interface address{
    city:string,
    pin:number
}
interface user{
    name:string,
    age:number
    add:address
}

let ob1:user={
    name: "rahul",
    age: 20,
    add: {
        city :"dharwad",
        pin:59006,
       
    }
}


let ob2:user={
    name: "",
    age: 0,
    add: {
        city: "",
        pin: 0
    },
};

function deepCopy(clone:user){
    let newobj={};
    for(let ob in clone){
        if(typeof clone[ob] === "object"){
            for(let ele in clone[ob]){
                
  
                newobj[ele]=clone[ob][ele]
                
            }  
           ob2[ob]=newobj      
        }
        else{
            ob2[ob]=clone[ob];
        }

    }
}

deepCopy(ob1)

ob2.age=45;

console.log(ob1);
console.log(ob2);