import { itemCarrusel } from './item-carrusel';

let itemsCarrusel = data => {
  return data.map((item, i) => itemCarrusel(item, i)).join('');
};

export { itemsCarrusel };
