////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
const multiply = (num1, num2, callback) => callback(num1 * num2)

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// multiply(4, 3, answer => {
//   console.log('The answer is ' + answer) //should console.log 12
// })

//logs The answer is 12



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
const first = (arr, callback) => callback(arr[0])

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// first(names, firstName => {
//   console.log('The first name in names is ' + firstName)
// })

//logs The first name in names is Tyler



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
const last = (arr, callback) => callback(arr[names.length-1])

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// last(names, lastName => {
//   console.log('The last name in names is ' + lastName)
// })
//logs The last name in names is Cahlan


////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
const contains = (arr, name, callback) => {
  if (arr.includes(name) === true){
    callback(true)
  } else {
    callback(false)
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// contains(names, 'Colt', result => {
//   if(result === true){
//     console.log('Colt is in the array')
//   } else {
//     console.log('Colt is not in the array')
//   }
// })
//logs Colt is in the array



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
const uniq = (arr, callback) =>{
  for (let i = 0; i < arr.length; i++){         //loop i
    for (let x = i + 1; x < arr.length; x++){    //loop x starting at index after i
      if (arr[i] === arr[x]){       //if strictly equal/duplicated
        arr.splice(x,1)             //splice out at the x index 1 value
        x--                         //decrement x
      }
    }
  }
callback(arr)
}
/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
// uniq(names, uniqArr => console.log(`The new names array with all the duplicate items removed is ${uniqArr}.`))
//logs The new names array with all the duplicate items removed is Tyler,Cahlan,Ryan,Colt,Blaine.


////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
const each = (arr, callback) => arr.forEach((element, index) => callback(element, index))

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
// each(names, (element,index) => console.log(`The item at index ${index} is ${element}`))
//logs 
// The item at index 0 is Tyler
// The item at index 1 is Cahlan
// The item at index 2 is Ryan
// The item at index 3 is Colt
// The item at index 4 is Tyler
// The item at index 5 is Blaine
// The item at index 6 is Cahlan

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.
/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/
// CODE HERE 
const getUserById = (arr, id, callback) =>{
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].id === id ) {
      return callback(arr[i])
    }
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })
//logs The user with the id 16t has the email of ryan@gmail.com the name of Ryan and the address of 192 East 32 North
////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE
const addingFactory = x => y => x + y
/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE
const addTen = addingFactory(10)
/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE
console.log(addTen(20))  //logs 30
console.log(addTen(50))  //logs 60
/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE
const addThree = addingFactory(3)
console.log(addThree(3))

//logs 6