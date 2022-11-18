//TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection.
//The for...of loop returns elements from a collection e.g. array, list or tuple, and so, there is no need to use the traditional for loop

let str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

let arr1 = [10, 20, 30, 40];

for (var val of arr1) {
  console.log(val); // prints values: 10, 20, 30, 40
}
