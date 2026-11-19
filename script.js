// lesson js

const x = 5;
const y = 10;
const z = '5';

// Додавання
console.log('x + y:', x + y);
// Віднімання
console.log('x - y:', x - y);
// Множення
console.log('x * y:', x * y);
// Ділення
console.log('x / y:', x / y);
// Залишок від ділення
console.log('x % y:', x % y);

let value = 5;
value -= 10;
value--;
console.log(value);

// Оперетори порівняння: > >= < <= == != === !==
console.log('x > y:', x > y);
console.log('x < y:', x < y);
console.log('x == z:', x == z);
console.log('x === z:', x === z);
console.log('x != z:', x != z);
console.log('x !== z:', x !== z);

console.log('1 == true:', 1 == true);
console.log('"1" == true:', '1' == true);
console.log('1 === true:', 1 === true);

const valueA = '5';
const valueB = '12abc';
const valueC = 'abc';

console.log('string to number:', Number(valueA));
console.log('NaN - Not a Number:', Number(valueB));

console.log('string to number with parseInt:', Number.parseInt('12abc'));
console.log(Number.parseInt('12abc156'));
console.log('string to number with parseInt:', Number.parseInt('12.46abc156'));
console.log(
	'string to number with parseFloat:',
	Number.parseFloat('12.46abc156'),
);

// Перевірка чи змінна check не є NaN
const check = Number(valueB);
console.log(Number.isNaN(check));

// Неточність додавань десяткових чисел
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log((0.1 * 10 + 0.2 * 10) / 10);

// Об'єкт Math
const A = 5.3;
const B = 5.7;

console.log('floor завжди зменшує до цілого:', Math.floor(B));
console.log('ceil завжди збільшує до цілого:', Math.ceil(A));
console.log('round округлює до цілого:', Math.round(B));

console.log('Math.min():', Math.min(20, 10, 5, 50));
console.log('Math.max():', Math.max(20, 10, 5, 50));

console.log('Приведення до ступеня:', Math.pow(4, 2));
console.log('Знаходження кореню числа:', Math.sqrt(16));

console.log('Рандомне число від 0 до 1:', Math.random());
console.log('Рандомне число від 1 до 10:', Math.random() * (10 - 1) + 1);

const r = Math.random() * 255;
const g = Math.random() * 255;
const b = Math.random() * 255;
