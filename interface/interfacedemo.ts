interface User {
  name: string;
  age: number;
  isLoggedIn: boolean;
  get: () => string;
  set: (name: string) => void;
}

interface User {
  gmail: string;
}

interface Role extends User {
  role: string;
}

let user1: User = {
  name: " ",
  age: 20,
  isLoggedIn: true,
  gmail: "rahul@gmail.com",
  get: function (): string {
    return "logged in";
  },
  set: function (name: string): void {
    this.name = name;
  },
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

//console.log(user1.role);

export {};
