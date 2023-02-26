let userr = { name: "Іван" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копіює всі властивості з permissions1 та permissions2 у user
Object.assign(userr, permissions1, permissions2);

// тепер user = { name: "Іван", canView: true, canEdit: true }

//////////////////////////////////////////////////////////////////////////

let useer = { name: "Іван" };

Object.assign(useer, { name: "Петро" });

alert(useer.name); // тепер user = { name: "Петро" }

////////////////////////////////////////////////////////////////////////////

//Ми також можемо використовувати Object.assign щоб замінити цикл for..in для простого клонування:

let user = {
  name: "Іван",
  age: 30
};

let clone = Object.assign({}, user);

//////////////////////////////////////////////////////////////////////////////


// merging objects
const objA = {a: 1, b: 2}
const objB = {b:3, c: 4}

const objC = {...objA, ...objB}
console.log(objC)