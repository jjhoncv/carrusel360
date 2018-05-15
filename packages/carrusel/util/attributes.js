Element.prototype.setAttributes = function(attrs) {
  for (let idx in attrs) {
    if ((idx == 'styles' || idx == 'style') && typeof attrs[idx] == 'object') {
      for (let prop in attrs[idx]) {
        this.style[prop] = attrs[idx][prop];
      }
    } else if (idx == 'html') {
      this.innerHTML = attrs[idx];
    } else {
      this.setAttribute(idx, attrs[idx]);
    }
  }
};

Array.prototype.move = function(element, offset) {
  let index, newIndex, removedElement;
  index = this.indexOf(element);
  newIndex = index + offset;
  if (newIndex > -1 && newIndex < this.length) {
    removedElement = this.splice(index, 1)[0];
    return this.splice(newIndex, 0, removedElement);
  }
};
