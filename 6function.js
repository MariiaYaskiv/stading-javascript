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
  
  +(function () {
    console.log("Унарний плюс запускає вираз");
  })();