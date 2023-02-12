"use strict";
/*let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

let num = 4;
console.log(4/0);

const pers = "Alex";
console.log(pers);

const bool = true;

const object = {
    name: "John",
    age: 25,
    isMarried: false,
};
//console.log(object.name);
console.log(object['name']);

let arr = ['plum', 'orange', 6, 'apple', {}, []];
console.log(arr[1]);

alert("Hello");

const result = confirm("Are you here?");
console.log(result);

const answer = prompt("What is your name?", " ");
console.log(answer);


const answers = [];
answer[0] = prompt("Haw old are you?", " ");
answer[1] = prompt("What is your name?", " ");
console.log(answers);

const category = "toys";
console.log(`https://someurl.com/${category}/5`);

const user ="Ivan";
alert(`Hello, ${user}`);

console.log(4 + +"5");

let incr = 10,
decr = 10;
//incr++; //інкремент постфіксний
//decr--; //декремент
//++incr; //префіксна форма зипису
//--decr;
//console.log(incr);
//console.log(decr);

console.log(++incr);
console.log(--decr);

// залишок від ділення двох чисел 5%2

console.log(2*4 == '8');//true
console.log(2*4 === '8');//false строге порівння
// && і - якщо два або більше значень є вірними (і це правда і це правда)
// || або - якщо одне значення являється правдою (або це правда або це правда або це правда)

const isChecked = true,
isClose = false;
console.log(isChecked && isClose); //false
console.log(isChecked || isClose); //true
console.log(isChecked || !isClose); //! оператор отріцанія(якщо була правда він перетворить в не правду і навпаки)*/


let numberOfFilms = +prompt("Haw much films have you watched?", ' ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answerOne = prompt("One of the last wached film?", " "),
answerTwo = prompt("Haw rating you will put on it ?", " "),
answerThree = prompt("One of the last wached film?", " "),
answerFour = prompt("Haw rating you will put on it ?", " ");
personalMovieDB.movies[answerOne] = answerTwo;
personalMovieDB.movies[answerThree] = answerFour;
console.log(personalMovieDB);

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Somuch');}
    else {
        console.log('Ok')
    }
// Тернарний оператор
(num ===50) ? console.log('Ok') : console.log('Error');

switch (num) {
    case 49: 
    console.log('Error');
    break;
    case 100: 
    console.log('Error');
    break;
    case 50: 
    console.log('Ok');
    break;
    default:
        console.log('In enother case');
        break;
}
//Цикли
let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}


let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
   // break; 
continue;}
    console.log(i);
}

//Функції declaration

let numberO = 20; 

function showFirstMessage(text) {
    console.log(text);
    numberO = 10;
}
showFirstMessage("Hello World");
console.log(numberO);


function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 4));


function ret() {
    let num = 50;

    //

    return num;
}
const anotherNum = ret();
console.log(anotherNum);

// Function expression

const logger = function() {
console.log('Hello');
};
logger();

// Стрілочна функція

const calc = (a, b) => a + b;

// or

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

//Методи (допомагаючі функії) і властивості (допомагаючі значення) строк і чисел

 const str = "test";
 console.log(str.length); // довжина строки
 const arr = [1, 2, 3]; 
 console.log(arr.length); // кількість елементів які знах у масиві\
 console.log(str[2]);//отримали індекс s з test
 console.log(str.toUpperCase);// метод зміни регістру. вся строка з великої букви
 console.log(str.toLowerCase);// метод зміни регістру. вся строка з маленької букви
 const fruit = "Some fruit";
 console.log(fruit.indexOf("fruit"));// знайти кусочок строки і сказати з якого індексу вона починається

const logg = "Hello world";
console.log(logg.slice(6, 11)); // вирізати слово з фрази

//числа
const num = 12.2;
console.log(Math.round(num));// округлити число до ближайшого цілого числа

const test = "12.2px";
console.log(parseInt(test)); // переводить число без строки
console.log(parseFloat(test));


//функції колбек callback


function learnjS(lang, callback) {
    console.log(`I am studing ${lang}`);
    callback();
}
function done() {
    console.log("I finished that lesson!");
}

learnjS("JavaScript", done);

//Об єкти (встроєні методи об єктів та свойства)

//const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }, 
    makeTest: function() {
        console.log('Test');
    }
};
options.makeTest();
//console.log(options.name);
//delete options.name; //видалити щось з об єкта
// console.log(Object.keys(options).length);
// let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Option ${i} have the name ${options[key][i]}`);
                    //counter++;
        }
    } else {
            console.log(`Option ${key} have the name ${options[key]}`);
            //counter++;
        }
    }

