//constructor
 function Person(name,age){
     this.name = name;
     this.age = age;
     this.greet = function(){console.log(`Hello, my name is ${name} and I am ${age} years old.`)}
 }

 const mery = new Person('Yaroslav',18);
 mery.favColor = 'blue';
 mery.greet();

// // inheritance, prototype
 const teacher = Object.create(mery);
 teacher.subject = 'Python';
 teacher.teach = function(){console.log(`I teach people ${this.subject}.`)}
 teacher.greet();
 teacher.teach();

 const principal = Object.create(teacher);
 principal.school = function(){console.log('I am the principal of EPAM school')};
 principal.greet();
 principal.school();

 console.log(principal.dog)
 //null -> Object -> Person -> mery -> teacher -> principal

// // another way to assign properties
 const student = Object.create(mery, {
     name: {value: 'Anna', writable: false, configurable: false },
     age: {value: 20, writable: true, configurable: false},
     favColor: {value: 'Green', enumerable: true},
 })

 delete student.name
 console.log(student.name)
 student.age = 21
 console.log(student.age)
 delete student.age
 console.log(student.age)
 console.log(student.age)
 console.log(student)
 for(const x in student){ console.log(x)}
