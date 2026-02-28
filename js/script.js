// const clients = ["Mango", "Ajax", "Poly", "Kivi"];
// console.log(clients.includes("Poly"));
// let numbers = [];
// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// let number = [1, 2, 3, 4];
// numbers.pop(1);
// console.log(numbers);

// numbers.pop(2);
// console.log(numbers);

// numbers.pop(3);
// console.log(numbers);

// numbers.pop(4);
// console.log(numbers);

// function multiply() {
//   console.log(multiply);
// }
// multiply();

// let a = 5;
// let b = "5";
// console.log(a == b);

// console.log(5 > 4); //true

// console.log(10 >= "7"); //true

// console.log("2" > "12"); // true - Unicode table

// console.log("0".charCodeAt(0));
// console.log("2".charCodeAt(0));

// console.log("2" < "12"); //false

// console.log("4" == 4); //true

// console.log("6" === 6); // false

// console.log("false" === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log("0" == false); // 0 == 0 -> true

/*
    false: 0, "", null, undefind
    true: будь-яке число, крім 0, будь-яка строка, яка не є пустою
*/

// console.log("0" === false); //false

// console.log("Papaya" < "papaya"); //true

// console.log("Papaya" === "papaya"); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false
// let r = 5;
// console.log(false || r || 55);

// let quantity = prompt("Quantity");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// const shouldRenew = confirm("Продовжити підписку?");
// console.log(shouldRenew);

// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// let elFloat = "12.25px";
// const resultFloat = Number.parseFloat(elFloat);

// console.log(result);
// console.log(typeof result);
// console.log(resultFloat);
// console.log(typeof resultFloat);

// let salary = 123.5555555;
// salary = salary.toFixed(2);
// salary = Number(salary.toFixed(2));

// salary = Number(salary);
// console.log("salary:", salary);
// console.log("salary:", Number(salary.toFixed(2)));

// let quantityValue = "30";
// let value = "Цей рядок не можливо перевсти в число";
// console.log(Number(quantityValue));
// console.log(Number(value));

// const base = 5;
// const power = 0.5;

// const result = Math.pow(base, power);
// console.log(Math.PI);

// console.log(Date.toString);

// let baseValue = prompt("value");
// baseValue = Number(baseValue);

// let powerValue = prompt("value");
// powerValue = Number(powerValue);

// const result = baseValue ** powerValue;
// console.log(result);

// console.log(Math.random().toFixed(1));
// let max = 1000;
// let min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const resultV = Math.round(Math.random() * (10 - 5 + 1) + 10);
// console.log(resultV);

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInt);

const colors = ["tomato", "black", "blue", "red"];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;
