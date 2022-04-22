"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Main = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider1 = ref[0], setprovider = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), appIsReady = ref1[0], setappIsReady = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), haveMetamask = ref2[0], sethaveMetamask = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        isConnected: false\n    }), client = ref3[0], setclient = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), customMsg = ref4[0], setcustomMsg = ref4[1];\n    var checkConnection = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_provider) {\n            var accounts;\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _provider.listAccounts();\n                    case 2:\n                        accounts = _ctx.sent;\n                        if (accounts.length > 0) {\n                            setclient({\n                                isConnected: true,\n                                address: accounts[0]\n                            });\n                        } else {\n                            setclient({\n                                isConnected: false\n                            });\n                        }\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkConnection(_provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWeb3 = function() {\n        var _ref = _asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1(provider) {\n            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        if (!provider) {\n                            _ctx1.next = 3;\n                            break;\n                        }\n                        _ctx1.next = 3;\n                        return provider.send(\"eth_requestAccounts\", []).then(_asyncToGenerator(_Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                            return _Users_Elijah_Documents_PROJECTS_next_ethers_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        checkConnection(provider);\n                                    case 1:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        })));\n                    case 3:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return function connectWeb3(provider) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var _provider = \"new ethers.providers.Web3Provider(window.ethereum)\";\n        // setprovider(_provider);\n        setappIsReady(true);\n        // const signer = _provider.getSigner();\n        if (window.ethereum) {\n            sethaveMetamask(true);\n        } else {\n            sethaveMetamask(false);\n        }\n        // // window.ethereum.on(\"accountsChanged\", async () => {\n        // //   await checkConnection();\n        // // });\n        checkConnection(_provider);\n    }, [\n        provider1,\n        setprovider\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: \"fren-nav d-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"MENU_\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"d-flex\",\n                        style: {\n                            marginLeft: \"auto\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn connect-btn\",\n                                    onClick: function() {\n                                        return connectWeb3(provider1);\n                                    },\n                                    children: client.isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: [\n                                            client.address.slice(0, 4),\n                                            \"...\",\n                                            client.address.slice(38, 42)\n                                        ]\n                                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                        children: \"Connect Wallet\"\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: \"btn tw-btn\",\n                                    children: \"TW\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"container d-flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: haveMetamask === false ? \"You have to download metamask\" : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"main-title\",\n                            children: \"Awesome Dapp 🚀\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: !haveMetamask && \"You have to download metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"main-desc\",\n                            children: [\n                                \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem suscipit perferendis tempore \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 42\n                                }, _this),\n                                \" eveniet id pariatur error deserunt placeat laudantium debitis.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            action: \"#\",\n                            className: \"mint-form\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    className: \"mint-value\",\n                                    placeholder: \"Enter message to sign\",\n                                    onChange: function(e) {\n                                        return setcustomMsg(e.target.value);\n                                    },\n                                    value: customMsg == 0 ? \"\" : customMsg\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn mint-btn\",\n                                    children: \"Sign Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Elijah/Documents/PROJECTS/next+ethers/pages/main.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"DruU0gYvRep5txsG2U0xxGktNtA=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixHQUFLLENBQUNHLElBQUksR0FBRyxRQUNiLEdBRG1CLENBQUM7O0lBQ2xCLEdBQUssQ0FBMkJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXRDSSxTQUFRLEdBQWlCSixHQUFjLEtBQTdCSyxXQUFXLEdBQUlMLEdBQWM7SUFDOUMsR0FBSyxDQUErQkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBM0NNLFVBQVUsR0FBbUJOLElBQWUsS0FBaENPLGFBQWEsR0FBSVAsSUFBZTtJQUVuRCxHQUFLLENBQW1DQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE5Q1EsWUFBWSxHQUFxQlIsSUFBYyxLQUFqQ1MsZUFBZSxHQUFJVCxJQUFjO0lBQ3RELEdBQUssQ0FBdUJBLElBRTFCLEdBRjBCQSwrQ0FBUSxDQUFDLENBQUM7UUFDcENVLFdBQVcsRUFBRSxLQUFLO0lBQ3BCLENBQUMsR0FGTUMsTUFBTSxHQUFlWCxJQUUxQixLQUZhWSxTQUFTLEdBQUlaLElBRTFCO0lBRUYsR0FBSyxDQUE2QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBckNhLFNBQVMsR0FBa0JiLElBQVcsS0FBM0JjLFlBQVksR0FBSWQsSUFBVztJQUU3QyxHQUFLLENBQUNlLGVBQWU7NkxBQUcsUUFBUSxTQUFEQyxTQUFTLEVBQUssQ0FBQztnQkFDdENDLFFBQVE7Ozs7OytCQUFTRCxTQUFTLENBQUNFLFlBQVk7O3dCQUF2Q0QsUUFBUTt3QkFDZCxFQUFFLEVBQUVBLFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUN4QlAsU0FBUyxDQUFDLENBQUM7Z0NBQ1RGLFdBQVcsRUFBRSxJQUFJO2dDQUNqQlUsT0FBTyxFQUFFSCxRQUFRLENBQUMsQ0FBQzs0QkFDckIsQ0FBQzt3QkFDSCxDQUFDLE1BQU0sQ0FBQzs0QkFDTkwsU0FBUyxDQUFDLENBQUM7Z0NBQ1RGLFdBQVcsRUFBRSxLQUFLOzRCQUNwQixDQUFDO3dCQUNILENBQUM7Ozs7OztRQUNILENBQUM7d0JBWktLLGVBQWUsQ0FBVUMsU0FBUzs7OztJQWN4QyxHQUFLLENBQUNLLFdBQVc7NkxBQUcsUUFBUSxVQUFEakIsUUFBUSxFQUFLLENBQUM7Ozs7NkJBQ25DQSxRQUFROzs7OzsrQkFDSkEsUUFBUSxDQUFDa0IsSUFBSSxDQUFDLENBQXFCLHNCQUFFLENBQUMsQ0FBQyxFQUFFQyxJQUFJLDJLQUFDLFFBQVEsV0FBSSxDQUFDOzs7O3dDQUMvRFIsZUFBZSxDQUFDWCxRQUFROzs7Ozs7d0JBQzFCLENBQUM7Ozs7OztRQUVMLENBQUM7d0JBTktpQixXQUFXLENBQVVqQixRQUFROzs7O0lBUW5DSCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ2UsU0FBUyxHQUFHLENBQW9EO1FBQ3RFLEVBQTBCO1FBQzFCVCxhQUFhLENBQUMsSUFBSTtRQUNsQixFQUF3QztRQUN4QyxFQUFFLEVBQUVpQixNQUFNLENBQUNDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCaEIsZUFBZSxDQUFDLElBQUk7UUFDdEIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsZUFBZSxDQUFDLEtBQUs7UUFDdkIsQ0FBQztRQUNELEVBQXlEO1FBQ3pELEVBQWdDO1FBQ2hDLEVBQVM7UUFDVE0sZUFBZSxDQUFDQyxTQUFTO0lBQzNCLENBQUMsRUFBRSxDQUFDWjtRQUFBQSxTQUFRO1FBQUVDLFdBQVc7SUFBQSxDQUFDO0lBRTFCLE1BQU07O3dGQUVEcUIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWlCOztnR0FDN0JDLENBQUc7OEdBQ0RDLENBQUU7c0NBQUMsQ0FBSzs7Ozs7Ozs7Ozs7Z0dBRVZELENBQUc7d0JBQUNELFNBQVMsRUFBQyxDQUFRO3dCQUFDRyxLQUFLLEVBQUUsQ0FBQzs0QkFBQ0MsVUFBVSxFQUFFLENBQU07d0JBQUMsQ0FBQzs7d0dBQ2xESCxDQUFHO3NIQUNESSxDQUFNO29DQUNMTCxTQUFTLEVBQUMsQ0FBaUI7b0NBQzNCTSxPQUFPLEVBQUUsUUFBUTt3Q0FBRlosTUFBTSxDQUFOQSxXQUFXLENBQUNqQixTQUFROzs4Q0FFbENPLE1BQU0sQ0FBQ0QsV0FBVzs7NENBRWRDLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDYyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7NENBQUUsQ0FDNUI7NENBQUN2QixNQUFNLENBQUNTLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFOzs7a0RBRzVCLENBQWM7Ozs7Ozs7Ozs7Ozt3R0FJckJOLENBQUc7c0hBQ0RJLENBQU07b0NBQUNMLFNBQVMsRUFBQyxDQUFZOzhDQUFDLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUl0Q1EsQ0FBTztnQkFBQ1IsU0FBUyxFQUFDLENBQWtCO3NHQUNsQ1MsQ0FBSTs7b0dBQ0ZDLENBQUM7c0NBQUU3QixZQUFZLEtBQUssS0FBSyxHQUFHLENBQStCLGlDQUFHLENBQUU7Ozs7OztvR0FDaEU4QixDQUFFOzRCQUFDWCxTQUFTLEVBQUMsQ0FBWTtzQ0FBQyxDQUFjOzs7Ozs7b0dBRXhDVSxDQUFDO3VDQUFHN0IsWUFBWSxJQUFJLENBQStCOzs7Ozs7b0dBRW5ENkIsQ0FBQzs0QkFBQ1YsU0FBUyxFQUFDLENBQVc7O2dDQUFDLENBRU07NEdBQUNZLENBQUU7Ozs7O2dDQUFHLENBRXJDOzs7Ozs7O29HQUVDQyxDQUFJOzRCQUFDQyxNQUFNLEVBQUMsQ0FBRzs0QkFBQ2QsU0FBUyxFQUFDLENBQVc7OzRHQUNuQ2UsQ0FBSztvQ0FDSkMsSUFBSSxFQUFDLENBQVE7b0NBQ2JoQixTQUFTLEVBQUMsQ0FBWTtvQ0FDdEJpQixXQUFXLEVBQUMsQ0FBdUI7b0NBQ25DQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDO3dDQUFLaEMsTUFBTSxDQUFOQSxZQUFZLENBQUNnQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7b0NBQzVDQSxLQUFLLEVBQUVuQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBR0EsU0FBUzs7Ozs7OzRHQUV2QzBCLENBQUU7Ozs7OzRHQUNGUCxDQUFNO29DQUFDVyxJQUFJLEVBQUMsQ0FBUTtvQ0FBQ2hCLFNBQVMsRUFBQyxDQUFjOzhDQUFDLENBRS9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVosQ0FBQztHQTFHS3hCLElBQUk7S0FBSkEsSUFBSTtBQTRHViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW4uanM/YWE3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0cHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcHBJc1JlYWR5LCBzZXRhcHBJc1JlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbaGF2ZU1ldGFtYXNrLCBzZXRoYXZlTWV0YW1hc2tdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjbGllbnQsIHNldGNsaWVudF0gPSB1c2VTdGF0ZSh7XG4gICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBbY3VzdG9tTXNnLCBzZXRjdXN0b21Nc2ddID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2hlY2tDb25uZWN0aW9uID0gYXN5bmMgKF9wcm92aWRlcikgPT4ge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgX3Byb3ZpZGVyLmxpc3RBY2NvdW50cygpO1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRjbGllbnQoe1xuICAgICAgICBpc0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgYWRkcmVzczogYWNjb3VudHNbMF0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Y2xpZW50KHtcbiAgICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RXZWIzID0gYXN5bmMgKHByb3ZpZGVyKSA9PiB7XG4gICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGNoZWNrQ29ubmVjdGlvbihwcm92aWRlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBfcHJvdmlkZXIgPSBcIm5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXCI7XG4gICAgLy8gc2V0cHJvdmlkZXIoX3Byb3ZpZGVyKTtcbiAgICBzZXRhcHBJc1JlYWR5KHRydWUpO1xuICAgIC8vIGNvbnN0IHNpZ25lciA9IF9wcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICBzZXRoYXZlTWV0YW1hc2sodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldGhhdmVNZXRhbWFzayhmYWxzZSk7XG4gICAgfVxuICAgIC8vIC8vIHdpbmRvdy5ldGhlcmV1bS5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gLy8gICBhd2FpdCBjaGVja0Nvbm5lY3Rpb24oKTtcbiAgICAvLyAvLyB9KTtcbiAgICBjaGVja0Nvbm5lY3Rpb24oX3Byb3ZpZGVyKTtcbiAgfSwgW3Byb3ZpZGVyLCBzZXRwcm92aWRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZnJlbi1uYXYgZC1mbGV4XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzPk1FTlVfPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbm5lY3QtYnRuXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdlYjMocHJvdmlkZXIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2xpZW50LmlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMCwgNCl9Li4uXG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LmFkZHJlc3Muc2xpY2UoMzgsIDQyKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PkNvbm5lY3QgV2FsbGV0PC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gdHctYnRuXCI+VFc8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPHA+e2hhdmVNZXRhbWFzayA9PT0gZmFsc2UgPyBcIllvdSBoYXZlIHRvIGRvd25sb2FkIG1ldGFtYXNrXCIgOiBcIlwifTwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPkF3ZXNvbWUgRGFwcCDwn5qAPC9oMT5cblxuICAgICAgICAgIDxwPnshaGF2ZU1ldGFtYXNrICYmIFwiWW91IGhhdmUgdG8gZG93bmxvYWQgbWV0YW1hc2tcIn08L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLWRlc2NcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBdXRlbVxuICAgICAgICAgICAgc3VzY2lwaXQgcGVyZmVyZW5kaXMgdGVtcG9yZSA8YnIgLz4gZXZlbmlldCBpZCBwYXJpYXR1ciBlcnJvclxuICAgICAgICAgICAgZGVzZXJ1bnQgcGxhY2VhdCBsYXVkYW50aXVtIGRlYml0aXMuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzTmFtZT1cIm1pbnQtZm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW50LXZhbHVlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlIHRvIHNpZ25cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGN1c3RvbU1zZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21Nc2cgPT0gMCA/IFwiXCIgOiBjdXN0b21Nc2d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbWludC1idG5cIj5cbiAgICAgICAgICAgICAgU2lnbiBNZXNzYWdlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJNYWluIiwicHJvdmlkZXIiLCJzZXRwcm92aWRlciIsImFwcElzUmVhZHkiLCJzZXRhcHBJc1JlYWR5IiwiaGF2ZU1ldGFtYXNrIiwic2V0aGF2ZU1ldGFtYXNrIiwiaXNDb25uZWN0ZWQiLCJjbGllbnQiLCJzZXRjbGllbnQiLCJjdXN0b21Nc2ciLCJzZXRjdXN0b21Nc2ciLCJjaGVja0Nvbm5lY3Rpb24iLCJfcHJvdmlkZXIiLCJhY2NvdW50cyIsImxpc3RBY2NvdW50cyIsImxlbmd0aCIsImFkZHJlc3MiLCJjb25uZWN0V2ViMyIsInNlbmQiLCJ0aGVuIiwid2luZG93IiwiZXRoZXJldW0iLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsInN0eWxlIiwibWFyZ2luTGVmdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzbGljZSIsInNlY3Rpb24iLCJtYWluIiwicCIsImgxIiwiYnIiLCJmb3JtIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main.js\n");

/***/ })

});