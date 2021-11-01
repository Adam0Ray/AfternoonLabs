const express = require('express'); //imports express into file to use
const cors = require('cors');       //imports cors into file to use
const app = express();               //invokes express which creates server connection
app.use(express.json());              //allows accepting JSON through express
app.use(cors());                      //allows CORS through express(cross origin resource sharing) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

app.get("/api/users", (req, res) =>{                                  //endpoint to send friends array to client, fires upon recieving request, sends res
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

app.get("/weather/:temperature", (req, res) => {                      //endpoint to send phrase to client, fires upon recieving request, sends res
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;           //creates header3 styling with temporate literal in string
    res.status(200).send(phrase);                                      //navigating to either http://localhost:4000/weather/hot or to http://localhost:4000/weather/cold
  });


app.listen(4000, () => console.log("Server is running on port 4000"));   //listens for the given port, and console logs that the server is running with nodemon