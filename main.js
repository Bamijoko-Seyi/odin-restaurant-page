/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    height: 100%;\n    font-family: Roboto, sans-serif;\n}\n\nnav {\n    background-color: #afafaf;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    padding: 16px;\n}\n\nnav button {\n    padding: 10px 24px;\n    font-size: 18px;\n    font-weight: 600;\n    background-color: #EE1B24;\n    color: #ffffff;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n.title-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 32px;\n}\n\n.title-container em {\n    font-size: 64px;\n    font-weight: 600;\n    font-family: Brush Script MT, Comic Sans MS;\n    margin-right: 16px;\n}\n\n.title-container img {\n    width: 128px;\n    height: 128px;\n}\n\n.review-container {\n    padding: 64px;\n    height: auto;\n    background-color: #00A652;\n}\n\n.review-container p {\n    color: #ffffff;\n    font-size: 56px;\n    font-weight: 700;\n    margin-bottom: 64px;\n}\n\n.review-container em {\n    color: #ffffff;\n    display: block;\n    font-size: 40px;\n    font-weight: 700;\n    text-align: right;\n    padding-right: 128px;\n}\n\n.schedule-container {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 64px;\n}\n\n.schedule-container h2 {\n    font-size: 62px;\n    font-weight: 800;\n    margin-bottom: 16px;\n}\n\n.schedule-container p {\n    font-size: 40px;\n    font-weight: 600;\n    margin: 16px auto 16px auto;\n}\n\n.location-container {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 32px;\n    height: auto;\n    background-color: #EE1B24;\n}\n\n.location-container h2 {\n    color: #ffffff;\n    font-size: 32px;\n    font-weight: 800;\n    margin-bottom: 16px;\n}\n\n.location-container p {\n    color: #ffffff;\n    font-size: 24px;\n    font-weight: 600;\n    margin: 16px auto 16px auto;\n}\n\n.menu-title-container {\n    background-color: #EE1B24;\n    padding: 48px;\n    text-align: center;\n}\n\n.menu-title-container h1 {\n    color: #ffffff;\n    font-size: 96px;\n    font-weight: 800;\n    font-family: Brush Script MT, Comic Sans MS;\n}\n\n.beverages-container,\n.sides-container,\n.pizza-container {\n    padding: 64px;\n}\n\n.beverages-container {\n    background-color: #00A652;\n}\n\n.sides-container {\n    background-color: #ffffff;\n}\n\n.pizza-container {\n    background-color: #EE1B24;\n}\n\n.beverages-container > h2,\n.sides-container > h2,\n.pizza-container > h2 {\n    font-size: 62px;\n    font-weight: 800;\n    margin-bottom: 32px;\n    text-align: center;\n}\n\n.beverages-container > h2 {\n    color: #ffffff;\n}\n\n.sides-container > h2 {\n    color: #1a1a1a;\n}\n\n.pizza-container > h2 {\n    color: #ffffff;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 32px 16px;\n    margin-bottom: 32px;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n}\n\n.sides-item {\n    border-bottom: 2px solid rgba(0, 0, 0, 0.15);\n}\n\n.menu-item:last-child {\n    border-bottom: none;\n}\n\n.menu-item-name {\n    font-size: 48px;\n    font-weight: 800;\n    margin-bottom: 16px;\n}\n\n.beverages-item .menu-item-name,\n.pizza-item .menu-item-name {\n    color: #ffffff;\n}\n\n.sides-item .menu-item-name {\n    color: #1a1a1a;\n}\n\n.menu-item-description {\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1.5;\n    max-width: 700px;\n    margin-bottom: 24px;\n}\n\n.beverages-item .menu-item-description,\n.pizza-item .menu-item-description {\n    color: #ffffff;\n}\n\n.sides-item .menu-item-description {\n    color: #333;\n}\n\n.menu-item-image {\n    width: 256px;\n    height: 256px;\n    object-fit: contain;\n    border-radius: 16px;\n    margin-bottom: 16px;\n}\n\n.menu-item-price {\n    font-size: 32px;\n    font-weight: 800;\n}\n\n.beverages-item .menu-item-price,\n.pizza-item .menu-item-price {\n    color: #ffffff;\n}\n\n.sides-item .menu-item-price {\n    color: #EE1B24;\n}\n\n.contact-title-container {\n    background-color: #EE1B24;\n    padding: 48px;\n    text-align: center;\n}\n\n.contact-title-container h1 {\n    color: #ffffff;\n    font-size: 96px;\n    font-weight: 800;\n    font-family: Brush Script MT, Comic Sans MS;\n}\n\n.contact-container {\n    background-color: #00A652;\n    padding: 64px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 32px;\n}\n\n.contact-card {\n    background-color: #ffffff;\n    padding: 48px;\n    border-radius: 16px;\n    width: 100%;\n    max-width: 700px;\n    text-align: center;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.contact-name {\n    font-size: 48px;\n    font-weight: 800;\n    color: #1a1a1a;\n    margin-bottom: 8px;\n    font-family: Brush Script MT, Comic Sans MS;\n}\n\n.contact-role {\n    font-size: 28px;\n    font-weight: 700;\n    color: #EE1B24;\n    margin-bottom: 24px;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n}\n\n.contact-phone {\n    font-size: 24px;\n    font-weight: 600;\n    color: #333;\n    margin-bottom: 8px;\n}\n\n.contact-email {\n    font-size: 24px;\n    font-weight: 600;\n    color: #00A652;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/coke.png"
/*!*****************************!*\
  !*** ./src/images/coke.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c0a039ed4aee41e6434b.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/coke.png?\n}");

/***/ },

