const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes"); // 폴더까지 쓰면 그 아래에 있는 index 파일을 알아서 찾음 index 파일명이 아니라면 그 파일명까지 써줘야함 
app.use('/visitor', router);


app.get('*', (req, res) => { // * 표는 모든 라우터에 적용 그래서 제일 마지막에 써야한다.
    // res.send('주소가 틀렸음');
    res.send('mvc');
});

app.listen(port, () => {
    console.log('Server port : ', port);
});