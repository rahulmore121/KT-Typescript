function add(n: number) {
  return n + 2;
}
let y=2;

// if y is null or undefines then add(2) is executed  anfd if y is defined than return the value of y


let x: number = y ?? add(2);
console.log(x);
