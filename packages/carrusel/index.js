import './css/main.css';

import { Element } from './components/element';
import { settings } from './settings';
import { Events } from './components/events';

let events = new Events();

class Slide extends Element {
  constructor(ele) {
    super();
    this.ele = document.createElement('div');
    this.ele.appendChild(ele);
  }
}

class Options extends Element {
  constructor() {
    super();
    this.ele = document.createElement('div');
    let attr = {
      class: 'options',
      style: {
        width: `${settings.width * settings.show}px`,
        height: `${settings.height}px`
      }
    };
    this.attr(attr);
  }
  next() {
    let next = document.createElement('div');
    next.setAttribute('class', 'next');
    next.textContent = 'Next >';
    next.addEventListener('click', () => {
      events.dispatch('move', 1);
    });
    this.ele.appendChild(next);
  }
  prev() {
    let prev = document.createElement('div');
    prev.setAttribute('class', 'prev');
    prev.textContent = '< Prev';
    this.ele.appendChild(prev);
  }
  proccess() {
    this.next();
    this.prev();
  }
}

class Slider extends Element {
  constructor() {
    super();
    this.ele = document.createElement('div');

    let attr = {
      class: 'slider',
      style: {
        width: `${settings.width * settings.show}px`,
        height: `${settings.height}px`
      }
    };
    this.attr(attr);
  }

  proccess() {
    this.components.map((slide, i) => {
      let attr = {
        class: i == 0 ? 'item-slider current-slide' : 'item-slider',
        style: {
          left: `${i * settings.width}px`,
          width: `${settings.width}px`,
          height: `${settings.height}px`
        }
      };

      slide.attr(attr);
      this.ele.appendChild(slide.render());
    });

    events.register('move', this.move, this);
  }

  move(i, self) {
    let slides = self.components;
    console.log('slides', slides);
    slide.attr({
      style: {
        left: `${i * settings.width}px`
      }
    });
  }
}

class Carrusel extends Element {
  constructor() {
    super();
    this.ele = document.createElement('div');
    // this.event = new Events();
    let attr = {
      class: 'carrusel'
    };
    this.attr(attr);
  }
  proccess() {
    // events shared

    // slider
    let slider = new Slider();
    slider.components(this.components);
    slider.proccess();
    this.ele.appendChild(slider.render());

    // options
    let options = new Options();
    options.proccess();
    this.ele.appendChild(options.render());
  }
}

export { Carrusel, Slide };
