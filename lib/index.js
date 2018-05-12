(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Carrusel"] = factory();
	else
		root["Carrusel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
const settings = {
  width: 800,
  height: 300
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAttributes */
/* unused harmony export setStyle */
Element.prototype.setAttributes = function (attrs) {
  for (let idx in attrs) {
    if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
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



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_carrusel__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Carrusel", function() { return __WEBPACK_IMPORTED_MODULE_0__packages_carrusel__["a"]; });




// import { Carrusel } from './../lib/';
// Carrusel.init({
//   url: 'http://www.json-generator.com/api/json/get/bTAYyTYQeq?indent=2'
// });

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carrusel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_view_carrusel__ = __webpack_require__(5);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





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

  let loadData = (() => {
    var _ref = _asyncToGenerator(function* () {
      return yield fetch(st.url).then(function (res) {
        return res.json();
      });
    });

    return function loadData() {
      return _ref.apply(this, arguments);
    };
  })();

  let render = data => {
    dom.app.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__components_view_carrusel__["a" /* viewCarrusel */])(data);
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



/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return viewCarrusel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items_carrusel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_element__ = __webpack_require__(1);





let attr = {
  styles: {
    width: `${__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* settings */].width}px`,
    height: `${__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* settings */].height}px`
  },
  class: 'view-carrusel'
};

let viewCarrusel = data => {
  let div = document.createElement('div');
  div.setAttributes(attr);
  div.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__items_carrusel__["a" /* itemsCarrusel */])(data);
  return div.outerHTML;
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemsCarrusel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_carrusel__ = __webpack_require__(7);


let itemsCarrusel = data => {
  return data.map((item, i) => Object(__WEBPACK_IMPORTED_MODULE_0__item_carrusel__["a" /* itemCarrusel */])(item, i)).join('');
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemCarrusel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_image__ = __webpack_require__(8);



let itemCarrusel = (item, i) => {
  return `
        <div class="view-carrusel-item" style="left:${i * __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* settings */].width}px">
          ${Object(__WEBPACK_IMPORTED_MODULE_1__item_image__["a" /* itemImage */])(item)}
        </div>
      `;
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_element__ = __webpack_require__(1);



let attr = {
  width: `${__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* settings */].width}px`,
  height: `${__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* settings */].height}px`,
  'object-fit': 'cover'
};

let itemImage = props => {
  const img = document.createElement('img');
  attr = Object.assign({}, { src: props.picture }, attr);
  img.setAttributes(attr);
  return img.outerHTML;
};


/***/ })
/******/ ]);
});