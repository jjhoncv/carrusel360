import { settings } from './../settings';
import { itemsCarrusel } from './items-carrusel';

import { setAttributes, setStyle } from './utils-element';

let attr = {
  styles: {
    width: `${settings.width}px`,
    height: `${settings.height}px`
  },
  class: 'view-carrusel'
};

let viewCarrusel = data => {
  let div = document.createElement('div');
  div.setAttributes(attr);
  div.innerHTML = itemsCarrusel(data);
  return div.outerHTML;
};

export { viewCarrusel };
