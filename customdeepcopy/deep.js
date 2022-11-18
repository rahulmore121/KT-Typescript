var ob1 = {
    name: "rahul",
    age: 20,
    add: {
        city: "dharwad",
        pin: 59006
    }
};
var ob2 = {
    name: "",
    age: 0,
    add: {
        city: "",
        pin: 0
    }
};
function deepCopy(clone) {
    var newobj = {};
    for (var ob in clone) {
        if (typeof clone[ob] === "object") {
            for (var ele in clone[ob]) {
                newobj[ele] = clone[ob][ele];
            }
            ob2[ob] = newobj;
        }
        else {
            ob2[ob] = clone[ob];
        }
    }
}
deepCopy(ob1);
ob2.age = 45;
console.log(ob1);
console.log(ob2);
