//Enum in TypeScript supports reverse mapping. It means we can access the value of a member and also a member name from its value.
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
PrintMedia.Magazine; // returns  3
PrintMedia["Magazine"]; // returns  3
console.log(PrintMedia[3]); //return Magazine
console.log(PrintMedia);
