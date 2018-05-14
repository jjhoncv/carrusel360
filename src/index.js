import { Carrusel, Slide } from './../packages/carrusel';
// export { Carrusel };

// import { Carrusel } from './../lib/';

let app = document.querySelector('#app');

let slide1 = new Slide('<figure><img src="img/cat-1.jpg"></figure>')
let slide2 = new Slide('<figure><img src="img/cat-2.jpg"></figure>')
let slide3 = new Slide('<figure><img src="img/cat-3.jpeg"></figure>')

let carrusel =  new Carrusel()
carrusel.components([slide1, slide2, slide3])
carrusel.proccess()
app.innerHTML = carrusel.ele.innerHTML
//app.appendChild(carrusel)

// Carrusel.init({
//   url: 'http://www.json-generator.com/api/json/get/cghUkaZIzm?indent=2',
// });
