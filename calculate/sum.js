//  Modules pritects their  variables and fuctions from leaking.

console.log("calculate sum of these")


//  export var x  = "hello world";
 var x  = "hello world";

//  export function calculateSum(a,b){
 function calculateSum(a,b){
    const sum  = a + b;

    console.log(sum)
}

// module.exports.x  = x;
// module.exports.calculatesum = calculatesum


// or u can write this 
module.exports = {x,calculateSum};
 



  

