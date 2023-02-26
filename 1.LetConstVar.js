//Змінні Let, cons, var

let userName;
let test123;
let $ = 1; //  declared a variable with the name "$"
let _ = 2; //  and now a variable with the name "_"
console.log($ + _); // 3

//////////////////////////////////////////////////////////////////////////////////

// Examples of incorrect variable names:
let 1a = 10; // cannot start with a digit
let my-name = "Name"; //  hyphens '-' aren't allowed in the name
console.log(1a)//SyntaxError: Invalid or unexpected token

///////////////////////////////////////////////////////////////////////////////////

//without use strict  
num = 5;
console.log(num)

////////////////////////////////////////////////////////////////////////////////////

//"use strict";
num = 5; // error: num is not defined
console.log(num)//ReferenceError: num is not defined

/////////////////////////////////////////////////////////////////////////////////

 //We can also declare multiple variables in one line:
let user = 'Ivan', age = 25, message = 'Hello'';

//////////////////////////////////////////////////////////////////////////////////

//The multiline variant is a bit longer, but easier to read:

let user = 'Ivan';
let age = 25;
let message = 'Hello';
console.log(user, age, message);

let user = "Ivan",
  age = 25,
  message = "Hello";
console.log(user, age, message);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LET

// let es2015
// Variables defined with let cannot be Redeclared
let city;
let city = 'Lviv'; // error
////////////////////////////////////////////////////////////////////////////////////////

// Variables defined with let must be Declared before use
console.log(letSample); // error
let letSample = 012;

/////////////////////////////////////////////////////////////////////////////////////////

let blockScopeVariable = 'I am not encapsulated'
if (true) {
  let blockScopeVariable = 'I am encapsulated';
}
// code here cannot use blockScopeVariable variable

//////////////////////////////////////////////////////////////////////////////////////////

// Variables defined with let have Block Scope
function letScope() {
  let country = 'Ukraine';
}
letScope();
// code here cannot use country

/////////////////////////////////////////////////////////////////////////////////////////

// Variables defined with let are also hoisted to the top of the block, but not initialized.
carName = "Volvo";
let carName; // error tdz

/////////////////////////////////////////////////////////////////////////////////////////
// Declaration
let message;
message = 'Hello!';
message = 'World!'; // value changed
console.log(message);

////////////////////////////////////////////////////////////////////////////////////////

let user;
let user; // SyntaxError: 'user'  repeated 'let' leads to an error

/////////////////////////////////////////////////////////////////////////////////////

let message = "Some";
let message = "Something"; // SyntaxError: 'message' has already been declared
console.log(message);

////////////////////////////////////////////////////////////////////////////////////////

//ХОСТИНГ
console.log(message);
let message = "Це";//ReferenceError: Cannot access 'message' before initialization

///////////////////////////////////////////////////////////////////////////////////////

// Block scope
let apples = 5; 
if (true) {
  let apples = 10;
  console.log(apples); // 10 
}
console.log(apples); // 5 

//////////////////////////////////////////////////////

if (true) {
    let apples = 10;
    console.log(apples); // 10 
  }
  console.log(apples); // ReferenceError: apples is not defined

//////////////////////////////////////////////////////

//Died zone
function do_something() {
    console.log(foo); // ReferenceError: foo is not defined
    //let foo = 2;//ReferenceError: Cannot access 'foo' before initialization
  }
  let foo = 2;//2
  do_something()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //VAR

  // var
// var can be declered and optionally assigned a value
var a = 1;
var b;
b = 2;
c = 3;
var c;
var a = 2;

///////////////////////////////////////////////////////////////////////

// // one statement many variables
var q = 'q', z = 'z', f = 'f';
var p,i,o;
var g,
h,
j;

/////////////////////////////////////////////////////////////////////////

// Scope - Зона видимості змінної
// var has global and functional scope
if (true) {
    var globalExample = 100;
}
// code here can use globalExample variable

///////////////////////////////////////////////////////////////////////////

function go() {
  // asd
    ten = 10;

    asd = 22
}
go();
// code here can't use variable ten
console.log(ten);

//////////////////////////////////////////////////////////////////////////

// hoisting - In JavaScript, a variable can be declared after it has been used.
// variables defined with var are hoisted but not initialized

console.log(qw) // undefined
qw = 5;
console.log(qw) // 5
var qw;
// when to use var - never

//////////////////////////////////////////////////////////////////////////

//redeclaration
var user = "Petro";
var user = "Ivan"; // change the value
console.log(user); // Ivan

////////////////////////////////////////////////////////////////////////////

//ХОСТИНГ
console.log(message);//undefined
var message = "Something";

/////////////////////////////////////////////////////////////////////////////

