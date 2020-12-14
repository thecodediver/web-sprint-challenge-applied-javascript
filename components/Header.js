// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerContainer = document.createElement('div')
  headerContainer.classList.add('header')

  const headerDateSpan = document.createElement('span')
  headerDateSpan.classList.add('date')
  headerDateSpan.textContent = 'MARCH 28, 2020'

  const headerH1 = document.createElement('h1')
  headerH1.textContent = 'Lambda Times'

  const headerTempSpan = document.createElement('span')
  headerTempSpan.classList.add('temp')
  headerTempSpan.textContent = '98°'

  headerContainer.appendChild(headerDateSpan)
  headerContainer.appendChild(headerH1)
  headerContainer.appendChild(headerTempSpan)

  return headerContainer
}
const header = document.querySelector('.header-container')
header.appendChild(Header())