//Методи примітивів

// string methods
let str = 'asd'
// length
// slice
// includes
// replace
// concat
// split

let str = "Привіт";

console.log( str.toUpperCase() ); // ПРИВІТ

//Довжина рядка
//alert( `Моє\n`.length ); // 4

//Ми також можемо перебрати рядок посимвольно, використовуючи for..of:

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char — спочатку "П", потім "р", потім "и" і так далі)
}


console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface
//Або якщо ми хочемо перенести в нижній регістр конкретний символ:

console.log( 'Interface'[0].toLowerCase() ); // 'і'

let str = 'My name';

console.log( str.indexOf('My') ); // 0, тому що було знайдено на початку

//includes, startsWith, endsWith
console.log( "Interface".startsWith("Inter") ); // true
console.log( "Interface".includes("ace") ); // true
console.log( "Interface".endsWith("face") ); // true


let str = "stringify";
console.log( str.slice(0, 5) ); // 'strin', підрядок від 0 до 5 (5 не включно)
console.log( str.slice(0, 1) ); // 's', від 0 до 1, але 1 не включно, тому лише символ на позиції 0

let str = "stringify";
console.log( str.slice(2) ); // 'ringify', з позиції 2 і до кінця


//Порівняння рядків

//Літера в малому регістрі завжди більша за літеру у великому:

console.log( 'a' > 'Z' ); // true
//Літери з діакритичними знаками “не в порядку”:

console.log( 'Österreich' > 'Zealand' ); // true





//Numbers
let num = Number("123"); // конвертує рядок в число
//null/undefined не мають методів

/*Округлення
Однією з найбільш використовуваних операцій при роботі з числами є округлення.

Існує кілька вбудованих функцій для округлення:

Math.floor
Округляє вниз: 3.1 стає 3, та -1.1 стає -2.
Math.ceil
Округляє вверх: 3.1 стає 4, та -1.1 стає -1.
Math.round
Округляє до найближчого цілого числа: 3.1 стає 3, 3.6 стає 4, 3.5 теж округлить до 4.
Math.trunc (не підтримується в Internet Explorer)
Видаляє все після десяткової крапки без округлення: 3.1 стає 3, -1.1 стає -1.

Ось для чого призначені parseInt та parseFloat.

Вони “читають” число з рядка, до поки можуть, у разі помилки зчитане число повертається. Функція parseInt повертає ціле число, тоді як parseFloat повертає число з плаваючою крапкою:

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, тільки частина цілого числа
alert( parseFloat('12.3.4') ); // 12.3, друга крапка зупиняє зчитування*/

let sum = 0.1 + 0.2;
console.log( sum.toFixed(2) ); // 0.30



//arrays

// array methods
// join
// pop
// push
// shift
// unshift
// concat
// splice?
// high order array methods
// foreach
// map
// reduce
// filter
// some
// every
// find


let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum
fruits[2] = 'Pear'; // тепер ["Apple", "Orange", "Pear"]
fruits[3] = 'Lemon'; // тепер ["Apple", "Orange", "Pear", "Lemon"]


let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits.length ); // 3


//У масивах можуть зберігатись елементи будь-якого типу.

// різні типи значень
let arr = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
// отримати елемент з індексом 1 (об’єкт) та вивести його властивість name
console.log( arr[1].name ); // John
// отримати елемент з індексом 3 (функція) та виконати її
arr[3](); // hello


//push додає елементи в кінець.
//pop видаляє елемент з кінця.

let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.pop() ); // видаляємо "Pear" та виводимо його
console.log( fruits ); // Apple, Orange

let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log( fruits ); // Apple, Orange, Pear


let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); // видаляємо Apple та виводимо його
console.log( fruits ); // Orange, Pear

let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
console.log( fruits ); // Apple, Orange, Pear

//Методи push та unshift можуть додавати одразу декілька елементів:

let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );



let fruits = ["Apple", "Orange", "Plum"];
// ітерується по елементам масиву
for (let fruit of fruits) {
  console.log( fruit );
}


let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  console.log( arr[key] ); // Apple, Orange, Pear
}


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральний елемент


let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // з індексу 1 видалимо 1 елемент
console.log( arr ); // ["I", "JavaScript"]


let arr = [1, 2];

// створимо масив з: arr і [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4
// створимо масив з: arr, [3,4] і [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// створимо масив з: arr і [3,4], також добавимо значення 5 і 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


let arr = [1, 0, false];
console.log( arr.includes(1) ); // true



let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John




let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// повертає масив перших двох користувачів
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2



let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6



let arr = [ 1, 2, 15 ];
// метод сортує вміст arr
arr.sort();
console.log( arr );  // 1, 15, 2


let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log( arr ); // 5,4,3,2,1


let str = "test";
console.log( str.split('') ); // t,e,s,t


let arr = 'Вася, Петя, Маша, Іван'.split(', ', 2);
console.log(arr); // Вася, Петя



let arr = ["Вася", "Петя", "Маша"];
let str = arr.join(';'); // обʼєднуємо масив в рядок за допомогою ";"
console.log( str ); // Вася;Петя;Маша



let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15



/*Для додавання/видалення елементів:
push(... items) – додає елементи до кінця,
arr.pop() – дістає елемент з кінця,
arr.shift() – дістає елемент з початку,
arr.unshift(...items) – додає елементи в початок.
splice(pos, deleteCount, ...items) – починаючи з індексу pos, видаляє deleteCount елементів та вставляє items.
slice(start, end) – створює новий масив, копіюючи в нього елементи з позиції start до end (не включаючи end).
concat(...items) – повертає новий масив: копіює всі члени поточного масиву і додає до нього items. Якщо якийсь із items є масивом, тоді беруться його елементи.
Для пошуку серед елементів:

indexOf/lastIndexOf(item, pos) – шукає item, починаючи з позиції pos, і повертає його індекс або -1, якщо нічого не знайдено.
includes(value) – повертає true, якщо в масиві є елемент value, в іншому випадку false.
find/filter(func) – фільтрує елементи через функцію і віддається перше/всі значення, при проходженні яких функція повертає true.
findIndex схожий на find, але повертає індекс замість значення.
Для перебору елементів:

forEach(func) – викликає func для кожного елемента. Нічого не повертає.
Для перетворення масиву:

map(func) – створює новий масив з результатів виклику func для кожного елемента.
sort(func) – сортує масив «на місці», а потім повертає його.
reverse() – «на місці» змінює порядок елементів на протилежний і повертає змінений масив.
split/join – перетворює рядок в масив і назад.
reduce(func, initial) – обчислює одне значення на основі всього масиву, викликаючи func для кожного елемента і передаючи проміжний результат між викликами.
Додатково:

Array.isArray(arr) перевіряє, чи є arr масивом.*/

//object

//Object.keys, values, entries
//Для простих об’єктів доступні наступні методи:

//Object.keys(obj) – повертає масив ключів.
//Object.values(obj) – повертає масив значень.
//Object.entries(obj) – повертає масив пар [ключ, значення].