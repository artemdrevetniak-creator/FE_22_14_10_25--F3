// lesson js

// 1
const x = 5;
const sum = x + 2;
console.log(typeof sum);

let y = 5;
y = y + 5;
console.log(typeof y);

// 2
const number = 0.6;
const string = '1';
let boolean = true;
const nul = null;
let und;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof nul);
console.log(typeof und);

const sumNumString = string + number + string;
console.log(sum);

// 3
const userText = prompt('Введіть свій вік');
console.log(userText, typeof userText);
const userConfirm = confirm('Ви дійсно хочете відмінити дію?');
console.log(userConfirm, typeof userConfirm);
