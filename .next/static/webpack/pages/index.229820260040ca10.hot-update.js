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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _components_tip_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tip-button */ \"./components/tip-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* harmony import */ var _utils_addressesEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/addressesEqual */ \"./utils/addressesEqual.js\");\n/* harmony import */ var _components_keyboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/keyboard */ \"./components/keyboard.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var _utils_getKeyboardsContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getKeyboardsContract */ \"./utils/getKeyboardsContract.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Home() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), keyboardsLoading = ref3[0], setKeyboardsLoading = ref3[1];\n    // const contractAddress = \"0x3383BdA0c67Ae123115C282750dD474BCfBAF8CA\";\n    // const contractABI = abi.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log(\"We have an authorized account: \", account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    // const getConnectedAccount = async () => {\n    //   if (window.ethereum) {\n    //     setEthereum(window.ethereum);\n    //   }\n    //   if (ethereum) {\n    //     const accounts = await ethereum.request({ method: \"eth_accounts\" });\n    //     handleAccounts(accounts);\n    //   }\n    // };\n    var connectAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert(\"MetaMask is required to connect an account\");\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var keyboards;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    setKeyboardsLoading(true); // loading...\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return keyboardsContract.getKeyboards();\n                case 5:\n                    keyboards = _ctx.sent;\n                    console.log(\"Retrieved keyboards...\", keyboards);\n                    setKeyboards(keyboards);\n                case 8:\n                    _ctx.prev = 8;\n                    setKeyboardsLoading(false); // loading...\n                    return _ctx.finish(8);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                ,\n                8,\n                11\n            ]\n        ]);\n    }));\n    var addContractEventHandlers = function() {\n        if (keyboardsContract && connectedAccount) {\n            keyboardsContract.on(\"KeyboardCreated\", _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(keyboard) {\n                return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (connectedAccount && !(0,_utils_addressesEqual__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(keyboard.owner, connectedAccount)) {\n                                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.toast)(\"Somebody created a new keyboard!\", {\n                                    id: JSON.stringify(keyboard)\n                                });\n                            }\n                            _ctx.next = 3;\n                            return getKeyboards();\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(addContractEventHandlers, [\n        !!keyboardsContract,\n        connectedAccount\n    ]);\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    if (keyboards1.length > 0) {\n        var _this = this;\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-2 p-2\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: keyboards1.map(function(param, i) {\n                        var _param = _slicedToArray(param, 4), kind = _param[0], isPBT = _param[1], filter = _param[2], owner = _param[3];\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: \"relative\",\n                            __source: {\n                                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_keyboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    kind: kind,\n                                    isPBT: isPBT,\n                                    filter: filter,\n                                    __source: {\n                                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }, i),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                    className: \"absolute top-1 right-6\",\n                                    __source: {\n                                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: (0,_utils_addressesEqual__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(owner, connectedAccount) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.UserCircleIcon, {\n                                        className: \"h-5 w-5 text-indigo-100\",\n                                        __source: {\n                                            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_tip_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        ethereum: ethereum,\n                                        index: i,\n                                        __source: {\n                                            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            ]\n                        }, i);\n                    })\n                })\n            ]\n        }));\n    }\n    // for loading...\n    if (keyboardsLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"link\",\n                    href: \"/create\",\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Create a Keyboard!\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Loading Keyboards...\"\n                })\n            ]\n        }));\n    }\n    // No keyboards yet\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"flex flex-col gap-4\",\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 134,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: \"link\",\n                href: \"/create\",\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 135,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Create a Keyboard!\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                    lineNumber: 138,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"No keyboards yet!\"\n            })\n        ]\n    }));\n};\n_s1(Home, \"O/A6yow689qtnnnO927nf8qgYOk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3FHQUNmRyxDQUFJO29DQUFDUixTQUFTLEVBQUMsQ0FBd0I7Ozs7Ozs7OENBQ3JDcEMsaUVBQWMsQ0FBQzZCLEtBQUssRUFBRXJCLGdCQUFnQix5RUFDcENOLGtFQUFjO3dDQUFDa0MsU0FBUyxFQUFDLENBQXlCOzs7Ozs7OzhHQUVsRHRDLDhEQUFTO3dDQUFDUSxRQUFRLEVBQUVBLFFBQVE7d0NBQUV1QyxLQUFLLEVBQUVKLENBQUM7Ozs7Ozs7Ozs7MkJBTm5DQSxDQUFDOzs7OztJQWNyQixDQUFDO0lBRUQsRUFBaUI7SUFDakIsRUFBRSxFQUFFN0IsZ0JBQWdCLEVBQUUsQ0FBQztRQUNyQixNQUFNLHVFQUNIdUIsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7O3FGQUNqQ3ZDLGtFQUFhO29CQUFDd0MsSUFBSSxFQUFDLENBQU07b0JBQUNDLElBQUksRUFBQyxDQUFTOzs7Ozs7OzhCQUFDLENBRTFDOztxRkFDQ0wsQ0FBQzs7Ozs7Ozs4QkFBQyxDQUFvQjs7OztJQUc3QixDQUFDO0lBRUQsRUFBbUI7SUFDbkIsTUFBTSx1RUFDSEUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7O2lGQUNqQ3ZDLGtFQUFhO2dCQUFDd0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFTOzs7Ozs7OzBCQUFDLENBRTFDOztpRkFDQ0wsQ0FBQzs7Ozs7OzswQkFBQyxDQUFpQjs7OztBQUcxQixDQUFDO0lBbEl1QjdCLElBQUk7S0FBSkEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJpbWFyeS1idXR0b25cIjtcbmltcG9ydCBUaXBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGlwLWJ1dHRvblwiO1xuaW1wb3J0IGFiaSBmcm9tIFwiLi4vdXRpbHMvS2V5Ym9hcmRzLmpzb25cIjtcbmltcG9ydCBhZGRyZXNzZXNFcXVhbCBmcm9tIFwiLi4vdXRpbHMvYWRkcmVzc2VzRXF1YWxcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9rZXlib2FyZFwiO1xuaW1wb3J0IHsgVXNlckNpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IGdldEtleWJvYXJkc0NvbnRyYWN0IGZyb20gXCIuLi91dGlscy9nZXRLZXlib2FyZHNDb250cmFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXRoZXJldW0sIHNldEV0aGVyZXVtXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRBY2NvdW50LCBzZXRDb25uZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtrZXlib2FyZHMsIHNldEtleWJvYXJkc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtrZXlib2FyZHNMb2FkaW5nLCBzZXRLZXlib2FyZHNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4MzM4M0JkQTBjNjdBZTEyMzExNUMyODI3NTBkRDQ3NEJDZkJBRjhDQVwiO1xuICAvLyBjb25zdCBjb250cmFjdEFCSSA9IGFiaS5hYmk7XG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudHMgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coXCJXZSBoYXZlIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogXCIsIGFjY291bnQpO1xuICAgICAgc2V0Q29ubmVjdGVkQWNjb3VudChhY2NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzIHlldFwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgZ2V0Q29ubmVjdGVkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gIC8vICAgICBzZXRFdGhlcmV1bSh3aW5kb3cuZXRoZXJldW0pO1xuICAvLyAgIH1cblxuICAvLyAgIGlmIChldGhlcmV1bSkge1xuICAvLyAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xuICAvLyAgICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIWV0aGVyZXVtKSB7XG4gICAgICBhbGVydChcIk1ldGFNYXNrIGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QgYW4gYWNjb3VudFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICAgIGhhbmRsZUFjY291bnRzKGFjY291bnRzKTtcbiAgfTtcblxuICBjb25zdCBnZXRLZXlib2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGV0aGVyZXVtICYmIGNvbm5lY3RlZEFjY291bnQpIHtcbiAgICAgIHNldEtleWJvYXJkc0xvYWRpbmcodHJ1ZSk7IC8vIGxvYWRpbmcuLi5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qga2V5Ym9hcmRzID0gYXdhaXQga2V5Ym9hcmRzQ29udHJhY3QuZ2V0S2V5Ym9hcmRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmlldmVkIGtleWJvYXJkcy4uLlwiLCBrZXlib2FyZHMpO1xuXG4gICAgICAgIHNldEtleWJvYXJkcyhrZXlib2FyZHMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0S2V5Ym9hcmRzTG9hZGluZyhmYWxzZSk7IC8vIGxvYWRpbmcuLi5cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkQ29udHJhY3RFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIGlmIChrZXlib2FyZHNDb250cmFjdCAmJiBjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgICBrZXlib2FyZHNDb250cmFjdC5vbihcIktleWJvYXJkQ3JlYXRlZFwiLCBhc3luYyAoa2V5Ym9hcmQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbm5lY3RlZEFjY291bnQgJiZcbiAgICAgICAgICAhYWRkcmVzc2VzRXF1YWwoa2V5Ym9hcmQub3duZXIsIGNvbm5lY3RlZEFjY291bnQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRvYXN0KFwiU29tZWJvZHkgY3JlYXRlZCBhIG5ldyBrZXlib2FyZCFcIiwge1xuICAgICAgICAgICAgaWQ6IEpTT04uc3RyaW5naWZ5KGtleWJvYXJkKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBnZXRLZXlib2FyZHMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoYWRkQ29udHJhY3RFdmVudEhhbmRsZXJzLCBbISFrZXlib2FyZHNDb250cmFjdCwgY29ubmVjdGVkQWNjb3VudF0pO1xuXG4gIGlmICghZXRoZXJldW0pIHtcbiAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgdG8gY29ubmVjdCB0byB0aGlzIHNpdGU8L3A+O1xuICB9XG5cbiAgaWYgKCFjb25uZWN0ZWRBY2NvdW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcmltYXJ5QnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fT5cbiAgICAgICAgQ29ubmVjdCBNZXRhTWFzayBXYWxsZXRcbiAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGtleWJvYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICAgICAgQ3JlYXRlIGEgS2V5Ym9hcmQhXG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC0yIHAtMlwiPlxuICAgICAgICAgIHtrZXlib2FyZHMubWFwKChba2luZCwgaXNQQlQsIGZpbHRlciwgb3duZXJdLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPEtleWJvYXJkIGtleT17aX0ga2luZD17a2luZH0gaXNQQlQ9e2lzUEJUfSBmaWx0ZXI9e2ZpbHRlcn0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEgcmlnaHQtNlwiPlxuICAgICAgICAgICAgICAgIHthZGRyZXNzZXNFcXVhbChvd25lciwgY29ubmVjdGVkQWNjb3VudCkgPyAoXG4gICAgICAgICAgICAgICAgICA8VXNlckNpcmNsZUljb24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlnby0xMDBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8VGlwQnV0dG9uIGV0aGVyZXVtPXtldGhlcmV1bX0gaW5kZXg9e2l9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8vIGZvciBsb2FkaW5nLi4uXG4gIGlmIChrZXlib2FyZHNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0eXBlPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICAgICAgQ3JlYXRlIGEgS2V5Ym9hcmQhXG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgICAgPHA+TG9hZGluZyBLZXlib2FyZHMuLi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy8gTm8ga2V5Ym9hcmRzIHlldFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPFByaW1hcnlCdXR0b24gdHlwZT1cImxpbmtcIiBocmVmPVwiL2NyZWF0ZVwiPlxuICAgICAgICBDcmVhdGUgYSBLZXlib2FyZCFcbiAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cbiAgICAgIDxwPk5vIGtleWJvYXJkcyB5ZXQhPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJQcmltYXJ5QnV0dG9uIiwiVGlwQnV0dG9uIiwiYWJpIiwiYWRkcmVzc2VzRXF1YWwiLCJLZXlib2FyZCIsIlVzZXJDaXJjbGVJY29uIiwiZ2V0S2V5Ym9hcmRzQ29udHJhY3QiLCJIb21lIiwidW5kZWZpbmVkIiwiZXRoZXJldW0iLCJzZXRFdGhlcmV1bSIsImNvbm5lY3RlZEFjY291bnQiLCJzZXRDb25uZWN0ZWRBY2NvdW50Iiwia2V5Ym9hcmRzIiwic2V0S2V5Ym9hcmRzIiwia2V5Ym9hcmRzTG9hZGluZyIsInNldEtleWJvYXJkc0xvYWRpbmciLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwicmVxdWVzdCIsIm1ldGhvZCIsImdldEtleWJvYXJkcyIsImtleWJvYXJkc0NvbnRyYWN0IiwiYWRkQ29udHJhY3RFdmVudEhhbmRsZXJzIiwib24iLCJrZXlib2FyZCIsIm93bmVyIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwicCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaHJlZiIsIm1hcCIsImlzUEJUIiwiaSIsImtpbmQiLCJmaWx0ZXIiLCJzcGFuIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});