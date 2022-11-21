/*
new Promise(function(resolve, reject) {

});
*/

function func1(){
    return new Promise(function(resolve, reject) {
        resolve("성공");
    });
}
function func2(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){resolve("성공")},1000);
    });
}
var a = fun1();
console.log(a);
var b = func2();
console.log(b);

function fun1(){
    return new Promise(function(resolve, reject) {
        resolve("성공");
    });
}

func1().then(function(result) {
    console.log("result : ", result);
});

function fun2(){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
        resolve("성공")
        },1000);
    });
}

func2()
  .then(function(result) {
    console.log("result2 : ", result);
    return 'a';
}).then(function(abc){
    console.log("abc : ". abc);
}); // 프로미스 체이닝



/*
new Promise(function(resolve, reject) {
  // resolve : 함수 형태, 성공했을 때 실행한다. then의 첫번째로 들어가고
  // reject : 함수 형태, 실패 or 에러를 처리할 때 사용한다. then의 두번째로 들어감
});
*/

function func3(flag) {
    return new Promise(function(resolve, reject) {
        if(flag){
            resolve('flag는 true');
        } else {
            reject('flag는 false');
        }
    })
}

func3(true)
 .then(
    function(msg) {
        console.log("msg 1" , msg);
    }
).catch(
    function(msg) {
        console.log("msg 2" , msg);
    }
);



