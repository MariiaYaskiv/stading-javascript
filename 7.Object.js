//Objects

let user = {
    name: "Ivan",
    age: 30,
    "likes birds": true  // 
  };
  user.name = "Petro";
  delete user.age
  console.log(user.name)// Petro
  console.log(user.age) //undefined

  ///////////////////////////////////////////////////////////////////////////////////////


 let user={};//
  user.name='JS'; //
  user.year=2016; //

  console.log(user.name, user.year)//JS 2016

  ////////////////////////////////////////////////////////////////////////////////////////////

  const object = {
    name: "John",
    age: 25,
    isMarried: false,
};
//console.log(object.name);
console.log(object['name']);

/////////////////////////////////////////////////////////////////////////////////////////////////

let fruit = "apple";

let bag = {
  [fruit]: 5, // 
};

console.log( bag.apple ); // 5 

//////////////////////////////////////////////////////////////////////////////////////////////

let user = { name: "Іван", age: 30 };

console.log( "age" in user ); // true

/////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////

 let user = {
    name: "Ivan",
    surname: "Smith"
  };
  user.age = 25; 
  
 
  for (let prop in user) {
   console.log( prop ); // name, surname, age
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////


  let user = {
    name: "Ivan",
    surname: "Smith"
  };
  user.age = 25; 
  

  for (let key in user) {
   console.log( key ); // name, surname, age
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
  //
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
// 
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
