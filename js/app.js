import * as controller from './controllers.js';

document.querySelector('.search__input').focus();
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
    if (controller.validation()) {
        let search = controller.validation();
        container.innerHTML = controller.getSearch(search);
    }
});

// print all moive categories
function printAllMovies() {
    document.querySelector('.trending').innerHTML = controller.trendingMovies();
    document.querySelector('.action').innerHTML = controller.actionMovies();
    document.querySelector('.comedy').innerHTML = controller.comedyMovies();
}