/***/ "./src/images/fries.png"
/*!******************************!*\
  !*** ./src/images/fries.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6ef6a925730dab5e1c3a.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/fries.png?\n}");

/***/ },

/***/ "./src/images/garlic-bread.png"
/*!*************************************!*\
  !*** ./src/images/garlic-bread.png ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"852cd5e8da3296ffae7d.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/garlic-bread.png?\n}");

/***/ },

/***/ "./src/images/lemonade.png"
/*!*********************************!*\
  !*** ./src/images/lemonade.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0abc9d476069d58d5d2b.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/lemonade.png?\n}");

/***/ },

/***/ "./src/images/margherita.png"
/*!***********************************!*\
  !*** ./src/images/margherita.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b439f278528ce8892741.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/margherita.png?\n}");

/***/ },

/***/ "./src/images/pepperoni.png"
/*!**********************************!*\
  !*** ./src/images/pepperoni.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"13d6e92744bd5699e9c4.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/pepperoni.png?\n}");

/***/ },

/***/ "./src/images/pizza-icon.png"
/*!***********************************!*\
  !*** ./src/images/pizza-icon.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8a171658d4e8c62fd37c.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/pizza-icon.png?\n}");

/***/ },

/***/ "./src/images/sprite.png"
/*!*******************************!*\
  !*** ./src/images/sprite.png ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"090db64743395323052f.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/sprite.png?\n}");

/***/ },

/***/ "./src/images/supreme.png"
/*!********************************!*\
  !*** ./src/images/supreme.png ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9d23075d65de7c85102c.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/supreme.png?\n}");

/***/ },

