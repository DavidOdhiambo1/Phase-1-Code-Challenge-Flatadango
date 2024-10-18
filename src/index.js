function initialize () {
   //See the first movie's details 
    fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then(movie => {
        const poster = document.getElementById("poster")
        poster.src = movie.poster
        const title = document.getElementById("title")
        title.textContent = movie.title
        const runtime = document.getElementById("runtime")
        runtime.textContent = `Runtime:${movie.runtime} minutes`
        const description = document.getElementById("film-info") 
        description.textContent = movie.description
        const showtime = document.getElementById("showtime")
        showtime.textContent = movie.showtime
        const availableTickets = document.getElementById("ticket-num")
        availableTickets.textContent = movie.capacity - movie.tickets_sold

        // Buy a ticket for a movie
        const button = document.querySelector('button')
        button.addEventListener("click", ()=>{
            if(availableTickets.textContent > 0){
                availableTickets.textContent -=1
            }else {
                availableTickets.textContent = "SOLD OUT"
            }
        })
        console.log(button)
    })

    // See a menu of all movies
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(movies => {
        movies.forEach(movie => {
            const ul = document.getElementById("films")
            const li = document.createElement("li")
            li.classList ="film item"
            li.textContent= movie.title
            ul.appendChild(li)
        })
    })

}

document.addEventListener('DOMContentLoaded', initialize)
