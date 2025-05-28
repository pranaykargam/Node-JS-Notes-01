require("./xyz.js"); // one module into another
// require("./sum");
// const {x,calculateSum}= require("./calculate/sum.js");
// // import { calculateSum ,x} from "./sum.js";

// const {calculateMultiply} = require("./calculate/multiply.js");

const {calculateSum,calculateMultiply} = require ("./calculate")
const data  = require("./data.json")

console.log(data);

var name = "node-js";
var a = 10;
var b = 20;

 calculateSum(a,b);
 calculateMultiply(a,b);

console.log(name);
console.log(a+b);
console.log(global);

console.log(this); // Empty object

console.log(x);


// ***  commmon js modules                  ES modules (ESM) or  ES6 modules

// 01->  module .exports req()              ->  import , export
// 02->  default use node.js                ->  default use react,angular
// 03->   older way                         -> new way