/***/ "./src/images/wings.png"
/*!******************************!*\
  !*** ./src/images/wings.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dd2f0624e5c0aae41b26.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/wings.png?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContact: () => (/* binding */ renderContact),\n/* harmony export */   renderHome: () => (/* binding */ renderHome),\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza-icon.png */ \"./src/images/pizza-icon.png\");\n/* harmony import */ var _images_coke_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/coke.png */ \"./src/images/coke.png\");\n/* harmony import */ var _images_sprite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/sprite.png */ \"./src/images/sprite.png\");\n/* harmony import */ var _images_lemonade_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lemonade.png */ \"./src/images/lemonade.png\");\n/* harmony import */ var _images_wings_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/wings.png */ \"./src/images/wings.png\");\n/* harmony import */ var _images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/garlic-bread.png */ \"./src/images/garlic-bread.png\");\n/* harmony import */ var _images_fries_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/fries.png */ \"./src/images/fries.png\");\n/* harmony import */ var _images_margherita_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/margherita.png */ \"./src/images/margherita.png\");\n/* harmony import */ var _images_pepperoni_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pepperoni.png */ \"./src/images/pepperoni.png\");\n/* harmony import */ var _images_supreme_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/supreme.png */ \"./src/images/supreme.png\");\n\n\n\n\n\n\n\n\n\n\n\nfunction renderHome() {\n    const content = document.querySelector(\"#content\");\n    content.replaceChildren();\n\n    const titleDiv = document.createElement(\"div\");\n    const titleEm = document.createElement(\"em\");\n    const titleImg = document.createElement(\"img\");\n\n    titleDiv.classList.add(\"title-container\");\n    titleEm.textContent = \"Bams Pizzaria\";\n    titleImg.src = _images_pizza_icon_png__WEBPACK_IMPORTED_MODULE_0__;\n    titleImg.alt = \"Bams Pizzaria logo\";\n\n    titleDiv.appendChild(titleEm);\n    titleDiv.appendChild(titleImg);\n\n    const reviewDiv = document.createElement(\"div\");\n    const reviewP = document.createElement(\"p\");\n    const reviewEm = document.createElement(\"em\");\n\n    reviewDiv.classList.add(\"review-container\");\n    reviewP.textContent = `Their pizza is simply one of the best! The overall environment and staff are so nice and there are so many types of pizza to choose from. Did I forget to mention that there is a play area for kids, so there's just something for everyone here. I'll be sure to let my friends and family know of this fine establishment.`;\n    reviewEm.textContent = \"Matthew B\";\n\n    reviewDiv.appendChild(reviewP);\n    reviewDiv.appendChild(reviewEm);\n\n    const scheduleDiv = document.createElement(\"div\");\n    const scheduleH2 = document.createElement(\"h2\");\n\n    scheduleDiv.classList.add(\"schedule-container\");\n    scheduleH2.textContent = \"Hours\";\n\n    scheduleDiv.appendChild(scheduleH2);\n\n    const hours = [\n        \"Sunday: 8am - 8pm\",\n        \"Monday: 6am - 6pm\",\n        \"Tuesday: 6am - 6pm\",\n        \"Wednesday: 6am - 6pm\",\n        \"Thursday: 6am - 10pm\",\n        \"Friday: 6am - 10pm\",\n        \"Saturday: 8am - 10pm\"\n    ];\n\n    hours.forEach(line => {\n        const p = document.createElement(\"p\");\n        p.textContent = line;\n        scheduleDiv.appendChild(p);\n    });\n\n    const locationDiv = document.createElement(\"div\");\n    const locationH2 = document.createElement(\"h2\");\n    const locationP = document.createElement(\"p\");\n\n    locationDiv.classList.add(\"location-container\");\n    locationH2.textContent = \"Location\";\n    locationP.textContent = \"3245 49 AVE NW, Edmonton\";\n\n    locationDiv.appendChild(locationH2);\n    locationDiv.appendChild(locationP);\n\n    content.appendChild(titleDiv);\n    content.appendChild(reviewDiv);\n    content.appendChild(scheduleDiv);\n    content.appendChild(locationDiv);\n}\n\nfunction renderMenu() {\n    const content = document.querySelector(\"#content\");\n    content.replaceChildren();\n\n    const titleDiv = document.createElement(\"div\");\n    const titleH1 = document.createElement(\"h1\");\n\n    titleDiv.classList.add(\"menu-title-container\");\n    titleH1.textContent = \"Menu\";\n\n    titleDiv.appendChild(titleH1);\n    content.appendChild(titleDiv);\n\n    const beverages = [\n        {\n            name: \"Coca Cola\",\n            description: \"Ice-cold classic Coke served in a frosted glass with a slice of lime.\",\n            image: _images_coke_png__WEBPACK_IMPORTED_MODULE_1__,\n            price: \"$3.49\"\n        },\n        {\n            name: \"Sprite\",\n            description: \"Crisp lemon-lime soda, bubbly and refreshing. Perfect with spicy slices.\",\n            image: _images_sprite_png__WEBPACK_IMPORTED_MODULE_2__,\n            price: \"$3.49\"\n        },\n        {\n            name: \"Fresh Lemonade\",\n            description: \"House-squeezed lemons, lightly sweetened, served over crushed ice.\",\n            image: _images_lemonade_png__WEBPACK_IMPORTED_MODULE_3__,\n            price: \"$4.99\"\n        }\n    ];\n\n    const sides = [\n        {\n            name: \"Buffalo Wings\",\n            description: \"Eight crispy wings tossed in tangy buffalo sauce with a side of ranch.\",\n            image: _images_wings_png__WEBPACK_IMPORTED_MODULE_4__,\n            price: \"$9.99\"\n        },\n        {\n            name: \"Garlic Bread\",\n            description: \"Toasted ciabatta brushed with garlic butter and fresh parsley.\",\n            image: _images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_5__,\n            price: \"$5.49\"\n        },\n        {\n            name: \"Seasoned Fries\",\n            description: \"Golden fries dusted with our house seasoning blend. Crispy outside, fluffy inside.\",\n            image: _images_fries_png__WEBPACK_IMPORTED_MODULE_6__,\n            price: \"$4.99\"\n        }\n    ];\n\n    const pizzas = [\n        {\n            name: \"Margherita\",\n            description: \"San Marzano tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.\",\n            image: _images_margherita_png__WEBPACK_IMPORTED_MODULE_7__,\n            price: \"$14.99\"\n        },\n        {\n            name: \"Pepperoni\",\n            description: \"Classic pepperoni over mozzarella and tangy tomato sauce. A timeless favourite.\",\n            image: _images_pepperoni_png__WEBPACK_IMPORTED_MODULE_8__,\n            price: \"$16.99\"\n        },\n        {\n            name: \"Supreme\",\n            description: \"Pepperoni, sausage, bell peppers, onions, mushrooms, and black olives.\",\n            image: _images_supreme_png__WEBPACK_IMPORTED_MODULE_9__,\n            price: \"$18.99\"\n        }\n    ];\n\n    content.appendChild(buildSection(\"Beverages\", \"beverages-container\", beverages, \"beverages-item\"));\n    content.appendChild(buildSection(\"Sides\", \"sides-container\", sides, \"sides-item\"));\n    content.appendChild(buildSection(\"Pizza\", \"pizza-container\", pizzas, \"pizza-item\"));\n}\n\nfunction buildSection(heading, containerClass, items, itemClass) {\n    const section = document.createElement(\"div\");\n    const h2 = document.createElement(\"h2\");\n\n    section.classList.add(containerClass);\n    h2.textContent = heading;\n\n    section.appendChild(h2);\n\n    items.forEach(item => {\n        section.appendChild(buildItem(item, itemClass));\n    });\n\n    return section;\n}\n\nfunction buildItem(item, itemClass) {\n    const wrapper = document.createElement(\"div\");\n    const name = document.createElement(\"h3\");\n    const description = document.createElement(\"p\");\n    const image = document.createElement(\"img\");\n    const price = document.createElement(\"p\");\n\n    wrapper.classList.add(\"menu-item\", itemClass);\n    name.classList.add(\"menu-item-name\");\n    description.classList.add(\"menu-item-description\");\n    image.classList.add(\"menu-item-image\");\n    price.classList.add(\"menu-item-price\");\n\n    name.textContent = item.name;\n    description.textContent = item.description;\n    image.src = item.image;\n    image.alt = item.name;\n    price.textContent = item.price;\n\n    wrapper.appendChild(name);\n    wrapper.appendChild(description);\n    wrapper.appendChild(image);\n    wrapper.appendChild(price);\n\n    return wrapper;\n}\n\nfunction renderContact() {\n    const content = document.querySelector(\"#content\");\n    content.replaceChildren();\n\n    const titleDiv = document.createElement(\"div\");\n    const titleH1 = document.createElement(\"h1\");\n\n    titleDiv.classList.add(\"contact-title-container\");\n    titleH1.textContent = \"Contact Us\";\n\n    titleDiv.appendChild(titleH1);\n    content.appendChild(titleDiv);\n\n    const contacts = [\n        {\n            name: \"Marco Bellini\",\n            role: \"Head Chef\",\n            phone: \"(780) 555-0142\",\n            email: \"marco.bellini@bamspizzaria.ca\"\n        },\n        {\n            name: \"Elena Rossi\",\n            role: \"Restaurant Manager\",\n            phone: \"(780) 555-0178\",\n            email: \"elena.rossi@bamspizzaria.ca\"\n        },\n        {\n            name: \"Daniel Okafor\",\n            role: \"Server\",\n            phone: \"(780) 555-0193\",\n            email: \"daniel.okafor@bamspizzaria.ca\"\n        }\n    ];\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"contact-container\");\n\n    contacts.forEach(person => {\n        const card = document.createElement(\"div\");\n        card.classList.add(\"contact-card\");\n\n        const name = document.createElement(\"h2\");\n        const role = document.createElement(\"h3\");\n        const phone = document.createElement(\"p\");\n        const email = document.createElement(\"p\");\n\n        name.classList.add(\"contact-name\");\n        role.classList.add(\"contact-role\");\n        phone.classList.add(\"contact-phone\");\n        email.classList.add(\"contact-email\");\n\n        name.textContent = person.name;\n        role.textContent = person.role;\n        phone.textContent = person.phone;\n        email.textContent = person.email;\n\n        card.appendChild(name);\n        card.appendChild(role);\n        card.appendChild(phone);\n        card.appendChild(email);\n\n        contactContainer.appendChild(card);\n    });\n\n    content.appendChild(contactContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/dom.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nconst homeBtn = document.querySelector(\"nav button:nth-child(1)\");\nconst menuBtn = document.querySelector(\"nav button:nth-child(2)\");\nconst aboutBtn = document.querySelector(\"nav button:nth-child(3)\");\n\nhomeBtn.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_1__.renderHome);\nmenuBtn.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_1__.renderMenu);\naboutBtn.addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_1__.renderContact);\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)()\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;