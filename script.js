function Search() {
    fetch(
      `https://api.tvmaze.com/search/shows?q=${
        document.querySelector(".search-box").value
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((movie) => {
          div = document.createElement("div");
          div.classList.add("movie-card");
          div.innerHTML = `
            <div class="movie-image">
              <img src="${
                movie.show.image
                  ? movie.show.image.medium
                  : "https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584341.jpg"
              }" height="15" width="177.95"/>
            </div>
            <h3 class="movie-heading">${movie.show.name}</h3>
            <div class="details">
              <div class="rating">
                <img src="https://pngimg.com/d/star_PNG41474.png" height="15" />
                <h3>${movie.show.rating.average || "0"}</h3>
              </div>
              <p style="width: 177.95px">${
                movie.show.genres.join(" | ") || "0"
              }</p>
            </div>
            <button class="button">Website</button>
          `;
  
          document.querySelector(".movies-section").appendChild(div);
        });
      })
      .catch((reason) => console.log(reason));
  }
  
  document.getElementById("search").addEventListener("click", () => {
    document.querySelector(".movies-section").innerHTML = "";
    Search();
  });