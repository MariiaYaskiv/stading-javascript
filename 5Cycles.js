//Цикли
//Цикл “for”
for (let i = 0; i < 3; i++) { // показується 0, далі 1, потім 2
    console.log(i);
  }

//Пропуск частин в “for”

let i = 0; // ми вже маємо оголошену змінну і присвоєне значення

for (; i < 3; i++) { // немає необхідності в "початку"
  alert( i ); // 0, 1, 2
}

//Ми також можемо видалити частину крок:

let i = 0;

for (; i < 3;) {
  alert( i++ );
}


//for...in Object, Array, String
let obj = {model: 'AUDI A8', year: '2019', color: 'brown'}

for (key in obj) {
 // console.log(`${key}`);//model year color
  console.log(`${obj[key]}`);//AUDI A8 2019 brown
}


let arr = ['AUDI A8', '2019', 'brown'];
arr.cost = '$100.000';
for (key in arr) {
  console.log(`${key}`);//model year color
  console.log(`${arr[key]}`);//AUDI A8 2019 brown
  //console.log(`${key} = ${arr[key]}`);
}

var s='JS';
for(let a in s) {
    console.log(a);//0, 1
}

let arr = [3, 5, 7];
arr.foo = "hello";
for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}


var obj={x:5,y:2};
for(a in obj){
    console.log(a);// x, y
}

let user = {
    name: "Іван",
    age: 30,
    isAdmin: true
  };
  for (let key in user) {
    // ключі
    alert( key );  // name, age, isAdmin
    // значення ключів
    alert( user[key] ); // Іван, 30, true
  }

//Впорядкування властивостей об’єкта
let codes ={
    "49": "Німеччина",
    "41": "Швейцарія",
    "44": "Великобританія",
    // ..,
    "1": "США"
 };
 
 for (let code in codes) {
   alert(code); // 1, 41, 44, 49
 }



//for...of  Array, String, Map, Set, об'єкт аргументів 
for (let i of arr) {
   console.log(i); // "3", "5", "7"
}


var s='JS';
for(let a in s)  {
    console.log(a)//0,1
    console.log(s[a]);//j s
};






let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); //  "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); //  "3", "5", "7"
}

//Цикл “while”


let i = 0;
while (i < 3) { // показується 0, далі 1, потім 2
    console.log( i );//0 1 2
  i++;
}



//Цикл “do…while”

let i = 0;
do {
    console.log( i );
  i++;
} while (i < 3); //0 1 2 
