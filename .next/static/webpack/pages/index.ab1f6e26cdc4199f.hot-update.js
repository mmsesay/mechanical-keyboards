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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var contractAddress = '0xb0a219Fb41e6135B59ceA24Fe27E8B94c44b898C';\n    var contractA;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return getConnectedAccount();\n    }, []);\n    var connectAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 53,\n            columnNumber: 10\n        },\n        __self: this,\n        children: [\n            \"Connected Account: \",\n            connectedAccount\n        ]\n    }));\n};\n_s(Home, \"jt+w7hUKiSeNE9N7lnt0C3phyC4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDYTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLFFBQVEsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7O0lBQzlCLEdBQUssQ0FBMkJKLEdBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDSyxTQUFTLEdBQTNDQyxRQUFRLEdBQWlCTixHQUFtQixLQUFsQ08sV0FBVyxHQUFJUCxHQUFtQjtJQUNuRCxHQUFLLENBQTJDQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ0ssU0FBUyxHQUEzREcsZ0JBQWdCLEdBQXlCUixJQUFtQixLQUExQ1MsbUJBQW1CLEdBQUlULElBQW1CO0lBRW5FLEdBQUssQ0FBQ1UsZUFBZSxHQUFHLENBQTRDO0lBQ3BFLEdBQUssQ0FBQ0MsU0FBUztJQUVmLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7UUFDcEMsRUFBRSxFQUFFQSxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN4QixHQUFLLENBQUNDLE9BQU8sR0FBR0YsUUFBUSxDQUFDLENBQUM7WUFDMUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWlDLGtDQUFFRixPQUFPO1lBQ3RETixtQkFBbUIsQ0FBQ00sT0FBTztRQUM3QixDQUFDLE1BQU0sQ0FBQztZQUNOQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE0QjtRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0MsbUJBQW1CLDZKQUFHLFFBQVEsV0FBSSxDQUFDO1lBTS9CTCxRQUFROzs7O29CQUxoQixFQUFFLEVBQUVNLE1BQU0sQ0FBQ2IsUUFBUSxFQUFFLENBQUM7d0JBQ3BCQyxXQUFXLENBQUNZLE1BQU0sQ0FBQ2IsUUFBUTtvQkFDN0IsQ0FBQzt5QkFFR0EsUUFBUTs7Ozs7MkJBQ2FBLFFBQVEsQ0FBQ2MsT0FBTyxDQUFDLENBQUM7d0JBQUNDLE1BQU0sRUFBRSxDQUFjO29CQUFDLENBQUM7O29CQUE1RFIsUUFBUTtvQkFDZEQsY0FBYyxDQUFDQyxRQUFROzs7Ozs7SUFFM0IsQ0FBQztJQUVEWixnREFBUyxDQUFDLFFBQVE7UUFBRmlCLE1BQU0sQ0FBTkEsbUJBQW1CO09BQUksQ0FBQyxDQUFDO0lBRXpDLEdBQUssQ0FBQ0ksY0FBYyw2SkFBRyxRQUFRLFdBQUksQ0FBQztZQU01QlQsUUFBUTs7Ozt3QkFMVFAsUUFBUTs7OztvQkFDWGlCLEtBQUssQ0FBQyxDQUE0Qzs7OzsyQkFJN0JqQixRQUFRLENBQUNjLE9BQU8sQ0FBQyxDQUFDO3dCQUFDQyxNQUFNLEVBQUUsQ0FBcUI7b0JBQUMsQ0FBQzs7b0JBQW5FUixRQUFRO29CQUNkRCxjQUFjLENBQUNDLFFBQVE7Ozs7OztJQUN6QixDQUFDO0lBRUQsRUFBRSxHQUFHUCxRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUVrQixDQUFDOzs7Ozs7O3NCQUFDLENBQStDOztJQUMzRCxDQUFDO0lBRUQsRUFBRSxHQUFHaEIsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QixNQUFNLHNFQUFFTixrRUFBYTtZQUFDdUIsT0FBTyxFQUFFSCxjQUFjOzs7Ozs7O3NCQUFFLENBQXVCOztJQUN4RSxDQUFDO0lBRUQsTUFBTSx1RUFBRUUsQ0FBQzs7Ozs7Ozs7WUFBQyxDQUFtQjtZQUFDaEIsZ0JBQWdCOzs7QUFDaEQsQ0FBQztHQWpEdUJKLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uXCI7XG5pbXBvcnQgYWJpIGZyb20gXCIuLi91dGlscy9LZXlib2FyZHMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXRoZXJldW0sIHNldEV0aGVyZXVtXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4YjBhMjE5RmI0MWU2MTM1QjU5Y2VBMjRGZTI3RThCOTRjNDRiODk4Qyc7XG4gIGNvbnN0IGNvbnRyYWN0QVxuXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzID0gKGFjY291bnRzKSA9PiB7XG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBoYXZlIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogJywgYWNjb3VudCk7XG4gICAgICBzZXRDb25uZWN0ZWRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudHMgeWV0XCIpXG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgZ2V0Q29ubmVjdGVkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRFdGhlcmV1bSh3aW5kb3cuZXRoZXJldW0pO1xuICAgIH1cbiAgXG4gICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuICAgICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4gZ2V0Q29ubmVjdGVkQWNjb3VudCgpLCBbXSk7XG4gIFxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBhbGVydCgnTWV0YU1hc2sgaXMgcmVxdWlyZWQgdG8gY29ubmVjdCBhbiBhY2NvdW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gIH07XG5cbiAgaWYgKCFldGhlcmV1bSkge1xuICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhTWFzayB0byBjb25uZWN0IHRvIHRoaXMgc2l0ZTwvcD5cbiAgfVxuXG4gIGlmICghY29ubmVjdGVkQWNjb3VudCkge1xuICAgIHJldHVybiA8UHJpbWFyeUJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+Q29ubmVjdCBNZXRhTWFzayBXYWxsZXQ8L1ByaW1hcnlCdXR0b24+XG4gIH1cblxuICByZXR1cm4gPHA+Q29ubmVjdGVkIEFjY291bnQ6IHtjb25uZWN0ZWRBY2NvdW50fTwvcD5cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcmltYXJ5QnV0dG9uIiwiYWJpIiwiSG9tZSIsInVuZGVmaW5lZCIsImV0aGVyZXVtIiwic2V0RXRoZXJldW0iLCJjb25uZWN0ZWRBY2NvdW50Iiwic2V0Q29ubmVjdGVkQWNjb3VudCIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QSIsImhhbmRsZUFjY291bnRzIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsImdldENvbm5lY3RlZEFjY291bnQiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});