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
    this.pos = settings.pos;
    let attr = {
      class: 'options'
      //   style: {
      //     width: `${settings.width * settings.show}px`,
      //     height: `${settings.height}px`
      //   }
    };
    this.attr(attr);
  }
  next() {
    let next = document.createElement('div');
    next.setAttribute('class', 'next');
    next.textContent = 'Next >';
    next.addEventListener('click', () => {
      console.log('here!');
      events.dispatch('move', 1);
    });
    this.ele.appendChild(next);
  }
  prev() {
    let prev = document.createElement('div');
    prev.setAttribute('class', 'prev');
    prev.textContent = '< Prev';
    prev.addEventListener('click', () => {
      events.dispatch('move', -1);
    });
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
      class: 'slider'
      //   style: {
      //     width: `${settings.width * settings.show}px`,
      //     height: `${settings.height}px`
      //   }
    };
    this.attr(attr);
  }

  proccess() {
    // let slides = [];
    this.components = this.components.map((slide, i) => {
      slide.attr({
        class: i == settings.show ? 'current' : ''
      });
      return slide;
    });

    this.sorter();

    this.add();

    //this.ele.appendChild(slides.render());

    events.register('move', this.move, this);
  }

  sorter() {
    let index = this.components.findIndex(
      slide => slide.ele.className === 'current'
    );
    let arrRight = this.components.slice(index, this.components.length);
    let arrLeft = this.components.slice(0, index);
    this.components = arrRight.concat(arrLeft);
    // console.log(arr);
  }

  add() {
    this.components.map(slide => {
      this.ele.appendChild(slide.render());
    });
  }

  move(pos) {
    let attr = {
      style: {
        transform: `translateX(${100 * pos * -1}%)`,
        transition: `transform ${settings.transitionDuration /
          1000}s cubic-bezier(0.65, -0.06, 0.39, 1.04)`
      }
    };
    this.attr(attr);
    setTimeout(() => {
      let attr = {
        style: {
          transform: 'translateX(0px)',
          transition: 'initial'
        }
      };
      this.attr(attr);

      this.updateCurrent(pos);
      this.sorter();
      this.add();
    }, settings.transitionDuration);
  }

  updateCurrent(pos) {
    let slide = this.components.filter(
      slide => slide.ele.className === 'current'
    );

    // slide[0].ele.removeAttribute('class');
    let next = Object.assign({}, slide[0]);

    this.components.map(slide => {
      slide.ele.setAttribute('class', '');
    });
    // console.log(next);
    setTimeout(function() {
      console.log(next);
      next.ele.nextSibling.setAttribute('class', 'current');
    }, 2000);
    // console.log(slide[0]);
    //
  }
}

class Carrusel extends Element {
  constructor() {
    super();
    this.ele = document.createElement('div');
    // this.event = new Events();
    let attr = {
      class: 'carrusel',
      style: {
        width: `${settings.width}px`,
        height: `${settings.height}px`
      }
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
