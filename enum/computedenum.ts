//Numeric enums can include members with computed numeric value. The value of an enum member can be either a constant or computed.

enum Computed {
  num1 = 10,
  num2 = getCount(num1),
  num3 = 20,
}

function getCount(num: number) {
  return num * 10;
}
console.log(Computed.num2);


//When the enum includes computed and constant members, then uninitiated enum members either must come first or must come after other initialized members with numeric constants
/*enum Errror {
    num1 = 10,
    num2 = getCount(num1),
    num4,
    num3 = 20,
  }*/

  //Above example can be wriiten as
//   enum PrintMedia {
//     Newspaper,
//     Book,
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3
// }
// // or
// enum PrintMedia {
//     Newsletter = getPrintMediaCode('newsletter'),
//     Magazine = Newsletter * 3,
//     Newspaper = 0,
//     Book,
// }