//деструктуризація об  (розділити на менші кусочки)
const {border, bg} = options.colors;
console.log(border);

// масиви і псевдомасиви
const arr = [1, 2, 3, 6, 8];
arr.pop(); // видаляє останні елементи з нашого масиву
console.log(arr);
arr.push(10); // додає останній елемент в масив
//для того щоб вставити елемент в початок масиву потрібно його спершу 
//перебрати циклом
const arr = [1, 2, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// або
const arr = [1, 2, 3, 6, 8]; //можемо зупинити цикл
for (let value of arr) {
    console.log(value);
}
//length складається з останнього індексу +1, 
// тобто якщо масив має 4 елементи, length додає одиничку в кінці і завжди буде не 4, а 5

// forEach перебрає кожен елемент в масиві (колбек функція)
const arr = [1, 2, 3, 6, 8]; //не можемо зупинити цикл
arr.forEach(function(item, i, arr) {
console.log(`${i}: ${item} всередині масиву ${arr}`);
});  

// функції які трансформують, модифікують елементи 
//зробити послідовність тобто щоб строки були по порядку
const str = prompt('', '');
const products = str.split(', ');
console.log(products);

// можемо взяти список імен і зробити об єднання елементів масиву
console.log(products.join(';'));

// відсортування в алфавітному порядку, строку, якщо число то буде трохи по іншому
products.sort(compareNum);
const arr = [1, 2, 3, 6, 8];
arr.sort();
function compareNum(a, b) {
    return a - b;}// скажемо як саме сортувати  

    //передача даних по ссилці або по значенню
    let a = 5,
    b = a;
    b = b + 5;
    console.log(b);
    console.log(a);
////////////////////////////////////////
    const obj = {
        a: 5,
        b: 1
    };
    const copy = obj;
    copy.a = 10;
    console.log(copy);
    console.log(obj);
////////////////////////////////////

    function copy(mainObj) {
let objCopy = {};
let key;
for (key in mainObj) {
    objCopy[key] = mainObj[key];
}
return objCopy;
    }
    const numbers = {
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4 
        }
    };
    const newNumbers = copy(numbers);
    newNumbers.a = 10;
    console.log(newNumbers); //{ a: 10, b: 5, c: { x: 7, y: 4 } }

    //як з єднати два об єкта до купи
    const add = {
        d: 17,
        e: 20
    };
   console.log(Object.assign(numbers, add));//{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }
  
//щоб зробити копію масиву та змінити якесь значення масиву

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = "fjfijfi";
console.log(newArray);
console.log(oldArray);
/////////////////////////
//оператор розвороту spret
const video = ['youtube', 'vimeo', 'rutube'],
blogs = ['wordpress', 'liverpul', 'bloger'],
internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);
/*[
    'youtube',  'vimeo',
    'rutube',   'wordpress',
    'liverpul', 'bloger',
    'vk',       'facebook'
  ]*/
  ///////////////

  function log(a, b, c) {
      console.log(a);
      console.log(b);
      console.log(c);
  }
  const num = [2, 5, 7];
  log(...num); //2, 5, 7
  
  //////////////////

  const array = ['a', 'b'];
  const newAarray = [...array];
console.log(newAarray); //[ 'a', 'b' ]


//об єктивно орієнтируване програмування ООП
//прототипне орієнтивне програмування 

const soldier = {
    health: 400,
    armor: 100
};
const john = {
    health: 100
};
//john.__proto__ = soldier; // proto устарівший формат замість нього потрібно інше використовувати, написане знизу
//console.log(john.armor); // 100
///

Object.setPrototypeOf(john, soldier);
console.log(john.armor);// 100

/// по іншому зразу застосовуємо метод !!!!!!!
const soldier = {
    health: 400,
    armor: 100
};
const john = {
    health: 100
};
const jonh = Object.create(soldier);
console.log(jonh.armor); // 100

//////////////////////////////

//динамічна типізація (число може стати строкою наприкдад і т д.)
//перетворення в строку
console.log(typeof(String('4')));// string
const  num = 5;
console.log("https://vk.com/catalog/" + num);//https://vk.com/catalog/5
const fontSize = 26 + 'px';
//перетворення в номер
console.log(typeof(Number('4')));//number

console.log(typeof(+ '5'));//number
console.log(typeof(parseInt('15px', 10)));//number

let answ = +prompt('Hello', "");

//в булеві значення
// 0, '', null, undefined, NaN - це все буде false
//1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...');
}
//2)
console.log(typeof(Boolean('4')));//boolean
//3)
console.log(typeof(!!'4'));//boolean
//////////////////////////////////////

