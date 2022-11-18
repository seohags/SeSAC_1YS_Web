// function login(id, pw, cb) {
//     setTimeout(function(){
//         console.log("사용자 입장");
//         cb(id);
//     }, 3000);
// }
// function getVideo(id, cb) {
//     setTimeout(function(){
//         console.log( id + "의 비디오 리스트");
//         cb( ['아바타', '라라랜드']);
//     }, 2000);
// }
// function getDetail(video, cb) {
//     setTimeout(function() {
//         cb("비디오 제목 : " + video);
//     }, 1000);
// }

// login('kim', '1234', function(user){
//     getVideo(user, function(videos){
//         getDetail(videos[0], function(msg){
//             console.log( msg );
//         });
//     });
// });

// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);

function call(name,cb) {
    setTimeout(function(){
        console.log("사용자는 " + name);
        cb(name);
    }, 2000);
};

function back(call, cb) {
    setTimeout(function(){
        console.log("시작은 " + call);
        cb(call);
    }, 1500);
};

function hell(back, cb) {
    setTimeout(function() {
        console.log("두번째는 " + back);
        cb(back);
    }, 1000);
};

function callback(hell, cb) {
    setTimeout(function() {
        console.log("세번째는 " + hell);
        cb();
    }, 500);
}



call('kim', function() {
    back("call", function() {
        hell("back", function(){
            callback("hell", function(){
                console.log();
            })
        })
    })
})













