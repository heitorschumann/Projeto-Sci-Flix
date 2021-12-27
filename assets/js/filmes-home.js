function abrePoster() {
  const filmes = [
    "tt0133093", // The Matrix;
    "tt0851578", // Paprika;
    "tt0107290", // Jurassic Park;
    "tt0088247", // The Terminator;
    "tt1219827", // Ghost in the Shell;
    "tt0437086", // Alita: Battle Angel;
    "tt0470752", // Ex Machina;
    "tt1375666", // Inception;
    "tt0118884", // Contact;
    "tt0113243", // Hackers;
    "tt0246578", // Donnie Darko;
    "tt0087803", // 1984;
  ];

  filmes.forEach(function (filme, i) {
    $.ajax({
      url: `http://www.omdbapi.com/?i=${filme}&apikey=25db0718`,
      type: "GET",
      success: function (response) {
        $(`#item-${i}`).attr("src", response.Poster);
      },
    });
  });
}

abrePoster();
