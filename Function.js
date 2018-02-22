
function test_func(param1, param2) {
   if(!param2) { // param2가 없다면... 즉 호출될 때 param2가 없었다면
       param2 = 'default';
   }
   if(typeof param1 == 'function') {
       return param1();
   } else if(typeof param2 == 'object') {
       return param2;
   }
   return console.log("정상적으로 작동하는 함수 : " + param1); // return value 없이 끝내면서 log를 출력하겠다.
}

test_func(); // parameter를 꼭 주어야 되는 것은 아니다.
test_func(function(){
    console.log("test_func 작동");}); // param1에 대해서만 주어짐.
console.log(test_func(null, NaN));
console.log(test_func(null));
console.log(test_func(null, {}));

console.log("*****************************************************");

// 함수 정의 3가지 기본 방법 //

function funcName(param) {
    console.log("work");
}

function funcName(param1, param2) { // param에 type 자체가 지정되지 않는 것을 다시 확인!!
    console.log("work1-1");
}

var funcName2 = function() {
    console.log("work2");
}

var funcName3 = () => {
    console.log("work3");
} // 화살표 함수가 ES6에 추가되었음.

funcName(); // work1-1이 출력된다...
funcName("test"); // work1-1이 출력된다... 즉, overload가 없다!!
funcName2();
funcName3();

console.log("*****************************************************");

//***********************************************************************
//***********************************************************************
//***********************************************************************

