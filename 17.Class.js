// Classes
// sugar
 class Person {
    constructor(name,age){
         this.name = name;
         this.age = age;
     }
     greet(){console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)}
 }

 const mery = new Person('Mery',18);
 mery.favColor = 'blue';
 mery.greet();

// // inheritance, prototype
 class Teacher extends Person {
     constructor(name,age,subject){
         super(name,age) // The super() method refers to the parent class.
         this.subject = subject;
     }
     teach(){console.log(`I teach people ${this.subject}.`)}
      }

 const meryTeacher = new Teacher('mery',28,'JavaScript')
 meryTeacher.greet();
 meryTeacher.teach();

 class Principal extends Teacher {
     constructor(name,age,subject){
         super(name,age,subject)
     }
     school(){console.log('I am the principal of EPAM school')};
 }

 const meryPrincipal = new Principal('mery',28,'JavaScript')
 meryPrincipal.greet();
 meryPrincipal.school();

/////////////////////////////////////////////////////////////////////////////////////////////////////

class DemoClass {
    constructor(){
        this.name = 'demo class'
    }
    // show get
    get logName() {
        console.log(this.name)
    }
    // show set
    set changeName(newName){
        this.name = newName
        console.log(`new name: ${this.name}`)
    }
    static addNums(num1,num2){console.log(num1 + num2)}
}

// DemoClass.addNums(2,2)
// not initialized
// DemoClass.logName()
const demoClass = new DemoClass()
demoClass.logName
demoClass.changeName = 'Jakiro'