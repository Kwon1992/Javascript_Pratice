// Javascript -> 동적 type... 매우 유연함을 아래의 예제를 통해서 알 수 있다!!
// Microsoft에서 type checking을 할 수 있도록 javascript의 superset인 typescript도 존재 (Angular에서 공식언어로 채택)

let a = 10;
console.log(typeof a);

a = 10.1;
console.log(typeof a);

a = true;
console.log(typeof a);

a = '안녕';
console.log(typeof a);

a = {}; // javascript에서 객체는 { } 로 표시함!!
console.log(typeof a);

a = function () {
    console.log("함수 a 실행");
}

console.log(typeof a);

a();

console.log(typeof null);
console.log(typeof b); // Undefined!!

// type >> number / boolean / string / obejct / undefined / function
// number >> 정수, 소수, NaN(Not a Number) 모두 number라고 인식.



let array = ['a', 1, true , function(){}, {}];
array.push('1');
array[3]();
// 배열에도 type이 정해져있지 않으므로 하나의 배열에 여러 type을 담을 수 있다 (함수도 가능! 왜냐하면 javascript는 함수도 자료형)

/**
 *
 * @param param1{string, number}
 * @returns {string, number}
 */
function working(param1) {
    return param1
}
// javscript에서 function에 parameter를 넘기도록 정의를 했더라도 해당 param을 넣어도 , 안 넣어도 문제가 되지 않고,\
// 추가적으로 어떤 type의 value가 들어올 지 알 수가 없다.
// 따라서, document화 해서 명시함으로써 어떤 type의 param이 들어갈지 지정할 수 있다.
// 마찬가지로 return type도 명시가능하다.
// 단, 이것은 강제성은 띄지 않는다. 즉 error가 발생하는 것은 아니다.

working("2");
working(1);
working(true);




