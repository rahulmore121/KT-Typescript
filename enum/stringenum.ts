//String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.
//The benefits of using string enums is that string enums offer better readability. If we were to debug a program, it is easier to read string values rather than numeric values.
enum Game{
    India="hockey",
    England="cricket",
    France="football",
   Scotland="golf"
}
console.log(Game.India);
console.log(Game["England"]);



