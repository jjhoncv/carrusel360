import { setAttributes } from './utils-element';

class Element {
  render () {
    return this.ele
  }
  attr (attr) {
    this.ele.setAttributes(attr);
  }
  components (components) {
    this.components = components
  }
}

export { Element }
