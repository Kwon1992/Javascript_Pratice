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


/**
 *
 * @param param1{string, number}
 * @returns {string, number}
 *
 */
function working(param1) {
    return param1
}

working("2");
working(1);
working(true);




