!function(e){var n={};function _(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,_),t.l=!0,t.exports}_.m=e,_.c=n,_.d=function(e,n,r){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(_.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)_.d(r,t,function(n){return e[n]}.bind(null,t));return r},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_(_.s=1)}([function(module,exports,__webpack_require__){(function(module){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__,factory;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window,factory=function(){return function(e){var n={};function _(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,_),t.l=!0,t.exports}return _.m=e,_.c=n,_.d=function(e,n,r){_.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,n){if(1&n&&(e=_(e)),8&n)return e;if(4&n&&"object"===_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(_.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)_.d(r,t,function(n){return e[n]}.bind(null,t));return r},_.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(n,"a",n),n},_.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},_.p="",_(_.s="./src/index.umd.js")}({"./src/compiler/index.js":
/*!*******************************!*\
        !*** ./src/compiler/index.js ***!
        \*******************************/
/*! exports provided: compile */
function srcCompilerIndexJs(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });\nvar cache = Object.create(null);\nfunction compile(html) {\n  html = html.trim();\n  var hit = cache[html];\n  console.log(hit);\n}\n\n//# sourceURL=webpack://Vue/./src/compiler/index.js?')},"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! exports provided: default */
function srcIndexJs(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _instance_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance/index */ "./src/instance/index.js");\n\n/* harmony default export */ __webpack_exports__["default"] = (_instance_index__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://Vue/./src/index.js?')},"./src/index.umd.js":
/*!**************************!*\
        !*** ./src/index.umd.js ***!
        \**************************/
/*! no static exports found */
function srcIndexUmdJs(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(/*! ./index */ \"./src/index.js\")['default'];\n\n//# sourceURL=webpack://Vue/./src/index.umd.js?")},"./src/instance/index.js":
/*!*******************************!*\
        !*** ./src/instance/index.js ***!
        \*******************************/
/*! exports provided: default */
function srcInstanceIndexJs(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });\n/* harmony import */ var _compiler_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compiler/index */ "./src/compiler/index.js");\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/index */ "./src/util/index.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\n\n\n\nvar Component = function Component(options) {\n  _classCallCheck(this, Component);\n\n  this.$options = options;\n  this._data = options.data;\n  var el = this._el = document.querySelector(options.el);\n  var render = Object(_compiler_index__WEBPACK_IMPORTED_MODULE_0__["compile"])(Object(_util_index__WEBPACK_IMPORTED_MODULE_1__["getOuterHTML"])(el));\n};\n\n\n\n//# sourceURL=webpack://Vue/./src/instance/index.js?')},"./src/util/dom.js":
/*!*************************!*\
        !*** ./src/util/dom.js ***!
        \*************************/
/*! exports provided: getOuterHTML */
function srcUtilDomJs(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOuterHTML\", function() { return getOuterHTML; });\n/**\r\n * Get outerHTML of elements, taking care\r\n * of SVG elements in IE as well.\r\n *\r\n * @param {Element} el\r\n * @return {String}\r\n */\nfunction getOuterHTML(el) {\n  if (el.outerHTML) {\n    return el.outerHTML;\n  } else {\n    var container = document.createElement('div');\n    container.appendChild(el.cloneNode(true));\n    return container.innerHTML;\n  }\n}\n\n//# sourceURL=webpack://Vue/./src/util/dom.js?")},"./src/util/index.js":
/*!***************************!*\
        !*** ./src/util/index.js ***!
        \***************************/
/*! exports provided: getOuterHTML */
function srcUtilIndexJs(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/util/dom.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOuterHTML", function() { return _dom__WEBPACK_IMPORTED_MODULE_0__["getOuterHTML"]; });\n\n\n\n//# sourceURL=webpack://Vue/./src/util/index.js?')}})},"object"===_typeof(exports)&&"object"===_typeof(module)?module.exports=factory():(__WEBPACK_AMD_DEFINE_ARRAY__=[],void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=factory)?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}).call(this,__webpack_require__(2)(module))},function(e,n,_){"use strict";_.r(n);var r=_(0),t=new(_.n(r).a)({el:"#app",data:{name:"encaik"}});console.log(t)},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);