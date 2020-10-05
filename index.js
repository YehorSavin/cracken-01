// const bodya = document.querySelector('body')
// console.dir(bodya)

// const section = document.querySelector('.section')
// console.dir(section)

// const picture = document.querySelector('#wrapper-img')
// console.dir(picture)

// const showBtn = document.querySelector('[data-action="show"]')
// console.dir(showBtn)

// const sectionTitle = document.querySelector('.section-title')
// console.dir(sectionTitle)

// const mainList = document.querySelector('.main-list')
// console.dir(mainList)

// const mainListItems = mainList.querySelectorAll('.main-list-item')
// console.log(mainListItems)

// const innerListTitle = document.querySelector('.main-list-item_title')
// console.dir(innerListTitle)

// const eventsList = document.querySelector('#events')
// const eventsList1 = document.getElementById('events')
// console.dir(eventsList)
// console.dir(eventsList1)

// const eventListItems = document.querySelectorAll('#evets li')
// console.dir(eventListItems)

// const beautyImage = document.getElementById('beauty')
// console.log(beautyImage)

// const src1 = 'https://images.unsplash.com/photo-1601742162892-25645713346f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
// const src = 'https://images.unsplash.com/photo-1601599009979-f85c21cbd703?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

// beautyImage.setAttribute('src', src)

// showBtn.addEventListener('click', () => {
//   if (beautyImage.src === src) {
//     beautyImage.src = src1
//   }else{
//     beautyImage.src = src
//   }
// })

// console.dir(showBtn)

// picture.width = '450'
// showBtn.addEventListener('click', () => {
//   // beautyImage.src = src1
// // picture.classList.toggle('wrapper-img')
// })

// sectionTitle.addEventListener('click', () => {
//   console.log('ok')
//   sectionTitle.getElementsByClassName.fontSize = '50px'
//   sectionTitle.getElementsByClassName.fontWeight = '900'
//   sectionTitle.getElementsByClassName.textAlign = 'center'
// })


// const methodList = `<ul><li>getElementsByClassName</li>
// <li>getElementById,</li>
// <li>querySelector</li>
// <li>querySelector</li>
// </ul>`

// console.log(mainList.firstElementChild)

// // mainList.firstElementChild.innerHTML('')
// // mainList.firstElementChild.insertAdjacentHTML('beforeend', methodList)

// const list = document.createElement('ul')
// const item1 = document.createElement('li')
// const item2 = document.createElement('li')
// const item3 = document.createElement('li')
// const item4 = document.createElement('li')

// item1.textContent = 'getElementsByClassName'
// item2.textContent = 'getElementById'
// item3.textContent = 'querySelector'
// item4.textContent = 'querySelectorAll'

// list.append(item1, item2, item3, item4)
// // console.log(list)
// mainList.firstElementChild.appendChild(list)

// console.dir(list)
// console.log(list.children.length)


import gallery from './SONY_WORLD_PHOTOGRAPHY_AWARDS.js'

const cart = gallery.map(el => {utfygiuyg})
console.log(el)
const title = document.createElement('h2')
titile.textContent = el.title

const picture = document.createElement('img')
picture.setAttribute('src', el.image)
picture.setAttribute('alt', el.category)
picture.setAttribute('width', '450px')

const description = document.createElement('p')
