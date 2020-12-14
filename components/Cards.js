// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(results => {
  const cardsContainer = document.querySelector('.cards-container')
  for(const topic in results.data.articles) {
    for(const article in results.data.articles[topic]) {
      cardsContainer.appendChild(articleMaker(results.data.articles[topic][article], topic))
    }
  }
})
.catch(err => {
  console.log('Sorry there was an error', err)
})
function articleMaker(articleData, topic) {
  const cardContainer = document.createElement('div')
  cardContainer.classList.add('card')
  cardContainer.classList.add(topic)
  cardContainer.addEventListener('click', () => {
    console.log(articleData.headline)
  })
  
  const cardHeadline = document.createElement('div')
  cardHeadline.classList.add('headline')
  cardHeadline.textContent = articleData.headline

  const cardAuthor = document.createElement('div')
  cardAuthor.classList.add('author')

  const authorImgContainer = document.createElement('div')
  authorImgContainer.classList.add('img-container')

  const authorImage = document.createElement('img')
  authorImage.src = articleData.authorPhoto
  authorImgContainer.appendChild(authorImage)
  cardAuthor.appendChild(authorImgContainer)

  const authorSpan = document.createElement('span')
  authorSpan.textContent = `By ${articleData.authorName}`
  cardAuthor.appendChild(authorSpan)

  cardContainer.appendChild(cardHeadline)
  cardContainer.appendChild(cardAuthor)

  return cardContainer
}