 function compareKeys() {
     const objAKeys = Object.keys(objA)
     const objBKeys = Object.keys(objB)
     return objAKeys.every( (key, index) => key == objBKeys[index] )
 }
 console.log(compareKeys())

 //////////////////////////////////////////////////////////////////////////////////////

 function compareValues() {
     const objAValues = Object.values(objA)
     const objBValues = Object.values(objB)
     return objAValues.every( (key, index) => key == objBValues[index] )
 }
 console.log(compareValues())

 /////////////////////////////////////////////////////////////////////////////////////////
 
 function compareWitJSON() {
     const a = JSON.stringify(objA)
     const b = JSON.stringify(objB)
     return a == b
 }
 console.log(compareWitJSON())