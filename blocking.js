const crypto = require("crypto");

console.log("hello world")

var a = 635432;
var b = 43532;

// pbkdf2 - Passward Base Key Derective Fuction 

crypto .pbkdf2Sync("password","salt" ,50000000,50,"Sha512");

console.log("First key is generated");

setTimeout(()=>{
    console.log("call me right now")
},0) // it will only be called once  call stack of main thread is empty

// Async Fuction 
crypto.pbkdf2("password","salt" ,5000,50,"Sha512",(err,key)=>{
    console.log("Second key is generatedß");
});

function multyplyFn(x,y){
const result = a *b;
return result;
}

var c = multyplyFn(a,b);
console.log("multiplicaton result is : ",c);





// output 

// hello world
// First key is Generated  (sync) -> it will take some time (blocking the main thread)
// Multiplication result is : 12345678
//  Second key is generated ß