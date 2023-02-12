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
