//Область видимості змінної, замикання

function f() {
    let value = 123;
  
    return function() {
      console.log(value);
    }
  }
  
  let g = f();
  g()
  
  //////////////////////////////////////////////////////////////////////////////////////////////


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
  
  //////////////////////////////////////////////////////////////////////////////////////////////////


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
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  

  ///////////////////////////////////////////////////////////////////////////////////////////////////


  //nested scope
 const z = 4
  function parent(){
     const a = 1;
    inner();
     function inner(){
         const b = 2;
         function innerInner(){
             const c = 3;
             console.log(c + b + a + z)
         }
         innerInner();
     }
}
 parent() // 10


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // closure is a nested function that has acces to its parent scope even after the parent function is closed

 function makeFunc() {
     var name = 'Mozilla';
     function displayName() {
       console.log(name);
     }
    return displayName;
   }
  
   var myFunc = makeFunc();
   myFunc();

 const add = (function () {
     let counter = 0;
     return function () {counter += 1; return counter}
   })()
   console.log(add())
   console.log(add())
   console.log(add())


   /////////////////////////////////////////////

   const createCounter = () => {
    let count = 0;
  
    return ({
      click: () => count += 1,
      getCount: () => count.toLocaleString()
    });
  };
  
  const counter = createCounter();
  
  counter.click();
  counter.click();
  counter.click();
  
  console.log(counter.getCount()); 