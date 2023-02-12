//Умовні розгалуження: if, '?'

//Блок “if”
let year = 2015
if (year == 2015) {
console.log( 'You ara right!' ); }


//Блок “else”
let year = 2014
if (year == 2015) {
    console.log( 'You ara right!' );
} else {
    console.log( 'You ara wrong!' ); // будь-яке значення, окрім 2015
}

//Декілька умов: “else if”

let year = 2015;

if (year < 2015) {
    console.log( 'So early' );
} else if (year > 2015) {
    console.log( 'So late' );
} else {
    console.log( 'Yes!' );
}

//Умовний оператор ‘?’
let result = умова ? значення1 : значення2;
let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed)


//Декілька ‘?’

let age = 18

let message = (age < 3) ? 'Hi' :
  (age < 18) ? 'Hello' :
  (age < 100) ? 'God day' :
  'You are so old';

  console.log( message );

//Ось як це буде виглядати у випадку з використанням if..else:

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


//Конструкція "switch"

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

//Групування “case”

let a = 3;

switch (a) {
  case 4:
    alert('Вірно!');
    break;

  case 3: // (*) групуємо два блоки `case`
  case 5:
    console.log('Wrong');
    console.log("You are wrong");
    break;

  default:
    console.log('The result is strange');
}
