import './css/main.css';

import { Element } from './components/element';
import { settings } from './settings';

class Slide extends Element {
  constructor (template) {
    super()
    this.ele = document.createElement('div');
    this.ele.innerHTML = template;
  }
}

class Options extends Element {
  constructor () {
    super()
    this.ele = document.createElement('div')
    let attr = {
      class: 'options'
    }
    this.attr(attr)
  }
  next () {
    this.next = document.createElement('div')
    let attr = {
      class: 'next'
    }
    this.attr(attr)
  }
  prev () {
    this.next = document.createElement('div')
    let attr = {
      class: 'prev'
    }
    this.attr(attr)
  }
  proccess (){
    this.ele.appendChild(this.next)
    this.ele.appendChild(this.prev)
  }
}

class Slider extends Element {
  constructor () {
    super()
    this.ele = document.createElement('div');

    let attr = {
      class: 'slider',
      style: {
        width: `${settings.width}px`,
        height: `${settings.height}px`
      }
    }
    this.attr(attr)
  }

  proccess () {

    let slides = this.components.map((slide, i) => {

      let attr = {
        style: {
          left: `${i*settings.width}px`,
          width: `${settings.width}px`,
          height: `${settings.height}px`
        }
      }

      slide.attr(attr)
      //console.log(slide)
      return slide.ele.outerHTML
      //console.log(slide.render())

      //this.ele.appendChild(slide.render())
      //return slide.outerHTML
    }).join('')

    //console.log(slides)

    this.ele.innerHTML = slides
    //console.log(slides)

    //this.ele.innerHTML = slides
    //console.log(this.ele)

  }
}

class Carrusel extends Element {
  constructor () {
    super()
    this.ele = document.createElement('div');
    let attr = {
      class: 'carrusel'
    }
    this.attr(attr)
  }
  proccess (){
    let slider = new Slider()
    slider.components(this.components)
    slider.proccess()


    console.log(slider)
    this.ele.innerHTML = slider.ele.innerHTML

    // let options = new Options()
    // options.proccess()
    // this.ele.appendChild(options)
  }
}

export { Carrusel, Slide };
