//loops
//loop “for”
for (let i = 0; i < 3; i++) { // показується 0, далі 1, потім 2
    console.log(i);
  }
////////////////////////////////////////////////////////////////////

//Пропуск частин в “for”

let i = 0; // ми вже маємо оголошену змінну і присвоєне значення

for (; i < 3; i++) { // немає необхідності в "початку"
 console.log( i ); // 0, 1, 2
}

///////////////////////////////////////////////////////////////////////

let i = 0;
for (; i < 3;) {
  console.log( i++ );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for...in Object, Array, String
let obj = {model: 'AUDI A8', year: '2019', color: 'brown'}

for (key in obj) {
 // console.log(`${key}`);//model year color
  console.log(`${obj[key]}`);//AUDI A8 2019 brown
}

////////////////////////////////////////////////////////////////////////

let arr = ['AUDI A8', '2019', 'brown'];
arr.cost = '$100.000';
for (key in arr) {
  //console.log(`${key}`);//0,1,2,cost
  console.log(`${arr[key]}`);//AUDI A8 2019 brown $100.000
  //console.log(`${key} = ${arr[key]}`);
}

////////////////////////////////////////////////////////////////////////

var s='JS';
for(let key in s) {
    console.log(key);//0, 1
}


var s='JS';
for(let a in s)  {
    console.log(a)//0,1
    console.log(s[a]);//j s
};

///////////////////////////////////////////////////////////////////////

let arr = [3, 5, 7];
arr.foo = "hello";
for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}

////////////////////////////////////////////////////////////////////////

var obj={x:5,y:2};
for(a in obj){
    console.log(a);// x, y
}

///////////////////////////////////////////////////////////////////////////

let user = {
    name: "Ivan",
    age: 30,
    isAdmin: true
  };
  for (let key in user) {
    //
    console.log( key );  // name, age, isAdmin
    // 
    console.log( user[key] ); // Ivan, 30, true
  }

  ///////////////////////////////////////////////////////////////////////////

//
let codes ={
    "2": "a",
    "3": "b",
    "5": "c",
    // ..,
    "1": "d"
 };
 
 for (let code in codes) {
  console.log(code); // 1, 2, 3, 5
 }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for...of  Array, String, Map, Set, 

let arr = [3, 5, 7];
for (let i of arr) {
   console.log(i); //  "3", "5", "7"
}

////////////////////////////////////////////

const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

////////////////////////////////////////////////////////////////////////////////////////////////////////
//loop “while”


let i = 0;
while (i < 3) { // показується 0, далі 1, потім 2
    console.log( i );//0 1 2
  i++;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//loop “do…while”

let i = 0;
do {
    console.log( i );
  i++;
} while (i < 3); //0 1 2 
