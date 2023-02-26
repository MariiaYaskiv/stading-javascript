//function declaration
function showMessage() {
    console.log('Hello');
  }
  showMessage()

//////////////////////////////////////////////////////////////

  let userName = 'Ivan';
function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage(); //Hello, Ivan

//////////////////////////////////////////////////////////////


function showMessage(from, text) { 
    console.log(from + ': ' + text);
  }
  showMessage('Ivan', 'Hello!'); //Ivan: Hello!
  
///////////////////////////////////////////////////////////////

  function showMessage(from = "Ivan", text = "Hello") { 
    console.log(from + ': ' + text);
  }
  showMessage(); //Ivan: Hello!

//////////////////////////////////////////////////////////////


  sayHi("Ivan"); // 
  function sayHi(name) {
    console.log( `Hello, ${name}` );//Hello, Ivan
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Function expression
  let sayHi = function() {
    console.log( "Hello" );
  };
  sayHi()//Hello

  ////////////////////////////////////////////////////////////////////

  function sayHi() {   // 
    console.log( "Hello" );
  }
  let func = sayHi;    
  func(); // Hello  
  sayHi(); // Hello  

///////////////////////////////////////////////////////////////////////////


  sayHi("Ivan"); // ReferenceError: Cannot access 'sayHi' before initialization
  let sayHi = function sayHii(name) {
    console.log( `Hello, ${name}` );
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Array function

let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3

/////////////////////////////////////////////////////////////////////////////////

let double = n => n * 2;
// let double = function(n) { return n * 2 }
console.log( double(3) ); // 6

/////////////////////////////////////////////////////////////////////////////////

let sayHi = () => console.log("Привіт!");

sayHi();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// callback

function learnjS(lang, callback) {
    console.log(`I am studing ${lang}`);
    callback();
}
function done() {
    console.log("I finished that lesson!");
}

learnjS("JavaScript", done);

//////////////////////////////////////////////////////////////////////////////

//A callback is a function passed as an argument to another function.
 function one(a,b){
     console.log(a + b);
 }
 // scope of a function
 function two(number1 = 1, number2 = 2,someFunction) {
     someFunction(number1, number2);
 }
// // how to skip params?
 two(undefined,undefined, one) // 3

 /////////////////////////////////////////////////////////////////////////////


 // foreach has 3 params: value, index, array
 const arr = ['a', 'b', 'c'];
 function logArrayElements(element,index,array){
     console.log(index)
 };
 arr.forEach( logArrayElements ); // 0 1 2

/////////////////////////////////////////////////////////////////////////////////

  // Способи створення IIFE

  (function() {
    console.log("one");
  })();
  
  (function() {
    console.log("two");
  }());
  
  !function() {
    console.log("three");
  }();
  
  +(function () {
    console.log("four");
  })();