import { settings } from './../settings';
import { itemImage } from './item-image';

let itemCarrusel = (item, i) => {
  return `
        <div class="view-carrusel-item" style="left:${i * settings.width}px">
          ${itemImage(item)}
        </div>
      `;
};

export { itemCarrusel };
