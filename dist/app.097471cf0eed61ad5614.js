(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.png */ "./src/test.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_test_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hello {\n  color: red;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,mDAA6B;AAC/B","sourcesContent":[".hello {\n  color: red;\n  background: url(\"./test.png\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["zou"],"from":["lei"],"heading":["game"],"body":["Call"]}}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.png */ "./src/test.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.xml */ "./src/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./print.js */ "./src/print.js");






function component() {
  const element = document.createElement("div");

  // lodash ES6
  console.log("1");
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello1", "webpack"], " ");
  element.classList.add("hello"); //add css

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = _test_png__WEBPACK_IMPORTED_MODULE_1__["default"];

  element.appendChild(myIcon);

  console.log(_data_xml__WEBPACK_IMPORTED_MODULE_3___default.a); //打印info

  return element;
}

function printButton() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello2", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 Info！";
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_4__["default"];

  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());

document.body.appendChild(printButton());

//动态导入load

// async function getDynamicComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import(
//     /* webpackChunkName: "lodash" */ "lodash"
//   );
//   // import(/* webpackPrefetch: true */ 'LoginModal');
//   // import(/* webpackPreload: true */ 'ChartingLibrary');
//   //预获取与预加载模块(prefetch/preload module)
//   // bundle 分析(bundle analysis)//分析工具

//   element.innerHTML = _.join(["HelloDynamicComponent", "webpack"], " ");

//   return element;
// }

// getDynamicComponent().then((component) => {
//   document.body.appendChild(component);
// });


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
// import _ from 'lodash';

// console.log(
//   _.join(['Another', 'module', 'loaded!'], ' ')
// );
function printMe() {
  alert("输出3");
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/test.png":
/*!**********************!*\
  !*** ./src/test.png ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4047af7ce6ce2144ed4b02bc72492f00.png");

/***/ })

},[["./src/index.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ087QUFDekM7QUFDdkQsOEJBQThCLG1GQUEyQjtBQUN6RCx5Q0FBeUMsc0ZBQStCLENBQUMsaURBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsV0FBVyxlQUFlLGdFQUFnRSxHQUFHLFNBQVMsOEVBQThFLFVBQVUsWUFBWSxrQ0FBa0MsZUFBZSxvQ0FBb0MsR0FBRyxxQkFBcUI7QUFDOVY7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVHZDLGtCQUFrQixRQUFRLGdFOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ087QUFDVDtBQUNTOztBQUVHO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBQztBQUN2QixpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQSxlQUFlLGlEQUFJOztBQUVuQjs7QUFFQSxjQUFjLGdEQUFJLEVBQUU7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFDO0FBQ3ZCO0FBQ0EsZ0JBQWdCLGlEQUFPOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7OztBQzNESjtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRSIsImZpbGUiOiJhcHAuMDk3NDcxY2YwZWVkNjFhZDU2MTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL3Rlc3QucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixtREFBNkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vdGVzdC5wbmdcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1wibm90ZVwiOntcInRvXCI6W1wiem91XCJdLFwiZnJvbVwiOltcImxlaVwiXSxcImhlYWRpbmdcIjpbXCJnYW1lXCJdLFwiYm9keVwiOltcIkNhbGxcIl19fSIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL3Rlc3QucG5nXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vZGF0YS54bWxcIjtcblxuaW1wb3J0IHByaW50TWUgZnJvbSBcIi4vcHJpbnQuanNcIjtcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gbG9kYXNoIEVTNlxuICBjb25zb2xlLmxvZyhcIjFcIik7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvMVwiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVsbG9cIik7IC8vYWRkIGNzc1xuXG4gIC8vIOWwhuWbvuWDj+a3u+WKoOWIsOaIkeS7rOW3sue7j+WtmOWcqOeahCBkaXYg5Lit44CCXG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gSWNvbjtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbiAgY29uc29sZS5sb2coRGF0YSk7IC8v5omT5Y2waW5mb1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwcmludEJ1dHRvbigpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvMlwiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcbiAgYnRuLmlubmVySFRNTCA9IFwi54K55Ye76L+Z6YeM77yM54S25ZCO5p+l55yLIEluZm/vvIFcIjtcbiAgYnRuLm9uY2xpY2sgPSBwcmludE1lO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByaW50QnV0dG9uKCkpO1xuXG4vL+WKqOaAgeWvvOWFpWxvYWRcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0RHluYW1pY0NvbXBvbmVudCgpIHtcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KFxuLy8gICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9kYXNoXCIgKi8gXCJsb2Rhc2hcIlxuLy8gICApO1xuLy8gICAvLyBpbXBvcnQoLyogd2VicGFja1ByZWZldGNoOiB0cnVlICovICdMb2dpbk1vZGFsJyk7XG4vLyAgIC8vIGltcG9ydCgvKiB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLyAnQ2hhcnRpbmdMaWJyYXJ5Jyk7XG4vLyAgIC8v6aKE6I635Y+W5LiO6aKE5Yqg6L295qih5Z2XKHByZWZldGNoL3ByZWxvYWQgbW9kdWxlKVxuLy8gICAvLyBidW5kbGUg5YiG5p6QKGJ1bmRsZSBhbmFseXNpcykvL+WIhuaekOW3peWFt1xuXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvRHluYW1pY0NvbXBvbmVudFwiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcblxuLy8gICByZXR1cm4gZWxlbWVudDtcbi8vIH1cblxuLy8gZ2V0RHluYW1pY0NvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4vLyB9KTtcbiIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbi8vIGNvbnNvbGUubG9nKFxuLy8gICBfLmpvaW4oWydBbm90aGVyJywgJ21vZHVsZScsICdsb2FkZWQhJ10sICcgJylcbi8vICk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBhbGVydChcIui+k+WHujNcIik7XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDA0N2FmN2NlNmNlMjE0NGVkNGIwMmJjNzI0OTJmMDAucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==