// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(results => {
  const topics = document.querySelector('.tabs .topics')
  let allTopics = document.createElement('div')
  allTopics.classList.add('tab')
  allTopics.textContent = 'All'
  allTopics.addEventListener('click', () => {
    let theCategory = document.querySelectorAll(`.card`)
      theCategory.forEach(category => {
        category.style.display = 'flex';
      })
  })
  topics.appendChild(allTopics)
  results.data.topics.forEach(topic => {
    let aTopic = document.createElement('div')
    aTopic.classList.add('tab')
    aTopic.textContent = topic
    aTopic.addEventListener('click', () => {
      if(topic !== 'node.js') {
        let theCategory = document.querySelectorAll(`.${topic}`)
        theCategory.forEach(category => {
          category.style.display = 'flex';
        })
        let notTheCategory = document.querySelectorAll(`.card:not(.${topic})`)
        notTheCategory.forEach(category => {
          category.style.display = 'none';
        })
      } else {
        let theCategory = document.querySelectorAll(`.node`)
        theCategory.forEach(category => {
          category.style.display = 'flex';
        })
        let notTheCategory = document.querySelectorAll(`.card:not(.node)`)
        notTheCategory.forEach(category => {
          category.style.display = 'none';
        })
      }
    })
    topics.appendChild(aTopic)
  });
})