//отримання елементів зі сторінки 

// старі методи
//використовуємо id
const box = document.getElementById('box');
console.log(box);

//використовуємо теги
const btns = document.getElementsByTagName('button'); //колекція елементів
console.log(btns); //вся колекція
console.log(btns[1]);//певний елемент з колекції

const btns = document.getElementsByTagName('button')[2]; //вибираємо певний елемент з колекції


//використовуємо класи
const circles = document.getElementsByClassName("circle");//колекція елементів
console.log(circles); //вся колекція

//нові методи
const hearts = document.querySelectorAll('.heart'); //класи
console.log(hearts); // колекція класу серце

hearts.forEach(item => {
    console.log(item);
}); // вивести кожен елемент який знаходиться у псевдомасиві

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);// перший елемент який був у селекторі

const oneHeart = document.querySelector('div'); // по тегу

///////////////
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button'); //колекція елементів
const circles = document.getElementsByClassName("circle");//колекція елеме
const hearts = document.querySelectorAll('.heart'); //класи
const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';//назначення стилю за доп. джаваскрипта
box.style.width = '500px';// інлайн стилі в джаваскрипта
btns[1].style.borderRadius = '100%';// зміна певної кнопки
circles[0].style.backgroundColor = 'red';
box.style.cssText = 'background-color: blue; width: 500px';

//1)
for ( let i =0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
//2)
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//створення нового елементу за допомогою джаваскрипта
const div = document.createElement('div');
//const text = document.createTextNode('I was there');

div.classList.add('black');//

document.body.append(div); //в кінець тегу боді додаємо новий тег дів
document.querySelector('.wrapper').append(div);// всередині нашого класу wrapper
//з явився новий дів, він вставляється в кінець

const wrapper = document.querySelector('.wrapper');

//wrapper.append(div);
wrapper.prepend(div); //вставляється на початок

hearts[0].before(div);//перед яким елементом вставляємо новий дів
hearts[0].after(div);//після якого елементу вставляємо новий дів

circles[0].remove(); // видалити певний елемент 
hearts[0].replaceWith(circles[0]); //замінити сердечко кружeчком

 
div.innerHTML = "Hello world"; //вставлення html структуру в наш дів(тобто текст)
//div.innerHTML = "<h1>Hello world</h1>";
//div.textContent = "Hello" // другий варіант вставлення тексту

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');// вставити кусок html коду
 //перед якимось елементом
 div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');// вставити кусок html коду
 // на початок нашого елементу
 div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');// вставити кусок html коду
 // в кінець нашого елементу
 div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');// вставити кусок html коду
 // після елементу

 //////////////////////
 // собития click...взаємодія з браузером, з користувачем
 //обработчик собитий, заповнити форму і відправити дані, коли наводиться мишка відкривається бургер меню і т д.
 const btn = document.querySelector('button');
// краще такий код не робити бо він не практичний
btn.onclick = function () {
    alert('click');
};
btn.onclick = function () {
    alert('second click');
};// з цих двох функцій буде працювати тільки друга


//такий код краще застосовувати оскільки дві функції будуть робочі, це колбек функції
btn.addEventListener('click', () => {
    alert('click');
});
btn.addEventListener('click', () => {
    alert('second click');
});// при натисканні вибиває табло з першої функції клік а потім з другої функції секонд клік


btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});//при наведенні мишкою в консолі вибиває слово hover


btn.addEventListener('click', (e) => {
    e.target.remove();
});// після клікання мишкою по кнопці видаляє кнопку


const deleteElement = (e) => {
    e.target.remove(); };
    btn.addEventListener('click', deleteElement);//після кліку запрацює функція вище яка видалить кнопку


    //всплиття подій - 
    // створюємо в html документі дів-клас і поміщаємо в нього кнопку, потім 
    //створюємо в джаваскріпті те що нижче написано

    const overlay = document.querySelector('.overlay');
    const deleteElement = (e) => {
        console.log(e.target);
        console.log(e.type);
     };
        btn.addEventListener('click', deleteElement);
        overlay.addEventListener('click', deleteElement);
// подія спрацювала на вложений елемент а потім піднімається на верх по ієрархії дом дерева
//це і є сплиття подій
//сплиття подій це коли обробник події спершу спрацьовує на самому вложеному
//елементі потім на батьках якщо вони є і так вище і вище підіймаючись по ієрархії


//не переходити по ссилці
const link = document.querySelector('a');
link.addEventListener('click', (event) {
event.preventDefault(); //не переходити по ссилці
console.log(event.target);
});


