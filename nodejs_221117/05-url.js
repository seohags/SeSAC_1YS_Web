const url = require("url");
// console.log( url );
// console.log( url.parse );
// var obj = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B0%9C');
// console.log( obj ); 
// console.log( url.format(obj) );
// console.log( obj.protocol );

// var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B0%9C');



// console.log(string.searchParams); // ? 뒤에 있는 애들을 나눠 놓은 거


// var string = new url.URL("http://localhost?name=sesac&name=코딩온&age=10");
// console.log(string.searchParams.getAll('name'));
// console.log(string.searchParams.keys()); 
// string.searchParams.append('age', '20');
// console.log(string.searchParams.getAll('age'));
// console.log(string.searchParams.has('age'));

var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');
console.log("all key :" , string.searchParams.keys());
console.log("all value :", string.searchParams.values());
string.searchParams.delete('sm');
console.log("key delete key: " , string.searchParams.keys());






