module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");


var _jsxFileName = "D:\\HardikSaraf\\Backup\\ssr-trendii-poc-backup\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_4__["store"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: thunkMiddleWare, store, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkMiddleWare", function() { return thunkMiddleWare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/root.reducer */ "./src/store/reducers/root.reducer.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



const thunkMiddleWare = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], thunkMiddleWare);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducers/news.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/news.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, NewsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsReducer", function() { return NewsReducer; });
/* harmony import */ var _types_actions_News_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/actions/News.Actions */ "./src/types/actions/News.Actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLoadingNews: true,
  tendingNews: []
};
const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_actions_News_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TRENDING_NEWS_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoadingNews: true
      });

    case _types_actions_News_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TRENDING_NEWS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingNews: false,
          tendingNews: action.payload
        });
      }

    case _types_actions_News_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_TRENDING_NEWS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoadingInspirations: false
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/reducers/retailer-subscription.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/store/reducers/retailer-subscription.reducer.ts ***!
  \*************************************************************/
/*! exports provided: RetailerSubscriptionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerSubscriptionReducer", function() { return RetailerSubscriptionReducer; });
/* harmony import */ var _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/actions/RetailerSubscription.Actions */ "./src/types/actions/RetailerSubscription.Actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  // register email state
  isRegisteringEmail: false,
  // thank you pop up state
  showThankYouMessage: false
};
const RetailerSubscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].REQUEST_REGISTER_EMAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isRegisteringEmail: true
      });

    case _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].SUCCESS_REGISTER_EMAIL:
    case _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].FAILURE_REGISTER_EMAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isRegisteringEmail: false
      });
    // thank you message states

    case _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_THANK_YOU_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        showThankYouMessage: true
      });

    case _types_actions_RetailerSubscription_Actions__WEBPACK_IMPORTED_MODULE_0__["default"].HIDE_THANK_YOU_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        showThankYouMessage: false
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/store/reducers/root.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/root.reducer.ts ***!
  \********************************************/
/*! exports provided: rootReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _retailer_subscription_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retailer-subscription.reducer */ "./src/store/reducers/retailer-subscription.reducer.ts");
/* harmony import */ var _news_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.reducer */ "./src/store/reducers/news.reducer.ts");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  RetailerSubscriptionData: _retailer_subscription_reducer__WEBPACK_IMPORTED_MODULE_1__["RetailerSubscriptionReducer"],
  NewsReducer: _news_reducer__WEBPACK_IMPORTED_MODULE_2__["NewsReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/types/actions/News.Actions.ts":
/*!*******************************************!*\
  !*** ./src/types/actions/News.Actions.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NewsActions = {
  GET_TRENDING_NEWS_REQUEST: "GET_TRENDING_NEWS_REQUEST",
  GET_TRENDING_NEWS: "GET_TRENDING_NEWS",
  GET_TRENDING_NEWS_FAILURE: "GET_TRENDING_NEWS_FAILURE"
};
/* harmony default export */ __webpack_exports__["default"] = (NewsActions);

/***/ }),

