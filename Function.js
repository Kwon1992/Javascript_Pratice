/**
 *
 * @param param1
 * @param param2
 */
function test_func(param1, param2) {
   if(!param2) {
       param2 = 'default';
   }
   if(typeof param1 == 'function') {
       return param1();
   } else if(typeof param2 == 'object') {
       return param2;
   }
   return console.log("정상적으로 작동하는 함수 : " + param1); // return value 없이 끝내면서 log를 출력하겠다.
}

test_func();
test_func(function(){
    console.log("test_func 작동");});
console.log(test_func(null, NaN));;
console.log(test_func(null));;
console.log(test_func(null, {}));;

console.log("*****************************************************");

// 함수 정의 3가지 기본 방법 //

function funcName() {
    console.log("work");
}

var funcName2 = function() {
    console.log("work2");
}

var funcName3 = () => {
    console.log("work3");
}

funcName();
funcName2();
funcName3();

console.log("*****************************************************");

//***********************************************************************
//***********************************************************************
//***********************************************************************

function overload(param1) {
    console.log('param1 func');
}

function greeting(param1, param2) {
    if(typeof param1 == 'function') { // param1이 함수라면..
        return param1();
    } else {
        if(param2 && typeof param2 == 'function') { // param2가 존재하고 함수라면
            return param2(param1);
        } else {
            return "HELLO";
        }
    }
    return;
}

function sayHello(param) {
    if(param) return console.log(param);
    console.log('say Hello');
}

greeting(sayHello);
greeting('안녕', sayHello);
greeting('Hi');

console.log("*****************************************************");

let result = greeting(sayHello) || greeting("안녕", sayHello) || greeting("Hi");
console.log(typeof result);
console.log(result);

console.log("*****************************************************");

// greeting(sayHello)에 반환값 X(undefined) -> greeting('안녕', sayHello) 실행, 반환값 X -> greeting('Hi') 실행 -> 'HELLO' return
// 따라서 result에 'HELLO'가 대입되고 console.log(result)를 이용해 출력.
// 만약 greeting('Hi')가 없었다면 result는 undefined!

// let obj = {};
// obj.property = ''; // obj에 perperty가 추가됨,
//
// let func = function() {
//
// }
//
// func.name = "함수1";
// func.func2 = function() {
// }
//
// func();
// func.func2();
//
// //javascript에서 함수도 하나의 객체이기 때문에 가능...


function funcBuilder() { // 함수 반환하는 함수.
    var flag = false;
    var result = function() {
        console.log("func by funcBuilder :: " + flag);
    };
    result.flag = true;
    return result;
}

funcBuilder()(); // funczbuilder가 반환하는 함수를 시행.. 즉 result가 시행됨!! [[funcBuilder()]]() -> result함수 반환 -> [[result()]]
console.log(funcBuilder().flag);

console.log("*****************************************************");

// this binding problem

function People() {
    this.name = "권현우";
    this.array = [1,2,3,4,5];

    let lexcialIterator = (element) => {
        console.log(element + this);
    };

    function nonLexcialIterator (element) {
        console.log(element + this);
    };

    this.array.forEach(lexicalIterator);
    this.array.forEach(nonLexicalIterator);
    /**
     * Array.prototype.forEach(callback) ... forEach(callback) 메소드는 배열 요소마다 한 번씩 제공한 함수를 실행합니다.
     *
     * callback -> 각 요소에 대해 실행할 함수
     */

}
