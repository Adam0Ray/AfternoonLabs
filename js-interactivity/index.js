

const message = document.querySelector("#message")

//FUNCTIONS
let addMovie = (event) =>{
    event.preventDefault();    
    let inputField = document.querySelector("input");

    let movie = document.createElement("li");

    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    movieTitle.addEventListener("click",crossOffMovie);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    let unorderedList = document.querySelector("ul");
    unorderedList.appendChild(movie);
    inputField.value = "";
}

let form = document.querySelector("form")
form.addEventListener("submit", addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

function crossOffMovie(event){
    event.target.classList.toggle("checked");

    if( event.target.classList.contains("checked") === true){
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back!"
    }
    revealMessage()
}

function revealMessage() {
    setTimeout(()=> {
        message.classList.add("hide")
    }, 1000)
}