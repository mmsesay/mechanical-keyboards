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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/primary-button */ \"./components/primary-button.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), ethereum = ref[0], setEthereum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), connectedAccount = ref1[0], setConnectedAccount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), keyboards1 = ref2[0], setKeyboards = ref2[1];\n    var contractAddress = '0xb0a219Fb41e6135B59ceA24Fe27E8B94c44b898C';\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    var handleAccounts = function(accounts) {\n        if (accounts.length > 0) {\n            var account = accounts[0];\n            console.log('We have an authorized account: ', account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    var getConnectedAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (window.ethereum) {\n                        setEthereum(window.ethereum);\n                    }\n                    if (!ethereum) {\n                        _ctx.next = 6;\n                        break;\n                    }\n                    _ctx.next = 4;\n                    return ethereum.request({\n                        method: 'eth_accounts'\n                    });\n                case 4:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var connectAccount = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (ethereum) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    alert('MetaMask is required to connect an account');\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    _ctx.next = 5;\n                    return ethereum.request({\n                        method: 'eth_requestAccounts'\n                    });\n                case 5:\n                    accounts = _ctx.sent;\n                    handleAccounts(accounts);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    var getKeyboards = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, signer, keyboardsContract, keyboards;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(ethereum && connectedAccount)) {\n                        _ctx.next = 9;\n                        break;\n                    }\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethereum);\n                    signer = provider.getSigner();\n                    keyboardsContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, contractABI, signer);\n                    _ctx.next = 6;\n                    return keyboardsContract.getKeyboards();\n                case 6:\n                    keyboards = _ctx.sent;\n                    console.log('Retrieved keyboards...', keyboards);\n                    setKeyboards(keyboards);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getConnectedAccount(), getKeyboards;\n    }, []);\n    if (!ethereum) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Please install MetaMask to connect to this site\"\n        }));\n    }\n    if (!connectedAccount) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: connectAccount,\n            __source: {\n                fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 12\n            },\n            __self: this,\n            children: \"Connect MetaMask Wallet\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/index.js\",\n            lineNumber: 70,\n            columnNumber: 10\n        },\n        __self: this,\n        children: [\n            \"Connected Account: \",\n            connectedAccount\n        ]\n    }));\n};\n_s(Home, \"t000XCBsMmq8sUltFBK8cW/Xf+M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0lBRUosRUFBRSxHQUFHcEIsUUFBUSxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFNEIsQ0FBQzs7Ozs7OztzQkFBQyxDQUErQzs7SUFDM0QsQ0FBQztJQUVELEVBQUUsR0FBRzFCLGdCQUFnQixFQUFFLENBQUM7UUFDdEIsTUFBTSxzRUFBRU4sa0VBQWE7WUFBQ2lDLE9BQU8sRUFBRVgsY0FBYzs7Ozs7OztzQkFBRSxDQUF1Qjs7SUFDeEUsQ0FBQztJQUVELE1BQU0sdUVBQUVVLENBQUM7Ozs7Ozs7O1lBQUMsQ0FBbUI7WUFBQzFCLGdCQUFnQjs7O0FBQ2hELENBQUM7R0FqRXVCSixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcmltYXJ5LWJ1dHRvblwiO1xuaW1wb3J0IGFiaSBmcm9tIFwiLi4vdXRpbHMvS2V5Ym9hcmRzLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2V0aGVyZXVtLCBzZXRFdGhlcmV1bV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbY29ubmVjdGVkQWNjb3VudCwgc2V0Q29ubmVjdGVkQWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBba2V5Ym9hcmRzLCBzZXRLZXlib2FyZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9ICcweGIwYTIxOUZiNDFlNjEzNUI1OWNlQTI0RmUyN0U4Qjk0YzQ0Yjg5OEMnO1xuICBjb25zdCBjb250cmFjdEFCSSA9IGFiaS5hYmk7XG5cbiAgY29uc3QgaGFuZGxlQWNjb3VudHMgPSAoYWNjb3VudHMpID0+IHtcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xuICAgICAgY29uc29sZS5sb2coJ1dlIGhhdmUgYW4gYXV0aG9yaXplZCBhY2NvdW50OiAnLCBhY2NvdW50KTtcbiAgICAgIHNldENvbm5lY3RlZEFjY291bnQoYWNjb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYXV0aG9yaXplZCBhY2NvdW50cyB5ZXRcIilcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBnZXRDb25uZWN0ZWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIHNldEV0aGVyZXVtKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgfVxuICBcbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9hY2NvdW50cycgfSk7XG4gICAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgYWxlcnQoJ01ldGFNYXNrIGlzIHJlcXVpcmVkIHRvIGNvbm5lY3QgYW4gYWNjb3VudCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEtleWJvYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZXRoZXJldW0gJiYgY29ubmVjdGVkQWNjb3VudCkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICBjb25zdCBrZXlib2FyZHNDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgc2lnbmVyKTtcblxuICAgICAgY29uc3Qga2V5Ym9hcmRzID0gYXdhaXQga2V5Ym9hcmRzQ29udHJhY3QuZ2V0S2V5Ym9hcmRzKCk7XG4gICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkIGtleWJvYXJkcy4uLicsIGtleWJvYXJkcylcbiAgICAgIHNldEtleWJvYXJkcyhrZXlib2FyZHMpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDb25uZWN0ZWRBY2NvdW50KCksXG4gICAgZ2V0S2V5Ym9hcmRzXG4gIH0sW10pO1xuXG4gIGlmICghZXRoZXJldW0pIHtcbiAgICByZXR1cm4gPHA+UGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgdG8gY29ubmVjdCB0byB0aGlzIHNpdGU8L3A+XG4gIH1cblxuICBpZiAoIWNvbm5lY3RlZEFjY291bnQpIHtcbiAgICByZXR1cm4gPFByaW1hcnlCdXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9PkNvbm5lY3QgTWV0YU1hc2sgV2FsbGV0PC9QcmltYXJ5QnV0dG9uPlxuICB9XG5cbiAgcmV0dXJuIDxwPkNvbm5lY3RlZCBBY2NvdW50OiB7Y29ubmVjdGVkQWNjb3VudH08L3A+XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiUHJpbWFyeUJ1dHRvbiIsImFiaSIsIkhvbWUiLCJ1bmRlZmluZWQiLCJldGhlcmV1bSIsInNldEV0aGVyZXVtIiwiY29ubmVjdGVkQWNjb3VudCIsInNldENvbm5lY3RlZEFjY291bnQiLCJrZXlib2FyZHMiLCJzZXRLZXlib2FyZHMiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFCSSIsImhhbmRsZUFjY291bnRzIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJhY2NvdW50IiwiY29uc29sZSIsImxvZyIsImdldENvbm5lY3RlZEFjY291bnQiLCJ3aW5kb3ciLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29ubmVjdEFjY291bnQiLCJhbGVydCIsImdldEtleWJvYXJkcyIsInByb3ZpZGVyIiwic2lnbmVyIiwia2V5Ym9hcmRzQ29udHJhY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});