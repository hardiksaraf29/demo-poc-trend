_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,r,t){t("74v/"),e.exports=t("nOHt")},"74v/":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("hUgY")}])},DkZ7:function(e,r,t){},hUgY:function(e,r,t){"use strict";t.r(r);var n=t("nKUr"),o=t("rePB"),i=(t("q1tI"),t("DkZ7"),t("/MKj"));function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var a="function"===typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function O(e){if("object"!==typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return 0===r.length?function(e){return e}:1===r.length?r[0]:r.reduce((function(e,r){return function(){return e(r.apply(void 0,arguments))}}))}var y=t("hy5O");function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w={isRegisteringEmail:!1,showThankYouMessage:!1},h={GET_TRENDING_NEWS_REQUEST:"GET_TRENDING_NEWS_REQUEST",GET_TRENDING_NEWS:"GET_TRENDING_NEWS",GET_TRENDING_NEWS_FAILURE:"GET_TRENDING_NEWS_FAILURE"};function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j={isLoadingNews:!0,tendingNews:[]},v=function(e){for(var r=Object.keys(e),t={},n=0;n<r.length;n++){var o=r[n];0,"function"===typeof e[o]&&(t[o]=e[o])}var i,c=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(r){var t=e[r];if("undefined"===typeof t(void 0,{type:p.INIT}))throw new Error(f(12));if("undefined"===typeof t(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(f(13))}))}(t)}catch(u){i=u}return function(e,r){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},u=0;u<c.length;u++){var a=c[u],s=t[a],p=e[a],O=s(p,r);if("undefined"===typeof O){r&&r.type;throw new Error(f(14))}o[a]=O,n=n||O!==p}return(n=n||c.length!==Object.keys(e).length)?o:e}}({RetailerSubscriptionData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case y.a.REQUEST_REGISTER_EMAIL:return l(l({},e),{},{isRegisteringEmail:!0});case y.a.SUCCESS_REGISTER_EMAIL:case y.a.FAILURE_REGISTER_EMAIL:return l(l({},e),{},{isRegisteringEmail:!1});case y.a.SHOW_THANK_YOU_MESSAGE:return l(l({},e),{},{showThankYouMessage:!0});case y.a.HIDE_THANK_YOU_MESSAGE:return l(l({},e),{},{showThankYouMessage:!1});default:return e}},NewsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case h.GET_TRENDING_NEWS_REQUEST:return d(d({},e),{},{isLoadingNews:!0});case h.GET_TRENDING_NEWS:return d(d({},e),{},{isLoadingNews:!1,tendingNews:r.payload});case h.GET_TRENDING_NEWS_FAILURE:return d(d({},e),{},{isLoadingInspirations:!1});default:return e}}});function N(e){return function(r){var t=r.dispatch,n=r.getState;return function(r){return function(o){return"function"===typeof o?o(t,n,e):r(o)}}}}var _=N();_.withExtraArgument=N;var P=function e(r,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(f(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(f(1));return n(e)(r,t)}if("function"!==typeof r)throw new Error(f(2));var i=r,c=t,u=[],s=u,E=!1;function y(){s===u&&(s=u.slice())}function b(){if(E)throw new Error(f(3));return c}function l(e){if("function"!==typeof e)throw new Error(f(4));if(E)throw new Error(f(5));var r=!0;return y(),s.push(e),function(){if(r){if(E)throw new Error(f(6));r=!1,y();var t=s.indexOf(e);s.splice(t,1),u=null}}}function w(e){if(!O(e))throw new Error(f(7));if("undefined"===typeof e.type)throw new Error(f(8));if(E)throw new Error(f(9));try{E=!0,c=i(c,e)}finally{E=!1}for(var r=u=s,t=0;t<r.length;t++){(0,r[t])()}return e}function h(e){if("function"!==typeof e)throw new Error(f(10));i=e,w({type:p.REPLACE})}function g(){var e,r=l;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(f(11));function t(){e.next&&e.next(b())}return t(),{unsubscribe:r(t)}}})[a]=function(){return this},e}return w({type:p.INIT}),(o={dispatch:w,subscribe:l,getState:b,replaceReducer:h})[a]=g,o}(v,function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(){var t=e.apply(void 0,arguments),n=function(){throw new Error(f(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=r.map((function(e){return e(o)}));return n=E.apply(void 0,i)(t.dispatch),u(u({},t),{},{dispatch:n})}}}(_));function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.default=function(e){var r=e.Component,t=e.pageProps;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(i.a,{store:P,children:Object(n.jsx)(r,T({},t))})})}}},[[0,0,1,3,2]]]);