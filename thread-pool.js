const fs = require("fs");
const crypto = require("crypto");
const { error } = require("console");

process.env.UV_THREADPOOL_SIZE = 3;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("1-cryptopbkd2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("2-cryptopbkd2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("3-cryptopbkd2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("4-cryptopbkd2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("5-cryptopbkd2 done")
});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("6-cryptopbkd2 done")
});




