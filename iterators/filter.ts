//Filter method creates a new array with element that pass the test applied by the callback function. We use this method, to filter a given array according to some condition.

let arr=[1,2,3,4,5,6,7,8,22,45,11,26,32,22,5,222]

let newarr=arr.filter((a)=>{
    return a%2 ===0;
})

console.log(newarr);
