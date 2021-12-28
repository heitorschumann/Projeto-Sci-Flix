const movie = 'tt0437086';
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
