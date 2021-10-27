document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector("#message")

//FUNCTIONS
addMovie = (event) =>{
event.preventDefault();    
const inputField = document.querySelector("input");

const movie = document.createElement("li");

const movieTitle = document.createElement("span");
movieTitle.textContent = inputField.value;
movie.appendChild(movieTitle)
movie.title.addEventListener("click",crossOffMovie);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);

const unorderedList = document.querySelector("ul")
unorderedList.appendChild(movie);
inputField.value = ''
}



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

}