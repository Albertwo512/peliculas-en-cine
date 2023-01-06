
var allMovies

function searchMovies() {
    // Obtener input del usuario
    const searchInput = $('#searchMovieInput').val()
    // Filtrar peliculas basada en el input del usuario
    const movieSearchResults = allMovies.filter(movie => movie.original_title.toLowerCase().includes(searchInput));

    // Llenar peliculas
    fillMovies(movieSearchResults)
}


function fillMovies(movies) {
    // Basear todas las peliculas para cuando buscamos
    $('.movie_name').empty()
    
  movies.forEach(movie => {
    $('.movie_name').append(`
    <div class='col'>
        <div class="card pelicula" style="width: 18rem;">
        
            <img id="portada" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.original_title}">
              <button type="button" class="btn-close" aria-label="Close"></button>
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">${movie.overview}</p>
            </div>
        </div>
    </div>
        `)
  });
}

$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed", function(data, status) {
    allMovies = data.results
    fillMovies(allMovies)
});