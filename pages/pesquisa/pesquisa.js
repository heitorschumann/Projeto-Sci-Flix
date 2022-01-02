$('#btn-search').click(function (event) {
  event.preventDefault()
  const text = $('#input-text').val()
  $.get(
    `https://www.omdbapi.com/?apikey=f969e5ed&s=${text}&plot=full&r=json`,
    function (data) {
      if (data && data.Search) {
        $('#no-movie').hide()
        const movies = data.Search
        if (movies.length > 0) {
          $('#movies-list').empty()

          for (let index = 0; index < movies.length; index++) {
            $.get(
              `https://www.omdbapi.com/?apikey=f969e5ed&i=${movies[index].imdbID}&plot=short&r=json`,
              function (info) {
                if (info) {
                  const movie = `
                  <div id="movies-card">
                  <div class="poster-movie">
                  <img
                    src="${info.Poster}"
                  />
                  </div>
                <div class="movie">
                  <h1>${info.Title}</h1>
                  <div class="card-right-info">
                    <ul>
                      <li>${info.Year}</li>
                      <li>${info.Runtime}</li>
                      <li>${info.Genre}</li>
                      <li>${info.Rated}</li>
                    </ul>
        
                    <p> ${info.Plot}
                      
                    </p>
        
                    <ul>
                      <li><b>Diretor:</b> ${info.Director}</li>
                      <li><b>Elenco:</b> ${info.Actors}</li>
                      <li><b>País:</b>${info.Country}</li>
                    </ul>
                    <p><b>Nota:</b>${info.imdbRating}</p>
                  </div>
                </div>
                </div>
                  `
                  $('#movies-list').append(movie)
                }
              }
            )
          }
        }
      } else {
        $('#movies-list').empty()
        $('#no-movie').show()
      }
    }
  )
  $('#input-text').val('')
})
