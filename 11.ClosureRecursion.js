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
  
  