//оброботчик подій на декілька елементів (у нашому випадку на кнопки)
const btn = document.querySelector('button');
btn.forEach(bt => {
    btn.addEventListener('click', deleteElement);
});
/////////////////////////////

//29. Навигация по DOM - элементам, data-атрибуты, преимущество forof

console.log(document.body);//як звернутись до певного елементу дерева
console.log(document.documentElement);//отримуємо html зі всім вмістом який є
console.log(document.body.childNodes);//dom узли які являються дітьми у body
console.log(document.body.firstChild);//перша дитина боді
console.log(document.body.lastChild);//остання дитина баді
console.log(document.querySelector('#current').pannerNode);//отримання батька по певному елементу в середині нього (через ід)
console.log(document.querySelector('#current').pannerNode.pannerNode);//отримання батька батька по певному елементу в середині нього (через ід)
//////////////////////////////
//події на мобільних пристроях
// touchstart воно діє при доторканні на певний елемент на екрані
// touchmove воно діє коли зміщується палець по екрані
// touchend як тільки палець відірвався від елементу, ця дія виконалася
// touchenter коли ведемо пальцем по екрану і наскользуєм туди на що повішана ця подія
// touchleave коли палець продовжив скользати по екрану і пішов за межі того елементу
// touchcancel коли точка дотику більше не реєструється на поверхності

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
    });
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
        console.log(e.targetTouches[0].pageX); // показує координати
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });
});

// touches список всіх пальців які зараз взаємодіють з екраном
// targetTouches всі пальці які взаємодіять з цим конкретним елементом
// changedTouches список пальців які беруть участь у цій події
// hammerjs.github.io -можна підключити по цій ссилці готовий скрипт який це все буде виконувати 
///////////////////////////////////////

//загрузка скриптів на сторінку, як можна її оптимізувати 
//32. Async, defer, динамические скрипты
// Async, defer, вписуються на сторінці html в script
//<script defer src="js/script.js"></script> і можемо його аоставити в боді перед текстом
//defer говорить нам що браузер має загружати сторінку і скрипт має загружати паралельно у фоновому режимі
// async сторінка не чекає асинхронних скриптів, вкладене просто обробляється та відображається
 //дом контент лоадед і скрипти не чекають один на одного
 //скрипт загружається як тільки до нього доходить черга, 
 //загружається у фоновому режимі, запускається як тільки він 
 //був загружений, він взагалі ні на кого не чекає, загружається швидше
 //той скрипт з асінк який має меншу структуру і загружається швидше
//<script async src="js/script.js"></script>
// він не залежить від дом структури та від інших скриптів
//////////////////
//2. ClassList и делегирование событий
///////////////////////////
/////////////////////////
//Функції конструктори
//дункція являється об єктом і ми можемо у неї записати якісь методи чи свойства
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
} //функція конструктор
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
console.log(ivan);
console.log(alex); //User { name: 'Ivan', id: 28, human: true }
//User { name: 'Alex', id: 20, human: true }
//////
//Контекст визова функції
//////////////////////////
///////////////////
/////////////////////
//Методи перебору масиву

//foreach перебирає масив але не повертає новий
// filter, map, (some, every ) перебирає масив та повертає новий масив
const names = ['ivan', 'anna', 'ksenya', 'voldemart']
const shortNames = names.filter(function(name) {
return name.length < 5;
});
console.log(shortNames); // [ 'ivan', 'anna' ]


const answers = ['IvAn', 'AnnA', 'Hello'];
//зробити все нижнім регістром
const result = answers.map(item => {
    return item.toLowerCase();
});
console.log(result);//[ 'ivan', 'anna', 'hello' ]

//every/some - бере масив, перебирає, якщо хоч один елемент підходить, повертає нам true or false

const some = [4, 'qwq', 'rfhiehfuie'];
//console.log(some.some(item => typeof(item) ==='number'));//true
console.log(some.every(item => typeof(item) ==='number'));//false

// reduce щоб збирати масив у одне єдине ціле

const arr = [4, 5, 1, 3, 2, 6];//як отримати суму всіх цих елементів
const res = arr.reduce((sum, current) => sum + current);
console.log(res);//21

const arr = ['apple', 'pear', 'plum'];//як отримати суму всіх цих елементів
const res = arr.reduce((sum, current) => sum +', ' + current);
console.log(res);//apple, pear, plum
або
const arr = ['apple', 'pear', 'plum'];//як отримати суму всіх цих елементів
const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);//apple, pear, plum


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')//[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);//[ 'ivan', 'ann' ]
console.log(newArr);



