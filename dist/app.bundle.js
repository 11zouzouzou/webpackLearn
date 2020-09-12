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
/* harmony import */ var webpacklibrary_zou__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpacklibrary-zou */ "./node_modules/webpacklibrary-zou/dist/webpack-numbers.js");
/* harmony import */ var webpacklibrary_zou__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpacklibrary_zou__WEBPACK_IMPORTED_MODULE_5__);








function component() {
  //testLibrary
  let q = webpacklibrary_zou__WEBPACK_IMPORTED_MODULE_5__;
  console.log(q);
  console.log(q.numToWord(2));
  const element = document.createElement("div");

  // lodash ES6
  // console.log("1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLnhtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ087QUFDekM7QUFDdkQsOEJBQThCLG1GQUEyQjtBQUN6RCx5Q0FBeUMsc0ZBQStCLENBQUMsaURBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsV0FBVyxlQUFlLGdFQUFnRSxHQUFHLFNBQVMsOEVBQThFLFVBQVUsWUFBWSxrQ0FBa0MsZUFBZSxvQ0FBb0MsR0FBRyxxQkFBcUI7QUFDOVY7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVHZDLGtCQUFrQixRQUFRLGdFOzs7Ozs7Ozs7Ozs7QUNBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUNPO0FBQ1Q7QUFDUzs7QUFFRzs7QUFFcUI7QUFDdEQ7QUFDQTtBQUNBLFVBQVUsK0NBQWU7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQUM7QUFDdkIsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsZUFBZSxpREFBSTs7QUFFbkI7O0FBRUEsY0FBYyxnREFBSSxFQUFFOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBQztBQUN2QjtBQUNBLGdCQUFnQixpREFBTzs7QUFFdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7Ozs7QUNqRUo7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBZSxvRkFBdUIseUNBQXlDLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vdGVzdC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVsbG8ge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLG1EQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVsbG8ge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi90ZXN0LnBuZ1xcXCIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJ6b3VcIl0sXCJmcm9tXCI6W1wibGVpXCJdLFwiaGVhZGluZ1wiOltcImdhbWVcIl0sXCJib2R5XCI6W1wiQ2FsbFwiXX19IiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vdGVzdC5wbmdcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi9kYXRhLnhtbFwiO1xuXG5pbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xuXG5pbXBvcnQgKiBhcyBab3VUZXN0TGlhYnJhcnkgZnJvbSBcIndlYnBhY2tsaWJyYXJ5LXpvdVwiO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAvL3Rlc3RMaWJyYXJ5XG4gIGxldCBxID0gWm91VGVzdExpYWJyYXJ5O1xuICBjb25zb2xlLmxvZyhxKTtcbiAgY29uc29sZS5sb2cocS5udW1Ub1dvcmQoMikpO1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBsb2Rhc2ggRVM2XG4gIC8vIGNvbnNvbGUubG9nKFwiMVwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG8xXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWxsb1wiKTsgLy9hZGQgY3NzXG5cbiAgLy8g5bCG5Zu+5YOP5re75Yqg5Yiw5oiR5Lus5bey57uP5a2Y5Zyo55qEIGRpdiDkuK3jgIJcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICBjb25zb2xlLmxvZyhEYXRhKTsgLy/miZPljbBpbmZvXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHByaW50QnV0dG9uKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG8yXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuICBidG4uaW5uZXJIVE1MID0gXCLngrnlh7vov5nph4zvvIznhLblkI7mn6XnnIsgSW5mb++8gVwiO1xuICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJpbnRCdXR0b24oKSk7XG5cbi8v5Yqo5oCB5a+85YWlbG9hZFxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZXREeW5hbWljQ29tcG9uZW50KCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoXG4vLyAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyBcImxvZGFzaFwiXG4vLyAgICk7XG4vLyAgIC8vIGltcG9ydCgvKiB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUgKi8gJ0xvZ2luTW9kYWwnKTtcbi8vICAgLy8gaW1wb3J0KC8qIHdlYnBhY2tQcmVsb2FkOiB0cnVlICovICdDaGFydGluZ0xpYnJhcnknKTtcbi8vICAgLy/pooTojrflj5bkuI7pooTliqDovb3mqKHlnZcocHJlZmV0Y2gvcHJlbG9hZCBtb2R1bGUpXG4vLyAgIC8vIGJ1bmRsZSDliIbmnpAoYnVuZGxlIGFuYWx5c2lzKS8v5YiG5p6Q5bel5YW3XG5cbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9EeW5hbWljQ29tcG9uZW50XCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuXG4vLyAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuXG4vLyBnZXREeW5hbWljQ29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbi8vIH0pO1xuIiwiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLy8gY29uc29sZS5sb2coXG4vLyAgIF8uam9pbihbJ0Fub3RoZXInLCAnbW9kdWxlJywgJ2xvYWRlZCEnXSwgJyAnKVxuLy8gKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGFsZXJ0KFwi6L6T5Ye6M1wiKTtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MDQ3YWY3Y2U2Y2UyMTQ0ZWQ0YjAyYmM3MjQ5MmYwMC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9