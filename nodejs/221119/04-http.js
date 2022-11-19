const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){
   fs.readFile('../sesac study/221029_css(03).html')
   .then(function(data) {
    res.end(data.toString());
   });
});

/*
server.on() // 이벤트를 등록하는 함수
server.listen() // 서버를 실행하고 클라이언트를 기다린다.
*/

server.listen(8080,function(){
    console.log('8080번 포트로 실행');
}); // 서버를 첫번째 매개변수의 포트로 실행한다

