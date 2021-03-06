

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
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
    event.target.parentNode.remove()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked");

    if( event.target.classList.contains("checked") === true){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(()=> {
        message.classList.add("hide")
    }, 1000)
}