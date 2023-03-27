const api_url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=97c6b6920eca4daabce860c934e7f5ee"

fetch(api_url) // Make a GET request to the API endpoint
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    console.log(data);
    const myData = document.getElementById("news");
    const mappedData = data.articles.map(function(article) {
      return `
      <hr>
      <div class="d-flex gap-4 card-news">
        <img src="${article.urlToImage}" alt="" width="400px"  class="rounded">
        <div>
          <a href='${article.source.url}'><h4 class="text-decoration-none text-dark">${article.title}</h4></a>
          <p class="text-light text-muted">${article.publishedAt.slice(0,10)}</p>
          <p>${article.description}</p>
        </div>
      </div>
      `
    });
    myData.innerHTML = mappedData.join("");
  })
  .catch(error => {
    console.error("Error fetching data:", error);
});