function greeting(param1, param2) {
    if(typeof param1 == 'function') { // param1이 함수라면..
        return param1();              // 해당 함수를 실행하고 return. (반약 param1()에서 return값이 있으면 해당 값을 return. 없으면 return 값 없음)
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

greeting(sayHello); // 첫번째 param으로 함수, 두번째 param은 없음
greeting('안녕', sayHello); // 첫번째 param으로 string, 두번째 param으로 함수
greeting('Hi'); // 첫번째 param으로 string

console.log("*****************************************************");

let result = greeting(sayHello) || greeting("안녕", sayHello) || greeting("Hi");
console.log(typeof result);
console.log(result);

// greeting(sayHello)에 반환값 X(undefined) -> greeting('안녕', sayHello) 실행, 반환값 X -> greeting('Hi') 실행 -> 'HELLO' return
// 따라서 result에 'HELLO'가 대입되고 console.log(result)를 이용해 출력.
// 만약 greeting('Hi')가 없었다면 result는 undefined!

console.log("*****************************************************");

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
// 함수도 object처럼 property를 추가할 수 있다.
//
// func();
// func.func2();
//
// javascript에서 함수도 하나의 기본이 되는 객체이기 때문에 가능...

var flag = true;

function funcBuilder() { // 함수 반환하는 함수.
    var flag = false;
    var result = function() {
        console.log("func by funcBuilder :: " + flag + " this : " + this); // 함수 안에서 this를 호출했는데 함수 자기 자신이 아니라 global object를 가리킴(전역 객체..)
    }; // result에 함수를 할당. -- 실행 시 result의 flag를 출력
    result.flag = false; // result의 flag를 만들어 false를 할당
    return result;
}

funcBuilder()(); // funczbuilder가 반환하는 함수를 시행.. 즉 result가 시행됨!! [[funcBuilder()]]() -> result함수 반환 -> [[result()]]
console.log(funcBuilder().flag);

console.log("*****************************************************");

function thisfunc() {
    console.log("" + this);
    function test() {
        console.log("" + this);
    }
    return test;
}


thisfunc()(); // thisfunc()의 this도, test()[thisfunc()()]의 this도 global object를 가리킨다..

console.log("*****************************************************");

// Constructor function - 일반적으로 대문자로 시작..
// "this" binding problem - javascript의 난해한 점.

function Person() {
    this.name = "권현우";
    console.log(this); // 이 때 당시에는 func가 생성되기 전이므로 Person { name: '권현우' }
    function iterator (element) {
        console.log(element + this); // 이 때의 this는 global을 가리킨다...
    }
    this.array = [1,2,3];
    this.array.forEach(iterator); // 여기서의 this는 global을 가리킴..
    this.func = function() {
        console.log(this);
    }
}

// 생성자 함수의 직접적으로 닿아있는 this는 해당 생성자의 인스턴스를 가리킨다.
// 하지만 생성자 함수 내에 또 다른 함수가 있고 그 함수 내의 this는 생성자의 인스턴스를 가리키지 않고 전역 객체를 가리키게 된다.
// 이러한 문제는 화살표 함수를 통해 해결 가능하다. (Person2 참고)

let newObj = new Person(); // 생성자 함수의 this는 자기 자신을 가리킴..
newObj.func(); // 이 때의 this는 newObj를 가리킨다.

// 이러한 혼란을 막기 위해... javascript에 arrow function이 생겨나게 되었다!!

console.log("*****************************************************");

// function () {}
// () => {}

// 두 개의 차이?? lexical scope냐 아니냐...

function Person2() {
    this.name = "권현우";
    console.log(this); // 이 때 당시에는 func가 생성되기 전이므로 Person { name: '권현우' }
    let iterator = (element) => {
        console.log(element + this); // Person을 통해 생성한 것과 다르게 this가 Object를 가리킴 - 즉 this가 쓰이는 시점(runtime) 때 무엇을 가리키는지 결정됨
    }
    // Person과 다르게 iterator를 arrow function으로 만듦.
    this.array = [1,2,3];
    this.array.forEach(iterator); // 여기서의 this는 global을 가리킴..
    this.func = function() {
        console.log(this);
    }
}

let newObj2 = new Person3();

console.log("*****************************************************");

function Person3() {
    this.name = "권현우";
    this.array = [1,2,3];

    let lexicalIterator = (element) => {
        console.log(element + this);
    }

    function nonLexicalIterator (element) {
        console.log(element + this);
    }

    this.array.forEach(lexicalIterator); // 화살표 함수의 this는 객체가 생성되었을 때 결정되므로 인스턴스를 가리킴.
    this.array.forEach(nonLexicalIterator); // 일반 함수의 this는 해당 함수가 만들어졌을 때, 즉 객체가 생성되기 전에 바로 결정하므로 global을 가리킴.

    this.func = function() {
        console.log(this);
    }
}

let newObj3 = new Person3();
newObj3.func(); // obj에 대한 func로 실행하므로 this가 그 인스턴스를 가리킴. 하단 참조.

//3 번째 강의 20분부터 다시 보기..

/**
 * 출처 : https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e -- lexical Context...
 * 많이들 헷갈리는 개념인데 스코프는 함수를 호출할 때가 아니라 선언할 때 생깁니다.
 * 호출이 아니라 선언요!
 * 정적 스코프라고도 불립니다.
 * 다음 코드에서 console이 어떻게 찍힐 지 예상해보세요.
 *
 * var name = 'zero';
 * function log() {
 *     console.log(name);
 * }
 *
 * function wrapper() {
 *     name = 'nero'; // 전역변수 name의 값을 zero에서 nero로 바꿈.
 *     log();
 * }
 * wrapper();
 *
 *
 * => 쉽죠? nero입니다. log를 호출하기 전에 name을 'nero'로 바꿨거든요. 그럼 다음은요? 문제를 살짝 바꿨습니다.
 *
 * var name = 'zero';
 * function log() {
 *     console.log(name); // 전역변수 name을 가리킴.
 * }
 *
 * function wrapper() {
 *     var name = 'nero'; // 이 name은 지역변수임.
 *     log(); // log()를 호출할 때 log 내의 name은 이 wrapper의 지역변수가 아니라 전역 변수의 name을 가리키므로 zero가 호출됨.
 * }
 * wrapper();
 *
 * 똑같이 nero 아니냐고요? 땡! zero입니다.
 * 스코프는 함수를 선언할 때 생긴다고 했죠?
 * log 안의 name은 wrapper 안의 지역변수 name이 아니라, 전역변수 name을 가리키고 있는 겁니다.
 * 이런 것을 lexical scoping이라고 합니다. 한글로는 어떻게 번역해야 할지 모르겠네요. 직역하면 어휘적 범위인데 좀 어색하죠? 정적 스코프가 더 나아 보이네요.
 *
 * lexical scoping이 좀 이해하기 힘들기 때문에 다시 설명드리겠습니다.
 * 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조하게 됩니다.
 * 위의 예시에서는 log 함수 안의 name 변수는 선언 시 가장 가까운 전역변수 name을 참조하게 됩니다.
 * 그래서 wrapper 안에서 log를 호출해도 지역변수 name='nero'를 참조하는 게 아니라 그대로 전역변수 name의 값인 zero가 나오는 겁니다.
 *
 * 무슨 짓을 해도 log 함수가 한 번 선언된 이상, 전역변수를 가리키게 되어있는 name 변수가 다른 걸 가리키게 할 수 없습니다.
 * 유일한 방법은 아까처럼 전역변수를 다른 값으로 바꾸는 겁니다.
 * 다음 시간에 실행 컨텍스트에 대해서 배울텐데 그 때 정확한 원리를 설명드리겠습니다. *
 *
 *
 */


/**
 * javascript this에 대한 이해. - function context에서...
 * 참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * 출처 : https://github.com/FEDevelopers/tech.description/wiki/자바스크립트에서-사용되는-this에-대한-설명-2
 * 출처2 : http://webframeworks.kr/tutorials/translate/explanation-of-this-in-javascript-1/
 *
 * function f1() { return this; } // 이 때 this는 global을 가리킨다.
 * f1() === global; //  true.
 * function f2() {
 *     'use strict';
 *     return this;
 * }
 * f2() === undefined; // true.
 * 이 때 f2()가 undefined인 이유는 f2()로 인해 나오는 this가 가리킬 대상이 없기 때문이다. 즉, object의 method나 property로 호출된 것이 아니라 함수 그 자체로 direct하게 호출된 것이기 때문에 undefined가 된다.
 * 만약 window.f2(); 등으로 호출 되었다면 Window를 가리키게 되었을 것이다.
 *
 * Arrow Function
 *
 * function Person() {
 *   // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
 *   this.age = 0;
 *   setInterval(function growUp() {this.age++;}, 1000);
 * }
 * // 비엄격 모드에서, growUp() 함수는 `this`를 전역 객체로 정의하고, 이는 Person() 생성자에 정의된 `this`와 다름.
 *
 */