// while (10) { // 10은 true이므로 계속 돈다.
//
// }

let i  = 10;
while(i) { // 10번 도는 것과 같은 의미.
    i--;
}

for(let i = 10 ; i > 0 ; i--) { // 기본적인 for문도 사용가능하다. var 사용시... 대참사... scope가 function scope만!!

}

let array = [1,2,3,4,5];
for (let idx in array) { // for - in 은 idx가 반환됨
    console.log(array[idx]);
}

for (let element of array) { // for - of 는 element가 반환됨.
    console.log(element);
}

/** for - in을 이용해 객체에 대해서도 가능하다 */

let obj1  = {name:"권현우", location:"서울", hobby:"boardgame", doSomething:function(){console.log("객체의 함수 실행")}};
// obj1.name; obj1.location; obj1.hobby; obj1.doSomething();

for (let property in obj1) {
    console.log(property);
    if(typeof obj1[property] != 'function') console.log(obj1[property]);
    else obj1[property]();
}
// 가능한 이유? javascript에서 객체가 기본적으로 Map(Key - Value)의 형태이기 때문에...

// for (let obj of obj1) {
//     console.log(obj);
// }
// for of를 이용해서는 객체를 돌 수 없다 !!
// 객체가 iterable한 것은 아니므로 for - of는 불가능... 배열, Map, Set 등만 가능..
// 객체가 Map의 형태인 것은 맞지만!! iterable 한 것은 아니다!!