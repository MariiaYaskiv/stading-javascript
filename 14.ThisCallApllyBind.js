// In an object method, this refers to the object.
 const person = {
     name: 'Mariya',
     logName: function() {console.log(this.name)}
 }
 // person.logName();

 ////////////////////////////////////////////////////////////////////////////////////////

// // Alone, this refers to the global object.
 const self = this
 console.log(self) // object Window / object Global

 ///////////////////////////////////////////////////////////////////////////////////////////

// // // In a function, this refers to the global object.
 function logThis(){
     console.log(this)
 }
 logThis(); // object Window / object Global

 ///////////////////////////////////////////////////////////////////////////////////////////

// // In a function, in strict mode, this is undefined.
 function thisInStrict() {
     "use strict";
     const self = this;
     console.log(this);
 }
 thisInStrict(); // undefined

///////////////////////////////////////////////////////////////////////////////////////////////

// Methods like call(), apply(), and bind() can refer this to any object.
 const obj1 = {
     name: 'Mariya',
     surname: 'Yaskiv',
     logFullName: function(){console.log(this.name, this.surname)},
     logPoemAndNationality: function(poem, nationality){ console.log(poem,nationality)}
 }

 const obj2 = {
     name: "Taras",
     surname: "Shevchenko"
 }
 call
 obj1.logFullName(); // Yaroslav Pitsur
 obj1.logFullName.call(obj2); // Taras Shevchenko
 obj1.logPoemAndNationality.call(obj2,'Zapovit','UKR'); // Zapovit UKR

// // apply
 obj1.logFullName.apply(obj2); // Taras Shevchenko
 obj1.logPoemAndNationality.apply(obj2,['Zapovit','UKR']); // Zapovit UKR

// bind
 const bindedFunction = obj1.logFullName.bind(obj2)
 bindedFunction();
