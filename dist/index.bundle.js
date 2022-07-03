"use strict";
(self["webpackChunknew_todo_list"] = self["webpackChunknew_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Bungee-Regular.ttf */ "./src/Bungee-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'myFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody{\n    font-family: Arial, sans-serif;\n}\n\n#content{\n    height: 100%; \n    margin: 0;\n}\n\n#container{\n    min-height: 100%; \n    display: grid;\n    grid-template-columns: 4fr 10fr;\n}\n\n/* navbar styling\n\n.navbar{\n    grid-column: 1 / 3;\n    font-family: 'myFont';\n    font-size: 2rem;\n    color: white;\n    display: flex;\n    background-color: rgb(150, 150, 150);\n    align-items: center;\n    justify-content: center;\n} */\n\n\n/*sidebar styling*/\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(172, 172, 172);\n}\n\n.sidebar ul{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    margin-top: 3vh;\n    gap: 1vh;\n\n}\n\n\n.sidebar ul button{\n    background: rgba(0, 0, 0, 0.1); /* black background with 0.1 opacity */\n    border: none;\n    color: white;\n    padding: 0.01vh 2vh;\n    text-align: center;\n    text-decoration: none;\n    font-size: 2rem;\n    cursor: pointer;\n    /* border-radius: 100%; */\n}\n\n.sidebar #project-list button{\n    background: rgba(0, 0, 0, 0); /* black background with 0.1 opacity */\n    border: none;\n    color: white;\n    padding: 0.01vh 2vh;\n    text-align: center;\n    text-decoration: none;\n    font-size: 2rem;\n    cursor: pointer;\n    border-radius: 2%;\n}\n\n\n/*main section styling*/\n\n.main{\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n}\n\n.main button{\n    background: rgba(0, 0, 0, 0.1); /* black background with 0.1 opacity */\n    border: none;\n    padding: 1vw 10vh;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n\n/*css for popup window*/\n\n.loginPopup {\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n.formPopup {\n    display: none;\n    position: fixed;\n    align-self: center;\n    justify-self: center;\n    left: 50%;\n    top: 10%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #999999;\n    z-index: 20;\n}\n.formContainer {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: 1%;\n    margin-top: 2%;\n    max-width: 300px;\n    padding: 20px;\n    background-color: #fff;\n}\n\n.formContainer label{\n    font-weight: 700;\n}\n.formContainer input[type=checkbox]{\n    margin-left: 5%;\n}\n.formContainer input[type=text],\n.formContainer input[type=number] {\n    width: 80%;\n    padding: 15px;\n    margin: 5px 0 20px 0;\n    border: none;\n    background: #eee;\n}\n  .formContainer input[type=text]:focus,\n  .formContainer input[type=number]:focus {\n    background-color: #ddd;\n    outline: none;\n}\n.formContainer .btn {\n    margin-top: 5%;\n    padding: 12px 20px;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 15px;\n    opacity: 0.8;\n}\n.formContainer .cancel {\n    background-color: #cc0000;\n}\n.formContainer .btn:hover,\n.openButton:hover {\n    opacity: 1;\n }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,0DAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;AACnC;;AAEA;;;;;;;;;;;GAWG;;;AAGH,kBAAkB;;AAElB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,QAAQ;;AAEZ;;;AAGA;IACI,8BAA8B,EAAE,sCAAsC;IACtE,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B,EAAE,sCAAsC;IACpE,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;;AAGA,uBAAuB;;AAEvB;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,8BAA8B,EAAE,sCAAsC;IACtE,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;AACnB;;;AAGA,uBAAuB;;AAEvB;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,SAAS;IACT,QAAQ;IACR,8BAA8B;IAC9B,yBAAyB;IACzB,WAAW;AACf;AACA;IACI,aAAa;IACb,eAAe;IACf,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;;IAEI,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;AACpB;EACE;;IAEE,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,yBAAyB;AAC7B;AACA;;IAEI,UAAU;CACb","sourcesContent":["@font-face {\n    font-family: 'myFont';\n    src: url('./Bungee-Regular.ttf') format('ttf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n\nbody{\n    font-family: Arial, sans-serif;\n}\n\n#content{\n    height: 100%; \n    margin: 0;\n}\n\n#container{\n    min-height: 100%; \n    display: grid;\n    grid-template-columns: 4fr 10fr;\n}\n\n/* navbar styling\n\n.navbar{\n    grid-column: 1 / 3;\n    font-family: 'myFont';\n    font-size: 2rem;\n    color: white;\n    display: flex;\n    background-color: rgb(150, 150, 150);\n    align-items: center;\n    justify-content: center;\n} */\n\n\n/*sidebar styling*/\n\n.sidebar{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(172, 172, 172);\n}\n\n.sidebar ul{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    margin-top: 3vh;\n    gap: 1vh;\n\n}\n\n\n.sidebar ul button{\n    background: rgba(0, 0, 0, 0.1); /* black background with 0.1 opacity */\n    border: none;\n    color: white;\n    padding: 0.01vh 2vh;\n    text-align: center;\n    text-decoration: none;\n    font-size: 2rem;\n    cursor: pointer;\n    /* border-radius: 100%; */\n}\n\n.sidebar #project-list button{\n    background: rgba(0, 0, 0, 0); /* black background with 0.1 opacity */\n    border: none;\n    color: white;\n    padding: 0.01vh 2vh;\n    text-align: center;\n    text-decoration: none;\n    font-size: 2rem;\n    cursor: pointer;\n    border-radius: 2%;\n}\n\n\n/*main section styling*/\n\n.main{\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n}\n\n.main button{\n    background: rgba(0, 0, 0, 0.1); /* black background with 0.1 opacity */\n    border: none;\n    padding: 1vw 10vh;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n\n/*css for popup window*/\n\n.loginPopup {\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n.formPopup {\n    display: none;\n    position: fixed;\n    align-self: center;\n    justify-self: center;\n    left: 50%;\n    top: 10%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #999999;\n    z-index: 20;\n}\n.formContainer {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: 1%;\n    margin-top: 2%;\n    max-width: 300px;\n    padding: 20px;\n    background-color: #fff;\n}\n\n.formContainer label{\n    font-weight: 700;\n}\n.formContainer input[type=checkbox]{\n    margin-left: 5%;\n}\n.formContainer input[type=text],\n.formContainer input[type=number] {\n    width: 80%;\n    padding: 15px;\n    margin: 5px 0 20px 0;\n    border: none;\n    background: #eee;\n}\n  .formContainer input[type=text]:focus,\n  .formContainer input[type=number]:focus {\n    background-color: #ddd;\n    outline: none;\n}\n.formContainer .btn {\n    margin-top: 5%;\n    padding: 12px 20px;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    width: 100%;\n    margin-bottom: 15px;\n    opacity: 0.8;\n}\n.formContainer .cancel {\n    background-color: #cc0000;\n}\n.formContainer .btn:hover,\n.openButton:hover {\n    opacity: 1;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMFunctionality.js":
/*!*********************************!*\
  !*** ./src/DOMFunctionality.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectDOM": () => (/* binding */ addProjectDOM)
/* harmony export */ });
/* harmony import */ var _todo_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_DOM */ "./src/todo_DOM.js");


