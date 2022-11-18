//Enum in TypeScript supports reverse mapping. It means we can access the value of a member and also a member name from its value.

enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
  PrintMedia.Magazine;   // returns  3
  PrintMedia["Magazine"];// returns  3
  console.log(PrintMedia[3]);//return Magazine
  console.log(PrintMedia);
  