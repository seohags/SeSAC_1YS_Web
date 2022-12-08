const express = require("express");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 8000;

app.use(session({
    secret: '1234', // 임의의 문자열로 session을 암호화함 
    resave: false, // true로 하면 모든 요청마다 session에 변화가 없어도 , session 을 다시 저장함   
    saveUninitialized: true, // 초기화되지 않은 세션을 저장하냐 마냐
    // cookie: { // session id 쿠키에 대한 옵션
    //     httponly : true,
    //     maxAge :
    // },
    // secure: // true 보안서버에서만 작동
}))

app.get("/", (req, res) => {
    res.render('login');
});

app.get("/", (req, res) => {
    if (req.session.user) res.render("login", { isLogin: true })
    else res.render("login", { isLogin: false })
    res.send("session");
});

const user = { id: "a", pw: "1" };

app.post("/login", (req, res) => {
    // cookies = { } 
    // req.session = {}
    if (req.body.id === user.id && req.body.pw == user.pw) {
        req.session.user = req.body.id;
        res.send("login");
    } else {
        res.send("login fail");
    }
    req.session.user = "id";
    res.send("session create complete");
});

app.delete("/logout", (req, res) => {
    req.session.destroy(function (err) {
        if (err) throw err;
        res.send("Logout");
    })
});

app.listen(port, () => {
    console.log("server open", port);
});
