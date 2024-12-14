// console.log("hello world!")

// console.log(window);// only for dom use

// const math = require('math'); builtinMath
const math = require('./math') //own creatd math function

// console.log(math);
// console.log(math(2,3)); exporting only add fuunction

console.log(math.sub(2,3)); // exporting multiple functions



const { add , sub } = require('./math') ; // importing the object as it is

console.log(add(2,3)); 


// to search in built in libraries
const builtin = require('fs'); // for file system

console.log(builtin);