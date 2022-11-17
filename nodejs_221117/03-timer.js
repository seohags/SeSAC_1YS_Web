const func1 = setTimeout(function() {
    console.log("1.5초 후 실행");
}, 1500);
const func2 = setInterval(function() {
    console.log("1초마다 반복");
}, 1000);
const func3 = setTimeout(() => {
    console.log( "fun3 실행");
}, 3000);

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4 = setImmediate(() => {
    console.log( "fun4 즉시 실행" );
});
const func5 = setImmediate(() => {
    console.log( "fun5 즉시 실행" );
});
clearImmediate(); // 즉시 실행을 취소하는 함수


