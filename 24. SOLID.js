//1. Single Responsability Principal
class Printer {
        print()
         {
            console.log('printed')
        }
    }

    const printer = new Printer();
    printer.print()

    class Scaner  {

scan()
 {
    console.log('scan')
}
        }
    
const scaner = new Scaner();

scaner.scan()

/////////////////////////////////////////////////////////////////////////////

//2. Open/Close Principal

class Shape {
    area() {
      throw new Error('Area method should be implemented');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }

  /*В этом примере, мы создали абстрактный класс Shape, который содержит абстрактный метод area. 
  Далее, мы реализовали этот метод в классах Circle и Rectangle,
   таким образом расширяя функциональность абстрактного класса Shape,
    но не меняя его код. Это демонстрирует принцип открытости/закрытости.*/

    //////////////////////////////////////////////////////////////////

    class Animal {
        makeSound();
        //...
    }
    
    class Lion extends Animal {
    makeSound() {
        return 'roar';
    }
    }
    
    class Squirrel extends Animal {
    makeSound() {
        return 'squeak';
    }
    }
    
    class Snake extends Animal {
    makeSound() {
        return 'hiss';
    }
    }

//////////////////////////////////////////////////////////////////////////////

//3. Liscov Substitution Principal

class Human {
    
}

class Supermen extends Human {

}

console.log(Human.method)

///////////////////////////////

interface Eatable {
    eat();
  }
  
  interface Sleepable {
    sleep();
  }
  
  interface Playable {
    play();
  }
  
  class Cat implements Eatable, Sleepable {}
  
  class Dog implements Eatable, Playable {}
  

/////////////////////////////////////////////////////////////////////////////

//4.Dependency Inversion Principle
function worker(stanok) {

}
interface ControlPannel() {

}
function stanok (electricity) {

}
interface PawerGenerator(){

}
function wind(){

}

/////////////////////////////////////////////////////////////////////////////

//5. принцип поділу інтерфейсу

interface MercedesSet {
    getMercedesSet(): any; 
}
interface RenaultSet {
    getRenaultSet(): any;  
}
interface ZaporozhetsSet {
    getZaporozhetsSet(): any;
}
class Mercedes implements MercedesSet {
    getMercedesSet(): any { };
}
class Renault implements RenaultSet {
    getRenaultSet(): any { };
}
class Zaporozhets implements ZaporozhetsSet {
    getZaporozhetsSet(): any { };
}

//////////////////////////////////////////////

class Animal {
    constructor(name) {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk.`)
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim.`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly.`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Leo')

dog.walk()  // Leo can walk.
dog.swim()  // Leo can swim.

const eagle = new Eagle('Vu')

eagle.walk()  // Vu can walk.
eagle.fly()  // Vu can fly.

const whale = new Whale('Bubba')

whale.swim()  // Bubba can swim.