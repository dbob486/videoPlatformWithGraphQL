webpackHotUpdate_N_E("pages/upload",{

/***/ "./src/pages/upload.js":
/*!*****************************!*\
  !*** ./src/pages/upload.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/upload.module.css */ \"./src/styles/upload.module.css\");\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"../node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"../node_modules/@apollo/client/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/dbob486/Documents/React/gotube/client/src/pages/upload.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    mutation uploadVideo($video: Upload!) {\\n        uploadVideo(video: $video) {\\n            url\\n        }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar UPLOAD_FILE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\n\nvar Upload = function Upload() {\n  _s();\n\n  // destructured array of the uploaded file\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"])(UPLOAD_FILE),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMutation, 1),\n      uploadFile = _useMutation2[0]; // , {onCompleted: data => console.log(data),}\n  // The parameter is the event\n\n\n  var handleFile = function handleFile(e) {\n    var file = e.target.files[0];\n    if (!file) return;\n    console.log(file); //FAILS HERE\n\n    uploadFile({\n      variables: {\n        file: file\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    h: \"100vh\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      mt: \"1em\",\n      className: _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.uploadRouting,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n            boxSize: \"6em\",\n            color: \"cyan.400\",\n            border: \"1px\",\n            boxShadow: \"md\",\n            rounded: \"md\",\n            bg: \"white\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 169\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 81\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 78\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 63\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n        type: \"file\",\n        onChange: handleFile,\n        mt: \"5em\",\n        pt: \"1em\",\n        h: \"6vh\",\n        w: \"20vw\",\n        color: \"cyan.400\",\n        border: \"1px\",\n        boxShadow: \"md\",\n        rounded: \"md\",\n        bg: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Upload, \"qigFVzTWkgn+w3NJPxJSvgWZGc0=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"useMutation\"]];\n});\n\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\n\nvar _c;\n\n$RefreshReg$(_c, \"Upload\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VwbG9hZC5qcz82MGNiIl0sIm5hbWVzIjpbIlVQTE9BRF9GSUxFIiwiZ3FsIiwiVXBsb2FkIiwidXNlTXV0YXRpb24iLCJ1cGxvYWRGaWxlIiwiaGFuZGxlRmlsZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwic3R5bGVzIiwidXBsb2FkUm91dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywwREFBSCxtQkFBakI7O0FBUUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQURpQixxQkFFSUMsa0VBQVcsQ0FBQ0gsV0FBRCxDQUZmO0FBQUE7QUFBQSxNQUVWSSxVQUZVLHFCQUdqQjtBQUVBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxDQUFDLEVBQUk7QUFDcEIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBYjtBQUNBLFFBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1hHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBSG9CLENBSXBCOztBQUNBSCxjQUFVLENBQUM7QUFBRVEsZUFBUyxFQUFFO0FBQUVMLFlBQUksRUFBSkE7QUFBRjtBQUFiLEtBQUQsQ0FBVjtBQUNILEdBTkQ7O0FBUUEsc0JBQ0kscUVBQUMsb0RBQUQ7QUFBSyxLQUFDLEVBQUMsT0FBUDtBQUFBLDRCQUNJLHFFQUFDLHVEQUFEO0FBQVEsUUFBRSxFQUFDLEtBQVg7QUFBaUIsZUFBUyxFQUFFTSxnRUFBTSxDQUFDQyxhQUFuQztBQUFBLDZCQUFrRCxxRUFBQyxxREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBQSxpQ0FBRyxxRUFBQyxvREFBRDtBQUFLLG1CQUFPLEVBQUMsS0FBYjtBQUFtQixpQkFBSyxFQUFDLFVBQXpCO0FBQW9DLGtCQUFNLEVBQUMsS0FBM0M7QUFBaUQscUJBQVMsRUFBQyxJQUEzRDtBQUFnRSxtQkFBTyxFQUFDLElBQXhFO0FBQTZFLGNBQUUsRUFBQyxPQUFoRjtBQUFBLG1DQUF3RixxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsdURBQUQ7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUVULFVBQTdCO0FBQXlDLFVBQUUsRUFBQyxLQUE1QztBQUFrRCxVQUFFLEVBQUMsS0FBckQ7QUFBMkQsU0FBQyxFQUFDLEtBQTdEO0FBQW1FLFNBQUMsRUFBQyxNQUFyRTtBQUE0RSxhQUFLLEVBQUMsVUFBbEY7QUFBNkYsY0FBTSxFQUFDLEtBQXBHO0FBQTBHLGlCQUFTLEVBQUMsSUFBcEg7QUFBeUgsZUFBTyxFQUFDLElBQWpJO0FBQXNJLFVBQUUsRUFBQztBQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0F0QkQ7O0dBQU1ILE07VUFFbUJDLDBEOzs7S0FGbkJELE07QUF3QlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VwbG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3VwbG9hZC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQm94LCBGbGV4LCBDZW50ZXIsIExpbmssIElucHV0LCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuY29uc3QgVVBMT0FEX0ZJTEUgPSBncWxgXG4gICAgbXV0YXRpb24gdXBsb2FkVmlkZW8oJHZpZGVvOiBVcGxvYWQhKSB7XG4gICAgICAgIHVwbG9hZFZpZGVvKHZpZGVvOiAkdmlkZW8pIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICB9XG59XG5gXG5cbmNvbnN0IFVwbG9hZCA9ICgpID0+IHtcbiAgICAvLyBkZXN0cnVjdHVyZWQgYXJyYXkgb2YgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCBbdXBsb2FkRmlsZV0gPSB1c2VNdXRhdGlvbihVUExPQURfRklMRSlcbiAgICAvLyAsIHtvbkNvbXBsZXRlZDogZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSx9XG5cbiAgICAvLyBUaGUgcGFyYW1ldGVyIGlzIHRoZSBldmVudFxuICAgIGNvbnN0IGhhbmRsZUZpbGUgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGUpXG4gICAgICAgIC8vRkFJTFMgSEVSRVxuICAgICAgICB1cGxvYWRGaWxlKHsgdmFyaWFibGVzOiB7IGZpbGUgfSB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggaD0nMTAwdmgnPlxuICAgICAgICAgICAgPENlbnRlciBtdD0nMWVtJyBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRSb3V0aW5nfT48TGluayBocmVmPScvJz48YT48Qm94IGJveFNpemU9JzZlbScgY29sb3I9J2N5YW4uNDAwJyBib3JkZXI9JzFweCcgYm94U2hhZG93PSdtZCcgcm91bmRlZD0nbWQnIGJnPSd3aGl0ZSc+PENlbnRlcj5Ib21lPC9DZW50ZXI+PC9Cb3g+PC9hPjwvTGluaz48L0NlbnRlcj5cbiAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9J2ZpbGUnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlfSBtdD0nNWVtJyBwdD0nMWVtJyBoPSc2dmgnIHc9JzIwdncnIGNvbG9yPSdjeWFuLjQwMCcgYm9yZGVyPScxcHgnIGJveFNoYWRvdz0nbWQnIHJvdW5kZWQ9J21kJyBiZz0nd2hpdGUnIC8+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/upload.js\n");

/***/ })

})