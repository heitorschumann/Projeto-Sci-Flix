const movie = 'tt0133093';
const title = document.querySelector('#title');
const poster = document.querySelector('#poster');
const year = document.querySelector('#year');
const rating = document.querySelector('#rating');
const runtime = document.querySelector('#runtime');
const genre = document.querySelector('#genre');
const director = document.querySelector('#director');
const writer = document.querySelector('#writer');
const cast = document.querySelector('#cast');
const plot = document.querySelector('#plot');

function getInfo(movie){
    $.ajax({
        url: `http://www.omdbapi.com/?i=${movie}&apikey=c24a091a`,
        type: "GET",
        success: function (response) {
            title.innerText = response.Title,
            poster.setAttribute('src', response.Poster),
            year.innerText = `ano: ${response.Year}`,
            rating.innerText = `classificação: ${response.Rated}`,
            runtime.innerText = `duração: ${response.Runtime}`,
            genre.innerText = `gênero: ${response.Genre}`, 
            director.innerText = `diretor(a): ${response.Director}`, 
            writer.innerText = `roteiro: ${response.Writer}`, 
            cast.innerText = `elenco: ${response.Actors}`, 
            plot.innerText = `sinopse: ${response.Plot}`;
        },
    })
}

getInfo(movie);

/*{"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi",
"Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski",
"Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
"Plot":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate 
deception of an evil cyber-intelligence.","Language":"English","Country":"United States, Australia","Awards":"Won 4 Oscars. 42 wins & 51 nominations total",
"Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"73/100"}],
"Metascore":"73","imdbRating":"8.7","imdbVotes":"1,787,126","imdbID":"tt0133093","Type":"movie","DVD":"15 May 2007","BoxOffice":"$171,479,930",
"Production":"N/A","Website":"N/A","Response":"True"}*/