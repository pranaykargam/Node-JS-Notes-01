const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve().then(() => console.log("promise"));


fs.readFile("./file.txt", "utf-8",()=> {
    setTimeout(() => console.log("2nd timer"), 0);
    process.nextTick(() => console.log("2nd Nextclick"));
    setImmediate(() => console.log(" 2nd setImmediate"));

    console.log("File Reading CB")
});

process.nextTick(() => console.log(" Nextclick"));


console.log("Last line of the file")


// OUTPUT 

// Last line of the file
// a = 100
// promise
// Timer Expired
// setImmediate

// File Reading CB
// 2nd Nextclick
// 2nd setImmediate (because it is in the poll state so it continues)
// 2nd timer









 
