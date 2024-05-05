      function showApi(country) {
                const myHttp = new XMLHttpRequest();
                myHttp.open(
                    "GET",
                    `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=b81d0c4751f047fda4315ec1d3c91200`
                );
                myHttp.send();
                let myData;
                myHttp.addEventListener("readystatechange", function () {
                    if (myHttp.readyState == 4 && myHttp.status == 200) {
                        myData = JSON.parse(myHttp.response);
                        display(myData.articles);
                    }
                });
            }
            showApi("us")
            function display(articles) {
                let content = "";
                articles.forEach((article) => {
                    content += `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">${article.description}</p>
              <p class="card-text">${article.publishedAt}</p>
              <p class="card-text"><small class="text-muted">${article.author}</small></p>
            </div>
          </div>
        `;
                });
                document.querySelector("#news-content").innerHTML = content;
            }