function funcBuilder() {
    let value = 10;

    // (""(value)=>{func = function() {
    //     console.log(value);
    // }}"")(value);
    //
    //
    // IIFE (즉시실행함수) :: 값을 숨기소 싶을 때 보통 사용
    //
    // "" ~ "" 가 실제 함수부분. value라는 변수를 받아서 func에 function을 만든다.
    // 이 떄 value 값은 뒤에 나오는 (value)의 값을 대입한다. 이 떄, value는 10이므로 10이 들어감...

    value = 20;
    return func;
}

funcBuilder()();
// funcBuilder가 끝났는데도 value가 살아있다? - Closure ((Javascript의 특징))
// ... 클로져에 의해서 value는 살아남음