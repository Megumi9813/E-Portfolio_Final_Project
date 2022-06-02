const moviesList = document.getElementById("moviesList");
const searchBar = document.getElementById("searchBar");
let tmdbMovies = [];

searchBar.addEventListener("keyup", (e) => {
    const serachString = e.target.value.toLowerCase();
    const filteredMovies = tmdbMovies.filter((item) => {
        return item.title.toLowerCase().includes(serachString)
    });
    displayMovies(filteredMovies);
});

const loadMovies = async () => {
    let movieData = [];
        try {
            const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ba155109453e8793170ada9ad30b8c6");
            data = await res.json();
            movieData.push(data.results);
        } catch (err) {
            console.log(err);
        }
        movieData.map((results) => {
            const movie = results.map((data) => ({
                title: data.title,
                release: data.release_date,
                review: data.vote_average,
                image: data.backdrop_path
            }))
            tmdbMovies.push(...movie);
            displayMovies(movie);
        })
}

const displayMovies = (movie) => {
    const htmlSting = movie.map((mov) => {
        return `
            <li class="movie">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/original/${mov.image}">
                    <h2>${mov.title}</h2>
                    <p>Realeased: ${mov.release_date}</p>
                    <p>Review: ${mov.vote_average}</p>
                </div>
            </li>
        `;
    }).join("");
    moviesList.innerHTML = htmlSting;
}

loadMovies();







// async function main() {
//     const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1ba155109453e8793170ada9ad30b8c6`);
//     const movieData = await movies.json();
//     const movieListEl = document.querySelector(".movie_list");
//     movieListEl.innerHTML = movieData.results.map(movies => movieHTML(movies)).join("");
//     console.log(movieData)
// }

// main();

// function showChosenMovie(id) {
//     window.location.href = `${window.location.origin}/movie.html`
//     localStorage.setItem("id", id);
// }

// function movieHTML(movies) {
//     return  `<div class="movie" onclick="showChosenMovie(${movies.id})">
//         <div class="movie-card">
//             <img src="https://image.tmdb.org/t/p/original/${movies.backdrop_path}">
//             <div class="movie-card_info">
//                 <h3>${movies.title}</h3>
//                 <p>Released: ${movies.release_date}</p>
//                 <p>Rated: <span>${movies.vote_average}</span><span>/${movies.vote_count}</span></p>
//             </div>
//         </div>
//     </div>`
// }

// const dataMovieTemplate = document.querySelector(".data-movie-template")
// const dataMovieContainer = document.querySelector(".data-movie-container")
// const searchInput = document.querySelector("[data-search]")

// let movieItems = [];

// searchInput.addEventListener("input", e => {
//     const value = e.target.value;
//     console.log(movieItems)
//     movieItems.forEach(movieItem => {
//         const isVisible = movieItem.title.includes(value);
//         movieItem.element.classList.toggle("hide", !isVisible)
//     })
// })

// fetch("https://api.themoviedb.org/3/movie/popular?api_key=1ba155109453e8793170ada9ad30b8c6")
//     .then(res => res.json())
//     .then(data => {
//         movieItems = data.results.map(movie => {
//             const card = dataMovieTemplate.content.cloneNode(true).children[0];
//             const title = card.querySelector("[data-title]");
//             const released = card.querySelector("[data-release]");
//             const rate = card.querySelector("[data-rate]");
//             title.textContent = movie.title;
//             released.textContent = movie.release_date;
//             rate.textContent = movie.vote_average;
//             dataMovieContainer.append(card)
//             return { title: movie.title, element: card}
//         })
//     });