// БЛОК СКОУП
var apples = 5;
if (true) {
  var apples = 10;
  console.log(apples); // 10 
}
console.log(apples); // 10 var exist without block if

/////////////////////////////////////////////////////////////////////////////

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); 
}

sayHi();
console.log(phrase); // ReferenceError: phrase не визначена

/////////////////////////////////////////////////////////////////////////////////

//МЕРТВА ЗОНА
function do_something() {
     console.log(bar); // undefined 
     //var bar = 1; //
   }
   var bar = 1;
   do_something()//2 / undefined

   //////////////////////////////////////////////////////////////////////////////

   function sayHi() {
    phrase = "Hello";
    console.log(phrase); 
    var phrase;
  }
  sayHi(); // Hello

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONST
// const
// const must be initialized
// JavaScript const variables must be assigned a value when they are declared:
const size = 'large';

////////////////////////////////////////////////////////////////////////////////////

// Variables defined with const cannot be Redeclared.
const red = 'red';
const red = 'red'; // error

///////////////////////////////////////////////////////////////////////////////////

// Variables defined with const cannot be Reassigned.
const favColor = 'Blue';
favColor = 'Green'; // error

/////////////////////////////////////////////////////////////////////////////////////

// Variables defined with const have Block Scope.
if (true) {
  const constBlockScope = 1000;
}
// constBlockScope cannot be used here

//////////////////////////////////////////////////////////////////////////////////////

function constScope() {
  let country = 'Ukraine';
}
constScope();
// code here cannot use country

//////////////////////////////////////////////////////////////////////////////////////

// Variables defined with const are also hoisted to the top, but not initialized.
console.log(numberOne); // ReferenceError: numberOne is not defined
const numberOne = 1

////////////////////////////////////////////////////////////////////////////////////

// JavaScript const does not define a constant value. It defines a constant reference to a value.
// Because of this you can NOT:

// Reassign a constant value
const armor = 'Round Shield';
armor = 'Wooden Shield'; //TypeError: Assignment to constant variable.

/////////////////////////////////////////////////////////////////////////////////////

// Reassign a constant array
const fruits = ['plum', 'mango'];
fruits = ['banana', 'grapes']; // TypeError: Assignment to constant variable.

//////////////////////////////////////////////////////////////////////////////////

// Reassign a constant object
const car = { color: 'blue', doors: 4 };
car = { color: 'yellow', doors: 2 }; // TypeError: Assignment to constant variable.

///////////////////////////////////////////////////////////////////////////////////

// However, you CAN:
// Change the elements of constant array
const fruits = ['plum', 'mango'];​
fruits[0] = 'peach';​
fruits.push('apricot');​
console.log(fruits);​ // Output: [ 'peach', 'mango', 'apricot' ]

/////////////////////////////////////////////////////////////////////////////////////

// Change the properties of constant object​
const car = { color:'blue', doors:4 };​
car.color = 'green';​
car.price = '100 gold';​
console.log(car);​ // Output: { color: 'green', doors: 4, price: '100 gold' }​

///////////////////////////////////////////////////////////////////////////////////

//ПЕРЕОГОЛОШЕННЯ /redeclaration
const user = "Petro";
const user = "Ivan"; 
console.log(user); // SyntaxError: Identifier 'user' has already been declared, не можна перевизначати константу!

////////////////////////////////////////////////////////////////////////////////////

const apple = 5;
apple = 10;//TypeError: Assignment to constant variable.

//////////////////////////////////////////////////////////////////////////////////

const user = {
    name: "Ivan"
  };
  
  user.name = "Petro"; 
  console.log(user.name)
  user = 5; // TypeError: Assignment to constant variable.

  //////////////////////////////////////////////////////////////////////////////////

//ХОСТИНГ
console.log(message);//ReferenceError: Cannot access 'message' before initialization
const message = "Це";

////////////////////////////////////////////////////////////////////////////////////

// БЛОК СКОУП
const apples = 5;
if (true) {
    const apples = 10;
    console.log(apples); // 10 
}
console.log(apples); // 5

////////////////////////////////////////////////////////////////////////////////////

//МЕРТВА ЗОНА
function do_something() {
    console.log(bar); 
    //const bar = 1; 
  }
  const bar = 1; 
  do_something() // 1

  ////////////////////////////////////////////////////////////////////////////////




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



//////////////////////////////////////////////////////////////////////////////////


  if (true) {
    var test = true; // використовуємо "var" замість "let"
  }
  
  console.log(test); // true, змінна існує поза блоком if



  if (true) {
    let test = true; // використовуємо "let"
  }
  
  console.log(test); // ReferenceError: test не визначена