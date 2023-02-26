//Одинак — це породжувальний патерн проектування, який гарантує, що клас має лише один екземпляр, 
//та надає глобальну точку доступу до нього.

//JavaScript

// создаем класс Singleton, который проверяет имеется ли у него свойство instance
// если нет, тогда создается новый экземпляр, но если свойство есть
// тогда мы возвращаем ранее созданный экземпляр класса
class Singleton {
  constructor(data) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.data = data;
  }

  consoleData() {
    console.log(this.data);
  }
};

// в работе Singleton мы можем убедиться создав 2 экземпляра класса
const firstSingleton = new Singleton('firstSingleton');
const secondSingleton = new Singleton('secondSingleton');

// в обоих случаях в консоли выведется одинаковое сообщение
firstSingleton.consoleData(); //firstSingleton
secondSingleton.consoleData(); //firstSingleton


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Sun {
    // Держим ссылку на созданный объект:
    static instance = "I am instance"
  
    // Делаем конструктор приватным:
    constructor() {}
  
    static get instance() {
      // Если объект был создан ранее, возвращаем его:
      if (this.instance) return this.instance
  
      // Иначе создаём новый экземпляр:
      this.instance = new this()
      return this.instance
    }
  }
  
  // При первом вызове создастся новый объект:
  const sun = Sun.instance
  
  // В дальнейшем instance будет возвращать
  // ранее созданный объект:
  const sun1 = Sun.instance
  const sun2 = Sun.instance
  
  console.log(sun === sun1)
  // true
  console.log(sun === sun2)
  // true

  console.log(sun1); //I am instance
  console.log(sun2); //I am instance
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  function Sun() {
    // Проверяем наличие экземпляра созданного ранее.
      // Если св-во instance является объектом,
      // это означает, что конструктор ранее запускался.
      // Поэтому надо просто вернуть существующий экземпляр.
      if ( typeof Sun.instance === 'object' ) {
        return Sun.instance;
      }
      
      // Если Sun.instance === 'undefined',
      // то определяем логику самого конструктора,
      // т.е. инициализируем его свойствами
      // и т.о. создаем новый экземпляр
      this.color = 'yellow';
      this.isBig = true;
      
      // В св-во instance сохраняем ссылку на контекст,
      // т.е. сохраняем созданный экземпляр для повторного использования
      Sun.instance = this;
      
      // Неявный возврат экземпляра
       return this;
  }
  
  var sunn1 = new Sun("one"); // Получаем ссылку на новый экземпляр
  // Sun.instance = null;
  var sunn2 = new Sun("two"); // Получаем ссылку на существующий экземпляр
  console.log(sunn1 === sunn2); // true - ссылки одинаковые
  console.log(sunn1); //Sun { color: 'yellow', isBig: true }
  console.log(sunn2); //Sun { color: 'yellow', isBig: true }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // функція сінглтон, яка має змінну instance, має метод createInstance and returns object which has property getInstance which 
// executes function getInstance with checking if instance exists or no

let Singleton = (function () {
    let instance;

    function createInstance() {
        let object = new Object('I am the instance');
        return object
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();


// function to check are the instance to be returned the same; instance1 and instance2 will return the same object
function run() {
    let instance1 = Singleton.getInstance(); // creating instance
    let instance2 = Singleton.getInstance();  // checking if exists and will return the same instance
    console.log('Same instance? ' + (instance1 === instance2));
}


run();