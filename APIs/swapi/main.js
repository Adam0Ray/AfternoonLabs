const { default: axios } = require("axios");


axios({
    method: 'GET',
    url: 'https://swapi.dev/api/planets/?search=alderaan',
    headers: {
        'results': 'residents'
    }
}).then(resp => {
    console.log(resp.data);
}).catch(err => {
    // Handle Error Here
    console.error(err);
});




// const axios = require('axios').default;

// // const baseURL = 'https://swapi.dev/api/'


// let getResidents = document.querySelector("button")

// getResidents.addEventListener('click', () => {
//     // console.log("buttonClicked")
//     return axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
//     .then( res => {
//         for (let i = 0; i < response.data.length; i++){
//             const para = document.createElement("p");
//              para.textContent = response.data[i]
//              console.log(para)
//              body.appendChild(para)
//         }
//         console.log(res)
//     })
// })




// As you complete this section, be sure to test along the way using Postman and console.log``s 
// 1. Now you'll modify the function to make an ``axios call to SWAPI 
// 2. Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation) 
// 3. Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs. 
// 4. In the loop, make another get request for each URL in the array. 
// 5. You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.

// getResidents.addEventListener('click', () => {
//     console.log("buttonClicked")
//     axios.get(`${baseURL}planets/?search=alderaan`)
//     .then( 
//         for residents in results)
// })
// console.log(getResidents)