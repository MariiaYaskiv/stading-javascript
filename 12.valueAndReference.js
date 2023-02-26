//value vs reference
 let num1 = 10;
 let obj = {
     num2: 20,
 };

 function addNums(a, b) {
    a = 50;
    b.num2 = 50;
 }

 addNums(num1, obj);
 console.log(num1 + obj.num2);