//add button of corresponding projec to sidebar

function addProjectDOM(name){
    const list = document.getElementById("project-list");
    const newProj = document.createElement("li");
    let liButton = document.createElement("button")
    liButton.setAttribute('id',`${name}`);
    liButton.innerHTML = name;
    list.appendChild(liButton)
    list.appendChild(newProj);
    liButton.addEventListener("click", () => {
        const main = document.getElementById("main");
        while(main.firstChild){
            main.removeChild(main.firstChild);
        }
        displayProjectMain(name)
    }); 
}

//add button of coresponding project to main

function displayProjectMain(projectName){
    const addTodoBtn = document.createElement("button");
    addTodoBtn.innerHTML = `Add ToDo for ${projectName}`;
    const main = document.getElementById("main");
    main.appendChild(addTodoBtn);
    addTodoBtn.addEventListener("click", () => {
        (0,_todo_DOM__WEBPACK_IMPORTED_MODULE_0__.openFormTodo)();
    });

}

function removeProjectDOM(){

}



/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainComp": () => (/* binding */ mainComp)
/* harmony export */ });
function mainComp(projectName) {
    //Creating the main section
    const main = document.createElement('div');
    main.classList.add("main");
    main.setAttribute('id', "main");
    main.innerHTML = "test";
    const todoList = document.createElement('ul');
    todoList.setAttribute('id', 'todo-list');
    main.appendChild(todoList);
    return main;
}



/***/ }),

/***/ "./src/components/popupForm.js":
/*!*************************************!*\
  !*** ./src/components/popupForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupFormComp": () => (/* binding */ popupFormComp)
/* harmony export */ });
/* harmony import */ var _todo_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo_DOM */ "./src/todo_DOM.js");



function popupFormComp() {
    //Creating the popup form
    const popupFormContainer = document.createElement('div');
    popupFormContainer.classList.add("loginPopup");

    const popupForm = document.createElement('div');
    popupForm.classList.add("formPopup");
    popupForm.setAttribute('id',`popupForm`);

    popupFormContainer.appendChild(popupForm);

    const formContainer = document.createElement('div');
    formContainer.classList.add("formContainer");

    //creating forms

    //project name label
    let project_name_label = document.createElement("label");
    project_name_label.innerHTML = "Project Name";
    project_name_label.setAttribute("for", "project_name");
    formContainer.appendChild(project_name_label);
    //project name form
    let project_name =  document.createElement("input");
    project_name.setAttribute('type',`text`);
    project_name.setAttribute('placeholder',`Enter Project Name`);
    project_name.setAttribute('id',`project_name`);
    project_name.setAttribute('name',`project_name`);
    formContainer.appendChild(project_name)

    
    //project name label
    let project_description_label = document.createElement("label");
    project_description_label.innerHTML = "Project Description";
    project_description_label.setAttribute("for", "project_description");
    formContainer.appendChild(project_description_label);
    //project description
    let project_description =  document.createElement("input");
    project_description.setAttribute('type',`text`);
    project_description.setAttribute('placeholder',`Enter Project Description`);
    project_description.setAttribute('id',`project_description`);
    project_description.setAttribute('name',`project_description`);
    formContainer.appendChild(project_description);

    //add project button
    let addProjectBtn = document.createElement("button")
    addProjectBtn.setAttribute('type',`button`);
    addProjectBtn.classList.add("btn-cancel");
    addProjectBtn.setAttribute('id',`addProject`);
    addProjectBtn.innerHTML = "Add Project";
    formContainer.appendChild(addProjectBtn);

    addProjectBtn.addEventListener("click", _todo_DOM__WEBPACK_IMPORTED_MODULE_0__.addProject); 

    popupForm.appendChild(formContainer);
    
    return popupFormContainer;
}



/***/ }),

/***/ "./src/components/popupFormTodo.js":
/*!*****************************************!*\
  !*** ./src/components/popupFormTodo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupFormTodoComp": () => (/* binding */ popupFormTodoComp)
/* harmony export */ });
/* harmony import */ var _todo_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo_DOM */ "./src/todo_DOM.js");


