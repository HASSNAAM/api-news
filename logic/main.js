async function showApi(country, element) {
  const apiKey = "your_api_key_here";
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`;
  try {
    document.querySelector(".loading-spinner").classList.add("active");
    document.querySelector("#news-content").innerHTML = "";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const myData = await response.json();
    display(myData.articles);
  } catch (error) {
    console.error("Fetch error:", error);
    document.querySelector(
      "#news-content"
    ).innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
  } finally {
    document.querySelector(".loading-spinner").classList.remove("active");
  }
  setActiveNavLink(element);
}

function display(articles) {
  let content = "";
  articles.forEach((article) => {
    content += `
      <div class="card mb-3">
          <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <p class="card-text"><small class="text-muted">${new Date(
                article.publishedAt
              ).toLocaleString()}</small></p>
              <p class="card-text"><small class="text-muted">${
                article.author || "Unknown Author"
              }</small></p>
          </div>
      </div>
      `;
  });
  document.querySelector("#news-content").innerHTML = content;
}

function setActiveNavLink(element) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  element.classList.add("active");
}

showApi("us", document.querySelector(".nav-link"));
