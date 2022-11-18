var Name;
(function (Name) {
    var name = "rahul";
    function getaname() {
        return name;
    }
    Name.getaname = getaname;
})(Name || (Name = {}));
(function (Name) {
    function getId() {
        return 10;
    }
    Name.getId = getId;
})(Name || (Name = {}));
var n = Name.getaname();
console.log(n);
var i = Name.getId();
console.log(i);