function popupFormTodoComp() {
    //Creating the popup form
    const popupFormContainer = document.createElement('div');
    popupFormContainer.classList.add("loginPopup");

    const popupForm = document.createElement('div');
    popupForm.classList.add("formPopup");
    popupForm.setAttribute('id',`popupFormTodo`);

    popupFormContainer.appendChild(popupForm);

    const formContainer = document.createElement('div');
    formContainer.classList.add("formContainer");

    //creating forms

    //todo name label
    let todo_title_label = document.createElement("label");
    todo_title_label.innerHTML = "Todo Title";
    todo_title_label.setAttribute("for", "todo_title");
    formContainer.appendChild(todo_title_label);
    //todo name form
    let todo_title =  document.createElement("input");
    todo_title.setAttribute('type',`text`);
    todo_title.setAttribute('placeholder',`Enter Todo Title`);
    todo_title.setAttribute('id',`todo_title`);
    todo_title.setAttribute('name',`todo_title`);
    formContainer.appendChild(todo_title)

    
    //todo desc label
    let todo_description_label = document.createElement("label");
    todo_description_label.innerHTML = "Todo Description";
    todo_description_label.setAttribute("for", "todo_description");
    formContainer.appendChild(todo_description_label);
    //project description
    let todo_description =  document.createElement("input");
    todo_description.setAttribute('type',`text`);
    todo_description.setAttribute('placeholder',`Enter Toto Description`);
    todo_description.setAttribute('id',`todo_description`);
    todo_description.setAttribute('name',`todo_description`);
    formContainer.appendChild(todo_description);


    //todo date label
    let todo_date_label = document.createElement("label");
    todo_date_label.innerHTML = "Todo Description";
    todo_date_label.setAttribute("for", "todo_date");
    formContainer.appendChild(todo_date_label);
    //todo date
    let todo_date =  document.createElement("input");
    todo_date.setAttribute('type',`text`);
    todo_date.setAttribute('placeholder',`Enter Todo Date`);
    todo_date.setAttribute('id',`todo_date`);
    todo_date.setAttribute('name',`todo_date`);
    formContainer.appendChild(todo_date);

    //todo priority
    let todo_priority_label = document.createElement("label");
    todo_priority_label.innerHTML = "Todo Description";
    todo_priority_label.setAttribute("for", "todo_priority");
    formContainer.appendChild(todo_priority_label);
    //todo priority
    let todo_priority =  document.createElement("input");
    todo_priority.setAttribute('type',`text`);
    todo_priority.setAttribute('placeholder',`Enter Todo Priority`);
    todo_priority.setAttribute('id',`todo_priority`);
    todo_priority.setAttribute('name',`todo_priority`);
    formContainer.appendChild(todo_priority);


    //todo notes
    let todo_notes_label = document.createElement("label");
    todo_notes_label.innerHTML = "Todo Description";
    todo_notes_label.setAttribute("for", "todo_notes");
    formContainer.appendChild(todo_notes_label);
    //todo notes
    let todo_notes =  document.createElement("input");
    todo_notes.setAttribute('type',`text`);
    todo_notes.setAttribute('placeholder',`Enter Todo Priority`);
    todo_notes.setAttribute('id',`todo_notes`);
    todo_notes.setAttribute('name',`todo_notes`);
    formContainer.appendChild(todo_notes);

    //add project button
    let addProjectBtn = document.createElement("button")
    addProjectBtn.setAttribute('type',`button`);
    addProjectBtn.setAttribute('id',`addTodo`);
    addProjectBtn.innerHTML = "Add Todo";
    formContainer.appendChild(addProjectBtn);

    addProjectBtn.addEventListener("click", _todo_DOM__WEBPACK_IMPORTED_MODULE_0__.addTodo); 

    popupForm.appendChild(formContainer);
    
    return popupFormContainer;
}



/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarComp": () => (/* binding */ sidebarComp)
/* harmony export */ });
function sidebarComp() {
    //Creating the sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    //creating Project title
    let title =  document.createElement("h1");
    title.setAttribute('id',`sidebar-title`);
    title.innerHTML = "Projects";
    sidebar.appendChild(title)

    //creating project list
    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'project-list');
    sidebar.appendChild(projectList)

    //creating Buttons
    const list = document.createElement('ul');
    let data = ["+"]


    data.forEach((item) => {
        let liButton = document.createElement("button")
        liButton.setAttribute('id',`${item}`);
        liButton.innerHTML = item;
        let li = document.createElement("li");
        li.appendChild(liButton);
        list.appendChild(li);
    });
    sidebar.appendChild(list);  
    
    return sidebar;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _todo_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_DOM */ "./src/todo_DOM.js");
/* harmony import */ var _components_popupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/popupForm */ "./src/components/popupForm.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_popupFormTodo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/popupFormTodo */ "./src/components/popupFormTodo.js");







window.onload = () => {
function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild((0,_components_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarComp)());
    document.getElementById("content").appendChild((0,_components_popupForm__WEBPACK_IMPORTED_MODULE_3__.popupFormComp)());
    document.getElementById("content").appendChild((0,_components_popupFormTodo__WEBPACK_IMPORTED_MODULE_5__.popupFormTodoComp)());
    element.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_4__.mainComp)());
    return element;
}
 
document.getElementById("content").appendChild(component());

document.getElementById("+").addEventListener("click", _todo_DOM__WEBPACK_IMPORTED_MODULE_2__.openForm); 
// document.getElementById("AddProject").addEventListener("click", () => {
//     console.log("in")
// }); 
}



/***/ }),

