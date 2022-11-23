const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs'); // ejs 템플릿 설정
// app.use(express.static("static"))
// src="img/geumdong.jpg"

// app.use("/public", express.static("static"));
// static 이라는 실제 존재하는 폴더에 public 이라는 (가상) 경로로 접근할 수 있도록 한다
// src="/public/img/geumdong.jpg"

app.use(express.urlencoded({ extended: true })); // x-www-urlencoded 데이터 해석
app.use(express.json()); /// json 딕셔너리 형태와 비슷.

app.use('/static', express.static('static'));
// app.use("/static", express.static("img"));

// locakhost:8080
app.get('/', (req, res) => {
  // .get 은 매개변수 무조건 필요하다
  res.send('Hello Express!');
});

// localhost:8080/test
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); // sendFile은 절대 경로로 해야한다
});
// __dirname : C:/~~~~~~/nodejs/221122_express

// localhost:8080/ejs
app.get('/ejs', (req, res) => {
  res.render('index', {
    title: 'index 페이지 입니다.',
    data: ['a', 'b', 'c'],
  }); // render 에 인자를 하나만 넣으면 그 내용만 하나만 보여주고, 두 번째 인자를 넣으면 객체 형태로 줄 수 있다.
});


app.get('/img', (req, res) => {
  res.render('img', {
    title: 'image page',
    data:['a', 'b', 'c'],
  });
}); 

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/getForm', (req, res) => {
  console.log(req.query);
  res.render('getresult', {data : req.query});
});

app.post('/postForm', (req, res) => {
  console.log(req.body);
  res.render('postresult', { data: req.body });
});

app.listen(port, () => {
  // 서버 여는 메서드 listen
  console.log('Server open : ', port);
});
