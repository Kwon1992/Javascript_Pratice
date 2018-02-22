let person1 = {name: "권현우"};
let person2 = {name: "권현우"};

//... 번거로움

function birth(name) {
    return {name: name};
}

let person3 = birth("권현우");
let person4 = birth("권현우");

// 함수 이용해서 생성..

function Person(name) {
    this.name = name;
}

let person5 = new Person("권현우");
let person6 = Object.create(person1); // - prototype을 이용해서 생성


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
// { name: '권현우' } 출력

console.log(person5);
// Person { name: '권현우' } 출력

console.log(person6);
// {} 출력

/******************************************************************************/

console.log("***************************************");


// function A(){};
// new A();          ==> A라는 함수를 모태로 객체를 생성.
// prototype chaining.. ==> 자신의 prototype이 가진 attribute들에 대해 거슬러 올라가면서 있는지 check한다.


var o = {
    a: 2,
    m: function (b) {
        return this.a + 1;
    },
};

var o2 = {
    m: function () {
        return this.a + 3;
    }
}


console.log(o.m()); // 3
// o.m을 호출하면 'this' 는 o를 가리킨다.

var p = Object.create(o);
// p 는 프로토타입을 o로 가지는 오브젝트이다.

p.a = 12; // p 에 'a'라는 새로운 속성을 만들었다.
console.log(p.m()); // 13


p.__proto__ = o2;
console.log(p.m());
// p.m이 호출 될 때 'this' 는 'p'를 가리킨다.
// 따라서 o의 함수 m을 상속 받으며,
// 'this.a'는 p.a를 나타내며 p의 개인 속성 'a'가 된다.


