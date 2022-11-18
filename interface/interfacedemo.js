"use strict";
exports.__esModule = true;
var user1 = {
    name: " ",
    age: 20,
    isLoggedIn: true,
    gmail: "rahul@gmail.com",
    get: function () {
        return "logged in";
    },
    set: function (name) {
        this.name = name;
    }
};
// let user1: Role = {
//   name: " ",
//   age: 20,
//   isLoggedIn: true,
//   gmail: "rahul@gmail.com",
//   get: function (): string {
//     return "logged in";
//   },
//   set: function (name: string): void {
//     this.name = "Rahul";
//   },
//   role: "Admin",
// };
console.log(user1);
console.log(user1.isLoggedIn);
user1.set("rahul");
console.log(user1.name);
