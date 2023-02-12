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
message = 'Привіт'; // збереження рядка 'Привіт' у змінній `message`
console.log(message);

//Ми також можемо оголосити декілька змінних в одному рядку:
let user = 'Іван', age = 25, message = 'Привіт';

//Багаторядковий спосіб трохи довший, проте його легше читати:

let user = 'Іван';
let age = 25;
let message = 'Привіт';
console.log(user, age, message);

let user = "Іван",
  age = 25,
  message = "Привіт";
console.log(user, age, message);



//LET
//ПЕРЕОГОЛОШЕННЯ
let message;
message = 'Привіт!';
message = 'Світ!'; // значення змінено
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
    let foo = 2;//ReferenceError: Cannot access 'foo' before initialization
  }
  do_something()

  //VAR
//ПЕРЕОГОЛОШЕННЯ
var user = "Petro";
var user = "Ivan"; // цей "var" нічого не робить (змінна вже оголошена). Зміниться лише значення
console.log(user); // Ivan

//ХОСТИНГ
console.log(message);//undefined
var message = "Це";

// БЛОК СКОУП
var apples = 5;
if (true) {
  var apples = 10;
  console.log(apples); // 10 
}
console.log(apples); // 10 змінна існує поза блоком if

//МЕРТВА ЗОНА
function do_something() {
     console.log(bar); // undefined 
     var bar = 1; //код не виконається
   }
   do_something()//undefined


   function sayHi() {
    phrase = "Hello";
    console.log(phrase); //SyntaxError: Unexpected end of input
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
    console.log(bar); // undefined 
    const bar = 1; //undefined
  }
  const bar = 1; 
  do_something() //ReferenceError: Cannot access 'bar' before initialization

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

//BigInt
//У JavaScript, тип “number” не може містити числа більші за (253-1) (це 9007199254740991), 
//або менші за -(253-1) для від’ємних чисел. Це технічне обмеження, спричинене їхньою внутрішньою реалізацією.

const num = 2n**25n;
console.log(num)//33554432n
console.log(typeof num)//bigint


//string
let str = " ";
let str2 = ' ';
let phrase = ` ${str}`;

let name = "Ivan";

// вбудована змінна
console.log(`Hello, ${name}е!`); // Hello, Ivanе!
console.log(typeof name)//string

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


//Базові оператори Basic operators Арифметичні
/*Maths
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.*/

//Remainder %, Остача від ділення %
console.log( 5 % 2 ); // 1 — остача від ділення 5 на 2
console.log( 8 % 3 ); // 2 — остача від ділення 8 на 3

//Exponentiation ** Піднесення до степеня **
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

//String concatenation with binary +, 
let s = "my" + "string";
console.log(s); // mystring

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

console.log(2 + 2 + '1' ); // "41", а не "221"

console.log('1' + 2 + 2); // "122", а не "14"

console.log( 6 - '2' ); //  4, '2' перетворюється на число
console.log( '6' / '2' ); // 3, обидва операнди перетворюються на числа


//Numeric conversion, unary + Числове перетворення, унарний +
let appless = "2";
let orangess = "3";
console.log( appless + orangess ); // "23", the binary plus concatenates strings

let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5


//Інкремент/декремент
//Інкремент ++ збільшує змінну на 1:
let counterr = 1;
counter++;        // працює так само, як counter = counter + 1, але запис коротше
console.log( counterr ); // 2

let counterrr = 1;
let a = ++counterrr; // (*)
console.log(a); // 2

let counteer = 0;
console.log( ++counteer ); // 1

let couunter = 0;
console.log( couunter++ ); // 0

let incr = 10,
decr = 10;
//incr++; //інкремент постфіксний
//decr--; //декремент
//++incr; //префіксна форма зипису
//--decr;
//console.log(incr);
//console.log(decr);

console.log(++incr);
console.log(--decr);

//Декремент -- зменшує змінну на 1:
let counter = 2;
counter--;        // працює так само, як counter = counter - 1, але запис коротше
console.log( counter ); // 1

let counter = 1;
let a = counter++; // (*) змінили ++counter на counter++
console.log(a); // 1

let counter = 0;
console.log( counter-- ); // 0

let counter = 0;
console.log( --counter ); // -1


//Оператори порівняння

console.log( 2 > 1 );  // true (правильно)
console.log( 2 == 1 ); // false (неправильно)
console.log( 2 != 1 ); // true (правильно)

console.log( 'Я' > 'А' ); // true
console.log( 'Я' < 'А' ); // false

console.log( 'Соки' > 'Сода' ); // true
console.log( 'Соки' < 'Сода' ); // false

console.log( 'Комар' > 'Кома' ); // true
console.log( 'Комар' < 'Кома' ); // false


//Порівняння різних типів
//Коли порівнюються значення різних типів, JavaScript конвертує ці значення в числа.

console.log( '2' > 1 ); // true, рядок '2' стає числом 2
console.log( '01' == 1 ); // true, рядок '01' стає числом 1

console.log( 0 == false ); // true

//Оператор строгої рівності === перевіряє рівність без перетворення типів.
console.log( 0 === false ); // false, тому що порівнюються різні типи

//Логічні оператори
//|| (АБО) знаходить перше правдиве значення

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
console.log( undefined || null || 0 ); // 0 (усі хибні, повертається останнє значення)

//&& (І)  шукає перше хибне значення
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

//Коли всі значення є правдивими, повертається останнє значення:
console.log( 1 && 2 && 3 ); // 3, останнє
//Оператор І && має вищий пріоритет за АБО ||.

//! (НЕ)
console.log( !true ); // false
console.log( !0 ); // true

//Подвійний НЕ !! іноді використовується для перетворення значення на булевий тип:
console.log( !!"не пустий рядок" ); // true
console.log( !!null ); // false

//Оператор об’єднання з null '??'
let user = "Ivan";
console.log(user ?? "Anonims"); // Іван (user визначений)

//?? повертає перший аргумент, якщо він не null/undefined. Інакше, другий.
//Оператор об’єднання з null не є абсолютно новим. Це просто хороший синтаксис, щоб отримати перше “визначене” значення з двох.

let firstName = null;
let lastName = null;
let nickName = "Super";

// показує перше визначене значення:
console.log(firstName ?? lastName ?? nickName ?? "Some"); // Super


//Порівняння з ||
let firstName = null;
let lastName = null;
let nickName = "Super";

// показує перше істинне значення:
console.log(firstName || lastName || nickName || "Some"); // Super


let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

//Пріоритет оператора ?? такий самий, як у ||

let x = 1 && 2 ?? 3; // Синтаксична помилка

let x = (1 && 2) ?? 3; // Працює

const isChecked = true,
isClose = false;
console.log(isChecked && isClose); //false
console.log(isChecked || isClose); //true
console.log(isChecked || !isClose); //! оператор отріцанія(якщо була правда він перетворить в не правду і навпаки)*/



//Умовні розгалуження: if, '?'

//Блок “if”
let year = 2015
if (year == 2015) {
console.log( 'You ara right!' ); }


//Блок “else”
let year = 2014
if (year == 2015) {
    console.log( 'You ara right!' );
} else {
    console.log( 'You ara wrong!' ); // будь-яке значення, окрім 2015
}

//Декілька умов: “else if”

let year = 2015;

if (year < 2015) {
    console.log( 'So early' );
} else if (year > 2015) {
    console.log( 'So late' );
} else {
    console.log( 'Yes!' );
}

//Умовний оператор ‘?’
let result = умова ? значення1 : значення2;
let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed)


//Декілька ‘?’

let age = 18

let message = (age < 3) ? 'Hi' :
  (age < 18) ? 'Hello' :
  (age < 100) ? 'God day' :
  'You are so old';

  console.log( message );

//Ось як це буде виглядати у випадку з використанням if..else:

if (age < 3) {
  message = 'Hi';
} else if (age < 18) {
  message = 'Hello';
} else if (age < 100) {
  message = 'God day';
} else {
  message = 'You are so old'';
}
console.log( message );


//Конструкція "switch"

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Bad' );
    break;
  case 4:
    console.log( 'Good' );
    break;
  case 5:
    console.log( 'So many' );
    break;
  default:
    console.log( 'I don`t know' );
}

//Групування “case”

let a = 3;

switch (a) {
  case 4:
    alert('Вірно!');
    break;

  case 3: // (*) групуємо два блоки `case`
  case 5:
    console.log('Wrong');
    console.log("You are wrong");
    break;

  default:
    console.log('The result is strange');
}

//Цикли
//Цикл “for”
for (let i = 0; i < 3; i++) { // показується 0, далі 1, потім 2
    console.log(i);
  }

//Пропуск частин в “for”

let i = 0; // ми вже маємо оголошену змінну і присвоєне значення

for (; i < 3; i++) { // немає необхідності в "початку"
  alert( i ); // 0, 1, 2
}

//Ми також можемо видалити частину крок:

let i = 0;

for (; i < 3;) {
  alert( i++ );
}


//for...in Object, Array, String
let obj = {model: 'AUDI A8', year: '2019', color: 'brown'}

for (key in obj) {
 // console.log(`${key}`);//model year color
  console.log(`${obj[key]}`);//AUDI A8 2019 brown
}


let arr = ['AUDI A8', '2019', 'brown'];
arr.cost = '$100.000';
for (key in arr) {
  console.log(`${key}`);//model year color
  console.log(`${arr[key]}`);//AUDI A8 2019 brown
  //console.log(`${key} = ${arr[key]}`);
}

var s='JS';
for(let a in s) {
    console.log(a);//0, 1
}

let arr = [3, 5, 7];
arr.foo = "hello";
for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}


var obj={x:5,y:2};
for(a in obj){
    console.log(a);// x, y
}

let user = {
    name: "Іван",
    age: 30,
    isAdmin: true
  };
  for (let key in user) {
    // ключі
    alert( key );  // name, age, isAdmin
    // значення ключів
    alert( user[key] ); // Іван, 30, true
  }

//Впорядкування властивостей об’єкта
let codes ={
    "49": "Німеччина",
    "41": "Швейцарія",
    "44": "Великобританія",
    // ..,
    "1": "США"
 };
 
 for (let code in codes) {
   alert(code); // 1, 41, 44, 49
 }



//for...of  Array, String, Map, Set, об'єкт аргументів 
for (let i of arr) {
   console.log(i); // "3", "5", "7"
}


var s='JS';
for(let a in s)  {
    console.log(a)//0,1
    console.log(s[a]);//j s
};






let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); //  "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); //  "3", "5", "7"
}

//Цикл “while”


let i = 0;
while (i < 3) { // показується 0, далі 1, потім 2
    console.log( i );//0 1 2
  i++;
}



//Цикл “do…while”

let i = 0;
do {
    console.log( i );
  i++;
} while (i < 3); //0 1 2 


//function declaration
function showMessage() {
    console.log('Hello');
  }
  showMessage()


  let userName = 'Ivan';
function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage(); //Hello, Ivan


function showMessage(from, text) { // параметри: from, text
    console.log(from + ': ' + text);
  }
  showMessage('Ivan', 'Hello!'); //Ivan: Hello!
  

  function showMessage(from = "Ivan", text = "Hello") { // параметри: from, text
    console.log(from + ': ' + text);
  }
  showMessage(); //Ivan: Hello!


  sayHi("Ivan"); // Привіт, Іван
  function sayHi(name) {
    console.log( `Hello, ${name}` );//Hello, Ivan
  }


  //Function expression
  let sayHi = function() {
    console.log( "Hello" );
  };
  sayHi()//Hello


  function sayHi() {   // (1) створюємо
    console.log( "Hello" );
  }
  let func = sayHi;    
  func(); // Hello  
  sayHi(); // Hello  


  sayHi("Ivan"); // ReferenceError: Cannot access 'sayHi' before initialization
  let sayHi = function sayHii(name) {
    console.log( `Hello, ${name}` );
  }

//Array function

let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3


let double = n => n * 2;
// те ж саме, що і: let double = function(n) { return n * 2 }
console.log( double(3) ); // 6


let sayHi = () => console.log("Привіт!");

sayHi();

//функції колбек callback


function learnjS(lang, callback) {
    console.log(`I am studing ${lang}`);
    callback();
}
function done() {
    console.log("I finished that lesson!");
}

learnjS("JavaScript", done);


  // Способи створення IIFE

  (function() {
    console.log("Дужки навколо функції");
  })();
  
  (function() {
    console.log("Круглі дужки навколо всього");
  }());
  
  !function() {
    console.log("Побітовий оператор NOT запускає вираз");
  }();
  
  +function() {
    console.log("Унарний плюс запускає вираз");
  }();


//Objects

let user = {
    name: "Ivan",
    age: 30,
    "likes birds": true  // Ім’я властивості з декількох слів повинно бути в лапках
  };
  user.name = "Petro";
  delete user.age
  console.log(user.name)// Petro
  console.log(user.age) //undefined

 let user={};//створюємо об'єкт
  user.name='JS'; //присвоюємо значення властивості name 
  user.year=2016; //присвоюємо значення властивості year

  console.log(user.name, user.year)//JS 2016

  const object = {
    name: "John",
    age: 25,
    isMarried: false,
};
//console.log(object.name);
console.log(object['name']);


