document.getElementById("QuerySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const artist = document.getElementById("ArtistInput").value;
  const title = document.getElementById("TitleInput").value;

  if (artist === "" || title === "") {
    return;
  }
  const url = "https://private-anon-95522133e4-lyricsovh.apiary-proxy.com/v1/" + artist + "/" + title;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "<h1> Lyrics: </h1><br><h1>";
        results += json.lyrics + "</h1>";
      document.getElementById("LyricsResults").innerHTML = results;
      console.log(results);
    });

});
