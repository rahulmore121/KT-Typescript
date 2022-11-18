"use strict";
//TypeScript includes the for...of loop to iterate and access elements of an array, list, or tuple collection.
//The for...of loop returns elements from a collection e.g. array, list or tuple, and so, there is no need to use the traditional for loop
var str = "Hello World";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    console.log(char); // prints chars: H e l l o  W o r l d
}
var arr1 = [10, 20, 30, 40];
for (var _a = 0, arr1_1 = arr1; _a < arr1_1.length; _a++) {
    var val = arr1_1[_a];
    console.log(val); // prints values: 10, 20, 30, 40
}
