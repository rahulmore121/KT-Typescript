var Computed;
(function (Computed) {
    Computed[Computed["num1"] = 10] = "num1";
    Computed[Computed["num2"] = getCount(Computed.num1)] = "num2";
    Computed[Computed["num3"] = 20] = "num3";
})(Computed || (Computed = {}));
function getCount(num) {
    return num * 10;
}
console.log(Computed.num2);
