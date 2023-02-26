
//Десеріалізація
//Процес, за допомогою якого формат нижчого рівня (наприклад, переданий через мережу або збережений у сховищі даних) 
//перетворюється на читабельний об’єкт або іншу структуру даних.

//У JavaScript, наприклад, ви можете десеріалізувати рядок JSON в об’єкт, викликавши функцію JSON.parse().

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers); // [ 0, 1, 2, 3 ]

/////////////////////////////////////////////////////////

let userData = '{ "name": "Іван", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user); // { name: 'Іван', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }


//Серіалізація
//Процес, за допомогою якого об’єкт або структура даних перекладається у формат, придатний для передачі через мережу або зберігання (наприклад, у буфер масиву або формат файлу).

//У JavaScript, наприклад, ви можете серіалізувати об’єкт у рядок JSON, викликавши функцію JSON.stringify().

//Значення CSS серіалізуються шляхом виклику функції CSSStyleDeclaration.getPropertyValue().

let student = {
  name: 'Іван',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); //string

console.log(json); //{"name":"Іван","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
