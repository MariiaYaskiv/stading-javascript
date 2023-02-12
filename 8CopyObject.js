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

  //JSON.stringify для перетворення об’єктів в JSON (у вигляді тексту).
  //JSON.parse для перетворення JSON-тексту назад в об’єкт.
  //надійно копіює глибоко вкладені об’єкти/масиви!

nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);

// [[1], [2]]
// [[1, 300], [2]]
// Два абсолютно окремі масиви!