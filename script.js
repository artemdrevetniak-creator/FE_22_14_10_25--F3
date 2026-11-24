// lesson js
let word = 'Hello';
//          01234
const secondWord = 'world';

// властивість length для знаходження довжини рядка
console.log(word.length);

// знаходження букви або символу за індексом
console.log(word[4]);
console.log(word.at(-2));
console.log(word[word.length - 1]);

// Трансформування тексту
console.log(word.toUpperCase());
console.log(word.toLowerCase());

// Конкатенація рядків
console.log(word + ' ' + secondWord);
// Шаблонні рядки
word += ` ${secondWord}!`;
console.log(word);

// Конкатенація рядка з числами
console.log('Price: ' + 100 + 50);
console.log('Price: ' + (100 + 50));
console.log(1 + 5 + '3');

let text = ' Learn JavaScript, I love JavaScript ';

// Прибирання пустих пробілів з тексту
text = text.trim();
console.log(`'${text}'`);

// Перевірка чи текст починається(startsWith) або закінчується(endsWith), або має(includes) певний рядок. Вертає true/false
console.log(text.startsWith('Learn'));
console.log(text.endsWith('Script'));
console.log(text.includes('rn'));

// Знаходження індексу букви/символу в тексті
console.log(text.indexOf('a', 3));
console.log(text.lastIndexOf('a'));

// Заміна одного рядка на інший
console.log(text.replace('JavaScript', 'JS'));
console.log(text.replaceAll('JavaScript', 'JS'));

const shortWord = 'ha';
// Повторення рядка декілька разів підряд
console.log(shortWord.repeat(3));

const num = 7;
// Приведення числа в рядок. Визначення максимальної довжини рядка та додавання певних значень на початок або в кінець, якщо є вільне місце.
console.log(String(num).padStart(3, '0'));
console.log(String(num).padEnd(3, '0'));

const textToSplit =
	'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ab praesentium assumenda. Labore, cum. Eius, assumenda. Dolorem nulla doloremque recusandae.';

// Розбиття тексту на частини за певними символами - сепаратор.
console.log(textToSplit.split('. '));
