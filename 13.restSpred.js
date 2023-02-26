//rest
function withParams(a,b,...rest){
         console.log( a,b,...rest)
        console.log(arguments.length)
     }
 withParams(2,5,6,7,8,9,0); 

////////////////////////////////////////////////////////////////////////////////////////////

 // spread operator
 const arr1 = [1,2,3]
 const arr2 = [4,5,6]
  const arr3 = arr1.concat(arr2)
  console.log(arr3)

 const arr4 = [0, ...arr1, ...arr2, 7,8,9]
 console.log(arr4)

////////////////////////////////////////////////////////////////////////////////////////////

// merging objects
 const objA = {a: 1, b: 2}
 const objB = {b:3, c: 4}

 const objC = {...objA, ...objB}
 console.log(objC)
