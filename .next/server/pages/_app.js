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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "DkZ7":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./src/assets/styles/style.css
var style = __webpack_require__("DkZ7");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./src/types/actions/RetailerSubscription.Actions.ts
var RetailerSubscription_Actions = __webpack_require__("hy5O");

// CONCATENATED MODULE: ./src/store/reducers/retailer-subscription.reducer.ts
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
    case RetailerSubscription_Actions["a" /* default */].REQUEST_REGISTER_EMAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isRegisteringEmail: true
      });

    case RetailerSubscription_Actions["a" /* default */].SUCCESS_REGISTER_EMAIL:
    case RetailerSubscription_Actions["a" /* default */].FAILURE_REGISTER_EMAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isRegisteringEmail: false
      });
    // thank you message states

    case RetailerSubscription_Actions["a" /* default */].SHOW_THANK_YOU_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        showThankYouMessage: true
      });

    case RetailerSubscription_Actions["a" /* default */].HIDE_THANK_YOU_MESSAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        showThankYouMessage: false
      });

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/types/actions/News.Actions.ts
const NewsActions = {
  GET_TRENDING_NEWS_REQUEST: "GET_TRENDING_NEWS_REQUEST",
  GET_TRENDING_NEWS: "GET_TRENDING_NEWS",
  GET_TRENDING_NEWS_FAILURE: "GET_TRENDING_NEWS_FAILURE"
};
/* harmony default export */ var News_Actions = (NewsActions);
// CONCATENATED MODULE: ./src/store/reducers/news.reducer.ts
function news_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function news_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { news_reducer_ownKeys(Object(source), true).forEach(function (key) { news_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { news_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function news_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const news_reducer_initialState = {
  isLoadingNews: true,
  tendingNews: []
};
const NewsReducer = (state = news_reducer_initialState, action) => {
  switch (action.type) {
    case News_Actions.GET_TRENDING_NEWS_REQUEST:
      return news_reducer_objectSpread(news_reducer_objectSpread({}, state), {}, {
        isLoadingNews: true
      });

    case News_Actions.GET_TRENDING_NEWS:
      {
        return news_reducer_objectSpread(news_reducer_objectSpread({}, state), {}, {
          isLoadingNews: false,
          tendingNews: action.payload
        });
      }

    case News_Actions.GET_TRENDING_NEWS_FAILURE:
      return news_reducer_objectSpread(news_reducer_objectSpread({}, state), {}, {
        isLoadingInspirations: false
      });

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/store/reducers/root.reducer.ts



const rootReducer = Object(external_redux_["combineReducers"])({
  RetailerSubscriptionData: RetailerSubscriptionReducer,
  NewsReducer: NewsReducer
});
/* harmony default export */ var root_reducer = (rootReducer);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./src/store/index.ts



const thunkMiddleWare = Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a);
const store = Object(external_redux_["createStore"])(root_reducer, thunkMiddleWare);
/* harmony default export */ var src_store = (store);
// CONCATENATED MODULE: ./src/pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "hy5O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RetailerSubscriptionActions = {
  REQUEST_REGISTER_EMAIL: "REQUEST_REGISTER_EMAIL",
  SUCCESS_REGISTER_EMAIL: "SUCCESS_REGISTER_EMAIL",
  FAILURE_REGISTER_EMAIL: "FAILURE_REGISTER_EMAIL",
  SHOW_THANK_YOU_MESSAGE: "SHOW_THANK_YOU_MESSAGE",
  HIDE_THANK_YOU_MESSAGE: "HIDE_THANK_YOU_MESSAGE"
};
/* harmony default export */ __webpack_exports__["a"] = (RetailerSubscriptionActions);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });