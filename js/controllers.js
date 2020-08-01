import { movies } from './movie_data.js';

const movieData = [...movies];

export let validation = () => {
    let searchField = document.querySelector('.search__input').value;
    if (searchField === '') {
        alert('Please enter some text');
        return false;
    }
    return searchField;
}

export const getSearch = (search) => {
    const movies = movieData.filter(movie => movie.title.includes(search));
    let output = '';
    movies.forEach(movie => {
        output += movieCard(movie)
    });
    return output;
}

export const comedyMovies = function() {
    let output = '';
    movieData.forEach(movie => {
        if (movie.category === 'comedy') {
            output += movieCard(movie);
            }
        });
    return output;
}

export const actionMovies = function() {
    let output = '';
    movieData.forEach(movie => {
        if (movie.category === 'action') {
            output += movieCard(movie);
            }
        });
    return output;
}

export const trendingMovies = function () {
    let output = '';
    movieData.forEach(movie => {
        if (movie.votes > 30000) {
            output += movieCard(movie);
        }
    });
    return output;
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
