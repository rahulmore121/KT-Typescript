type User = {
  name: string;
  age: number;
  email: string;
};

let obj = {
  myname:" ",
  age: 0,
  email: "",
  setUser: (user: User) => {
    this.age = user.age;
    this.email = user.email;
    this.myname = user.name;
  },
  getUser: () => {
    return `name is ${this.fname} \n age is ${this.age}\n email is ${this.email}`;
  },
};

obj.setUser({ name: "rahul", age: 20, email: "rahulmoreb@gmail.com" });

console.log(obj.getUser());
