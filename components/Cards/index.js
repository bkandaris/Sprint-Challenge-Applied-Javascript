// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(info) {
  const mainDiv = document.querySelector(".cards-container");
  // Creating the elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorInfo = document.createElement("div");
  const authorImgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const author = document.createElement("span");

  // Adding content
  headline.textContent = info.headline;
  authorImg.src = info.authorPhoto;

  // Adding classes
  card.classList.add("card");
  headline.classList.add("headline");
  authorInfo.classList.add("author");
  authorImgContainer.classList.add("img-container");

  // Appending elements
  card.appendChild(headline);
  card.appendChild(authorInfo);
  authorInfo.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  authorInfo.appendChild(author);

  // Adding our card
  mainDiv.appendChild(card);

  return mainDiv;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response.data.articles);
    const bootstrapArticles = response.data.articles.bootstrap;
    const javaScript = response.data.articles.javascript;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const technology = response.data.articles.technology;
    bootstrapArticles.forEach(e => {
      cardCreator(e);
    });
    javaScript.forEach(e => {
      cardCreator(e);
    });
    jquery.forEach(e => {
      cardCreator(e);
    });
    node.forEach(e => {
      cardCreator(e);
    });
    technology.forEach(e => {
      cardCreator(e);
    });
  })
  .catch(err => {
    console.log(err);
  });
