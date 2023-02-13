//Змінні Let, cons, var

//Іменування змінних

let userName;
let test123;
let $ = 1; // оголошено змінну з ім'ям "$"
let _ = 2; // а тепер змінна з ім'ям "_"
console.log($ + _); // 3

//Приклади недопустимих імен змінних:
let 1a = 10; // не може починатися з цифри
let my-name = "Name"; // дефіс '-' недопустимий в імені
console.log(1a)//SyntaxError: Invalid or unexpected token

//Створення змінної без використання use strict
num = 5;
console.log(num)

//"use strict";
num = 5; // помилка: num не оголошено
console.log(num)//ReferenceError: num is not defined

let message;
message = 'Hello'; // збереження рядка 'Привіт' у змінній `message`
console.log(message);

//Ми також можемо оголосити декілька змінних в одному рядку:
let user = 'Ivan', age = 25, message = 'Hello'';

//Багаторядковий спосіб трохи довший, проте його легше читати:

let user = 'Ivan';
let age = 25;
let message = 'Hello';
console.log(user, age, message);

let user = "Ivan",
  age = 25,
  message = "Hello";
console.log(user, age, message);



//LET
//ПЕРЕОГОЛОШЕННЯ
let message;
message = 'Hello!';
message = 'World!'; // значення змінено
console.log(message);

let user;
let user; // SyntaxError: 'user' вже оголошена

let message = "Some";
// повторне 'let' призведе до синтаксичної помилки
let message = "Something"; // SyntaxError: 'message' has already been declared
console.log(message);

//ХОСТИНГ
console.log(message);
let message = "Це";//ReferenceError: Cannot access 'message' before initialization

// БЛОК СКОУП
let apples = 5; 
if (true) {
  let apples = 10;
  console.log(apples); // 10 
}
console.log(apples); // 5 

if (true) {
    let apples = 10;
    console.log(apples); // 10 
  }
  console.log(apples); // ReferenceError: apples is not defined

//МЕРТВА ЗОНА
function do_something() {
    console.log(foo); // ReferenceError: foo is not defined
    //let foo = 2;//ReferenceError: Cannot access 'foo' before initialization
  }
  let foo = 2;//2
  do_something()

  //VAR
//ПЕРЕОГОЛОШЕННЯ
var user = "Petro";
var user = "Ivan"; // цей "var" нічого не робить (змінна вже оголошена). Зміниться лише значення
console.log(user); // Ivan

//ХОСТИНГ
console.log(message);//undefined
var message = "Something";

// БЛОК СКОУП
var apples = 5;
if (true) {
  var apples = 10;
  console.log(apples); // 10 
}
console.log(apples); // 10 змінна існує поза блоком if


function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // спрацьовує
}

sayHi();
console.log(phrase); // ReferenceError: phrase не визначена

//МЕРТВА ЗОНА
function do_something() {
     console.log(bar); // undefined 
     //var bar = 1; //код не виконається
   }
   var bar = 1;
   do_something()//2 / undefined


   function sayHi() {
    phrase = "Hello";
    console.log(phrase); 
    var phrase;
  }
  sayHi(); // Hello



//CONST
//ПЕРЕОГОЛОШЕННЯ
const user = "Petro";
const user = "Ivan"; 
console.log(user); // SyntaxError: Identifier 'user' has already been declared, не можна перевизначати константу!

const apple = 5;
apple = 10;//TypeError: Assignment to constant variable.

const user = {
    name: "Ivan"
  };
  
  user.name = "Petro"; // допустимо
  console.log(user.name)
  user = 5; // TypeError: Assignment to constant variable.

//ХОСТИНГ
console.log(message);//ReferenceError: Cannot access 'message' before initialization
const message = "Це";

// БЛОК СКОУП
const apples = 5;
if (true) {
    const apples = 10;
    console.log(apples); // 10 
}
console.log(apples); // 5

//МЕРТВА ЗОНА
function do_something() {
    console.log(bar); 
    //const bar = 1; 
  }
  const bar = 1; 
  do_something() // 1

//МЕРТВА ЗОНА
function do_something() {
   // console.log(bar); // undefined
  //  console.log(foo); // ReferenceError: foo is not defined
    console.log(baz); //ReferenceError: Cannot access 'baz' before initialization
   // var bar = 1; //undefined
   // let foo = 2;//ReferenceError: Cannot access 'foo' before initialization
    const baz = 3; //ReferenceError: Cannot access 'baz' before initialization
  }
  do_something()






  if (true) {
    var test = true; // використовуємо "var" замість "let"
  }
  
  console.log(test); // true, змінна існує поза блоком if



  if (true) {
    let test = true; // використовуємо "let"
  }
  
  console.log(test); // ReferenceError: test не визначена