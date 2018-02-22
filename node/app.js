const util = require("./util.js"); // 동기방식으로 읽은 뒤 반환.
// require을 통해 util.js의 exports에 해당하는 것을 반환.
// 1)  결국 이 상황에서는 util자체가 sum함수가 된다.


/**
 *  console.log(sum(1, 2)); // error
 *  console.log(util.sum(1,2)); //error
 */

// console.log(util(1, 2));

console.log(util.sum(1, 2));
console.log(util.subtract(10, 4));

/***************************************************/

let object = require("./object.json");
object.name;
object.job;
object.like;
console.log(object);

let fs = require("fs");
let notation = fs.readFileSync("./object.json", "utf-8");
console.log(notation); // json 째로 읽어옴
let parse = JSON.parse(notation); // json을 parsing해줌
console.log(parse); 

// 알아서 json을 require하면 object로 만들어준다.