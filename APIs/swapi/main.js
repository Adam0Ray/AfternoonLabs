// const { default: axios } = require("axios");

let resBtn = document.getElementById('get-res');

getResidentData = () => {
    axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then(res => {
        //debugger
        //debugger to find res.data.results[0].residents
        let residents = res.data.results[0].residents;  //array of URLs
        return residents.map(url => {                 //passing in array of URLs from previous line
            axios
            .get(url)
            .then(res => renderData(res.data))        //calling renderData function
        })
    })
}

renderData = data => {
    let { name } = data;
    let h2 = document.createElement('h2');
    h2.textContent = name;
    document.getElementById('target').appendChild(h2);
}

var url = "https://swapi.dev/api/planets/?search=alderaan"

resBtn.addEventListener("click",getResidentData);
