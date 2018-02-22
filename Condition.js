let a; // false, null, undefined, 0, '', NaN 은 모두 false로 처리함.

//***********************************************************
a = false;

if (a) {
    console.log(true);
} else {
    console.log(false);
}
//***********************************************************

a = null;

if (a) {
    console.log(true);
} else {
    console.log(false);
}

//***********************************************************

let b; // undefined
a = b;

if (a) {
    console.log(true);
} else {
    console.log(false);
}

//***********************************************************

a = '';

if (a) {
    console.log(true);
} else {
    console.log(false);
}

//***********************************************************

a = 0;

if (a) {
    console.log(true);
} else {
    console.log(false);
}

//***********************************************************

a = NaN;

if (a) {
    console.log(true);
} else {
    console.log(false);
}

//***********************************************************
//***********************************************************
//***********************************************************

a = '1';

if (a) {
    console.log(true);
} else {
    console.log(false);
}


function work() {
    return;
}

let result = work();
console.log(result);
if(!result) result = 10;
console.log(result);


//***********************************************************
// quick curcuit에 의해서 가능한 javascript에서의 동작

a = null;
b = NaN;
result = a || b;
console.log(result);
// a나 b 중 true인 값이 result에 저장됨.
// ( a가 true라면 a값이 result, a가 false이라면 b의 값 )

a = 2;
b = undefined
result = a && b;
console.log(result);
// a가 거짓이면 a값이 result2에, a가 참이면 b의 값이 result2에 대입)


// boolean이 아닌 값을 ! 연산을 이용해 boolean으로 casting 가능.
a = 4;
result = !a; // 4는 true이므로 !a로 false 반환.
console.log(result);

result = !!a;  // 반전의 반전 ( !a가 false이므로 !!a는 true가 됨 )
console.log(result);


// Example
// let id = req.body.id || req.query.id;
// if(!id) req.send(404);
//
// id를 받았는데 만약 두 군데 모두 아이디가 없다면 404 error 보낸다.

