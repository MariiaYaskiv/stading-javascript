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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"


///////////////////////////////////////////////////////////////////////////////////////////////////



const [firstName, lastName, website] = [
    "Oluwatobi", 
    "Sofela", 
    "codesweetly.com"
  ];
  
  console.log(firstName); // "Oluwatobi"
  console.log(lastName); // "Sofela"
  console.log(website); // "codesweetly.com"

///////////////////////////////////////////////////////////////////////////////////////////////////////

  let firstName, lastName, website;

[firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"


///////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////

function sum([a, b, c]){
    const result = a + b + c;
    console.log(result);
}
sum([1,2,3])
//////////////////////////////////////////////////////////////////////////////////////////

const destArr = ['Kyiv','London','Paris'];
 const kyiv = destArr[0];
 const london = destArr[1];
 const paris = destArr[2];
 const [kyiv, london, paris] = destArr;
 console.log(kyiv,london,paris)

//////////////////////////////////////////////////////////////////////////////////////////////////
 const teacher = {
       firstName: 'Mariya',
       lastName: 'Yaskiv',
       salary: undefined
   }
  
    delete teacher.salary;
   teacher.subject = 'JavaScript';
  
  
   const firstName = teacher.firstName;
   const lastName = teacher.lastName;
   const subject = teacher.subject;
   console.log(firstName, lastName, subject)
  
  // show destructuring, alias
   const firstName = 'Taras';
   const { firstName: objectFirstName,lastName,subject } = teacher;
   console.log(objectFirstName,lastName,subject)
  


  // functions can also use destructuring
 function destFunction(object){
     const firstName = object.firstName;
     const lastName = object.lastName;
     const subject = object.subject;
     console.log(firstName,lastName,subject)
 }
 function destFunction({firstName,lastName,subject}){
     console.log(firstName,lastName,subject)
 }
 destFunction(teacher);