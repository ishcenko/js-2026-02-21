// const clients = ["Mango", "Ajax", "Poly", "Kivi"];
// console.log(clients.includes("Poly"));
let numbers = [];
numbers.push(1);
console.log(numbers);

numbers.push(2);
console.log(numbers);

numbers.push(3);
console.log(numbers);

numbers.push(4);
console.log(numbers);

let number = [1, 2, 3, 4];
numbers.pop(1);
console.log(numbers);

numbers.pop(2);
console.log(numbers);

numbers.pop(3);
console.log(numbers);

numbers.pop(4);
console.log(numbers);

function multiply() {
  console.log(multiply);
}
multiply();

let a = 5;
let b = "5";
console.log(a == b);

console.log(5 > 4); //true

console.log(10 >= "7"); //true

console.log("2" > "12"); // true - Unicode table

console.log("0".charCodeAt(0));
console.log("2".charCodeAt(0));

console.log("2" < "12"); //false

console.log("4" == 4); //true

console.log("6" === 6); // false

console.log("false" === false); //false

console.log(1 == true); //true

console.log(1 === true); //false

console.log("0" == false); // 0 == 0 -> true

/*
    false: 0, "", null, undefind
    true: будь-яке число, крім 0, будь-яка строка, яка не є пустою
*/

console.log("0" === false); //false

console.log("Papaya" < "papaya"); //true

console.log("Papaya" === "papaya"); //false

console.log(undefined == null); //true

console.log(undefined === null); //false
let r = 5;
console.log(false || r || 55);