let fruit = "apple";

let bag = {
  [fruit]: 5, // назву властивості взято зі змінної fruit
};

console.log( bag.apple ); // 5 


let user = { name: "Іван", age: 30 };

console.log( "age" in user ); // true, user.age існує


let codes ={
    "2": "Two",
    "4": "Four",
    "6": "Six",
    // ..,
    "1": "One"
 };
 
 for (let code in codes) {
    console.log(code); // 1, 2, 4, 6
 }



 let user = {
    name: "Ivan",
    surname: "Smith"
  };
  user.age = 25; // добавимо ще одну властивість
  
  // не цілочисельні властивості перераховані в порядку створення
  for (let prop in user) {
   console.log( prop ); // name, surname, age
  }

  let user = {
    name: "Ivan",
    surname: "Smith"
  };
  user.age = 25; // добавимо ще одну властивість
  
  // не цілочисельні властивості перераховані в порядку створення
  for (let key in user) {
   console.log( key ); // name, surname, age
  }

  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
  // Запис точки
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
// Запис квадратних дужок
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

  //Copy Object

  let user = { name: 'Ivan' };

let admin = user;

admin.name = 'Petro'; // змінено за посиланням зі змінної "admin"

console.log(user.name); // 'Petro', зміни видно з посилання зі змінної "user"



const Animal = {
    type: "Some", // Усталене значення властивості
    displayType() {
      // Метод, що виводитиме тип тварини
      console.log(this.type);
    },
  };
  
  // Створюється новий тип тварини під назвою animal1
  const animal1 = Object.create(Animal);
  animal1.displayType(); // Друкує: Some
  
  // Створюється новий тип тварини під назвою fish
  const fish = Object.create(Animal);
  fish.type = "Fish";
  fish.displayType(); // Друкує:Fish


  let obj = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  console.log(objCopy);
  // Результат - { a: 1, b: 2 }


  let obj = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  
  console.log(objCopy); // результат - { a: 1, b: 2 }
  objCopy.b = 89;
  console.log(objCopy); // результат - { a: 1, b: 89 }
  console.log(obj); // результат - { a: 1, b: 2 }


  let obj = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = Object.assign({}, obj);
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  obj.a = 10;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 1, b: { c: 2} }
  
  newObj.a = 20;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 20, b: { c: 2} }
  
  newObj.b.c = 30;
  console.log(obj); // { a: 10, b: { c: 30} }
  console.log(newObj); // { a: 20, b: { c: 30} }



  // Оператор Spread (поверхнева копія)
  numbers = [1, 2, 3];
numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] та [1, 2, 3, 4]
// числа залишаються без змін



nestedNumbers = [[1], [2]];
numbersCopy = [...nestedNumbers];

numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1, 300], [2]]
// [[1, 300], [2]]
// Обоє були змінені, оскільки мають спільні посилання
  
  // Глибоке копіювання  JSON.parse(JSON.stringify(object));

  let obj = { 
    a: 1,
    b: { 
      c: 2,
    },
  }
  
  let newObj = JSON.parse(JSON.stringify(obj));
  
  obj.b.c = 20;
  console.log(obj); // { a: 1, b: { c: 20 } }
  console.log(newObj); // { a: 1, b: { c: 2 } } (Новый нетронутый объект!)


  //надійно копіює глибоко вкладені об’єкти/масиви!

nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);

// [[1], [2]]
// [[1, 300], [2]]
// Два абсолютно окремі масиви!


//Методи примітивів
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





//Область видимості змінної, замикання

function f() {
  let value = 123;

  return function() {
    console.log(value);
  }
}

let g = f();
g()

function makeWorker() {
  let name = "Petro";

  return function() {
    console.log(name);
  };
}
let name = "Ivan";
// створити функцію
let work = makeWorker();
// викликати її
work();


function makeCounter() {
  function counter() {
    return counter.count++;
  };
  counter.count = 0;
  return counter;
}
let counter = makeCounter();
counter.count = 10;
console.log( counter() ); // 10

//Recursion, Рекурсія
//коли функція викликає себе. Це називається рекурсія

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( pow(2, 3) ); // 8


//Рішення з використанням циклу:

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(100) );
//Рішення з використанням рекурсії:

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log( sumTo(100) );




