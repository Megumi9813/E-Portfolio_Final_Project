// const id = localStorage.getItem("id");

// async function main() {
//     const eachMovie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1ba155109453e8793170ada9ad30b8c6`);
//     const eachMovieData = await eachMovie.json();
//     const eachMovieEl = document.querySelector(".each_movie");
//     eachMovieEl.innerHTML = [eachMovieData].map(movie => eachMovieHTML(movie)).join("");
// }

// main();



// function eachMovieHTML(movie) {
//     return `<h2 class="movie_title">${movie.title}</h2>
//     <div class="movie_info_wrapper">
//         <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
//         <div class="movie_info">
//             <div class="revenue"><i class="fa-solid fa-sack-dollar movie_info-icon"></i>Box office: ${movie.revenue}</div>
//             <div class="overview"><i class="fa-solid fa-book movie_info-icon"></i>Overview: <br>${movie.overview}</div>
//             <div class="runtime"><i class="fa-solid fa-clock movie_info-icon"></i>Run Time: ${movie.runtime}</div>
//             <div class="rate"></div>
//             <p><span>${movie.vote_average}</span><span>/${movie.vote_count}</span></p>
//         </div>
//     </div>`
// }