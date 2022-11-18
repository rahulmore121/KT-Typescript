"use strict";
//map() method creates a new array with the results of calling a provided function on every element in this array.
var m = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newm = m.map(function (a) { return a * a; });
console.log(newm);