/***/ "./src/types/actions/RetailerSubscription.Actions.ts":
/*!***********************************************************!*\
  !*** ./src/types/actions/RetailerSubscription.Actions.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const RetailerSubscriptionActions = {
  REQUEST_REGISTER_EMAIL: "REQUEST_REGISTER_EMAIL",
  SUCCESS_REGISTER_EMAIL: "SUCCESS_REGISTER_EMAIL",
  FAILURE_REGISTER_EMAIL: "FAILURE_REGISTER_EMAIL",
  SHOW_THANK_YOU_MESSAGE: "SHOW_THANK_YOU_MESSAGE",
  HIDE_THANK_YOU_MESSAGE: "HIDE_THANK_YOU_MESSAGE"
};
/* harmony default export */ __webpack_exports__["default"] = (RetailerSubscriptionActions);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvbmV3cy5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9yZXRhaWxlci1zdWJzY3JpcHRpb24ucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcmVkdWNlcnMvcm9vdC5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90eXBlcy9hY3Rpb25zL05ld3MuQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHlwZXMvYWN0aW9ucy9SZXRhaWxlclN1YnNjcmlwdGlvbi5BY3Rpb25zLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInRodW5rTWlkZGxlV2FyZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ05ld3MiLCJ0ZW5kaW5nTmV3cyIsIk5ld3NSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiTmV3c0FjdGlvbnMiLCJHRVRfVFJFTkRJTkdfTkVXU19SRVFVRVNUIiwiR0VUX1RSRU5ESU5HX05FV1MiLCJwYXlsb2FkIiwiR0VUX1RSRU5ESU5HX05FV1NfRkFJTFVSRSIsImlzTG9hZGluZ0luc3BpcmF0aW9ucyIsImlzUmVnaXN0ZXJpbmdFbWFpbCIsInNob3dUaGFua1lvdU1lc3NhZ2UiLCJSZXRhaWxlclN1YnNjcmlwdGlvblJlZHVjZXIiLCJSZXRhaWxlclN1YnNjcmlwdGlvbkFjdGlvbnMiLCJSRVFVRVNUX1JFR0lTVEVSX0VNQUlMIiwiU1VDQ0VTU19SRUdJU1RFUl9FTUFJTCIsIkZBSUxVUkVfUkVHSVNURVJfRU1BSUwiLCJTSE9XX1RIQU5LX1lPVV9NRVNTQUdFIiwiSElERV9USEFOS19ZT1VfTUVTU0FHRSIsImNvbWJpbmVSZWR1Y2VycyIsIlJldGFpbGVyU3Vic2NyaXB0aW9uRGF0YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FB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QUEyQixHQUFHO0FBQ2hDQyx3QkFBc0IsRUFBRSx3QkFEUTtBQUVoQ0Msd0JBQXNCLEVBQUUsd0JBRlE7QUFHaENDLHdCQUFzQixFQUFFLHdCQUhRO0FBS2hDQyx3QkFBc0IsRUFBRSx3QkFMUTtBQU1oQ0Msd0JBQXNCLEVBQUU7QUFOUSxDQUFwQztBQVNlTCwwRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0aHVua01pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgdGh1bmtNaWRkbGVXYXJlKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IE5ld3NBY3Rpb25zIGZyb20gXCIuLi8uLi90eXBlcy9hY3Rpb25zL05ld3MuQWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmdOZXdzOiB0cnVlLFxyXG4gIHRlbmRpbmdOZXdzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZXdzUmVkdWNlciA9IChcclxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcclxuICBhY3Rpb246IGFueVxyXG4pOiBhbnkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTmV3c0FjdGlvbnMuR0VUX1RSRU5ESU5HX05FV1NfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvYWRpbmdOZXdzOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBOZXdzQWN0aW9ucy5HRVRfVFJFTkRJTkdfTkVXUzoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGluZ05ld3M6IGZhbHNlLFxyXG4gICAgICAgIHRlbmRpbmdOZXdzOmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBOZXdzQWN0aW9ucy5HRVRfVFJFTkRJTkdfTkVXU19GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGluZ0luc3BpcmF0aW9uczogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmV0YWlsZXJTdWJzY3JpcHRpb25BY3Rpb25zIGZyb20gXCIuLi8uLi90eXBlcy9hY3Rpb25zL1JldGFpbGVyU3Vic2NyaXB0aW9uLkFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogYW55ID0ge1xyXG4gICAgLy8gcmVnaXN0ZXIgZW1haWwgc3RhdGVcclxuICAgIGlzUmVnaXN0ZXJpbmdFbWFpbDogZmFsc2UsXHJcbiAgICAvLyB0aGFuayB5b3UgcG9wIHVwIHN0YXRlXHJcbiAgICBzaG93VGhhbmtZb3VNZXNzYWdlOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZXRhaWxlclN1YnNjcmlwdGlvblJlZHVjZXIgPSAoXHJcbiAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcclxuICAgIGFjdGlvbjogYW55XHJcbik6IHR5cGVvZiBpbml0aWFsU3RhdGUgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUmV0YWlsZXJTdWJzY3JpcHRpb25BY3Rpb25zLlJFUVVFU1RfUkVHSVNURVJfRU1BSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzUmVnaXN0ZXJpbmdFbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJldGFpbGVyU3Vic2NyaXB0aW9uQWN0aW9ucy5TVUNDRVNTX1JFR0lTVEVSX0VNQUlMOlxyXG4gICAgICAgIGNhc2UgUmV0YWlsZXJTdWJzY3JpcHRpb25BY3Rpb25zLkZBSUxVUkVfUkVHSVNURVJfRU1BSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzUmVnaXN0ZXJpbmdFbWFpbDogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgLy8gdGhhbmsgeW91IG1lc3NhZ2Ugc3RhdGVzXHJcbiAgICAgICAgY2FzZSBSZXRhaWxlclN1YnNjcmlwdGlvbkFjdGlvbnMuU0hPV19USEFOS19ZT1VfTUVTU0FHRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1RoYW5rWW91TWVzc2FnZTogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJldGFpbGVyU3Vic2NyaXB0aW9uQWN0aW9ucy5ISURFX1RIQU5LX1lPVV9NRVNTQUdFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaG93VGhhbmtZb3VNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUmV0YWlsZXJTdWJzY3JpcHRpb25SZWR1Y2VyIH0gZnJvbSAnLi9yZXRhaWxlci1zdWJzY3JpcHRpb24ucmVkdWNlcic7XHJcbmltcG9ydCB7IE5ld3NSZWR1Y2VyIH0gZnJvbSAnLi9uZXdzLnJlZHVjZXInO1xyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgUmV0YWlsZXJTdWJzY3JpcHRpb25EYXRhOiBSZXRhaWxlclN1YnNjcmlwdGlvblJlZHVjZXIsXHJcbiAgICBOZXdzUmVkdWNlcjpOZXdzUmVkdWNlclxyXG5cclxufSk7XHJcbmV4cG9ydCB0eXBlIFJvb3RSZWR1Y2VyU3RhdGVUeXBlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiY29uc3QgTmV3c0FjdGlvbnMgPSB7XHJcbiAgICBHRVRfVFJFTkRJTkdfTkVXU19SRVFVRVNUOiBcIkdFVF9UUkVORElOR19ORVdTX1JFUVVFU1RcIixcclxuICAgIEdFVF9UUkVORElOR19ORVdTOiBcIkdFVF9UUkVORElOR19ORVdTXCIsXHJcbiAgICBHRVRfVFJFTkRJTkdfTkVXU19GQUlMVVJFOiBcIkdFVF9UUkVORElOR19ORVdTX0ZBSUxVUkVcIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0FjdGlvbnM7IiwiY29uc3QgUmV0YWlsZXJTdWJzY3JpcHRpb25BY3Rpb25zID0ge1xyXG4gICAgUkVRVUVTVF9SRUdJU1RFUl9FTUFJTDogXCJSRVFVRVNUX1JFR0lTVEVSX0VNQUlMXCIsXHJcbiAgICBTVUNDRVNTX1JFR0lTVEVSX0VNQUlMOiBcIlNVQ0NFU1NfUkVHSVNURVJfRU1BSUxcIixcclxuICAgIEZBSUxVUkVfUkVHSVNURVJfRU1BSUw6IFwiRkFJTFVSRV9SRUdJU1RFUl9FTUFJTFwiLFxyXG5cclxuICAgIFNIT1dfVEhBTktfWU9VX01FU1NBR0U6IFwiU0hPV19USEFOS19ZT1VfTUVTU0FHRVwiLFxyXG4gICAgSElERV9USEFOS19ZT1VfTUVTU0FHRTogXCJISURFX1RIQU5LX1lPVV9NRVNTQUdFXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldGFpbGVyU3Vic2NyaXB0aW9uQWN0aW9uczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==