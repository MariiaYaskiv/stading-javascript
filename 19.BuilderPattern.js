// Builder позволяет создавать разные объекты с заданным состоянием, используя один и тот же код.
//Будівельник — це породжувальний патерн проектування, що дає змогу створювати складні об’єкти крок за кроком.
// Будівельник дає можливість використовувати один і той самий код будівництва для отримання різних відображень об’єктів.
//JavaScript

class Apartment {
  constructor(options) {
    for (const option in options) {
      this[option] = options[option];
    }
  }
  
  getOptions() {
    return `How many rooms: ${this.roomsNumber}, square: ${this.square}, fllor: ${this.floor}`;
  }
}

class ApartmentBuilder {
  setRoomsNumber(roomsNumber) {
    this.roomsNumber = roomsNumber;

    return this;
  }

  setFloor(floor) {
    this.floor = floor;

    return this;
  }

  setSquare(square) {
    this.square = square;

    return this;
  }

  build() {
    return new Apartment(this);
  }
}

const bigApartment = new ApartmentBuilder()
  .setFloor(10)
  .setRoomsNumber(5)
  .setSquare(120)
  .build();

console.log(bigApartment.getOptions()); //How many rooms: 5, square: 120, fllor: 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Допустим, мы пишем конструктор кофейных напитков. Все они готовятся на основе эспрессо, 
//но может быть много дополнительных ингредиентов.

class Drink {
  constructor(settings) {
    const { base, milk, sugar, cream } = settings

    this.base = base
    this.milk = milk
    this.sugar = sugar
    this.cream = cream
  }
}

//Мы можем добавить молоко, сахар и сливки.

//Чтобы было удобно создавать объекты напитков, мы будем указывать билдеру шаг за шагом — что добавить к кофе:

class DrinkBuilder {
  settings = {
    base: 'espresso',
  }

  addMilk = () => {
    this.settings.milk = true
    return this
  }

  addSugar = () => {
    this.settings.sugar = true
    return this
  }

  addCream = () => {
    this.settings.cream = true
    return this
  }

  addSyrup = () => {
    this.settings.syrup = true
    return this
  }

  build = () => new Drink(this.settings)
}

//По умолчанию в настройки мы добавляем только эспрессо, но при вызове методов add...() добавляем в настройки новый ингредиент.
// При вызове build() возвращаем собранный напиток:

const latte = new DrinkBuilder().addMilk().build()
const withSugarAndCream = new DrinkBuilder().addSugar().addCream().build()
console.log(latte)//Drink {base: 'espresso', milk: true, sugar: undefined, cream: undefined }
console.log(withSugarAndCream) //Drink { base: 'espresso', milk: undefined, sugar: true, cream: true }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheeze = builder.cheeze || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}

class BurgerBuilder {

    constructor(size) {
        this.size = size
    }

    addPepperoni() {
        this.pepperoni = true
        return this
    }

    addLettuce() {
        this.lettuce = true
        return this
    }

    addCheeze() {
        this.cheeze = true
        return this
    }

    addTomato() {
        this.tomato = true
        return this
    }

    build() {
        return new Burger(this)
    }
}

const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()

    console.log(burger) //Burger {size: 14, cheeze: false, pepperoni: true, lettuce: true, tomato: true }