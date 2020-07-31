import { movies } from './movie_data.js';

document.querySelector('.search__input').focus();

const movieData = [...movies];
const searchBtn = document.querySelector('.search__btn');

// Print all Movies
printAllMovies();

// Remove rented movies
window.addEventListener('click', function (event) {
    if (event.target.classList[1] == 'movie__btn') {
        let cardParent = event.target.parentElement.parentElement.parentElement;
        let card = event.target.parentElement.parentElement;
        if (confirm('You want to rent movie? 🙄😏')) {
            cardParent.removeChild(card);
            alert('Movie Rented 😘🤩');
        }
    }
});

// Search for movies by name
searchBtn.addEventListener('click', event => {
    event.preventDefault();
    let container = document.querySelector('.container');
    if (validateField()) {
        let search = validateField();
        container.innerHTML = getSearch(search);
    }
});

function getSearch(search) {
    const movies = movieData.filter(movie => movie.title.includes(search));
    let output = '';
    movies.forEach(movie => {
        output += movieCard(movie)
    });
    return output;
}

function getTrendingMovies() {
    let output = '';
    movieData.forEach(movie => {
        if (movie.votes > 30000) {
            output += movieCard(movie);
        }
    });
    return output;
}

function getActionMovies() {
    let output = '';
    movieData.forEach(movie => {
        if (movie.category === 'action') {
            output += movieCard(movie);
            }
        });
    return output;
}

function getComedyMovies() {
    let output = '';
    movieData.forEach(movie => {
        if (movie.category === 'comedy') {
            output += movieCard(movie);
            }
        });
    return output;
}

// Get moive categories
function printAllMovies() {
    document.querySelector('.trending').innerHTML = getTrendingMovies();
    document.querySelector('.action').innerHTML = getActionMovies();
    document.querySelector('.comedy').innerHTML = getComedyMovies();
}

function validateField() {
    let searchField = document.querySelector('.search__input').value;
    if (searchField === '') {
        alert('Please enter some text');
        return false;
    }
    return searchField;
}

// Movie card templating
function movieCard(movie) {
    return `
    <div class="card">
        <div class="card__header">
            <h3 class="movie__title">${ movie.title.toUpperCase()}</h3>
            <div class="info">available</div>
        </div>
        <div class="card__body">
            <img src="./img/${movie.coverImage}" alt="movie-cover-photo" class="movie__coverImage">
        </div>
        <div class="card__footer">
            <div class="movie__details">
                <p class="movie__description">${movie.description}</p>
                <ul class="movie__misc">
                    <li class="misc__wrapper">
                        <span class="property">Director: </span>
                        <span class="value">${movie.director}</span>
                    </li>
                    <li class="misc__wrapper">
                        <span class="property">Runtime: </span>
                        <span class="value">${movie.runtime}</span>
                    </li>
                    <li class="misc__wrapper">
                        <span class="property">Votes: </span>
                        <span class="value">${movie.votes}</span>
                    </li>
                    <li class="misc__wrapper">
                        <span class="property">Stars:</span>
                        <span class="value">${movie.stars.join(', ')}</span>
                    </li>
                </ul>
            </div>
            <button class="btn movie__btn" id="${movie.id}">Rent Now</button>
        </div>
    </div>`
}