const result = require('./01-module2.js');
// return = function(){return a + b;}
console.log( result );
console.log ( result() );
// { add : function } 이 형태로 넘어왔을 때는
// console.log(result.add());