/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _require = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\"),\n    CleanWebpackPlugin = _require.CleanWebpackPlugin;\n\nvar nodeModules = {};\nfs.readdirSync('node_modules').filter(function (x) {\n  return ['.bin'].indexOf(x) === -1;\n}).forEach(function (mod) {\n  nodeModules[mod] = 'commonjs ' + mod;\n});\nmodule.exports = {\n  mode: 'development',\n  target: \"node\",\n  entry: './src/main.ts',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js'\n  },\n  resolve: {\n    extensions: ['.ts', '.js', '.json'] //resolve all the modules other than index.ts\n\n  },\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      use: 'babel-loader'\n    }, {\n      test: /\\.ts$/,\n      use: 'ts-loader'\n    }]\n  },\n  plugins: [new CleanWebpackPlugin()],\n  externals: nodeModules\n};\n\n//# sourceURL=webpack://nodejs-design-pattern/./webpack.config.js?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("clean-webpack-plugin");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./webpack.config.js");
/******/ })()
;