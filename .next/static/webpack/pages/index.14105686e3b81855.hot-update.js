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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var contractAddress = '0xb0a219Fb41e6135B59ceA24Fe27E8B94c44b898C';\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var connectAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer, keyboardsContract, keyboards;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 6;\n                    return keyboardsContract.getKeyboards();\n                case 6:\n                    keyboards = _ctx.sent;\n                    console.log('Retrieved keyboards...', keyboards);\n                    setKeyboards(keyboards);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getConnectedAccount(), getKeyboards();\n    }, [\n        connectedAccount\n    ]);\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"flex flex-col gap-y-8\",\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 71,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n            className: \"flex flex-col gap-y-2\",\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                        htmlFor: \"keyboard-description\",\n                        className: \"block text-sm font-medium text-gray-700\",\n                        __source: {\n                            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Keyboard Description\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    name: \"keyboard-type\",\n                    className: \"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md\",\n                    value: newKeyboard,\n                    onChange: function(e) {\n                        setNewKeyboard(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"submit\",\n                    onClick: submitCreate,\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create Keyboard!\"\n                })\n            ]\n        })\n    }));\n// return <p>Connected Account: {connectedAccount}</p>\n};\n_s(Home, \"t000XCBsMmq8sUltFBK8cW/Xf+M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2xCO1FBQUFBLGdCQUFnQjtJQUFBLENBQUM7SUFFcEIsRUFBRSxHQUFHRixRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUU0QixDQUFDOzs7Ozs7O3NCQUFDLENBQStDOztJQUMzRCxDQUFDO0lBRUQsRUFBRSxHQUFHMUIsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QixNQUFNLHNFQUFFTixrRUFBYTtZQUFDaUMsT0FBTyxFQUFFWCxjQUFjOzs7Ozs7O3NCQUFFLENBQXVCOztJQUN4RSxDQUFDO0lBRUQsTUFBTSxzRUFDSFksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBdUI7Ozs7Ozs7d0ZBQ25DQyxDQUFJO1lBQUNELFNBQVMsRUFBQyxDQUF1Qjs7Ozs7Ozs7cUZBQ3BDRCxDQUFHOzs7Ozs7O21HQUNERyxDQUFLO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0I7d0JBQUNILFNBQVMsRUFBQyxDQUF5Qzs7Ozs7OztrQ0FBQyxDQUUxRjs7O3FGQUVESSxDQUFLO29CQUNKQyxJQUFJLEVBQUMsQ0FBZTtvQkFDcEJMLFNBQVMsRUFBQyxDQUFvSjtvQkFDOUpNLEtBQUssRUFBRUMsV0FBVztvQkFDbEJDLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO3dCQUFDQyxjQUFjLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO29CQUFFLENBQUM7Ozs7Ozs7O3FGQUVwRHpDLGtFQUFhO29CQUFDK0MsSUFBSSxFQUFDLENBQVE7b0JBQUNkLE9BQU8sRUFBRWUsWUFBWTs7Ozs7Ozs4QkFBRSxDQUVwRDs7Ozs7QUFLTixFQUFzRDtBQUN4RCxDQUFDO0dBdEZ1QjlDLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uXCI7XG5pbXBvcnQgYWJpIGZyb20gXCIuLi91dGlscy9LZXlib2FyZHMuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXRoZXJldW0sIHNldEV0aGVyZXVtXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtrZXlib2FyZHMsIHNldEtleWJvYXJkc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4YjBhMjE5RmI0MWU2MTM1QjU5Y2VBMjRGZTI3RThCOTRjNDRiODk4Qyc7XG4gIGNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50cyA9IChhY2NvdW50cykgPT4ge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZygnV2UgaGF2ZSBhbiBhdXRob3JpemVkIGFjY291bnQ6ICcsIGFjY291bnQpO1xuICAgICAgc2V0Q29ubmVjdGVkQWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzIHlldFwiKVxuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGdldENvbm5lY3RlZEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgc2V0RXRoZXJldW0od2luZG93LmV0aGVyZXVtKTtcbiAgICB9XG4gIFxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcbiAgICAgIGhhbmRsZUFjY291bnRzKGFjY291bnRzKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBhbGVydCgnTWV0YU1hc2sgaXMgcmVxdWlyZWQgdG8gY29ubmVjdCBhbiBhY2NvdW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0S2V5Ym9hcmRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChldGhlcmV1bSAmJiBjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGtleWJvYXJkc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xuXG4gICAgICBjb25zdCBrZXlib2FyZHMgPSBhd2FpdCBrZXlib2FyZHNDb250cmFjdC5nZXRLZXlib2FyZHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQga2V5Ym9hcmRzLi4uJywga2V5Ym9hcmRzKVxuICAgICAgc2V0S2V5Ym9hcmRzKGtleWJvYXJkcylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENvbm5lY3RlZEFjY291bnQoKSxcbiAgICBnZXRLZXlib2FyZHMoKTtcbiAgfSxbY29ubmVjdGVkQWNjb3VudF0pO1xuXG4gIGlmICghZXRoZXJldW0pIHtcbiAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgdG8gY29ubmVjdCB0byB0aGlzIHNpdGU8L3A+XG4gIH1cblxuICBpZiAoIWNvbm5lY3RlZEFjY291bnQpIHtcbiAgICByZXR1cm4gPFByaW1hcnlCdXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9PkNvbm5lY3QgTWV0YU1hc2sgV2FsbGV0PC9QcmltYXJ5QnV0dG9uPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktOFwiPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS0yXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJrZXlib2FyZC1kZXNjcmlwdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgS2V5Ym9hcmQgRGVzY3JpcHRpb25cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cImtleWJvYXJkLXR5cGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHBsLTMgcHItMTAgcHktMiB0ZXh0LWJhc2UgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbSByb3VuZGVkLW1kXCJcbiAgICAgICAgICB2YWx1ZT17bmV3S2V5Ym9hcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldE5ld0tleWJvYXJkKGUudGFyZ2V0LnZhbHVlKSB9fVxuICAgICAgICAvPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17c3VibWl0Q3JlYXRlfT5cbiAgICAgICAgICBDcmVhdGUgS2V5Ym9hcmQhXG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxuICBcbiAgLy8gcmV0dXJuIDxwPkNvbm5lY3RlZCBBY2NvdW50OiB7Y29ubmVjdGVkQWNjb3VudH08L3A+XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiUHJpbWFyeUJ1dHRvbiIsImFiaSIsIkhvbWUiLCJ1bmRlZmluZWQiLCJldGhlcmV1bSIsInNldEV0aGVyZXVtIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJrZXlib2FyZHMiLCJzZXRLZXlib2FyZHMiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImhhbmRsZUFjY291bnRzIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsImdldENvbm5lY3RlZEFjY291bnQiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImdldEtleWJvYXJkcyIsInByb3ZpZGVyIiwic2lnbmVyIiwia2V5Ym9hcmRzQ29udHJhY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsInAiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsInZhbHVlIiwibmV3S2V5Ym9hcmQiLCJvbkNoYW5nZSIsImUiLCJzZXROZXdLZXlib2FyZCIsInRhcmdldCIsInR5cGUiLCJzdWJtaXRDcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});