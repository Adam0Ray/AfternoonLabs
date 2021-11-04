const bcrypt = require('bcryptjs');                         //line to require this package
const users = []                                          //blank array of users

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body) 
      const { username, password } = req.body                                  // 2 inputs in body of the log in
      for (let i = 0; i < users.length; i++) {                               //looping
        if (users[i].username === username ) {                               //making sure username exists in database
          const authenticated = bcrypt.compareSync(password, users[i].hash)   //compare user password to the hash of user
          if(authenticated){
            let userToReturn = {...users[i]}                       //assigning variable to the user found in database
            delete userToReturn.hash                      //delete hashed password off of userToReturn prior to sending
            res.status(200).send(userToReturn)            //ok status. send the info of the user thaat was found in database
          }
          // res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5)                                 //genSaltSync(5) is how difficult you want to make has, higher number more difficult, but runs slower
      const hash = bcrypt.hashSync(password, salt)        //variable that holds encrypted password, replacing text sent in
      let user= {                                             //setting user object to be returned later in the users[]
        username,
        email,
        firstName,
        lastName,
        hash
      }
      users.push(user)                           //append users[] array with the newly registered user
      let userToReturn = {...user}                //(...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
      delete userToReturn.hash                //delete hashed password off of userToReturn prior to sending
      res.status(200).send(userToReturn)           // okay status send the user info with has removed from above
    }
}

// console.log('Registering User')
// console.log(req.body)
// users.push(req.body)
// res.status(200).send(req.body)