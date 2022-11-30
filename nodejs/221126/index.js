const express = require('express');
const multer = require('multer');
const path = require("path");
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
});

app.get("/file", (req, res) => {
    res.render("file");
});

app.post("/file", (req,res) => {
    res.render('file');
});

app.get("/img", (req, res) => {
    res.render("img");
});

app.post("/upload-img", upload.single("userimg"), (req, res) => {
    res.render('imgresult', { path: req.file.path });
});

// post 실습

app.get("/upload-img2", (req, res) => {
    res.render("img");
});

app.post("/upload-img2", upload.single("userimg"), (res, req) => {
    res.send( { path: req.file.path });
});

// 답
app.get("/register2", (req,res) => {
    res.render("practice36");
});

app.post("/register2", upload.single("userfile"), (req,res) => {
    res.send( { path: req.file.path } );
}); 

// 



app.post("/upload-single", upload.single("userfile"), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send("upload complete");
});

app.post("/upload-array", upload.array("userfile"), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("upload complete");
});

app.post("/upload-fields", upload.fields([{ name: 'userfile1' }, { name: 'userfile2' }, { name: 'userfile3' }]), (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
});

app.post("/upload-fileds", upload.fields([{ name : 'userfile1'}, ]))



app.get("/", test, test2, (req, res) => {
    console.log('hello', req.name);
    res.send('hello');
});

function test(req, res, next) {
    req.name = "12345";
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라
};

function test2(req, res, next) {
    console.log("test 2 함수입니다");
    next();
};

app.listen(port, () => {
    console.log('Server port : ', port);
});