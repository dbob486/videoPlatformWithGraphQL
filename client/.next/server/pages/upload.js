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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/upload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/upload.js":
/*!*****************************!*\
  !*** ./src/pages/upload.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/upload.module.css */ \"./src/styles/upload.module.css\");\n/* harmony import */ var _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_upload_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/dbob486/Documents/React/gotube/client/src/pages/upload.js\";\n\n\n\nconst UPLOAD_FILE = _apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"gql\"]`\n    mutation uploadFile($file: Upload!) {\n        uploadFile(file: $file) {\n            url\n        }\n    }\n`;\n\nconst Upload = () => {\n  // destructured array of the uploaded file\n  const [uploadFile] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(UPLOAD_FILE, {\n    onCompleted: data => console.log(data)\n  }); // The parameter is the event\n\n  function handleFile({\n    target: {\n      validity,\n      files: [file]\n    }\n  }) {\n    if (validity.valid) uploadFile({\n      variables: {\n        file\n      }\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    h: \"100vh\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      mt: \"1em\",\n      className: _styles_upload_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.uploadRouting,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n            boxSize: \"6em\",\n            color: \"cyan.400\",\n            border: \"1px\",\n            boxShadow: \"md\",\n            rounded: \"md\",\n            bg: \"white\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 169\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 81\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 78\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 63\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n        type: \"file\",\n        onChange: handleFile,\n        mt: \"5em\",\n        pt: \"1em\",\n        h: \"6vh\",\n        w: \"20vw\",\n        color: \"cyan.400\",\n        border: \"1px\",\n        boxShadow: \"md\",\n        rounded: \"md\",\n        bg: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXBsb2FkLmpzPzYwY2IiXSwibmFtZXMiOlsiVVBMT0FEX0ZJTEUiLCJncWwiLCJVcGxvYWQiLCJ1cGxvYWRGaWxlIiwidXNlTXV0YXRpb24iLCJvbkNvbXBsZXRlZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRmlsZSIsInRhcmdldCIsInZhbGlkaXR5IiwiZmlsZXMiLCJmaWxlIiwidmFsaWQiLCJ2YXJpYWJsZXMiLCJzdHlsZXMiLCJ1cGxvYWRSb3V0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msa0RBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTkE7O0FBUUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakI7QUFDQSxRQUFNLENBQUNDLFVBQUQsSUFBZUMsa0VBQVcsQ0FBQ0osV0FBRCxFQUFjO0FBQzFDSyxlQUFXLEVBQUVDLElBQUksSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFEcUIsR0FBZCxDQUFoQyxDQUZpQixDQU1qQjs7QUFDQSxXQUFTRyxVQUFULENBQW9CO0FBQ2hCQyxVQUFNLEVBQUU7QUFDSkMsY0FESTtBQUVKQyxXQUFLLEVBQUUsQ0FBQ0MsSUFBRDtBQUZIO0FBRFEsR0FBcEIsRUFLRztBQUNDLFFBQUlGLFFBQVEsQ0FBQ0csS0FBYixFQUFvQlgsVUFBVSxDQUFDO0FBQUVZLGVBQVMsRUFBRTtBQUFFRjtBQUFGO0FBQWIsS0FBRCxDQUFWO0FBQ3ZCOztBQUVELHNCQUNJLHFFQUFDLG9EQUFEO0FBQUssS0FBQyxFQUFDLE9BQVA7QUFBQSw0QkFDSSxxRUFBQyx1REFBRDtBQUFRLFFBQUUsRUFBQyxLQUFYO0FBQWlCLGVBQVMsRUFBRUcsZ0VBQU0sQ0FBQ0MsYUFBbkM7QUFBQSw2QkFBa0QscUVBQUMscURBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUEsaUNBQUcscUVBQUMsb0RBQUQ7QUFBSyxtQkFBTyxFQUFDLEtBQWI7QUFBbUIsaUJBQUssRUFBQyxVQUF6QjtBQUFvQyxrQkFBTSxFQUFDLEtBQTNDO0FBQWlELHFCQUFTLEVBQUMsSUFBM0Q7QUFBZ0UsbUJBQU8sRUFBQyxJQUF4RTtBQUE2RSxjQUFFLEVBQUMsT0FBaEY7QUFBQSxtQ0FBd0YscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyx1REFBRDtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRVIsVUFBN0I7QUFBeUMsVUFBRSxFQUFDLEtBQTVDO0FBQWtELFVBQUUsRUFBQyxLQUFyRDtBQUEyRCxTQUFDLEVBQUMsS0FBN0Q7QUFBbUUsU0FBQyxFQUFDLE1BQXJFO0FBQTRFLGFBQUssRUFBQyxVQUFsRjtBQUE2RixjQUFNLEVBQUMsS0FBcEc7QUFBMEcsaUJBQVMsRUFBQyxJQUFwSDtBQUF5SCxlQUFPLEVBQUMsSUFBakk7QUFBc0ksVUFBRSxFQUFDO0FBQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0F4QkQ7O0FBMEJlUCxxRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy91cGxvYWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy91cGxvYWQubW9kdWxlLmNzcydcbmltcG9ydCB7IEJveCwgRmxleCwgQ2VudGVyLCBMaW5rLCBJbnB1dCwgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IFVQTE9BRF9GSUxFID0gZ3FsYFxuICAgIG11dGF0aW9uIHVwbG9hZEZpbGUoJGZpbGU6IFVwbG9hZCEpIHtcbiAgICAgICAgdXBsb2FkRmlsZShmaWxlOiAkZmlsZSkge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmNvbnN0IFVwbG9hZCA9ICgpID0+IHtcbiAgICAvLyBkZXN0cnVjdHVyZWQgYXJyYXkgb2YgdGhlIHVwbG9hZGVkIGZpbGVcbiAgICBjb25zdCBbdXBsb2FkRmlsZV0gPSB1c2VNdXRhdGlvbihVUExPQURfRklMRSwge1xuICAgICAgICBvbkNvbXBsZXRlZDogZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG5cbiAgICAvLyBUaGUgcGFyYW1ldGVyIGlzIHRoZSBldmVudFxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbGUoe1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICAgIHZhbGlkaXR5LFxuICAgICAgICAgICAgZmlsZXM6IFtmaWxlXSxcbiAgICAgICAgfSxcbiAgICB9KSB7XG4gICAgICAgIGlmICh2YWxpZGl0eS52YWxpZCkgdXBsb2FkRmlsZSh7IHZhcmlhYmxlczogeyBmaWxlIH0gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBoPScxMDB2aCc+XG4gICAgICAgICAgICA8Q2VudGVyIG10PScxZW0nIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZFJvdXRpbmd9PjxMaW5rIGhyZWY9Jy8nPjxhPjxCb3ggYm94U2l6ZT0nNmVtJyBjb2xvcj0nY3lhbi40MDAnIGJvcmRlcj0nMXB4JyBib3hTaGFkb3c9J21kJyByb3VuZGVkPSdtZCcgYmc9J3doaXRlJz48Q2VudGVyPkhvbWU8L0NlbnRlcj48L0JveD48L2E+PC9MaW5rPjwvQ2VudGVyPlxuICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0nZmlsZScgb25DaGFuZ2U9e2hhbmRsZUZpbGV9IG10PSc1ZW0nIHB0PScxZW0nIGg9JzZ2aCcgdz0nMjB2dycgY29sb3I9J2N5YW4uNDAwJyBib3JkZXI9JzFweCcgYm94U2hhZG93PSdtZCcgcm91bmRlZD0nbWQnIGJnPSd3aGl0ZScgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/upload.js\n");

/***/ }),

/***/ "./src/styles/upload.module.css":
/*!**************************************!*\
  !*** ./src/styles/upload.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"uploadRouting\": \"upload_uploadRouting__1fVl_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3VwbG9hZC5tb2R1bGUuY3NzPzhmNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3VwbG9hZC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXBsb2FkUm91dGluZ1wiOiBcInVwbG9hZF91cGxvYWRSb3V0aW5nX18xZlZsX1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/upload.module.css\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });