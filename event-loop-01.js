const fs = require("fs");
const a = 100;

setImmediate (() => console.log("setImmediate"))

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB")
});

setTimeout(()=> console.log("Timer Expired"),0)

function printA(){
    console.log("a =",a);
}

printA();
console.log("Last Line Of The File");


// OUTPUT

// a = 100
// Last Line Of The File
// Timer Expired
// setImmediate
// File Reading CB
