function initialize () {
    
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
        console.log(movie)
    })
}

document.addEventListener('DOMContentLoaded', initialize)
