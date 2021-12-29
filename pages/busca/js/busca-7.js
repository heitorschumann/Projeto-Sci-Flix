const movie = 'tt1375666'; // Inception;
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
            year.innerText = `Year: ${response.Year}`,
            rating.innerText = `Rated: ${response.Rated}`,
            runtime.innerText = `Runtime: ${response.Runtime}`,
            genre.innerText = `Genre: ${response.Genre}`, 
            director.innerText = `Director: ${response.Director}`, 
            writer.innerText = `Writer: ${response.Writer}`, 
            cast.innerText = `Cast: ${response.Actors}`, 
            plot.innerText = `Plot: ${response.Plot}`;
        },
    })
}

getInfo(movie);
