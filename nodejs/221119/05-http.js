const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){
   fs.readFile('./221029_css(03).html')
   .then(function(data) {
    res.end(data.toString());
   });
});

server.listen(8080,function(){
    console.log('8080번 포트로 실행');
}); // 서버를 첫번째 매개변수의 포트로 실행한다

