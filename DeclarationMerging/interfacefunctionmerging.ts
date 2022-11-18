interface User {
  getName(): string;
}
interface User {
  getNumber(): number;
}

class person implements User {

  getNumber(): number {
      return 100;
  }

  getName():string {
    return "Rahul";
  }
}

const u1=new person();
console.log(u1.getName())
console.log(u1.getNumber());
