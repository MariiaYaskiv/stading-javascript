//1.
const myArray = [ { 
    charname: 'John',
     gender: 'Male',
      surname: 'Rose',
       salary: 100, },
        { charname: 'Margo',
         gender: 'Female',
         surname: 'Rose',
         salary: 1200,
        },
         {charname: 'Lisa',
          gender: 'Male',
           surname: 'Barcley',
            salary: 1600, 
        },
    ];
    //return full names
    //return total salary
    //return all names where surname is Rose
    //Count number of unique surnameспробуйте їх вирішити за 30 хв

    //1return full names
     console.log(findFullName(myArray));function findFullName(char) {
        return char.map(function(p) { return `${p.charname} ${p.surname}` })
        }
        //2return total salary
        const sum = myArray.reduce((accumulator, object) => {
        return accumulator + object.salary;
        }, 0);
        console.log(sum);
        //3return all names where surname is Rose
        console.log(findNames(myArray));function findNames(char) {
        return char.filter(function(p) { return p.surname === "Rose" }).map(function(p) { return p.charname });
        }//4Count number of unique surname
        let uniqueSurname = new Set(myArray.map(x => x.surname)).size
        console.log(uniqueSurname)

        let uniques = myArray.sort((a, b) => a.surname - b.surname)
    .filter((value, index, array) => index === array.length - 1 || array[index + 1].surname!== value.surname);console.log(uniques.length); 
function count(arr, key) {
    res = []; 
    arr.map(obj => obj[key])
        .filter(n => res.indexOf(n) <= -1 && res.push(n))
    return res.length;
}
console.log(count( myArray, 'surname'))



//2.задача по fizz buzz написати цикл до 100 і якщо чилсо ділиться на 3 вивести в консоль fizz, якщо на 5 baz, якщо ділиться на 15 fizzbazz, решта випадків просто виводити число

//3.задача по string reverse написати функцію яка буде віддзеркалювати стрінгу reverseString('hello') // output olleh

//4. камінь ножиці папір

//5. хрестики-нулики