/***/ "./src/todoClasses.js":
/*!****************************!*\
  !*** ./src/todoClasses.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
//File where I create the todo class

class Todo{
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;

    constructor(title, description, dueDate, priority, notes){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
    }
    //getters
    get getTitle() {
      return this.#title;
    }
    get getDescription() {
      return this.#description;
    }
    get getDueDate() {
      return this.#dueDate;
    }
    get getPriority() {
      return this.#priority;
    }
    get getNotes() {
      return this.#notes;
    }
    //setters
    set setTitle(title) {this.#title = title;}
    set setDescription(desc) {this.#description = desc;}
    set setDueDate(date) {this.#dueDate = date;}
    set setPriority(priority) {this.#priority = priority;}
    set setNotes(notes) {this.#notes = notes;}

}

//the a project class which will hold the entirity of a Todo for a particular project
class Project {
    storage = new Array();
    #projectName;
    #projectDescription
    constructor(projetctName,projectDescription){
        this.#projectName = projetctName;
        this.#projectDescription = projectDescription;
    }

    get getProjectName() {
        return this.#projectName;
    }

    get getProjectDescription(){
      return this.#projectDescription;
    }

    set setProjectName(projectName) {this.#projectName = projectName;}

    set setProjectName(projectDescription) {this.#projectDescription = projectDescription;}

    //method to add a todo
    addTodo(title, description, dueDate, priority, notes){
        this.storage.push(new Todo(title, description, dueDate, priority, notes));
    }

    //method to remove a todo
    removeTodo(index){
        this.storage.splice(index, 1);
    }

}


class ProjectStorage{
  projectArr = new Array();
  constructor(){}

  addNewProject = (projectName, projectDescription) =>{
    this.projectArr.push(new Project(projectName, projectDescription))
  }

  removeProject = (index) =>{
    this.projectArr.splice(index, 1)
  }

  printInfo = () =>{
    console.log(this.projectArr);
  }
}

let allProjects = new ProjectStorage();

// const ProjectStorage = (() => {
//   let projectArr = new Array();

//   const addNewProject = (projectName, projectDescription) =>{
//     projectArr.push(new Project(projectName, projectDescription))
//   }

//   const removeProject = (index) =>{
//     projectArr.splice(index, 1)
//   }

//   const printInfo = () =>{
//     console.log(projectArr);
//   }
// })();



/***/ }),

/***/ "./src/todo_DOM.js":
/*!*************************!*\
  !*** ./src/todo_DOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "openFormTodo": () => (/* binding */ openFormTodo)
/* harmony export */ });
/* harmony import */ var _todoClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoClasses.js */ "./src/todoClasses.js");
/* harmony import */ var _DOMFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMFunctionality */ "./src/DOMFunctionality.js");


//opens the form for classes

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function openFormTodo() {
    document.getElementById("popupFormTodo").style.display = "block";
}

//adds the project to the list

function addProject(){
    const project_title = document.getElementById("project_name").value;
    const project_desc = document.getElementById("project_description").value;

    console.log(project_title  + " " + project_desc);

    _todoClasses_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.addNewProject(project_title, project_desc);
    _todoClasses_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.printInfo();

    (0,_DOMFunctionality__WEBPACK_IMPORTED_MODULE_1__.addProjectDOM)(project_title);

    closeForm();
}

function addTodo(){
    const todo_title = document.getElementById("todo_title").value;
    const todo_desc = document.getElementById("todo_description").value;
    const todo_date = document.getElementById("todo_date").value;
    const todo_priority = document.getElementById("todo_priority").value;
    const todo_notes = document.getElementById("todo_notes").value;
    console.log(todo_title + " " + todo_desc + " " + todo_date + " "
    + todo_priority + todo_notes);

    // allProjects.addNewProject(project_title, project_desc);
    // allProjects.printInfo();

    // addProjectDOM(project_title);

    // closeForm();
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    const project_title = document.getElementById("project_name");
    const project_desc = document.getElementById("project_description");
    
    project_title.value = '';
    project_desc.value = '';
}



/***/ }),

