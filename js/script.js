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

// const starts = 1;
// let price;

// if (starts === 1) {
//   price = 20;
// } else if (starts === 2) {
//   price = 40;
// } else if (starts === 3) {
//   price = 60;
// } else if (starts === 4) {
//   price = 80;
// } else if (starts === 5) {
//   price = 100;
// } else {
//   console.log("Такої кількості зірок немає");
// }
// console.log("else if", price);

// switch (starts) {
//   case 1: {
//     price = 20;
//     break;
//   }
//   case 2: {
//     price = 40;
//     break;
//   }
//   case 3: {
//     price = 60;
//     break;
//   }
//   case 4: {
//     price = 80;
//     break;
//   }
//   case 5: {
//     price = 100;
//     break;
//   }
//   default:
//     console.log("Такої кількості зірок немає");
// }
// console.log("Switch", price);

// if (starts === 1 || starts === 2) {
//   price = 20;
// } else if (starts === 3 || starts === 4) {
//   price = 40;
// } else {
//   console.log("Такої кількості зірок немає");
// }
// console.log("else is ||", price);

// switch (starts) {
//   case 1:
//   case 2: {
//     price = 20;
//     break;
//   }
//   case 3:
//   case 4: {
//     price = 60;
//     break;
//   }
//   case 5: {
//     price = 100;
//     break;
//   }
//   default:
//     console.log("Такої кількості зірок немає");
// }
// console.log("switch||", price);

// const option = 4;
// let message = "";
// switch (option) {
//   case 1: {
//     message = "Ви зможете забрати товар завтра з 12.00";
//     break;
//   }
//   case 2: {
//     message = "Ви зможете замовити доставку товару завтра з 08.00";
//     break;
//   }
//   case 3: {
//     message = "Посилка буде відправлена сьогодні";
//     break;
//   }
//   default: {
//     message = "З вами зв'яжеться менеджер-консультант";
//   }
// }
// console.log("switch", message);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.indexOf(10));
// console.log(arr.includes(85));
// console.log(arr.includes(8));
// console.log(arr.join("  "));

// const arrConcat = [1, 2, 3, 4, [5, 6], 7, [8, 9]];
// const arrCon = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arrConcat.concat(arrCon));

// const genre = ["Jazz", "Blues"];
// console.log(genre);

// genre.push("Rok-n-Rol");
// console.log(genre[0]);
// console.log(genre.length - 1);
// console.log(genre[genre.length - 1]);

// console.log(genre.pop());

// console.log(genre.shift());
// console.log(genre.splice(0, 1)[0]);
// // genre.unshift("Country", "Reggat");
// console.log(genre);
// genre.splice(0, 0, "Country", "Reggat");
// console.log(genre);
// const values = "8 11";
// const valuesArr = values.split(" ");
// const a = Number(valuesArr[0]);
// const b = Number(valuesArr[1]);
// const square = a * b;
// console.log(a, b);
// console.log(square);

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }
// for (const i in fruits) {
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
//   // console.log(fruit);
// }
// const string = "Welcom to the future";
// const stringArr = string.split(" ");
// console.log(stringArr);
// stringArr.shift();
// stringArr.pop();
// const newArr = stringArr.join(" ");
// console.log("New Arr:", newArr);

// const string = "Welcom to the future";
// const reversedStr = string.split("").reverse().join("");
// console.log(reversedStr);

// const string =
//   "Що стосується можливостей зберігання та обробки інформації, наше рішення для корпоративного банкінгу принципово відрізняється від існуючих програмних продуктів на українському ринку. 4K-Bank може працювати цілодобово, 365 днів на рік, без зупинок на початок та кінець робочого дня чи технічних зупинок, таких як архівування даних.";
// let newString = [];
// const stringArr = string.split("");

// // console.log(stringArr);

// for (let i = stringArr.length - 1; i >= 0; i -= 1) {
//   console.log(stringArr[i]);
//   newString.push(stringArr[i]);
// }
// newString = newString.join("");

// console.log(newString);

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// for (let i = 0; i < langs.length - 1; i += 1) {
//   console.log(`Element: ${langs[i]} | i:${i}`);
//   for (let j = i + 1; j < langs.length; j += 1) {
//     console.log(`El: ${langs[j]} | j:${j}`);
//     if (langs[i][0] > langs[j][0]) {
//       let temp = langs[i];
//       langs[i] = langs[j];
//       langs[j] = temp;
//       console.log("TEMP", temp);
//     }
//   }
//   console.log("\n");
// }

// console.log("FOR:", langs);
// console.log("SORT:", langs.sort());

