var foo = ["one", "two", "three"];

// без деструктуризацієї
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// з деструктуризацією
var [one, two, three] = foo;


const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const firstName = profile[0];
const lastName = profile[1];
const website = profile[2];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"




const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"






const [firstName, lastName, website] = [
    "Oluwatobi", 
    "Sofela", 
    "codesweetly.com"
  ];
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"


  let firstName, lastName, website;

[firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"




const profile = {
    firstName: "Oluwatobi", 
    lastName: "Sofela", 
    website: "codesweetly.com"
  };
  
  const firstName = profile.firstName;
  const lastName = profile.lastName;
  const website = profile.website;
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"

  const profile = {
    firstName: "Oluwatobi", 
    lastName: "Sofela", 
    website: "codesweetly.com"
  };
  
  const { firstName: firstName, lastName: lastName, website: website } = profile;
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"


  function display({name:userName, age:userAge}){
    console.log(userName, userAge);
}
function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
}
let user = {name:"Alice", age:33, email: "alice@gmail.com"};
 
let numbers = [3, 5, 7, 8];
 
display(user);  // Alice 33
sum(numbers);   // 15