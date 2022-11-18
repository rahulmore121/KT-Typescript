namespace Name{
    let name="rahul"
    export function getaname(){
        return name;
    }

}
namespace Name{
   export function getId(){
    return 10;
   }
}

let n=Name.getaname();
console.log(n);
let i=Name.getId()
console.log(i);

