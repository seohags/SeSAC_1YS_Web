const fs = require('fs').promises

// fs.writeFile('./sesac.txt' , 'hello', function(err) {
//   if (err) throw err;
//   console.log('makeFile Success!');
//   fs.readFile('./sesac.txt', function(err, data){
//     if(err) throw err;
//     console.log("sesacFile data : ", data.toString());
//   })
// }) 

// callback 함수로 작성

fs.writeFile('./sesac.txt', 'hello')
  .then(function(){
    return fs.readFile('./sesac.txt');
  })
  .then(function(data){
    console.log(data.toString());
  })

// promise 로 바꾼거

fs.copyFile('./sesac.txt', './sesac2.txt')
  .then(() => {
    console.log("copy complete")
  })
  .catch((err) => {
    console.error(err);
  })

// promise 로 파일복사

fs.rename('./sesac2.txt', './sesac3.txt') 
  .then(() => {
    console.log("rename complete");
  })
  .catch((err) => {
    console.error(err);
  })

// promise 로 파일 이름 변경