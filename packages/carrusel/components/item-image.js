import { settings } from './../settings';
import { setAttributes } from './utils-element';

let attr = {
  width: `${settings.width}px`,
  height: `${settings.height}px`,
  'object-fit': 'cover'
};

let itemImage = props => {
  const img = document.createElement('img');
  attr = Object.assign({}, { src: props.picture }, attr);
  img.setAttributes(attr);
  return img.outerHTML;
};
export { itemImage };
