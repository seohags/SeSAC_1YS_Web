const fs = require('fs').promises;

fs.readFile('./sesac.txt')
    .then((data) => {
        console.log('데이타야 임마' , data);
    })

fs.writeFile('./sesac.txt', 'ㅈㄴ게 반갑다')
    .then(() => {
        return fs.readFile('./sesac.txt');
    })
    .then((data) => {
        console.log(data.toString());
    });

fs.copyFile('./sesac.txt', './sesac2.txt'[0], function(err) {
    if(err) throw err;
    console.log('됐다 임마');
    fs.readFile('./sesac2.txt', function(err, data){
        if(err) throw err;
        console.log("두 번째 파일도 됐따 임마 ", data.toString());
    })
})   




// fs.rename('./sesac2.txt', './newfile.txt', {
//     if(err) throw err;
//     console.log('복사됐따 임마');
//     fs.readFile('')
// })

