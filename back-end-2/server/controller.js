const houses = require('./db.json')                      // pulls houses from db.json file
let globalId = 4                                         // there are already 3 houses in db.json

module.exports = {                              //export function for controller files using express
    getHouses: (req,res) => res.status(200).send(houses),
    
    deleteHouses: (req,res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id) //index is number value of request params id
        houses.splice(index,1)                              //remove one value at the identified index
        res.status(200).send(houses)         //send ok status and send houses with the house removed from splice
    },

    createHouse: (req,res) =>{
        let { address, price, imageURL } = req.body           //destructuring and assigning to body
        let newHouse = {                                //setting variable
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)                   //push newHouse that client creates into houses 
        res.status(200).send(houses)            //ok status and send houses to client 
        globalId++                            //adds 1 to 4, so next time we make a house, its 5
    },
    updateHouse: (req,res) => {
        let {id} = req.params                          
        let {type} = req.body
        let index = houses.findIndex(elem => +elem.id === +id)
        if (houses[index].price <= 10000 && type === 'minus'){
            houses[index].price = 0                                   //stops the decrease at 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000                              //adds 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000                             //subtract 10000
            res.status(200).send(houses)
        } else{
            res.sendStatus(400)                                    // error code if nothing else is true
        }

    }

}