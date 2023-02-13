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
console.log( '01' === 1 ); //  false, тому що порівнюються різні типи
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
