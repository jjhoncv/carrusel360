import './css/main.css';

import { viewCarrusel } from './components/view-carrusel';

const Carrusel = (() => {
  let st = {},
    dom = {};

  st = {
    app: '#app',
    url: ''
  };

  let catchDomApp = () => {
    dom.app = document.querySelector(st.app);
  };

  let loadData = async () => {
    return await fetch(st.url).then(res => res.json());
  };

  let render = data => {
    dom.app.innerHTML = viewCarrusel(data);
  };

  let main = () => {
    loadData().then(render);
  };

  let suscribeEvents = () => {};

  let fn = {};

  let events = {};

  let initialize = oP => {
    st = Object.assign({}, st, oP);
    catchDomApp();
    main();
    suscribeEvents();
  };

  return {
    init: initialize
  };
})();

// Carrusel.init();

export { Carrusel };
