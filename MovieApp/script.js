const API_URL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API ='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const moviesContainer =  document.querySelector(".moviesContainer");
const searchInput = document.querySelector(".searchInput");
let titles = [];
let movies  =[];

function createMovieElement(title, rating, imageUrl) {
  const movieDiv = document.createElement("div");
  movieDiv.className = "movie";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;
  img.className = "src";

  const infoDiv = document.createElement("div");
  infoDiv.className = "movieinfo";

  const titleP = document.createElement("p");
  titleP.className = "movieTitle";
  titleP.textContent = title;

  const ratingP = document.createElement("p");
  ratingP.className = "movieRating";
  ratingP.textContent = rating;

 const rate = Number(rating);
  if (rate >= 7) {
    ratingP.style.color = "green";
  } else if (rate >= 5) {
    ratingP.style.color = "orange";
  } else {
    ratingP.style.color = "red";
  }

  infoDiv.appendChild(titleP);
  infoDiv.appendChild(ratingP);

  movieDiv.appendChild(img);
  movieDiv.appendChild(infoDiv);

  moviesContainer.appendChild(movieDiv);
}

function displayMovies(movieList) {
  moviesContainer.innerHTML = "";
  movieList.forEach(movie => {
    const title = movie.title;
    const rating = movie.vote_average;
    const imageUrl = IMG_PATH + movie.poster_path;
    createMovieElement(title, rating.toFixed(2), imageUrl);
  });
}

async function getMovies() {
  let response = await fetch(API_URL);
  let data = await response.json();

   // Loop through all movies
    data.results.forEach(movie => {
      titles.push(movie.title);
      movies.push(movie);
    });
    displayMovies(movies);
    
    searchInput.addEventListener('input',()=>{
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTitles = titles.map(title=>title.toLowerCase().trim()).filter(title => title.toLowerCase().includes(searchTerm))
    const filteredMovies = movies.filter(movie => filteredTitles.includes(movie.title.toLowerCase().trim()))
    displayMovies(filteredMovies);
})
}

getMovies();

