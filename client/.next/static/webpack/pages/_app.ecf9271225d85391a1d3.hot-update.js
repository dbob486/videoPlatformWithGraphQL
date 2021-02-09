webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"../node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"../node_modules/@apollo/client/index.js\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-upload-client */ \"../node_modules/apollo-upload-client/public/index.mjs\");\n\n\nvar _jsxFileName = \"/Users/dbob486/Documents/React/gotube/client/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloClient\"]({\n  link: Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__[\"createUploadLink\"])({\n    uri: 'http://localhost:4000/'\n  }),\n  onError: function onError(_ref) {\n    var networkError = _ref.networkError,\n        graphQLErrors = _ref.graphQLErrors;\n    console.log('graphQLErrors', graphQLErrors);\n    console.log('networkError', networkError);\n  },\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"InMemoryCache\"]()\n});\nfunction MyApp(_ref2) {\n  var Component = _ref2.Component,\n      pageProps = _ref2.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n    client: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ChakraProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n_c = MyApp;\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanM/MjI1NCJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsIm9uRXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwiY29uc29sZSIsImxvZyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQzlCQyxNQUFJLEVBQUVDLDZFQUFnQixDQUFDO0FBQ3JCQyxPQUFHLEVBQUU7QUFEZ0IsR0FBRCxDQURRO0FBSTlCQyxTQUFPLEVBQUUsdUJBQXFDO0FBQUEsUUFBbENDLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLFFBQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDNUNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLGFBQTdCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJILFlBQTVCO0FBQ0QsR0FQNkI7QUFROUJJLE9BQUssRUFBRSxJQUFJQyw0REFBSjtBQVJ1QixDQUFqQixDQUFmO0FBV2UsU0FBU0MsS0FBVCxRQUF5QztBQUFBLE1BQXhCQyxTQUF3QixTQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFNBQWJBLFNBQWE7QUFFdEQsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFZCxNQUF4QjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZWMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO0tBVHVCRixLIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyxcbiAgfSksXG4gIG9uRXJyb3I6ICh7IG5ldHdvcmtFcnJvciwgZ3JhcGhRTEVycm9ycyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2dyYXBoUUxFcnJvcnMnLCBncmFwaFFMRXJyb3JzKVxuICAgIGNvbnNvbGUubG9nKCduZXR3b3JrRXJyb3InLCBuZXR3b3JrRXJyb3IpXG4gIH0sXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})