// 배열 구조분해
let list = ['apple', 'banana'];
[item1, item2] = list;
// let item1 = list[0];
// let item2 = list[1];


[item1, item2 = 'peach', item3 = 'orange'] = list;
console.log(item1);
console.log(item2);
console.log(item3);


let x = 1;
let y = 3;


[ y,x ] = [ x,y ]
// [1,3]
// [a, b] = [1, 3]


// 객체 구조분해
let obj = {
    a : 'one',
    b : 'two',
    e : '1',
    f : '2'
}

// let key1 = obj.key1
// let {a, b} = obj;
// console.log(a);
// console.log(b);

let {b : key1, a, c = 'three'} = obj;
console.log(a);
console.log(key1);
console.log(c);

// 배열은 인덱스 순서대로 출력했다면 , 객체는 키로 찾는 것이기 때문에 키 값으로 찾으면 댐



// 전개연산자는 말 그대로 다 전개해서 가져옴
// 구조분해 할때 전개 연산자는 앞에서 먼저 추출이 되고, 나머지 애들을 가져오는 개념이여서 마지막에 써야댐.
let { b, ...rest } = obj;
console.log ( b );
console.log ( rest );

