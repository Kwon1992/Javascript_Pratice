// 아무것도 하지 않더라도 -> 전역 객체가 이미 존재하는 상태!! .... (( console.log() 등이 사용가능 한 이유 ))
// Node.js 는 전역객체로 global, process가 존재 (global -> browser에서의 window. process -> browser에서의 document)

// var - code block scope 무시.. 함수로만 scope 결정됨.

var test1 = 10;

function working() {
    test1; // global variable이므로 문제 X

    if(true) {
        var test2= 2;
    }
    test2; // code block scope 무시하고 test2를 참조할 수 있음..
}

function working2() {
    var test1 = 2; // global보다 local이 우선되므로 딱히 이상하지는 않음...
    /*
     *
     *
        do Something...
     *
     *
     */
    var test1 = 10000; // test1이 위에서 선언되었는데도 그냥 덮어씌워버림. (error가 아님)
}


// var을 대체하기 위해서 let이 생김!! (ECMA6부터 사용가능)
// let은 scope가 code block으로 잡힘.
// const는 상수

let test_let1 = 10;
const test_const = 4;

function let_working() {
    // test_const = 5; (불가능_ 상수이므로)

    test_let1;

    if(true) {
        let test_let2 = 2;
    }
    test_let2 = 1; // implicit하게 declaration하는 것일 뿐 var과 차이를 생각해야함
}



