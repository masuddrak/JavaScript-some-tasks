// Loop through an object and print the key-value pairs with their types

// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
let keys=Object.keys(myObject)
for(let element of keys){
    console.log("Key :",element,"|","type : ",typeof myObject[element])
}
// console.log(keys)