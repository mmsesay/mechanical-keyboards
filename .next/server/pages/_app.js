/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/meta-mask-account-provider.js":
/*!**************************************************!*\
  !*** ./components/meta-mask-account-provider.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MetaMaskAccountProvider),\n/* harmony export */   \"useMetaMaskAccount\": () => (/* binding */ useMetaMaskAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MetaMaskAccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction MetaMaskAccountProvider({ children  }) {\n    const { 0: ethereum , 1: setEthereum  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { 0: connectedAccount , 1: setConnectedAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const setEthereumFromWindow = async ()=>{\n        if (window.ethereum) {\n            // Reload if chain changes, see <https://docs.metamask.io/guide/ethereum-provider.html#chainchanged>\n            window.ethereum.on(\"chainChanged\", (_chainId)=>window.location.reload()\n            );\n            const chainId = await window.ethereum.request({\n                method: \"eth_chainId\"\n            });\n            const rinkebyId = \"0x4\"; // See <https://docs.metamask.io/guide/ethereum-provider.html#chain-ids>\n            if (chainId === rinkebyId) {\n                setEthereum(window.ethereum);\n            } else {\n                alert(\"Please use Rinkeby network\");\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setEthereumFromWindow()\n    , []);\n    const handleAccounts = (accounts)=>{\n        if (accounts.length > 0) {\n            const account = accounts[0];\n            console.log(\"We have an authorized account: \", account);\n            setConnectedAccount(account);\n        } else {\n            console.log(\"No authorized accounts yet\");\n        }\n    };\n    const getConnectedAccount = async ()=>{\n        if (ethereum) {\n            const accounts = await ethereum.request({\n                method: \"eth_accounts\"\n            });\n            handleAccounts(accounts);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>getConnectedAccount()\n    );\n    const connectAccount = async ()=>{\n        if (!ethereum) {\n            console.error(\"Ethereum object is required to connect an account\");\n            return;\n        }\n        const accounts = await ethereum.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccounts(accounts);\n    };\n    const value = {\n        ethereum,\n        connectedAccount,\n        connectAccount\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MetaMaskAccountContext.Provider, {\n        value: value,\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/components/meta-mask-account-provider.js\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n};\nfunction useMetaMaskAccount() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MetaMaskAccountContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21ldGEtbWFzay1hY2NvdW50LXByb3ZpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0U7QUFFdEUsS0FBSyxDQUFDSSxzQkFBc0IsaUJBQUdGLG9EQUFhO0FBRTdCLFFBQVEsQ0FBQ0csdUJBQXVCLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsS0FBSyxNQUFFQyxRQUFRLE1BQUVDLFdBQVcsTUFBSVIsK0NBQVEsQ0FBQ1MsU0FBUztJQUNsRCxLQUFLLE1BQUVDLGdCQUFnQixNQUFFQyxtQkFBbUIsTUFBSVgsK0NBQVEsQ0FBQ1MsU0FBUztJQUVsRSxLQUFLLENBQUNHLHFCQUFxQixhQUFlLENBQUM7UUFDekMsRUFBRSxFQUFFQyxNQUFNLENBQUNOLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLEVBQW9HO1lBQ3BHTSxNQUFNLENBQUNOLFFBQVEsQ0FBQ08sRUFBRSxDQUFDLENBQWMsZ0JBQUdDLFFBQVEsR0FDMUNGLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxNQUFNOztZQUV4QixLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNMLE1BQU0sQ0FBQ04sUUFBUSxDQUFDWSxPQUFPLENBQUMsQ0FBQztnQkFBQ0MsTUFBTSxFQUFFLENBQWE7WUFBQyxDQUFDO1lBQ3ZFLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLENBQUssS0FBRSxDQUF3RTtZQUNqRyxFQUFFLEVBQUVILE9BQU8sS0FBS0csU0FBUyxFQUFFLENBQUM7Z0JBQzFCYixXQUFXLENBQUNLLE1BQU0sQ0FBQ04sUUFBUTtZQUM3QixDQUFDLE1BQU0sQ0FBQztnQkFDTmUsS0FBSyxDQUFDLENBQTRCO1lBQ3BDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNEckIsZ0RBQVMsS0FBT1cscUJBQXFCO01BQUksQ0FBQyxDQUFDO0lBRTNDLEtBQUssQ0FBQ1csY0FBYyxJQUFJQyxRQUFRLEdBQUssQ0FBQztRQUNwQyxFQUFFLEVBQUVBLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHRixRQUFRLENBQUMsQ0FBQztZQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUMsa0NBQUVGLE9BQU87WUFDdERmLG1CQUFtQixDQUFDZSxPQUFPO1FBQzdCLENBQUMsTUFBTSxDQUFDO1lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTRCO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDQyxtQkFBbUIsYUFBZSxDQUFDO1FBQ3ZDLEVBQUUsRUFBRXRCLFFBQVEsRUFBRSxDQUFDO1lBQ2IsS0FBSyxDQUFDaUIsUUFBUSxHQUFHLEtBQUssQ0FBQ2pCLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLENBQUM7Z0JBQUNDLE1BQU0sRUFBRSxDQUFjO1lBQUMsQ0FBQztZQUNsRUcsY0FBYyxDQUFDQyxRQUFRO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0R2QixnREFBUyxLQUFPNEIsbUJBQW1COztJQUVuQyxLQUFLLENBQUNDLGNBQWMsYUFBZSxDQUFDO1FBQ2xDLEVBQUUsR0FBR3ZCLFFBQVEsRUFBRSxDQUFDO1lBQ2RvQixPQUFPLENBQUNJLEtBQUssQ0FBQyxDQUFtRDtZQUNqRSxNQUFNO1FBQ1IsQ0FBQztRQUVELEtBQUssQ0FBQ1AsUUFBUSxHQUFHLEtBQUssQ0FBQ2pCLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDLENBQUM7WUFBQ0MsTUFBTSxFQUFFLENBQXFCO1FBQUMsQ0FBQztRQUN6RUcsY0FBYyxDQUFDQyxRQUFRO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUNRLEtBQUssR0FBRyxDQUFDO1FBQUN6QixRQUFRO1FBQUVHLGdCQUFnQjtRQUFFb0IsY0FBYztJQUFDLENBQUM7SUFFNUQsTUFBTSxzRUFDSDFCLHNCQUFzQixDQUFDNkIsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7a0JBQzFDMUIsUUFBUTs7QUFHZixDQUFDO0FBRU0sU0FBUzRCLGtCQUFrQixHQUFHLENBQUM7SUFDcEMsTUFBTSxDQUFDL0IsaURBQVUsQ0FBQ0Msc0JBQXNCO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xpZGl0eS10dXRvcmlhbC1zY3JhdGNoLy4vY29tcG9uZW50cy9tZXRhLW1hc2stYWNjb3VudC1wcm92aWRlci5qcz9jN2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTWV0YU1hc2tBY2NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YU1hc2tBY2NvdW50UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtldGhlcmV1bSwgc2V0RXRoZXJldW1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2Nvbm5lY3RlZEFjY291bnQsIHNldENvbm5lY3RlZEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBzZXRFdGhlcmV1bUZyb21XaW5kb3cgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gUmVsb2FkIGlmIGNoYWluIGNoYW5nZXMsIHNlZSA8aHR0cHM6Ly9kb2NzLm1ldGFtYXNrLmlvL2d1aWRlL2V0aGVyZXVtLXByb3ZpZGVyLmh0bWwjY2hhaW5jaGFuZ2VkPlxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIChfY2hhaW5JZCkgPT5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICApO1xuICAgICAgY29uc3QgY2hhaW5JZCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9jaGFpbklkXCIgfSk7XG4gICAgICBjb25zdCByaW5rZWJ5SWQgPSBcIjB4NFwiOyAvLyBTZWUgPGh0dHBzOi8vZG9jcy5tZXRhbWFzay5pby9ndWlkZS9ldGhlcmV1bS1wcm92aWRlci5odG1sI2NoYWluLWlkcz5cbiAgICAgIGlmIChjaGFpbklkID09PSByaW5rZWJ5SWQpIHtcbiAgICAgICAgc2V0RXRoZXJldW0od2luZG93LmV0aGVyZXVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHVzZSBSaW5rZWJ5IG5ldHdvcmtcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4gc2V0RXRoZXJldW1Gcm9tV2luZG93KCksIFtdKTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50cyA9IChhY2NvdW50cykgPT4ge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICBjb25zb2xlLmxvZyhcIldlIGhhdmUgYW4gYXV0aG9yaXplZCBhY2NvdW50OiBcIiwgYWNjb3VudCk7XG4gICAgICBzZXRDb25uZWN0ZWRBY2NvdW50KGFjY291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGF1dGhvcml6ZWQgYWNjb3VudHMgeWV0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDb25uZWN0ZWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xuICAgICAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpO1xuICAgIH1cbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IGdldENvbm5lY3RlZEFjY291bnQoKSk7XG5cbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFldGhlcmV1bSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkV0aGVyZXVtIG9iamVjdCBpcyByZXF1aXJlZCB0byBjb25uZWN0IGFuIGFjY291bnRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcbiAgICBoYW5kbGVBY2NvdW50cyhhY2NvdW50cyk7XG4gIH07XG5cbiAgY29uc3QgdmFsdWUgPSB7IGV0aGVyZXVtLCBjb25uZWN0ZWRBY2NvdW50LCBjb25uZWN0QWNjb3VudCB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1ldGFNYXNrQWNjb3VudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01ldGFNYXNrQWNjb3VudENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXRhTWFza0FjY291bnQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KE1ldGFNYXNrQWNjb3VudENvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJNZXRhTWFza0FjY291bnRDb250ZXh0IiwiTWV0YU1hc2tBY2NvdW50UHJvdmlkZXIiLCJjaGlsZHJlbiIsImV0aGVyZXVtIiwic2V0RXRoZXJldW0iLCJ1bmRlZmluZWQiLCJjb25uZWN0ZWRBY2NvdW50Iiwic2V0Q29ubmVjdGVkQWNjb3VudCIsInNldEV0aGVyZXVtRnJvbVdpbmRvdyIsIndpbmRvdyIsIm9uIiwiX2NoYWluSWQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNoYWluSWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwicmlua2VieUlkIiwiYWxlcnQiLCJoYW5kbGVBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwiYWNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb25uZWN0ZWRBY2NvdW50IiwiY29ubmVjdEFjY291bnQiLCJlcnJvciIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VNZXRhTWFza0FjY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meta-mask-account-provider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meta_mask_account_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta-mask-account-provider */ \"./components/meta-mask-account-provider.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_meta_mask_account_provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/_app.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/Muhammad/Projects/web3/solidity-tutorial/pages/_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNXO0FBQ3FDO1NBRXJFRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLHVFQUNISCw4RUFBdUI7Ozs7Ozs7O2lGQUNyQkQsb0RBQU87Ozs7Ozs7O2lGQUNQRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29saWRpdHktdHV0b3JpYWwtc2NyYXRjaC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgTWV0YU1hc2tBY2NvdW50UHJvdmlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWV0YS1tYXNrLWFjY291bnQtcHJvdmlkZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPE1ldGFNYXNrQWNjb3VudFByb3ZpZGVyPlxuICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L01ldGFNYXNrQWNjb3VudFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJUb2FzdGVyIiwiTWV0YU1hc2tBY2NvdW50UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();