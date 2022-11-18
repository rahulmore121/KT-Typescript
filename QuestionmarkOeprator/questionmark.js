function add(n) {
    return n + 2;
}
var y = 2;
var x = y !== null && y !== void 0 ? y : add(2);
console.log(x);
