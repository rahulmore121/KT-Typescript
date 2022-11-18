//generators is same like funcion but when we call normal function it will get execute competely 
//but generator can be paused and resumed  using the keyword YIELD

function *generat(){
    yield 1;
    console.log("hello this is yield 1");
    yield 2;
    console.log("hello this is yield 2");
    
}
let gen=generat()  //it provide reference it wont call
console.log(gen.next());//value=1 done=false
//console.log(gen.next);
//console.log(gen.next);
//console.log(gen.next);//its gives true only when there are no yilds
