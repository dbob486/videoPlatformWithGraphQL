webpackHotUpdate_N_E("pages/upload",{

/***/ "./src/pages/upload.js":
/*!*****************************!*\
  !*** ./src/pages/upload.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/upload.module.css */ \"./src/styles/upload.module.css\");\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"../node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"../node_modules/@apollo/client/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/dbob486/Documents/React/gotube/client/src/pages/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    mutation uploadFile($file: Upload!) {\\n        uploadFile(video: $file) {\\n            url\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar UPLOAD_FILE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\n\nvar Upload = function Upload() {\n  _s();\n\n  // destructured array of the uploaded file\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(UPLOAD_FILE, {\n    onCompleted: function onCompleted(data) {\n      return console.log(data);\n    }\n  }),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMutation, 1),\n      uploadFile = _useMutation2[0]; // , {onCompleted: data => console.log(data),}\n  // The parameter is the event\n\n\n  var handleFile = function handleFile(e) {\n    var file = e.target.files[0];\n    if (!file) return;\n    console.log(file.name); //FAILS HERE\n\n    uploadFile({\n      variables: {\n        file: file\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    h: \"100vh\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      mt: \"1em\",\n      className: _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.uploadRouting,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            boxSize: \"6em\",\n            color: \"cyan.400\",\n            border: \"1px\",\n            boxShadow: \"md\",\n            rounded: \"md\",\n            bg: \"white\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 169\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 81\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 78\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 63\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n        type: \"file\",\n        onChange: handleFile,\n        mt: \"5em\",\n        pt: \"1em\",\n        h: \"6vh\",\n        w: \"20vw\",\n        color: \"cyan.400\",\n        border: \"1px\",\n        boxShadow: \"md\",\n        rounded: \"md\",\n        bg: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Upload, \"qigFVzTWkgn+w3NJPxJSvgWZGc0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\n\nvar _c;\n\n$RefreshReg$(_c, \"Upload\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VwbG9hZC5qcz82MGNiIl0sIm5hbWVzIjpbIlVQTE9BRF9GSUxFIiwiZ3FsIiwiVXBsb2FkIiwidXNlTXV0YXRpb24iLCJvbkNvbXBsZXRlZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkRmlsZSIsImhhbmRsZUZpbGUiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInZhcmlhYmxlcyIsInN0eWxlcyIsInVwbG9hZFJvdXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMERBQUgsbUJBQWpCOztBQVFBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakI7QUFEaUIscUJBRUlDLGtFQUFXLENBQUNILFdBQUQsRUFBYztBQUMxQ0ksZUFBVyxFQUFFLHFCQUFBQyxJQUFJO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBSjtBQUFBO0FBRHlCLEdBQWQsQ0FGZjtBQUFBO0FBQUEsTUFFVkcsVUFGVSxxQkFLakI7QUFFQTs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3BCLFFBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQWI7QUFDQSxRQUFJLENBQUNGLElBQUwsRUFBVztBQUNYTCxXQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBSSxDQUFDRyxJQUFqQixFQUhvQixDQUlwQjs7QUFDQU4sY0FBVSxDQUFDO0FBQUVPLGVBQVMsRUFBRTtBQUFFSixZQUFJLEVBQUpBO0FBQUY7QUFBYixLQUFELENBQVY7QUFDSCxHQU5EOztBQVFBLHNCQUNJLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFDLE9BQVA7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFRLFFBQUUsRUFBQyxLQUFYO0FBQWlCLGVBQVMsRUFBRUssZ0VBQU0sQ0FBQ0MsYUFBbkM7QUFBQSw2QkFBa0QscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUEsaUNBQUcscUVBQUMsb0RBQUQ7QUFBSyxtQkFBTyxFQUFDLEtBQWI7QUFBbUIsaUJBQUssRUFBQyxVQUF6QjtBQUFvQyxrQkFBTSxFQUFDLEtBQTNDO0FBQWlELHFCQUFTLEVBQUMsSUFBM0Q7QUFBZ0UsbUJBQU8sRUFBQyxJQUF4RTtBQUE2RSxjQUFFLEVBQUMsT0FBaEY7QUFBQSxtQ0FBd0YscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFUixVQUE3QjtBQUF5QyxVQUFFLEVBQUMsS0FBNUM7QUFBa0QsVUFBRSxFQUFDLEtBQXJEO0FBQTJELFNBQUMsRUFBQyxLQUE3RDtBQUFtRSxTQUFDLEVBQUMsTUFBckU7QUFBNEUsYUFBSyxFQUFDLFVBQWxGO0FBQTZGLGNBQU0sRUFBQyxLQUFwRztBQUEwRyxpQkFBUyxFQUFDLElBQXBIO0FBQXlILGVBQU8sRUFBQyxJQUFqSTtBQUFzSSxVQUFFLEVBQUM7QUFBekk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBeEJEOztHQUFNUCxNO1VBRW1CQywwRDs7O0tBRm5CRCxNO0FBMEJTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy91cGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy91cGxvYWQubW9kdWxlLmNzcydcbmltcG9ydCB7IEJveCwgRmxleCwgQ2VudGVyLCBMaW5rLCBJbnB1dCwgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IFVQTE9BRF9GSUxFID0gZ3FsYFxuICAgIG11dGF0aW9uIHVwbG9hZEZpbGUoJGZpbGU6IFVwbG9hZCEpIHtcbiAgICAgICAgdXBsb2FkRmlsZSh2aWRlbzogJGZpbGUpIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgfVxuYFxuXG5jb25zdCBVcGxvYWQgPSAoKSA9PiB7XG4gICAgLy8gZGVzdHJ1Y3R1cmVkIGFycmF5IG9mIHRoZSB1cGxvYWRlZCBmaWxlXG4gICAgY29uc3QgW3VwbG9hZEZpbGVdID0gdXNlTXV0YXRpb24oVVBMT0FEX0ZJTEUsIHtcbiAgICAgICAgb25Db21wbGV0ZWQ6IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcbiAgICB9KVxuICAgIC8vICwge29uQ29tcGxldGVkOiBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLH1cblxuICAgIC8vIFRoZSBwYXJhbWV0ZXIgaXMgdGhlIGV2ZW50XG4gICAgY29uc3QgaGFuZGxlRmlsZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm5cbiAgICAgICAgY29uc29sZS5sb2coZmlsZS5uYW1lKVxuICAgICAgICAvL0ZBSUxTIEhFUkVcbiAgICAgICAgdXBsb2FkRmlsZSh7IHZhcmlhYmxlczogeyBmaWxlIH0gfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IGg9JzEwMHZoJz5cbiAgICAgICAgICAgIDxDZW50ZXIgbXQ9JzFlbScgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkUm91dGluZ30+PExpbmsgaHJlZj0nLyc+PGE+PEJveCBib3hTaXplPSc2ZW0nIGNvbG9yPSdjeWFuLjQwMCcgYm9yZGVyPScxcHgnIGJveFNoYWRvdz0nbWQnIHJvdW5kZWQ9J21kJyBiZz0nd2hpdGUnPjxDZW50ZXI+SG9tZTwvQ2VudGVyPjwvQm94PjwvYT48L0xpbms+PC9DZW50ZXI+XG4gICAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSdmaWxlJyBvbkNoYW5nZT17aGFuZGxlRmlsZX0gbXQ9JzVlbScgcHQ9JzFlbScgaD0nNnZoJyB3PScyMHZ3JyBjb2xvcj0nY3lhbi40MDAnIGJvcmRlcj0nMXB4JyBib3hTaGFkb3c9J21kJyByb3VuZGVkPSdtZCcgYmc9J3doaXRlJyAvPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/upload.js\n");

/***/ })

})