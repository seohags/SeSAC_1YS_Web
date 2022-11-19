const fs = require("fs");
fs.readFile("./test.txt", function(err, data){
    if ( err ) throw err;
    console.log( "data : ", data );
    console.log( "data2 : ", data.toString() );
});

const fs2 = require("fs").promises; 
fs2.readFile("./test.txt")
    .then((data) => {
        console.log("promise - data" , data);
    })

fs2.writeFile("./write.txt", 'sesac') // 파일 만드는 함수
    .then(function(){
      return fs2.readFile('./write.txt');
    })
    .then(function(data) {
        console.log(data.toString());
    });

// fs.writeFile('./write2.txt' , 'condingon', function(err) {
//     if(err) throw err;
//     console.log ("writeFile Success!");
//     fs.readFile("./write2.txt", function(err, data){
//         if(err) throw err;
//         console.log("write2File data : ", data.toString());
//     })
// })

