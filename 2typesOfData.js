//ТИПИ ДАНИХ
  //ПРИМІТИВНІ             //НЕ ПРИМІТИВНІ
//number                   //Об'єкт
//BigInt
//string
//boolean
//null
//undefined
//symbol

//number
let n = 123;
n = 12.345;
console.log(n);//12.345
console.log(typeof n)//number

console.log(1 / 0); // Infinity

console.log("not a number" / 2); // NaN, таке ділення є помилковим

let billion = 1000000000;
//Також можна використовувати знак підкреслення (нижню риску) _ в якості розділювача:

let billion = 1_000_000_000;
console.log(billion);

let billion = 1e9;  // 1 мільярд, буквально: 1 та 9 нулів
console.log(billion);

//BigInt
//У JavaScript, тип “number” не може містити числа більші за (253-1) (це 9007199254740991), 
//або менші за -(253-1) для від’ємних чисел. Це технічне обмеження, спричинене їхньою внутрішньою реалізацією.

const num = 2n**25n;
console.log(num)//33554432n
console.log(typeof num)//bigint


//string
let str = "one ";
let str2 = ' two';
let phrase = ` three 
+
 ${str}`;
console.log(phrase);

let nameI = "Ivan";

// вбудована змінна
console.log(`Hello, ${nameI}е!`); // Hello, Ivanе!
console.log(typeof nameI)//string

// вбудований вираз
console.log(`Resalt: ${1 + 2}`); // результат: 3

console.log("Resalt: ${1 + 2}"); // Resalt: ${1 + 2} (подвійні лапки не мають ніякого впливу)

let bar = "bar";
console.log(bar);//bar
bar.toUpperCase();
console.log(bar);//bar

let bar = "bar";
console.log(bar);//bar
let newBar = bar.toUpperCase();
console.log(newBar);//BAR


let str = 'Оy';

str = 'о' + str[1]; // замінюємо рядок

alert( str ); // оy

//Перетворення на число
console.log( "6" / "2" ); // 3, рядки перетворюються на числа


//boolean
let nameFieldChecked = true; // так, ім’я було перевірене
let ageFieldChecked = false; // ні, вік не був перевіреним
let isGreater = 4 > 1;

console.log(isGreater); // true (результат порівняння — "так")
console.log(typeof nameFieldChecked)//boolean


//null
let age = null;
console.log(typeof age)//object

//undefined
let age;
console.log(age); // покаже "undefined"
console.log(typeof age)//undefined


//symbol
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");
console.log(Symbol("foo") === Symbol("foo")); // false
console.log(typeof sym2);  // "object"
