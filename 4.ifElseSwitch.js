

// The “if” statement
let year = 2015
if (year == 2015) {
console.log( 'You ara right!' ); }

//////////////////////////////////////////////////////////////////////////////////////////////

//block “else” The “else” clause
let year = 2014
if (year == 2015) {
    console.log( 'You ara right!' );
} else {
    console.log( 'You ara wrong!' ); // any value except 2015
}

////////////////////////////////////////////////////////////////////////////////////////////////

// Several conditions: “else if”

let year = 2015;

if (year < 2015) {
    console.log( 'So early' );
} else if (year > 2015) {
    console.log( 'So late' );
} else {
    console.log( 'Yes!' );
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//Умовний оператор ‘?’ Conditional operator ‘?’
let result = умова ? значення1 : значення2;
let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed)

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Декілька ‘?’ Multiple ‘?’

let age = 18

let message = (age < 3) ? 'Hi' :
  (age < 18) ? 'Hello' :
  (age < 100) ? 'God day' :
  'You are so old';

  console.log( message );

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

//if..else: Here’s how this looks using if..else:

if (age < 3) {
  message = 'Hi';
} else if (age < 18) {
  message = 'Hello';
} else if (age < 100) {
  message = 'God day';
} else {
  message = 'You are so old'';
}
console.log( message );

//////////////////////////////////////////////////////////////////////////////////////////////////

// "switch" 

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Bad' );
    break;
  case 4:
    console.log( 'Good' );
    break;
  case 5:
    console.log( 'So many' );
    break;
  default:
    console.log( 'I don`t know' );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

//“case”

let a = 3;

switch (a) {
  case 4:
    alert('Вірно!');
    break;

  case 3: // (*) group two blocks in one `case`
  case 5:
    console.log('Wrong');
    console.log("You are wrong");
    break;

  default:
    console.log('The result is strange');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

const playFootball = true
const result = playFootball? 'I play football too!' : 'Do you like sport?'
console.log(result)