const fs = require("fs");
const https = require("https");

console.log("hello world");

var a = 24567;
var b = 6745870;

// Correct use of https
https.get("https://dummyjson.com/products/1", (res) => {
   
        console.log("Fetched data successfully:");
    });



// setTimeout call
setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);

// Correct use of fs
fs.readFile("./file.txt", "utf8", (err, data) => {
  
    console.log("File data:", data);
});

// Function should use its parameters
function multiplyFn(x, y) {
    return x * y;
}

var c = multiplyFn(a, b);
console.log("Multiplication result:", c);


// output 

// hello world
// multiplecation result:672354 


//file: file data : ",data
//fetched data successfully
//setTimeout: set timeout called after the 5 seconds