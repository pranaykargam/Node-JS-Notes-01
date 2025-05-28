console.log("Hello world");

var a  = 41356;
var b = 56437813;


setTimeout(()=>{
    console.log("call me right now")
},0)

setTimeout(()=>{
    console.log("call me 3 sec")
},3000)

function multyplyFn (x,y){
    const result = a*b;
    return result;
}

var c = multyplyFn(a,b);

console.log("multiplication result is : " ,c);