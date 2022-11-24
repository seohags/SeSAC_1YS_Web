const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.render('index');
});

app.get("/form", function (req, res) {
    console.log(req.query);
    res.send({ msg: "get - 이름은 : " + req.query.name });
});

app.post("/form", function (req, res) {
    console.log(req.body);
    res.send({ msg: "post - 이름은 : " + req.body.name });
});

// practice1 //
app.get('/practice1', function (req, res) {
    res.render('practice1');
});

app.get("/practice1form", function (req, res) {
    console.log(req.query);
    res.send({ msg: "회원가입 되었습니다 " + req.query.name + " 님 " + req.query.gender + " 이시고 " + req.query.birth + " 생 이시네요" })
});



// practice2 //
app.get('/practice2', function (req, res) {
    res.render('practice2');
});

app.post("/pratice2", function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.post("/practice2form", function (req, res) {
    if (req.body.id == "seoha" && req.body.pw == 1234) {
        res.send("<p style = color:blue>Success</p>");
    } else {
        res.send("<p style = color:red>Fail</p>");
    }
    console.log(req.body);
});


// ajax // 
app.get('/ajax', function (req, res) {
    res.render('ajax');
});
app.get('/ajax', function (req, res) {
    console.log(data);
});


// fetch //



app.listen(port, () => {
    console.log('Server port : ', port);
});


