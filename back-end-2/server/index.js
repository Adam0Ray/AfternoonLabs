const express = require('express')         //imports express into file to use
const cors = require('cors')                //imports cors into file to use
const app = express()                       //invokes express which creates server connection
app.use(express.json())                      //allows accepting JSON through express
app.use(cors())                              //allows CORS through express(cross origin resource sharing) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

const {                               //setting up endpoints
    getHouses,
    deleteHouses,
    createHouse,
    updateHouse
} = require('./controller')            //pulls from controller.js

app.get(`/api/houses`,getHouses)             //endpoint to send getHouses to client, fires upon recieving request, sends res
app.delete(`/api/houses/:id`, deleteHouses)  //endpoint to send deleteHouses to client, fires upon recieving request, sends res
app.post(`/api/houses`, createHouse)          //endpoint to send createHouse to client, fires upon recieving request, sends res
app.put(`/api/houses/:id`, updateHouse)   //endpoint to send updateHouse to client, fires upon recieving request, sends res










app.listen(4004, () => console.log(`running on 4004`))