// function calcBMI(weight, height) {
//   weight = convertToDecimal(weight);
//   height = convertToDecimal(height);

// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// const result = weight / (height * height);
// console.log(weight);
// console.log(height);
// console.log(result.toFixed(1));
// return getFixedNumber(result);
// }
// function convertToDecimal(str) {
//   return Number(str.replace(",", "."));
// }

// function getFixedNumber(num) {
//   return Math.round(num * 10) / 10;
//   // return Number(num.toFixed(1));
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// const bmi2 = calcBMI("68,3", "1.33");
// console.log(bmi2);

// const bmi3 = calcBMI("98,3", "1.79");
// console.log(bmi3);

// const bmi4 = calcBMI("99,3", "1.85");
// console.log(bmi4);

// const bmi5 = calcBMI("81,3", "1.55");
// console.log(bmi5);

// const bmi6 = calcBMI("80,3", "1.95");
// console.log(bmi6);

// const bmi7 = calcBMI("88,3", "1.7");
// console.log(bmi7);

// function min(a, b) {
//   // return Math.min(a, b);
//   return a < b ? a : b;
// }

// console.log(min(2, -5));
// console.log(min(-6, -5));
// console.log(min(12, -75));
// console.log(min(2, 0));
// console.log(min(24, -5));
// console.log(min(2, 5));
// console.log(min(-72, -15));

// function findLargestNumbers(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// function findMinNumbers(numbers) {
//   let min = numbers[0];
//   for (const num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// console.log(findLargestNumbers([2, 5, 77, 5, 99, 64, 82, 5, 1, 0, 55]));

// console.log(findLargestNumbers([21, 45, 7, 5, 29, 6, 82, 51, 117, 10, 25]));

// console.log(findMinNumbers([2, 5, 77, 5, 99, 64, 82, 5, 1, 0, 55]));

// console.log(findMinNumbers([21, 45, 7, 5, 29, 6, 82, 51, 117, 10, 25]));

// function calAverage() {
//   console.log(arguments);

//   const amount = arguments.length;
//   let sum = 0;
//   for (const num of arguments) {
//     sum += num;
//   }
//   const averageValue = (sum / amount).toFixed(2);
//   return averageValue;
// }

// console.log(calAverage(1, 2, 3, 4, 5, 6, 8, 79, 5));
// console.log(calAverage(1, 2, 3, 4, 5, 46, 8, 79, 5));
// console.log(calAverage(11, 12, 73, 4, 5, 6, 8, 79, 5));
// console.log(calAverage(1, 22, 3, 4, 215, 6, 8, 79, 5));
// console.log(calAverage(1, 22, 3, 4, 52, 6, 84, 79, 5));
// console.log(calAverage(1, 2, 3, 4, 5, 6, 8, 79, 5));
// console.log(calAverage(14, 21, 3, 4, 5, 6, 8, 79, 5));
// console.log(calAverage(1, 2, 3, 4, 55, 745, 6, 8, 79, 5));

//* Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

//* addCourse(name) - додає курс до кінця колекції
//* removeCourse(name) - видаляє курс із колекції
//* updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log("Ви вже маєте такий курс");
//     return;
//   }
//   courses.push(name);
//   console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// }

//   if (courses.includes(name))
//     console.log("addCourse - Ви вже маєте такий курс");
//   else courses.push(name);
// }

// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index === -1) {
//     console.log("removeCourse - Курс із таким ім'ям не знайдено");
//   } else courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     console.log("updateCourse - Курс із таким ім'ям не знайдено");
//   } else if (courses.includes(newName)) {
//     console.log("Ви вже маєте такий курс");
//   } else {
//     courses[index] = newName;
//   }
// }

// addCourse("Express");
// addCourse("HTML");
// addCourse("SQL");
// addCourse("JS");
// addCourse("NodeJS");
// addCourse("CSS"); // 'Ви вже маєте такий курс'

// removeCourse("JavaScript");
// removeCourse("HTML");
// removeCourse("SQL");
// removeCourse("JavaScript");
// removeCourse("JS");
// removeCourse("PostgreSQL");
// removeCourse("NodeJS");
// removeCourse("CSS");

// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

// updateCourse("HTML", "HTML5");
// console.log("updateCourse", courses); // ['Next.js', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// const calculateTotalPrice = function (items) {
//   // console.log(items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3, 4, 5]));
// console.log(calculateTotalPrice([22, 55, 66, 77, 88]));
// console.log(calculateTotalPrice([1, 21, 31, 14, 25]));
// console.log(calculateTotalPrice([17, 18, 19, 20, 21]));
// console.log(calculateTotalPrice([98, 65, 32, 45, 67]));
// console.log(calculateTotalPrice([18, 25, 36, 48, 61, 73, 84, 95, 10]));
// console.log(calculateTotalPrice([1, 4, 9, 17, 26, 38, 22, 23, 24, 25, 26]));

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// logItems([
//   "кришка",
//   "ложка",
//   "вилка",
//   "тарілка",
//   "сковорідка",
//   "каструля",
//   "чайник",
//   "склянка",
//   "гриль",
// ]);

