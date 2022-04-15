"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction Home() {\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    if (keyboards.length > 0) {\n        var _this = this;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-2 p-2\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: keyboards.map(function(param, i) {\n                        var _param = _slicedToArray(param, 3), kind = _param[0], isPBT = _param[1], filter = _param[2];\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Keyboard, {\n                            kind: kind,\n                            isPBT: isPBT,\n                            filter: filter,\n                            __source: {\n                                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        }, i);\n                    })\n                })\n            ]\n        }));\n    }\n    // No keyboards yet\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"link\",\n                href: \"/create\",\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"Create a Keyboard!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: \"No keyboards yet!\"\n            })\n        ]\n    }));\n// return <p>Connected Account: {connectedAccount}</p>\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDWjtBQUN5QjtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixRQUFRLENBQUNLLElBQUksR0FBRyxDQUFDO0lBQzlCLEVBQUUsR0FBR0MsUUFBUSxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFQyxDQUFDOzs7Ozs7O3NCQUFDLENBQStDOztJQUMzRCxDQUFDO0lBRUQsRUFBRSxHQUFHQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sc0VBQUVMLGtFQUFhO1lBQUNNLE9BQU8sRUFBRUMsY0FBYzs7Ozs7OztzQkFBRSxDQUF1Qjs7SUFDeEUsQ0FBQztJQUVELEVBQUUsRUFBRUMsU0FBUyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7O1FBQ3pCLE1BQU0sdUVBQ0hDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFCOzs7Ozs7OztxRkFDakNYLGtFQUFhO29CQUFDWSxJQUFJLEVBQUMsQ0FBTTtvQkFBQ0MsSUFBSSxFQUFDLENBQVM7Ozs7Ozs7OEJBQUMsQ0FBa0I7O3FGQUMzREgsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTJDOzs7Ozs7OzhCQUN2REgsU0FBUyxDQUFDTSxHQUFHLENBQ1osUUFBUUMsUUFBZ0JDLENBQUM7K0RBQXZCQyxJQUFJLGNBQUVGLEtBQUssY0FBRUcsTUFBTTtzQ0FDbkIsTUFBTSx3REFBTEMsUUFBUTs0QkFBU0YsSUFBSSxFQUFFQSxJQUFJOzRCQUFFRixLQUFLLEVBQUVBLEtBQUs7NEJBQUVHLE1BQU0sRUFBRUEsTUFBTTs7Ozs7OzsyQkFBM0NGLENBQUM7Ozs7O0lBTTVCLENBQUM7SUFFQyxFQUFtQjtJQUNuQixNQUFNLHVFQUNITixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFxQjs7Ozs7Ozs7aUZBQ2pDWCxrRUFBYTtnQkFBQ1ksSUFBSSxFQUFDLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFTOzs7Ozs7OzBCQUFDLENBQWtCOztpRkFDM0RULENBQUM7Ozs7Ozs7MEJBQUMsQ0FBaUI7Ozs7QUFJMUIsRUFBc0Q7QUFDeEQsQ0FBQztLQWpDdUJGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvblwiO1xuaW1wb3J0IGFiaSBmcm9tIFwiLi4vdXRpbHMvS2V5Ym9hcmRzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgaWYgKCFldGhlcmV1bSkge1xuICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhTWFzayB0byBjb25uZWN0IHRvIHRoaXMgc2l0ZTwvcD5cbiAgfVxuICBcbiAgaWYgKCFjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgcmV0dXJuIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5Db25uZWN0IE1ldGFNYXNrIFdhbGxldDwvUHJpbWFyeUJ1dHRvbj5cbiAgfVxuXG4gIGlmIChrZXlib2FyZHMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPFByaW1hcnlCdXR0b24gdHlwZT1cImxpbmtcIiBocmVmPVwiL2NyZWF0ZVwiPkNyZWF0ZSBhIEtleWJvYXJkITwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC0yIHAtMlwiPlxuICAgICAgICAgIHtrZXlib2FyZHMubWFwKFxuICAgICAgICAgICAgKFtraW5kLCBpc1BCVCwgZmlsdGVyXSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8S2V5Ym9hcmQga2V5PXtpfSBraW5kPXtraW5kfSBpc1BCVD17aXNQQlR9IGZpbHRlcj17ZmlsdGVyfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICAgIC8vIE5vIGtleWJvYXJkcyB5ZXRcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxQcmltYXJ5QnV0dG9uIHR5cGU9XCJsaW5rXCIgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGUgYSBLZXlib2FyZCE8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgIDxwPk5vIGtleWJvYXJkcyB5ZXQhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICBcbiAgLy8gcmV0dXJuIDxwPkNvbm5lY3RlZCBBY2NvdW50OiB7Y29ubmVjdGVkQWNjb3VudH08L3A+XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiUHJpbWFyeUJ1dHRvbiIsImFiaSIsIkhvbWUiLCJldGhlcmV1bSIsInAiLCJjb25uZWN0ZWRBY2NvdW50Iiwib25DbGljayIsImNvbm5lY3RBY2NvdW50Iiwia2V5Ym9hcmRzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsImhyZWYiLCJtYXAiLCJpc1BCVCIsImkiLCJraW5kIiwiZmlsdGVyIiwiS2V5Ym9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});