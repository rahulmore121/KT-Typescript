"use strict";
//The reduce method is different from above three in the sense that it results in a single value from the array, while other results in array.
//As our reduce function loops through the array, in the same way as map function, value will get individual data of array starting from 1 i.e first element of array. As reducer function loops through the array, value of total also increases until reduce function is stopped. At last, that total value is stored in sum variable
var number = [1, 2, 6, 8, 12, 14];
var sum = number.reduce(function (total, value) { return total + value; });
console.log(sum);
