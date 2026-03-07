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

// const colors = ["tomato", "black", "blue", "red"];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// const userAnsver = prompt("Name JS?");
// if (userAnsver === "ECMAScriptECMAScriptECMAScript") {
//   alert("Good");
// } else {
//   alert("Nooooooooooo");
// }
// console.log(userAnsver);
// userAnsver === "ECMAScript" ? alert("Good") : alert("Noooo");

// let msg = userAnsver === "ECMAScript" ? "Goood" : "Nooooo";
// alert(msg);

// const hours = 14;
// const minutes = 0;
// let timeStr = "";
// if (minutes === 0) {
//   timeStr = `${hours} г. 00 хв.`;
// }
// if (minutes <= 9) {
//   timeStr = `${hours} г. 0${minutes} хв.`;
// } else {
//   timeStr = `${hours} г. ${minutes} хв.`;
// }

// console.log(timeStr);

// const a = 184;
// const b = 100;
// let msg = Number(Math.max(a, b));
// if (a >= 100 && b >= 100) {
//   if (a > b) {
//     console.log(a);
//   } else console.log(`${b + 512}`);
//   console.log(msg);
// }

// let result = a > 100 && b > 100 ? (a > b ? a : b) : b + 512;
// console.log(result);

// const daysUn = 2;

// switch (daysUn) {
//   case 0: {
//     console.log("Сьогодні");
//     break;
//   }
//   case 1: {
//     console.log("Завтра");
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }
//   default: {
//     console.log("Дата у майбутньому");
//   }
// }

// const max = 100;
// const min = 1;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

// const max = 100;
// const min = 10;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 5 === 0) console.log(i);
// }

// const max = 100;
// const min = 10;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

// const maxBr = 100;
// const minBr = 11;
// for (let i = minBr; i <= maxBr; i += 1) {
//   if (i % 5 === 0) break;
//   console.log(i);
// }

// const max = 100000;
// const min = 1;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   console.log(i + 1);
//   total += i;
// }
// console.log(total ** total);

// const login = prompt("ВВедіть логін")?.trim();
// console.log(typeof login);
// console.log(login);

// if (login === "Admin") {
//   const password = prompt("Password enter");
//   if (password === "I admin") {
//     console.log("Good");
//   } else console.log("No password");
//   console.log("Запитати пароль");
// } else if (!login) // (login === "" || login === undefined)
// {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

const starts = 1;
let price;

if (starts === 1) {
  price = 20;
} else if (starts === 2) {
  price = 40;
} else if (starts === 3) {
  price = 60;
} else if (starts === 4) {
  price = 80;
} else if (starts === 5) {
  price = 100;
} else {
  console.log("Такої кількості зірок немає");
}
console.log("else if", price);

switch (starts) {
  case 1: {
    price = 20;
    break;
  }
  case 2: {
    price = 40;
    break;
  }
  case 3: {
    price = 60;
    break;
  }
  case 4: {
    price = 80;
    break;
  }
  case 5: {
    price = 100;
    break;
  }
  default:
    console.log("Такої кількості зірок немає");
}
console.log("Switch", price);

if (starts === 1 || starts === 2) {
  price = 20;
} else if (starts === 3 || starts === 4) {
  price = 40;
} else {
  console.log("Такої кількості зірок немає");
}
console.log("else is ||", price);

switch (starts) {
  case 1:
  case 2: {
    price = 20;
    break;
  }
  case 3:
  case 4: {
    price = 60;
    break;
  }
  case 5: {
    price = 100;
    break;
  }
  default:
    console.log("Такої кількості зірок немає");
}
console.log("switch||", price);

const option = 4;
let message = "";
switch (option) {
  case 1: {
    message = "Ви зможете забрати товар завтра з 12.00";
    break;
  }
  case 2: {
    message = "Ви зможете замовити доставку товару завтра з 08.00";
    break;
  }
  case 3: {
    message = "Посилка буде відправлена сьогодні";
    break;
  }
  default: {
    message = "З вами зв'яжеться менеджер-консультант";
  }
}
console.log("switch", message);
