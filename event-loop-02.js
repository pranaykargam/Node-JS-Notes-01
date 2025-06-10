const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("promise"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("process"));

function printA() {
    console.log("a =", a);
}

printA();
console.log("Last Line Of The File");


// OUTPUT

// a = 100
// Last Line Of The File
// process
// promise
// Timer Expired
// setImmediate
// File Reading CB