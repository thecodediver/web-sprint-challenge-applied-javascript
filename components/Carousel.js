/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselMaker() {
  const carouselContainer = document.createElement('div')
  carouselContainer.classList.add('carousel')

  const imgOne = document.createElement('img')
  imgOne.src = 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg'
  imgOne.style.display = 'block'

  const imgTwo = document.createElement('img')
  imgTwo.src = 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg'
  imgTwo.style.display = 'none'

  const imgThree = document.createElement('img')
  imgThree.src = 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg'
  imgThree.style.display = 'none'

  const imgFour = document.createElement('img')
  imgFour.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg'
  imgFour.style.display = 'none'

  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = ' < '
  leftButton.addEventListener('click', () => {
    if(imgOne.style.display === 'block') {
      imgOne.style.display = 'none'
      imgFour.style.display = 'block'
    }
    if(imgTwo.style.display === 'block') {
      imgTwo.style.display = 'none'
      imgOne.style.display = 'block'
    }
    if(imgThree.style.display === 'block') {
      imgThree.style.display = 'none'
      imgTwo.style.display = 'block'
    }
    if(imgFour.style.display === 'block') {
      imgFour.style.display = 'none'
      imgThree.style.display = 'block'
    }
  })

  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = ' > '
  rightButton.addEventListener('click', () => {
    if(imgOne.style.display === 'block') {
      imgOne.style.display = 'none'
      imgTwo.style.display = 'block'
    }
    if(imgTwo.style.display === 'block') {
      imgTwo.style.display = 'none'
      imgThree.style.display = 'block'
    }
    if(imgThree.style.display === 'block') {
      imgThree.style.display = 'none'
      imgFour.style.display = 'block'
    }
    if(imgFour.style.display === 'block') {
      imgFour.style.display = 'none'
      imgOne.style.display = 'block'
    }
  })
  
  carouselContainer.appendChild(leftButton)
  carouselContainer.appendChild(imgOne)
  carouselContainer.appendChild(imgTwo)
  carouselContainer.appendChild(imgThree)
  carouselContainer.appendChild(imgFour)
  carouselContainer.appendChild(rightButton)
  
  return carouselContainer
}
const carousel = document.querySelector('.carousel-container')
carousel.appendChild(carouselMaker())
