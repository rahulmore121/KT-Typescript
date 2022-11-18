//This can be used with an array, list, or tuple. The for...in loop iterates through a list or collection and returns an index on each iteration.
// let arr = [10, 20, 30, 40];

// for (var index in arr) {
//   console.log(index); // prints indexes: 0, 1, 2, 3

//   console.log(arr[index]); // prints elements: 10, 20, 30, 40
// }


let a=[1,2,3,4]
let b=a;

b.push(3)
console.log(a);








//ou can also use let instead of var. The difference is that the variable declared using let will not be accessible out of the for..in loop,
/*let arr = [10, 20, 30, 40];

for (var index1 in arr) {
  console.log(index1); // prints indexes: 0, 1, 2, 3
}
console.log(index1); //OK, prints 3 

for (let index2 in arr) {
  console.log(index2); // prints elements: 0, 1, 2, 3
}*/
//console.log(index2); //Compiler Error: Cannot find index2