import { Carrusel, Slide } from './../packages/carrusel';
// export { Carrusel };

// import { Carrusel } from './../lib/';

let app = document.querySelector('#app');

let figure = document.createElement('figure');
let image = document.createElement('img');
image.setAttribute('src', 'img/cat-1.jpg');
figure.appendChild(image);
let slide1 = new Slide(figure);

let images = ['img/cat-1.jpg', 'img/cat-2.jpg', 'img/cat-3.jpeg'];

let slides = [];
for (let src of images) {
  let figure = document.createElement('figure');
  //   let image = document.createElement('img');
  //   image.setAttribute('src', src);
  figure.appendChild(image);
  slides.push(new Slide(figure));
}
// let slide1 = new Slide('<figure><img src="img/cat-1.jpg"></figure>');
// let slide2 = new Slide('<figure><img src="img/cat-2.jpg"></figure>');
// let slide3 = new Slide('<figure><img src="img/cat-3.jpeg"></figure>');

let carrusel = new Carrusel();
carrusel.components(slides);
carrusel.proccess();

// app.innerHTML = carrusel.ele.innerHTML;
app.appendChild(carrusel.render());

// Carrusel.init({
//   url: 'http://www.json-generator.com/api/json/get/cghUkaZIzm?indent=2',
// });
