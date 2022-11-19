// const num = require('./01-module.js');
const {a, b} = require('./01-module');
// num = { a : 1, b: 3 }
const a = num.a;
const b = num.b; 

function add() {
    return a + b;
}

module.exports = add;