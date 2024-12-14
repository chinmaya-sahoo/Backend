// function add(a,b){
//     return a + b;
// }
// function sub(a,b){
//     return a - b;
// }

// module.exports = add;
// module.exports = sub; // overwrite original(bad code)

// module.exports = {
//     add,
//     sub
// }

// we can also rename these functions ...

// module.exports = {
//     addFn : add,
//     subFn : sub,
// }


// can also use other export method
exports.add = (a , b )=> a+b;
exports.sub = (a , b )=> a-b;
