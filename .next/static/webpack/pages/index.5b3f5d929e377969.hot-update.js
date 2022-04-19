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

/***/ "./components/tip-button.js":
/*!**********************************!*\
  !*** ./components/tip-button.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TipButton; }\n/* harmony export */ });\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _secondary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-button */ \"./components/secondary-button.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Keyboards.json */ \"./utils/Keyboards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction TipButton(param) {\n    var keyboardsContract = param.keyboardsContract, index = param.index;\n    _s();\n    var contractAddress = \"0x3383BdA0c67Ae123115C282750dD474BCfBAF8CA\";\n    var contractABI = _utils_Keyboards_json__WEBPACK_IMPORTED_MODULE_4__.abi;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), mining = ref[0], setMining = ref[1];\n    var submitTip = _asyncToGenerator(_Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var tipTxn;\n        return _Users_Muhammad_Projects_web3_solidity_tutorial_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (keyboardsContract) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    console.error(\"keyboardsContract object is required to submit a tip\");\n                    return _ctx.abrupt(\"return\");\n                case 3:\n                    setMining(true);\n                    _ctx.prev = 4;\n                    _ctx.next = 7;\n                    return keyboardsContract.tip(index, {\n                        value: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.parseEther(\"0.01\")\n                    });\n                case 7:\n                    tipTxn = _ctx.sent;\n                    console.log('Tip transaction started...', tipTxn.hash);\n                    _ctx.next = 11;\n                    return tipTxn.wait();\n                case 11:\n                    console.log('Sent tip!', tipTxn.hash);\n                case 12:\n                    _ctx.prev = 12;\n                    setMining(false);\n                    return _ctx.finish(12);\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                4,\n                ,\n                12,\n                15\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_secondary_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onClick: submitTip,\n        disabled: mining,\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/components/tip-button.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: mining ? \"Tipping...\" : \"Tip 0.01 eth!\"\n    }));\n};\n_s(TipButton, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = TipButton;\nvar _c;\n$RefreshReg$(_c, \"TipButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RpcC1idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNnQjtBQUNqQjtBQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLFFBQVEsQ0FBQ0ksU0FBUyxDQUFDLEtBQTRCLEVBQUUsQ0FBQztRQUE3QkMsaUJBQWlCLEdBQW5CLEtBQTRCLENBQTFCQSxpQkFBaUIsRUFBRUMsS0FBSyxHQUExQixLQUE0QixDQUFQQSxLQUFLOztJQUMxRCxHQUFLLENBQUNDLGVBQWUsR0FBRyxDQUE0QztJQUNwRSxHQUFLLENBQUNDLFdBQVcsR0FBR0wsc0RBQU87SUFFM0IsR0FBSyxDQUF1QkgsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBbkNTLE1BQU0sR0FBZVQsR0FBZSxLQUE1QlUsU0FBUyxHQUFJVixHQUFlO0lBRTNDLEdBQUssQ0FBQ1csU0FBUyw2SkFBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO1lBUXRCQyxNQUFNOzs7O3dCQVBUUixpQkFBaUI7Ozs7b0JBQ3BCUyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFzRDs7O29CQUl0RUwsU0FBUyxDQUFDLElBQUk7OzsyQkFFU0wsaUJBQWlCLENBQUNXLEdBQUcsQ0FBQ1YsS0FBSyxFQUFFLENBQUM7d0JBQUNXLEtBQUssRUFBRWYsMkRBQXVCLENBQUMsQ0FBTTtvQkFBRSxDQUFDOztvQkFBdEZXLE1BQU07b0JBQ1pDLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLENBQTRCLDZCQUFFUCxNQUFNLENBQUNRLElBQUk7OzJCQUUvQ1IsTUFBTSxDQUFDUyxJQUFJOztvQkFDakJSLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLENBQVcsWUFBRVAsTUFBTSxDQUFDUSxJQUFJOzs7b0JBRXBDWCxTQUFTLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7SUFFbkIsQ0FBQztJQUVELE1BQU0sc0VBQ0hULHlEQUFlO1FBQUNzQixPQUFPLEVBQUVaLFNBQVM7UUFBRWEsUUFBUSxFQUFFZixNQUFNOzs7Ozs7O2tCQUNsREEsTUFBTSxHQUFHLENBQVksY0FBRyxDQUFlOztBQUc5QyxDQUFDO0dBN0J1QkwsU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGlwLWJ1dHRvbi5qcz9kMmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2Vjb25kYXJ5QnV0dG9uIGZyb20gXCIuL3NlY29uZGFyeS1idXR0b25cIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBhYmkgZnJvbSBcIi4uL3V0aWxzL0tleWJvYXJkcy5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpcEJ1dHRvbih7IGtleWJvYXJkc0NvbnRyYWN0LCBpbmRleCB9KSB7XG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHgzMzgzQmRBMGM2N0FlMTIzMTE1QzI4Mjc1MGRENDc0QkNmQkFGOENBXCI7XG4gIGNvbnN0IGNvbnRyYWN0QUJJID0gYWJpLmFiaTtcblxuICBjb25zdCBbbWluaW5nLCBzZXRNaW5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN1Ym1pdFRpcCA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKCFrZXlib2FyZHNDb250cmFjdCkge1xuICAgICAgY29uc29sZS5lcnJvcihcImtleWJvYXJkc0NvbnRyYWN0IG9iamVjdCBpcyByZXF1aXJlZCB0byBzdWJtaXQgYSB0aXBcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TWluaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0aXBUeG4gPSBhd2FpdCBrZXlib2FyZHNDb250cmFjdC50aXAoaW5kZXgsIHsgdmFsdWU6IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKFwiMC4wMVwiKSB9KVxuICAgICAgY29uc29sZS5sb2coJ1RpcCB0cmFuc2FjdGlvbiBzdGFydGVkLi4uJywgdGlwVHhuLmhhc2gpXG5cbiAgICAgIGF3YWl0IHRpcFR4bi53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZygnU2VudCB0aXAhJywgdGlwVHhuLmhhc2gpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRNaW5pbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWNvbmRhcnlCdXR0b24gb25DbGljaz17c3VibWl0VGlwfSBkaXNhYmxlZD17bWluaW5nfT5cbiAgICAgIHttaW5pbmcgPyBcIlRpcHBpbmcuLi5cIiA6IFwiVGlwIDAuMDEgZXRoIVwifVxuICAgIDwvU2Vjb25kYXJ5QnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2Vjb25kYXJ5QnV0dG9uIiwiZXRoZXJzIiwiYWJpIiwiVGlwQnV0dG9uIiwia2V5Ym9hcmRzQ29udHJhY3QiLCJpbmRleCIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwibWluaW5nIiwic2V0TWluaW5nIiwic3VibWl0VGlwIiwiZSIsInRpcFR4biIsImNvbnNvbGUiLCJlcnJvciIsInRpcCIsInZhbHVlIiwidXRpbHMiLCJwYXJzZUV0aGVyIiwibG9nIiwiaGFzaCIsIndhaXQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tip-button.js\n");

/***/ })

});