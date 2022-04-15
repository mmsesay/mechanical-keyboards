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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/keyboard */ \"./components/keyboard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Home() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var ref3 // this is new!\n     = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), newKeyboard = ref3[0], setNewKeyboard = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), keyboardsLoading = ref4[0], setKeyboardsLoading = ref4[1];\n    // OLD ADDRESS:'0xb0a219Fb41e6135B59ceA24Fe27E8B94c44b898C';\n    var contractAddress = '0x7F74C6e654C750f6F13e603Bc546E6FD86d27696';\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var connectAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer, keyboardsContract, keyboards;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    setKeyboardsLoading(true); // loading...\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 7;\n                    return keyboardsContract.getKeyboards();\n                case 7:\n                    keyboards = _ctx.sent;\n                    console.log('Retrieved keyboards...', keyboards);\n                    setKeyboards(keyboards);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var submitCreate = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var provider, signer, keyboardsContract, createTxn;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    if (ethereum) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    console.error('Ethereum object is required to create a keyboard');\n                    return _ctx.abrupt(\"return\");\n                case 4:\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 9;\n                    return keyboardsContract.create(newKeyboard);\n                case 9:\n                    createTxn = _ctx.sent;\n                    console.log('Create transaction started...', createTxn.hash);\n                    _ctx.next = 13;\n                    return createTxn.wait();\n                case 13:\n                    console.log('Created keyboard!', createTxn.hash);\n                    _ctx.next = 16;\n                    return getKeyboards();\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getConnectedAccount(), getKeyboards();\n    }, [\n        connectedAccount\n    ]);\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    if (keyboards1.length > 0) {\n        var _this = this;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-2 p-2\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: keyboards1.map(function(param, i) {\n                        var _param = _slicedToArray(param, 3), kind = _param[0], isPBT = _param[1], filter = _param[2];\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_keyboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            kind: kind,\n                            isPBT: isPBT,\n                            filter: filter,\n                            __source: {\n                                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            },\n                            __self: _this\n                        }, i);\n                    })\n                })\n            ]\n        }));\n    }\n    // No keyboards yet\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 114,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"link\",\n                href: \"/create\",\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Create a Keyboard!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 116,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"No keyboards yet!\"\n            })\n        ]\n    }));\n// return <p>Connected Account: {connectedAccount}</p>\n};\n_s1(Home, \"nm35p1v/CPsZFUr04aBgIVC9VcA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpbWFyeS1idXR0b25cIjtcbmltcG9ydCBhYmkgZnJvbSBcIi4uL3V0aWxzL0tleWJvYXJkcy5qc29uXCI7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMva2V5Ym9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2V0aGVyZXVtLCBzZXRFdGhlcmV1bV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBba2V5Ym9hcmRzLCBzZXRLZXlib2FyZHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmV3S2V5Ym9hcmQsIHNldE5ld0tleWJvYXJkXSA9IHVzZVN0YXRlKFwiXCIpIC8vIHRoaXMgaXMgbmV3IVxuICBjb25zdCBba2V5Ym9hcmRzTG9hZGluZywgc2V0S2V5Ym9hcmRzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gT0xEIEFERFJFU1M6JzB4YjBhMjE5RmI0MWU2MTM1QjU5Y2VBMjRGZTI3RThCOTRjNDRiODk4Qyc7XG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweDdGNzRDNmU2NTRDNzUwZjZGMTNlNjAzQmM1NDZFNkZEODZkMjc2OTYnO1xuICBjb25zdCBjb250cmFjdEFCSSA9IGFiaS5hYmk7XG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudHMgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgYW4gYXV0aG9yaXplZCBhY2NvdW50OiAnLCBhY2NvdW50KTtcbiAgICAgIHNldENvbm5lY3RlZEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50cyB5ZXRcIilcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBnZXRDb25uZWN0ZWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIHNldEV0aGVyZXVtKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgfVxuICBcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG4gICAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgYWxlcnQoJ01ldGFNYXNrIGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QgYW4gYWNjb3VudCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEtleWJvYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZXRoZXJldW0gJiYgY29ubmVjdGVkQWNjb3VudCkge1xuICAgICAgc2V0S2V5Ym9hcmRzTG9hZGluZyh0cnVlKTsgLy8gbG9hZGluZy4uLlxuXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGtleWJvYXJkc0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xuXG4gICAgICBjb25zdCBrZXlib2FyZHMgPSBhd2FpdCBrZXlib2FyZHNDb250cmFjdC5nZXRLZXlib2FyZHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQga2V5Ym9hcmRzLi4uJywga2V5Ym9hcmRzKVxuICAgICAgc2V0S2V5Ym9hcmRzKGtleWJvYXJkcylcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJtaXRDcmVhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghZXRoZXJldW0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0V0aGVyZXVtIG9iamVjdCBpcyByZXF1aXJlZCB0byBjcmVhdGUgYSBrZXlib2FyZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBrZXlib2FyZHNDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgc2lnbmVyKTtcblxuICAgIGNvbnN0IGNyZWF0ZVR4biA9IGF3YWl0IGtleWJvYXJkc0NvbnRyYWN0LmNyZWF0ZShuZXdLZXlib2FyZCk7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZSB0cmFuc2FjdGlvbiBzdGFydGVkLi4uJywgY3JlYXRlVHhuLmhhc2gpO1xuXG4gICAgYXdhaXQgY3JlYXRlVHhuLndhaXQoKTtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCBrZXlib2FyZCEnLCBjcmVhdGVUeG4uaGFzaCk7XG5cbiAgICBhd2FpdCBnZXRLZXlib2FyZHMoKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q29ubmVjdGVkQWNjb3VudCgpLFxuICAgIGdldEtleWJvYXJkcygpO1xuICB9LFtjb25uZWN0ZWRBY2NvdW50XSk7XG5cbiAgaWYgKCFldGhlcmV1bSkge1xuICAgIHJldHVybiA8cD5QbGVhc2UgaW5zdGFsbCBNZXRhTWFzayB0byBjb25uZWN0IHRvIHRoaXMgc2l0ZTwvcD5cbiAgfVxuXG4gIGlmICghY29ubmVjdGVkQWNjb3VudCkge1xuICAgIHJldHVybiA8UHJpbWFyeUJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0+Q29ubmVjdCBNZXRhTWFzayBXYWxsZXQ8L1ByaW1hcnlCdXR0b24+XG4gIH1cblxuICBpZiAoa2V5Ym9hcmRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxQcmltYXJ5QnV0dG9uIHR5cGU9XCJsaW5rXCIgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGUgYSBLZXlib2FyZCE8L1ByaW1hcnlCdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtMiBwLTJcIj5cbiAgICAgICAgICB7a2V5Ym9hcmRzLm1hcChcbiAgICAgICAgICAgIChba2luZCwgaXNQQlQsIGZpbHRlcl0sIGkpID0+IChcbiAgICAgICAgICAgICAgPEtleWJvYXJkIGtleT17aX0ga2luZD17a2luZH0gaXNQQlQ9e2lzUEJUfSBmaWx0ZXI9e2ZpbHRlcn0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIE5vIGtleWJvYXJkcyB5ZXRcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxQcmltYXJ5QnV0dG9uIHR5cGU9XCJsaW5rXCIgaHJlZj1cIi9jcmVhdGVcIj5DcmVhdGUgYSBLZXlib2FyZCE8L1ByaW1hcnlCdXR0b24+XG4gICAgICA8cD5ObyBrZXlib2FyZHMgeWV0ITwvcD5cbiAgICA8L2Rpdj5cbiAgKVxuICAvLyByZXR1cm4gPHA+Q29ubmVjdGVkIEFjY291bnQ6IHtjb25uZWN0ZWRBY2NvdW50fTwvcD5cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJQcmltYXJ5QnV0dG9uIiwiYWJpIiwiS2V5Ym9hcmQiLCJIb21lIiwidW5kZWZpbmVkIiwiZXRoZXJldW0iLCJzZXRFdGhlcmV1bSIsImNvbm5lY3RlZEFjY291bnQiLCJzZXRDb25uZWN0ZWRBY2NvdW50Iiwia2V5Ym9hcmRzIiwic2V0S2V5Ym9hcmRzIiwibmV3S2V5Ym9hcmQiLCJzZXROZXdLZXlib2FyZCIsImtleWJvYXJkc0xvYWRpbmciLCJzZXRLZXlib2FyZHNMb2FkaW5nIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBQkkiLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb25uZWN0ZWRBY2NvdW50Iiwid2luZG93IiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJnZXRLZXlib2FyZHMiLCJwcm92aWRlciIsInNpZ25lciIsImtleWJvYXJkc0NvbnRyYWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJzdWJtaXRDcmVhdGUiLCJlIiwiY3JlYXRlVHhuIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImNyZWF0ZSIsImhhc2giLCJ3YWl0IiwicCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaHJlZiIsIm1hcCIsImlzUEJUIiwiaSIsImtpbmQiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});