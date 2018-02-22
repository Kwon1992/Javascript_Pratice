function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = sum; // 1) 외부에 sum이라는 함수를 전달하겠다.

// 2) 그렇다면 여러개의 함수가 있는 경우에는...??

module.exports.sum = sum;
module.exports.subtract = subtract;

// 3) module은 생략 가능하다.

// module.exports가 존재하고,
// exports는 module.exports를 가리키는 하나의 포인터라 생각하면 됨.
// 따라서 module.exports 자체를 바꾸고 싶을 때에는
// exports = XXX; 가 아니라 module.exports = XXX; 로 해주어야함.

exports.sum = sum;
exports.subtract = subtract;