// const logins = ["Ma4ngo", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const loginToFind = "a27jax";
// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений`
//   : `Користувач ${loginToFind} не знайдений`;
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
// let message = `Користувач ${loginToFind} не знайдений`;
// console.log(logins);
// for (const login of allLogins) {
//   if (login === loginToFind) {
//     return `Користувач ${loginToFind} знайдений`;
//   }
// }
// return `Користувач ${loginToFind} не знайдений`;
//   return allLogins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайдений`
//     : `Користувач ${loginToFind} не знайдений`;
// };

// findLogin(logins);
// console.log(findLogin(logins, "Ma4ngo"));
// console.log(findLogin(logins, "Lux"));
// console.log(findLogin(logins, "Poly"));
// console.log(findLogin(logins, "Aj2ax"));
// console.log(findLogin(logins, "Jay"));
// console.log(findLogin(logins, "Kong"));
// console.log(findLogin(logins, "a27jax"));

// const numbers = [177, 45, 8, 92, 12, 4, 15, 27, 30];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// const findSmallestNumber = function findSmallestNumber(numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// const findBigNumber = function findBigNumber(numbers) {
//   let biggestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   }
//   return biggestNumber;
// };

// console.log(
//   "findSmallestNumber",
//   findSmallestNumber([177, 45, 8, 92, 12, 4, 15, 27, 30]),
// );
// console.log(
//   "findSmallestNumber",
//   findSmallestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]),
// );
// console.log(
//   "findSmallestNumber",
//   findSmallestNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9]),
// );
// console.log("findSmallestNumber", findSmallestNumber([90, 50, 80, 70, 0]));
// console.log("findSmallestNumber", findSmallestNumber([90, 50, 80, 70, 0]));
// console.log(
//   "findSmallestNumber",
//   findSmallestNumber([3, 5, 55, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
// );
// console.log(
//   "findSmallestNumber",
//   findSmallestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]),
// );
// console.log(
//   "findBigNumber",
//   findBigNumber([177, 45, 8, 92, 12, 4, 15, 27, 30]),
// );
// console.log(
//   "findBigNumber",
//   findBigNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9]),
// );
// console.log(
//   "findBigNumber",
//   findBigNumber([3, 5, 55, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
// );
// console.log(
//   "findBigNumber",
//   findBigNumber([177, 45, 8, 92, 12, 4, 15, 27, 30]),
// );
// console.log("findBigNumber", findBigNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(
//   "findBigNumber",
//   findBigNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9]),
// );
// console.log("findBigNumber", findBigNumber([90, 50, 80, 70, 0]));

// console.log(
//   "findBigNumber",
//   findBigNumber([3, 5, 55, 99, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
// );

// const string = "Hello world";
// const letters = string.split("");
// let invertedString = "";
// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// const changeCase = function changeCase(string) {
//   const letters = string.split("");
//   let invertedString = "";
//   console.log("🚀 ~ changeCase ~ invertedString:", invertedString)
//   console.log("🚀 ~ changeCase ~ invertedString:", invertedString);

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toUpperCase();

//     invertedString += isInLowerCase
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
//   }

//   // console.log(letters);
//   return invertedString;
// };

// console.log(changeCase("Hello world"));
// console.log(changeCase("I Am a student"));
// console.log(changeCase("WelcOme to the future"));
// console.log(changeCase("My naMe is John"));
// console.log(changeCase("Good morning"));
// console.log(changeCase("Zoo Is closed"));
// console.log(changeCase("Open the door"));
// console.log(changeCase("First of all, you need to learn JavaScript"));
// console.log(changeCase("Don't forget to practice"));

//!======================================

// Object;

//* Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

//1. додає поле mood зі значенням 'happy'
//2. замінює значення hobby на 'skydiving'
//3. замінює значення premium на false
//4. виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// // user["mood"] = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log("🚀 ~ user:", user);

// for (const key in user) {
//   const keys = user[key];
//   // console.log("🚀 ~ keys:", keys);
//   console.log(`${key}: ${keys}`);
// }

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log("🚀 ~ Object.keys(user):", Object.keys(user));
// //* Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const salariesArr = Object.values(salaries);
// let sum = 0;
// const key = Object.keys(salaries);
// for (const salarie of salariesArr) {
//   sum += salarie;
// }
// console.log("🚀 ~ key:", key);
// console.log("🚀 ~ sum:", sum);

//* Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return `Камінь ${stoneName} не знайдено`;
// }

// const total = calcTotalPrice(stones, "Сапфір");
// console.log("🚀 ~ total:", total);

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

// const TRANSACTION = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/* type, id. amount*/
// const account = {
//   balance: 0,
//   transactions: [],

//   createTransacton(amount, type) {
//     return {
//       amount,
//       type,
//       //   id: Date.now() + Math.round(Math.random() * 1000),
//       id: this.transactions.length + 1,
//     };
//   },

// deposit(amount) {
//   const transaction = this.createTransacton(amount, TRANSACTION.DEPOSIT);
//   this.transactions.push(transaction);
//   this.balance += amount;
// },

// withdraw(amount) {
//   if (amount > this.balance) {
//     console.error("Недостатньо коштів на рахунку");
//     return;
//   }
//   this.balance -= amount;
//   const transction = this.createTransacton(amount, TRANSACTION.WITHDRAW);
//   this.transactions.push(transction);
// },

// getBalance() {
//   return this.balance;
// },

// getTransactoinDetails(id) {
//   for (const transaction of this.transactions) {
//     if (id === transaction.id) {
//       return transaction;
//     }
//   }
//   return `Транзакція з ID ${id} не знайдена`;
// },

// getTransactionTotal(type) {
//   let total = 0;

//   for (const transaction of this.transactions) {
//     if (type === transaction.type) {
//       total += transaction.amount;
//     }
//   }
//   return total;
// },
//   balanceOfFunds(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === TRANSACTION.DEPOSIT) {
//         total += transaction.amount;
//       } else if (transaction.type === TRANSACTION.WITHDRAW) {
//         total -= transaction.amount;
//       }
//     }
//     return `Загальний баланс: ${total}`;
//   },
// };

// console.log(account.createTransacton(1000, TRANSACTION.DEPOSIT));

// console.log(account.createTransacton(100, TRANSACTION.DEPOSIT));

// account.deposit(1000);
// account.deposit(2000);
// account.deposit(3000);
// account.deposit(500);
// account.deposit(100);
// account.deposit(5000);

// account.withdraw(1000);
// account.withdraw(500);
// account.withdraw(100);
// account.withdraw(5001);
// console.log(account.transaction);
// console.log(account.getBalance());
// console.log(account.getTransactoinDetails(1));
// console.log(account.getTransactoinDetails(2));
// console.log(account.getTransactoinDetails(3));
// console.log(account.getTransactoinDetails(4));
// console.log(account.getTransactoinDetails(5));
// console.log(account.getTransactoinDetails(6));
// console.log(account.getTransactoinDetails(7));
// console.log(account.getTransactoinDetails(8));
// console.log("Поповнення", account.getTransactionTotal(TRANSACTION.DEPOSIT));
// console.log("Зняття", account.getTransactionTotal(TRANSACTION.WITHDRAW));
// console.log(account.balanceOfFunds());

// const foo = () => "Mango";

// console.log(foo());

//!=================================================================

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// const apple = { name: "apple", price: 20, quantity: 5 };
// const lemon = { name: "lemon", price: 10, quantity: 10 };
// const orange = { name: "orange", price: 15, quantity: 7 };
// const grapes = { name: "grapes", price: 25, quantity: 3 };
// const peach = { name: "peach", price: 18, quantity: 8 };

// createProduct(apple, logProduct);
// createProduct(lemon, logProduct);
// createProduct(orange, logProduct);
// createProduct(grapes, logProduct);
// createProduct(peach, logProduct);

// function createProduct(obj, callback) {
//   const newProduct = { ...obj, id: Date.now() };
//   const logTotalPrice = {
//     ...obj,
//     totalPrice: newProduct.price * newProduct.quantity,
//     id: Date.now(),
//   };
//   // console.log("🚀 ~ createProduct ~ logTotalPrice.tostalPrice:", logTotalPrice);
//   // callback(newProduct);
//   callback(logTotalPrice);
// }

// logProduct(apple);
// logProduct(lemon);
// logProduct(orange);
// logProduct(grapes);
// logProduct(peach);
// logTotalPrice(apple);
// logTotalPrice(lemon);

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(price * quantity);
//   // return price * quantity;
// }

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;
const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {},
  deposit(amount, onSuccess, onError) {},
};
function handleSuccess(message) {
  console.log(message);
}
function handleError(message) {
  console.error(message);
}
