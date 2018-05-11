function CarruselPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('resolved');
    }, 2000);
  });
}

async function Carrusel() {
  console.log('calling');
  var result = await CarruselPromise();
  console.log(result);
}

export { Carrusel, CarruselPromise };
