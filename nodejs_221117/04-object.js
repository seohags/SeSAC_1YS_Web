
/* 
파일 경로 정보 
*/
console.log( "__filename : " + __filename );
console.log( "__dirname : " + __dirname );
console.log( "-------------------------------" );


/*
process 객체 = 현재 실행 중인 노드 프로세스 정보
*/
/* console.log("process.version : ", process.version );
console.log("process.arch : ", process.arch );
console.log("process.platform : ", process.platform );
console.log("process.cpuUsage : ", process.cpuUsage() );
console.log( "-------------------------------" ); */


/*
os - 운영체제 (내장 모듈이여서 가져와서 사용해야함)
*/
const os = require('os');
/* console.log( "os type : ", os.type());
console.log( "os cpus : ", os.cpus());
console.log( "os homedir : ", os.homedir()); */


console.log( "os freemem : ", os.freemem()); 
console.log( "os totalmem : ", os.totalmem());
console.log( "os homedir : ", os.homedir());

/* 
path 모듈 : path 안에는 파일명 경로명을 구분 지을 수 있다.
*/

const path = require("path");
const file = __filename;
console.log( "path.sep", (path.sep) ); // 짝대기 출력
console.log( "path.extname" , path.extname(file)); // 확장자 출력
console.log( "path.parse" , path.parse(file)); // 구분 지을 수 있는걸 다 구분지어서 보여줌




