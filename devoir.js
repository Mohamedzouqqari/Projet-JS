const apiKey = '8949203e';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + apiKey;

async function fetchMovieData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayMovieData(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données du film:', error);
    }
}

function displayMovieData(movieData) {
    const movieContainer = document.getElementById('movieContainer');
    
    const titleElement = document.createElement('h1');
    titleElement.textContent = movieData.Title;

    const plotElement = document.createElement('p');
    plotElement.textContent = movieData.Plot;

    const yearElement = document.createElement('p');
    yearElement.textContent = `Année: ${movieData.Year}`;

    const directorElement = document.createElement('p');
    directorElement.textContent = `Réalisateur: ${movieData.Director}`;

    const actorsElement = document.createElement('p');
    actorsElement.textContent = `Acteurs: ${movieData.Actors}`;

    const countryElement = document.createElement('p');
    countryElement.textContent = `Pays: ${movieData.Country}`;

    const genreElement = document.createElement('p');
    genreElement.textContent = `Genre: ${movieData.Genre}`;

    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Note: ${movieData.imdbRating}`;

    const runtimeElement = document.createElement('p');
    runtimeElement.textContent = `Durée: ${movieData.Runtime}`;

    const languageElement = document.createElement('p');
    languageElement.textContent = `Langue: ${movieData.Language}`;

    const awardsElement = document.createElement('p');
    awardsElement.textContent = `Récompenses: ${movieData.Awards}`;

    const boxOfficeElement = document.createElement('p');
    boxOfficeElement.textContent = `Recettes au box-office: ${movieData.BoxOffice}`;

    const ratedElement = document.createElement('p');
    ratedElement.textContent = `Classé: ${movieData.Rated}`;

    const releasedElement = document.createElement('p');
    releasedElement.textContent = `Date de sortie: ${movieData.Released}`;

    const typeElement = document.createElement('p');
    typeElement.textContent = `Type: ${movieData.Type}`;

    const websiteElement = document.createElement('p');
    websiteElement.innerHTML = `Site Web: <a href="${movieData.Website}" target="_blank">${movieData.Website}</a>`;

    const ratingsElement = document.createElement('div');
    ratingsElement.innerHTML = `<h3>Notes</h3>`;
    movieData.Ratings.forEach(rating => {
        ratingsElement.innerHTML += `<p>${rating.Source}: ${rating.Value}</p>`;
    });

    const posterElement = document.createElement('img');
    posterElement.src = movieData.Poster;
    posterElement.alt = movieData.Title;

    movieContainer.appendChild(titleElement);
    movieContainer.appendChild(plotElement);
    movieContainer.appendChild(yearElement);
    movieContainer.appendChild(directorElement);
    movieContainer.appendChild(actorsElement);
    movieContainer.appendChild(countryElement);
    movieContainer.appendChild(genreElement);
    movieContainer.appendChild(ratingElement);
    movieContainer.appendChild(runtimeElement);
    movieContainer.appendChild(languageElement);
    movieContainer.appendChild(awardsElement);
    movieContainer.appendChild(boxOfficeElement);
    movieContainer.appendChild(ratedElement);
    movieContainer.appendChild(releasedElement);
    movieContainer.appendChild(typeElement);
    movieContainer.appendChild(websiteElement);
    movieContainer.appendChild(ratingsElement);
    movieContainer.appendChild(posterElement);
}

fetchMovieData();
