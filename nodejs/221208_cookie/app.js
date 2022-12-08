const express = require("express");
const cookieParser = require("cookie-parser");
const { response } = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    if (req.cookies.popup == "1") {
        res.render("index", { popup: "none" });
    } else {
        res.render("index", { popup: "block" });
    }
    // cookies.popup 값을 비교해서 1이 아니면 , "none"
});

app.post("/setpopup", (req, res) => {
    res.cookie("popup", "1", option);
    res.send(true);
    // (1) 오늘 하루 안열었다는걸 구분 하는 쿠키 생성. (2) 서버 응답. 
});

const option = {
    httpOnly: true, // 클라이언트가 document.cookie 로 접근할 수 없게 한다.
    maxAge: 60 * 60 * 24 * 1000, // 만들어진 순간부터 (ms단위) 초 만큼 뒤에 만료된다.  
    // expires: "2022-12-09T09:00:00", // GMT 시간으로 설정해야 한다. ex ) 2022-12-09T09:00:00  
    // path: "/a", // localhost:8000 쿠키가 없음 , localhost:/a/~~~~~~ 쿠키가 있음. default "/" 
    // secure: false, // true 라고 할 경우 https 보안서버에만 적용된다
    // signed: true // 쿠키의 암호화 default 값은 false  
}

app.get("/set", (req, res) => { //res로 보내고
    res.cookie("NM_POPUP", "1", option);
    res.cookie("test", "1", option); // 옵션을 해놓길 원한다면 세번째 인자로 객체로 넣으면된다
    res.send("쿠키 생성 성공");
});

app.get("/get", (req, res) => { // req로 가져오고
    console.log(req.cookies); // 클라이언트에서 쿠키를 가져오고 싶다면 ? 즉 req객체를 통해서 쿠키에 접근 가능 
    console.log(req.cookies.test);
    res.send(req.cookies);
});

app.listen(port, () => {
    console.log("server open", port);
});