/***/ "./src/Bungee-Regular.ttf":
/*!********************************!*\
  !*** ./src/Bungee-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d95fa68283102c29cd9.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBWTtBQUNwQixLQUFLOztBQUVMOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDO0FBQ0U7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsaURBQVU7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsOENBQU87O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ29CO0FBQzZCO0FBQ2I7QUFDaUI7QUFDVjtBQUNrQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQVc7QUFDbkMsbURBQW1ELG9FQUFhO0FBQ2hFLG1EQUFtRCw0RUFBaUI7QUFDcEUsd0JBQXdCLDBEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCwrQ0FBUTtBQUMvRDtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsOEJBQThCO0FBQzlCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0IseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R3dDO0FBQ0k7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxzRUFBeUI7QUFDN0IsSUFBSSxrRUFBcUI7O0FBRXpCLElBQUksZ0VBQWE7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9ET01GdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wb3B1cEZvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3BvcHVwRm9ybVRvZG8uanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vbmV3LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXctdG9kby1saXN0Ly4vc3JjL3RvZG9DbGFzc2VzLmpzIiwid2VicGFjazovL25ldy10b2RvLWxpc3QvLi9zcmMvdG9kb19ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQnVuZ2VlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gICAgbWluLWhlaWdodDogMTAwJTsgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDEwZnI7XFxufVxcblxcbi8qIG5hdmJhciBzdHlsaW5nXFxuXFxuLm5hdmJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gKi9cXG5cXG5cXG4vKnNpZGViYXIgc3R5bGluZyovXFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDE3MiwgMTcyKTtcXG59XFxuXFxuLnNpZGViYXIgdWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xcbiAgICBnYXA6IDF2aDtcXG5cXG59XFxuXFxuXFxuLnNpZGViYXIgdWwgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIGJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjEgb3BhY2l0eSAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC4wMXZoIDJ2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMDAlOyAqL1xcbn1cXG5cXG4uc2lkZWJhciAjcHJvamVjdC1saXN0IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTsgLyogYmxhY2sgYmFja2dyb3VuZCB3aXRoIDAuMSBvcGFjaXR5ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjAxdmggMnZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbn1cXG5cXG5cXG4vKm1haW4gc2VjdGlvbiBzdHlsaW5nKi9cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG59XFxuXFxuLm1haW4gYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIGJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjEgb3BhY2l0eSAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDF2dyAxMHZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKmNzcyBmb3IgcG9wdXAgd2luZG93Ki9cXG5cXG4ubG9naW5Qb3B1cCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmZvcm1Qb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5OTk5O1xcbiAgICB6LWluZGV4OiAyMDtcXG59XFxuLmZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLFxcbi5mb3JtQ29udGFpbmVyIGlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4IDAgMjBweCAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcbiAgLmZvcm1Db250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcXG4gIC5mb3JtQ29udGFpbmVyIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5mb3JtQ29udGFpbmVyIC5idG4ge1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWJmNDI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcbi5mb3JtQ29udGFpbmVyIC5jYW5jZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG4uZm9ybUNvbnRhaW5lciAuYnRuOmhvdmVyLFxcbi5vcGVuQnV0dG9uOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMERBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBOzs7Ozs7Ozs7OztHQVdHOzs7QUFHSCxrQkFBa0I7O0FBRWxCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFFBQVE7O0FBRVo7OztBQUdBO0lBQ0ksOEJBQThCLEVBQUUsc0NBQXNDO0lBQ3RFLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEIsRUFBRSxzQ0FBc0M7SUFDcEUsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxzQ0FBc0M7SUFDdEUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7O0FBR0EsdUJBQXVCOztBQUV2QjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtFQUNFOztJQUVFLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLFVBQVU7Q0FDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9CdW5nZWUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250YWluZXJ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxMGZyO1xcbn1cXG5cXG4vKiBuYXZiYXIgc3R5bGluZ1xcblxcbi5uYXZiYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQnO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuXFxuXFxuLypzaWRlYmFyIHN0eWxpbmcqL1xcblxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAxNzIsIDE3Mik7XFxufVxcblxcbi5zaWRlYmFyIHVse1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICAgZ2FwOiAxdmg7XFxuXFxufVxcblxcblxcbi5zaWRlYmFyIHVsIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBibGFjayBiYWNrZ3JvdW5kIHdpdGggMC4xIG9wYWNpdHkgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuMDF2aCAydmg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTAwJTsgKi9cXG59XFxuXFxuLnNpZGViYXIgI3Byb2plY3QtbGlzdCBidXR0b257XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7IC8qIGJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjEgb3BhY2l0eSAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC4wMXZoIDJ2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG59XFxuXFxuXFxuLyptYWluIHNlY3Rpb24gc3R5bGluZyovXFxuXFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxufVxcblxcbi5tYWluIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBibGFjayBiYWNrZ3JvdW5kIHdpdGggMC4xIG9wYWNpdHkgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxdncgMTB2aDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLypjc3MgZm9yIHBvcHVwIHdpbmRvdyovXFxuXFxuLmxvZ2luUG9wdXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb3JtUG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5OTk5OTtcXG4gICAgei1pbmRleDogMjA7XFxufVxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tbGVmdDogMSU7XFxuICAgIG1hcmdpbi10b3A6IDIlO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvcm1Db250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF17XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLmZvcm1Db250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSxcXG4uZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDIwcHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG4gIC5mb3JtQ29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXFxuICAuZm9ybUNvbnRhaW5lciBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZm9ybUNvbnRhaW5lciAuYnRuIHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGViZjQyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG4uZm9ybUNvbnRhaW5lciAuY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcXG59XFxuLmZvcm1Db250YWluZXIgLmJ0bjpob3ZlcixcXG4ub3BlbkJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtvcGVuRm9ybVRvZG99IGZyb20gJy4vdG9kb19ET00nO1xuXG4vL2FkZCBidXR0b24gb2YgY29ycmVzcG9uZGluZyBwcm9qZWMgdG8gc2lkZWJhclxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0RE9NKG5hbWUpe1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBsaUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBsaUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtuYW1lfWApO1xuICAgIGxpQnV0dG9uLmlubmVySFRNTCA9IG5hbWU7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaUJ1dHRvbilcbiAgICBsaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICAgIGxpQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgICAgIHdoaWxlKG1haW4uZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVByb2plY3RNYWluKG5hbWUpXG4gICAgfSk7IFxufVxuXG4vL2FkZCBidXR0b24gb2YgY29yZXNwb25kaW5nIHByb2plY3QgdG8gbWFpblxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdE1haW4ocHJvamVjdE5hbWUpe1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRvZG9CdG4uaW5uZXJIVE1MID0gYEFkZCBUb0RvIGZvciAke3Byb2plY3ROYW1lfWA7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xuICAgIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgb3BlbkZvcm1Ub2RvKCk7XG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdERPTSgpe1xuXG59XG5cbmV4cG9ydCB7YWRkUHJvamVjdERPTX07IiwiZnVuY3Rpb24gbWFpbkNvbXAocHJvamVjdE5hbWUpIHtcbiAgICAvL0NyZWF0aW5nIHRoZSBtYWluIHNlY3Rpb25cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCBcIm1haW5cIik7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBcInRlc3RcIjtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWxpc3QnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IHttYWluQ29tcH07IiwiaW1wb3J0IHsgb3BlbkZvcm0gfSBmcm9tIFwiLi4vdG9kb19ET01cIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi4vdG9kb19ET01cIjtcblxuZnVuY3Rpb24gcG9wdXBGb3JtQ29tcCgpIHtcbiAgICAvL0NyZWF0aW5nIHRoZSBwb3B1cCBmb3JtXG4gICAgY29uc3QgcG9wdXBGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dpblBvcHVwXCIpO1xuXG4gICAgY29uc3QgcG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wdXBGb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtUG9wdXBcIik7XG4gICAgcG9wdXBGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLGBwb3B1cEZvcm1gKTtcblxuICAgIHBvcHVwRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIik7XG5cbiAgICAvL2NyZWF0aW5nIGZvcm1zXG5cbiAgICAvL3Byb2plY3QgbmFtZSBsYWJlbFxuICAgIGxldCBwcm9qZWN0X25hbWVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdF9uYW1lX2xhYmVsLmlubmVySFRNTCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgcHJvamVjdF9uYW1lX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RfbmFtZVwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RfbmFtZV9sYWJlbCk7XG4gICAgLy9wcm9qZWN0IG5hbWUgZm9ybVxuICAgIGxldCBwcm9qZWN0X25hbWUgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLGB0ZXh0YCk7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLGBFbnRlciBQcm9qZWN0IE5hbWVgKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsYHByb2plY3RfbmFtZWApO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLGBwcm9qZWN0X25hbWVgKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RfbmFtZSlcblxuICAgIFxuICAgIC8vcHJvamVjdCBuYW1lIGxhYmVsXG4gICAgbGV0IHByb2plY3RfZGVzY3JpcHRpb25fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdF9kZXNjcmlwdGlvbl9sYWJlbC5pbm5lckhUTUwgPSBcIlByb2plY3QgRGVzY3JpcHRpb25cIjtcbiAgICBwcm9qZWN0X2Rlc2NyaXB0aW9uX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RfZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0X2Rlc2NyaXB0aW9uX2xhYmVsKTtcbiAgICAvL3Byb2plY3QgZGVzY3JpcHRpb25cbiAgICBsZXQgcHJvamVjdF9kZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJvamVjdF9kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLGB0ZXh0YCk7XG4gICAgcHJvamVjdF9kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxgRW50ZXIgUHJvamVjdCBEZXNjcmlwdGlvbmApO1xuICAgIHByb2plY3RfZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsYHByb2plY3RfZGVzY3JpcHRpb25gKTtcbiAgICBwcm9qZWN0X2Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsYHByb2plY3RfZGVzY3JpcHRpb25gKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RfZGVzY3JpcHRpb24pO1xuXG4gICAgLy9hZGQgcHJvamVjdCBidXR0b25cbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsYGJ1dHRvbmApO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1jYW5jZWxcIik7XG4gICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgYWRkUHJvamVjdGApO1xuICAgIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTsgXG5cbiAgICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIHBvcHVwRm9ybUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHtwb3B1cEZvcm1Db21wfTsiLCJpbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSBcIi4uL3RvZG9fRE9NXCI7XG5cbmZ1bmN0aW9uIHBvcHVwRm9ybVRvZG9Db21wKCkge1xuICAgIC8vQ3JlYXRpbmcgdGhlIHBvcHVwIGZvcm1cbiAgICBjb25zdCBwb3B1cEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ2luUG9wdXBcIik7XG5cbiAgICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3B1cEZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1Qb3B1cFwiKTtcbiAgICBwb3B1cEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsYHBvcHVwRm9ybVRvZG9gKTtcblxuICAgIHBvcHVwRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cEZvcm0pO1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1Db250YWluZXJcIik7XG5cbiAgICAvL2NyZWF0aW5nIGZvcm1zXG5cbiAgICAvL3RvZG8gbmFtZSBsYWJlbFxuICAgIGxldCB0b2RvX3RpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9fdGl0bGVfbGFiZWwuaW5uZXJIVE1MID0gXCJUb2RvIFRpdGxlXCI7XG4gICAgdG9kb190aXRsZV9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3RpdGxlXCIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb190aXRsZV9sYWJlbCk7XG4gICAgLy90b2RvIG5hbWUgZm9ybVxuICAgIGxldCB0b2RvX3RpdGxlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvX3RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsYHRleHRgKTtcbiAgICB0b2RvX3RpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLGBFbnRlciBUb2RvIFRpdGxlYCk7XG4gICAgdG9kb190aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgdG9kb190aXRsZWApO1xuICAgIHRvZG9fdGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJyxgdG9kb190aXRsZWApO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb190aXRsZSlcblxuICAgIFxuICAgIC8vdG9kbyBkZXNjIGxhYmVsXG4gICAgbGV0IHRvZG9fZGVzY3JpcHRpb25fbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb19kZXNjcmlwdGlvbl9sYWJlbC5pbm5lckhUTUwgPSBcIlRvZG8gRGVzY3JpcHRpb25cIjtcbiAgICB0b2RvX2Rlc2NyaXB0aW9uX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9fZGVzY3JpcHRpb25cIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2Rlc2NyaXB0aW9uX2xhYmVsKTtcbiAgICAvL3Byb2plY3QgZGVzY3JpcHRpb25cbiAgICBsZXQgdG9kb19kZXNjcmlwdGlvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLGB0ZXh0YCk7XG4gICAgdG9kb19kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxgRW50ZXIgVG90byBEZXNjcmlwdGlvbmApO1xuICAgIHRvZG9fZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsYHRvZG9fZGVzY3JpcHRpb25gKTtcbiAgICB0b2RvX2Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsYHRvZG9fZGVzY3JpcHRpb25gKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9fZGVzY3JpcHRpb24pO1xuXG5cbiAgICAvL3RvZG8gZGF0ZSBsYWJlbFxuICAgIGxldCB0b2RvX2RhdGVfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb19kYXRlX2xhYmVsLmlubmVySFRNTCA9IFwiVG9kbyBEZXNjcmlwdGlvblwiO1xuICAgIHRvZG9fZGF0ZV9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX2RhdGVcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX2RhdGVfbGFiZWwpO1xuICAgIC8vdG9kbyBkYXRlXG4gICAgbGV0IHRvZG9fZGF0ZSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb19kYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsYHRleHRgKTtcbiAgICB0b2RvX2RhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsYEVudGVyIFRvZG8gRGF0ZWApO1xuICAgIHRvZG9fZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgdG9kb19kYXRlYCk7XG4gICAgdG9kb19kYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsYHRvZG9fZGF0ZWApO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19kYXRlKTtcblxuICAgIC8vdG9kbyBwcmlvcml0eVxuICAgIGxldCB0b2RvX3ByaW9yaXR5X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRvZG9fcHJpb3JpdHlfbGFiZWwuaW5uZXJIVE1MID0gXCJUb2RvIERlc2NyaXB0aW9uXCI7XG4gICAgdG9kb19wcmlvcml0eV9sYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb19wcmlvcml0eV9sYWJlbCk7XG4gICAgLy90b2RvIHByaW9yaXR5XG4gICAgbGV0IHRvZG9fcHJpb3JpdHkgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRvZG9fcHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJyxgdGV4dGApO1xuICAgIHRvZG9fcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsYEVudGVyIFRvZG8gUHJpb3JpdHlgKTtcbiAgICB0b2RvX3ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLGB0b2RvX3ByaW9yaXR5YCk7XG4gICAgdG9kb19wcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLGB0b2RvX3ByaW9yaXR5YCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX3ByaW9yaXR5KTtcblxuXG4gICAgLy90b2RvIG5vdGVzXG4gICAgbGV0IHRvZG9fbm90ZXNfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdG9kb19ub3Rlc19sYWJlbC5pbm5lckhUTUwgPSBcIlRvZG8gRGVzY3JpcHRpb25cIjtcbiAgICB0b2RvX25vdGVzX2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9fbm90ZXNcIik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvX25vdGVzX2xhYmVsKTtcbiAgICAvL3RvZG8gbm90ZXNcbiAgICBsZXQgdG9kb19ub3RlcyA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdG9kb19ub3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLGB0ZXh0YCk7XG4gICAgdG9kb19ub3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxgRW50ZXIgVG9kbyBQcmlvcml0eWApO1xuICAgIHRvZG9fbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsYHRvZG9fbm90ZXNgKTtcbiAgICB0b2RvX25vdGVzLnNldEF0dHJpYnV0ZSgnbmFtZScsYHRvZG9fbm90ZXNgKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9fbm90ZXMpO1xuXG4gICAgLy9hZGQgcHJvamVjdCBidXR0b25cbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsYGJ1dHRvbmApO1xuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsYGFkZFRvZG9gKTtcbiAgICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kbyk7IFxuXG4gICAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIFxuICAgIHJldHVybiBwb3B1cEZvcm1Db250YWluZXI7XG59XG5cbmV4cG9ydCB7cG9wdXBGb3JtVG9kb0NvbXB9IiwiZnVuY3Rpb24gc2lkZWJhckNvbXAoKSB7XG4gICAgLy9DcmVhdGluZyB0aGUgc2lkZWJhclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuXG4gICAgLy9jcmVhdGluZyBQcm9qZWN0IHRpdGxlXG4gICAgbGV0IHRpdGxlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxgc2lkZWJhci10aXRsZWApO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgLy9jcmVhdGluZyBwcm9qZWN0IGxpc3RcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWxpc3QnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuXG4gICAgLy9jcmVhdGluZyBCdXR0b25zXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGRhdGEgPSBbXCIrXCJdXG5cblxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgbGlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGxpQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGAke2l0ZW19YCk7XG4gICAgICAgIGxpQnV0dG9uLmlubmVySFRNTCA9IGl0ZW07XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQobGlCdXR0b24pO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3QpOyAgXG4gICAgXG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmV4cG9ydCB7c2lkZWJhckNvbXB9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge3NpZGViYXJDb21wfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQge29wZW5Gb3JtfSBmcm9tICcuL3RvZG9fRE9NJztcbmltcG9ydCB7cG9wdXBGb3JtQ29tcH0gZnJvbSAnLi9jb21wb25lbnRzL3BvcHVwRm9ybSc7XG5pbXBvcnQge21haW5Db21wfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQge3BvcHVwRm9ybVRvZG9Db21wfSBmcm9tICcuL2NvbXBvbmVudHMvcG9wdXBGb3JtVG9kbyc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lcicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbXAoKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHBvcHVwRm9ybUNvbXAoKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHBvcHVwRm9ybVRvZG9Db21wKCkpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkNvbXAoKSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4gXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIitcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTsgXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFkZFByb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcImluXCIpXG4vLyB9KTsgXG59XG5cbiIsIi8vRmlsZSB3aGVyZSBJIGNyZWF0ZSB0aGUgdG9kbyBjbGFzc1xuXG5jbGFzcyBUb2Rve1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI2R1ZURhdGU7XG4gICAgI3ByaW9yaXR5O1xuICAgICNub3RlcztcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKXtcbiAgICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuI25vdGVzID0gbm90ZXM7XG4gICAgfVxuICAgIC8vZ2V0dGVyc1xuICAgIGdldCBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuICAgIGdldCBnZXROb3RlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiNub3RlcztcbiAgICB9XG4gICAgLy9zZXR0ZXJzXG4gICAgc2V0IHNldFRpdGxlKHRpdGxlKSB7dGhpcy4jdGl0bGUgPSB0aXRsZTt9XG4gICAgc2V0IHNldERlc2NyaXB0aW9uKGRlc2MpIHt0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2M7fVxuICAgIHNldCBzZXREdWVEYXRlKGRhdGUpIHt0aGlzLiNkdWVEYXRlID0gZGF0ZTt9XG4gICAgc2V0IHNldFByaW9yaXR5KHByaW9yaXR5KSB7dGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTt9XG4gICAgc2V0IHNldE5vdGVzKG5vdGVzKSB7dGhpcy4jbm90ZXMgPSBub3Rlczt9XG5cbn1cblxuLy90aGUgYSBwcm9qZWN0IGNsYXNzIHdoaWNoIHdpbGwgaG9sZCB0aGUgZW50aXJpdHkgb2YgYSBUb2RvIGZvciBhIHBhcnRpY3VsYXIgcHJvamVjdFxuY2xhc3MgUHJvamVjdCB7XG4gICAgc3RvcmFnZSA9IG5ldyBBcnJheSgpO1xuICAgICNwcm9qZWN0TmFtZTtcbiAgICAjcHJvamVjdERlc2NyaXB0aW9uXG4gICAgY29uc3RydWN0b3IocHJvamV0Y3ROYW1lLHByb2plY3REZXNjcmlwdGlvbil7XG4gICAgICAgIHRoaXMuI3Byb2plY3ROYW1lID0gcHJvamV0Y3ROYW1lO1xuICAgICAgICB0aGlzLiNwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGdldFByb2plY3ROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGdldFByb2plY3REZXNjcmlwdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuI3Byb2plY3REZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHt0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO31cblxuICAgIHNldCBzZXRQcm9qZWN0TmFtZShwcm9qZWN0RGVzY3JpcHRpb24pIHt0aGlzLiNwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247fVxuXG4gICAgLy9tZXRob2QgdG8gYWRkIGEgdG9kb1xuICAgIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpe1xuICAgICAgICB0aGlzLnN0b3JhZ2UucHVzaChuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykpO1xuICAgIH1cblxuICAgIC8vbWV0aG9kIHRvIHJlbW92ZSBhIHRvZG9cbiAgICByZW1vdmVUb2RvKGluZGV4KXtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG59XG5cblxuY2xhc3MgUHJvamVjdFN0b3JhZ2V7XG4gIHByb2plY3RBcnIgPSBuZXcgQXJyYXkoKTtcbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSA9PntcbiAgICB0aGlzLnByb2plY3RBcnIucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSlcbiAgfVxuXG4gIHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+e1xuICAgIHRoaXMucHJvamVjdEFyci5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cblxuICBwcmludEluZm8gPSAoKSA9PntcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RBcnIpO1xuICB9XG59XG5cbmxldCBhbGxQcm9qZWN0cyA9IG5ldyBQcm9qZWN0U3RvcmFnZSgpO1xuXG4vLyBjb25zdCBQcm9qZWN0U3RvcmFnZSA9ICgoKSA9PiB7XG4vLyAgIGxldCBwcm9qZWN0QXJyID0gbmV3IEFycmF5KCk7XG5cbi8vICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKSA9Pntcbi8vICAgICBwcm9qZWN0QXJyLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbikpXG4vLyAgIH1cblxuLy8gICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9Pntcbi8vICAgICBwcm9qZWN0QXJyLnNwbGljZShpbmRleCwgMSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHByaW50SW5mbyA9ICgpID0+e1xuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnIpO1xuLy8gICB9XG4vLyB9KSgpO1xuXG5leHBvcnQge2FsbFByb2plY3RzfTsiLCJpbXBvcnQge2FsbFByb2plY3RzfSBmcm9tIFwiLi90b2RvQ2xhc3Nlcy5qc1wiXG5pbXBvcnQge2FkZFByb2plY3RET019IGZyb20gJy4vRE9NRnVuY3Rpb25hbGl0eSdcbi8vb3BlbnMgdGhlIGZvcm0gZm9yIGNsYXNzZXNcblxuZnVuY3Rpb24gb3BlbkZvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3B1cEZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gb3BlbkZvcm1Ub2RvKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBGb3JtVG9kb1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL2FkZHMgdGhlIHByb2plY3QgdG8gdGhlIGxpc3RcblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3RfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfbmFtZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0X2Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RfZGVzY3JpcHRpb25cIikudmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0X3RpdGxlICArIFwiIFwiICsgcHJvamVjdF9kZXNjKTtcblxuICAgIGFsbFByb2plY3RzLmFkZE5ld1Byb2plY3QocHJvamVjdF90aXRsZSwgcHJvamVjdF9kZXNjKTtcbiAgICBhbGxQcm9qZWN0cy5wcmludEluZm8oKTtcblxuICAgIGFkZFByb2plY3RET00ocHJvamVjdF90aXRsZSk7XG5cbiAgICBjbG9zZUZvcm0oKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbygpe1xuICAgIGNvbnN0IHRvZG9fdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9fdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb19kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvX2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb19kYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9fcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9fcHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgdG9kb19ub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb19ub3Rlc1wiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0b2RvX3RpdGxlICsgXCIgXCIgKyB0b2RvX2Rlc2MgKyBcIiBcIiArIHRvZG9fZGF0ZSArIFwiIFwiXG4gICAgKyB0b2RvX3ByaW9yaXR5ICsgdG9kb19ub3Rlcyk7XG5cbiAgICAvLyBhbGxQcm9qZWN0cy5hZGROZXdQcm9qZWN0KHByb2plY3RfdGl0bGUsIHByb2plY3RfZGVzYyk7XG4gICAgLy8gYWxsUHJvamVjdHMucHJpbnRJbmZvKCk7XG5cbiAgICAvLyBhZGRQcm9qZWN0RE9NKHByb2plY3RfdGl0bGUpO1xuXG4gICAgLy8gY2xvc2VGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwRm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF9uYW1lXCIpO1xuICAgIGNvbnN0IHByb2plY3RfZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF9kZXNjcmlwdGlvblwiKTtcbiAgICBcbiAgICBwcm9qZWN0X3RpdGxlLnZhbHVlID0gJyc7XG4gICAgcHJvamVjdF9kZXNjLnZhbHVlID0gJyc7XG59XG5cbmV4cG9ydCB7b3BlbkZvcm0sIG9wZW5Gb3JtVG9kbywgYWRkVG9kbywgYWRkUHJvamVjdH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9