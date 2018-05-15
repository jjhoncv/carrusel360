let slide = template => {
  let div = document.createElement('div');
  //div.setAttributes(attr);
  div.innerHTML = template;
  return div.outerHTML;
};

export { slide }
