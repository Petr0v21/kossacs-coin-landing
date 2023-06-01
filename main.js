/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/styled-components/size/index.ts":
/*!*********************************************!*\
  !*** ./app/styled-components/size/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   device: function() { return /* binding */ device; }\n/* harmony export */ });\nvar size = {\n  mobileS: \"320px\",\n  mobileM: \"375px\",\n  mobileL: \"425px\",\n  tablet: \"768px\",\n  laptop: \"1024px\",\n  laptopL: \"1440px\",\n  desktop: \"2560px\"\n};\nvar device = {\n  mobileS: \"(min-width: \".concat(size.mobileS, \")\"),\n  mobileM: \"(min-width: \".concat(size.mobileM, \")\"),\n  mobileL: \"(min-width: \".concat(size.mobileL, \")\"),\n  tablet: \"(min-width: \".concat(size.tablet, \")\"),\n  laptop: \"(min-width: \".concat(size.laptop, \")\"),\n  laptopL: \"(min-width: \".concat(size.laptopL, \")\"),\n  desktop: \"(min-width: \".concat(size.desktop, \")\"),\n  desktopL: \"(min-width: \".concat(size.desktop, \")\")\n};\n\n//# sourceURL=webpack:///./app/styled-components/size/index.ts?");

/***/ }),

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _app_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/Header */ \"./app/components/Header/index.tsx\");\n/* harmony import */ var _app_components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/Footer */ \"./app/components/Footer/index.tsx\");\n/* harmony import */ var _app_components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/Content */ \"./app/components/Content/index.tsx\");\n/* harmony import */ var _app_styled_components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/styled-components/Main */ \"./app/styled-components/Main/index.tsx\");\n/* harmony import */ var _static_images_Coin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/images/Coin.svg */ \"./static/images/Coin.svg\");\n/* harmony import */ var _static_images_Rune_final_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static/images/Rune_final.svg */ \"./static/images/Rune_final.svg\");\n/* harmony import */ var _static_images_Group_coins_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./static/images/Group_coins.svg */ \"./static/images/Group_coins.svg\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main.css */ \"./styles/main.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    openHeader = _useState2[0],\n    setOpenHeader = _useState2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_styled_components_Main__WEBPACK_IMPORTED_MODULE_4__.MainWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"rune\",\n    src: _static_images_Rune_final_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    className: \"rune\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"coin\",\n    src: _static_images_Coin_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    className: \"coin\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"group_coin\",\n    src: _static_images_Group_coins_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    className: \"coin_group \"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n    open: openHeader,\n    setOpen: setOpenHeader\n  }), !openHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_components_Content__WEBPACK_IMPORTED_MODULE_3__.Content, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_components_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_components_Header__WEBPACK_IMPORTED_MODULE_1__.HeaderForPhone, {\n    setOpen: setOpenHeader\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./App.tsx?");

/***/ }),

/***/ "./app/components/Content/index.tsx":
/*!******************************************!*\
  !*** ./app/components/Content/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _styled_components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/Content */ \"./app/styled-components/Content/index.tsx\");\n/* harmony import */ var _Roadmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Roadmap */ \"./app/components/Roadmap/index.tsx\");\n/* harmony import */ var _static_images_CossacksWithBorder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/images/CossacksWithBorder.png */ \"./static/images/CossacksWithBorder.png\");\n/* harmony import */ var _static_images_TwitterIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/images/TwitterIcon.svg */ \"./static/images/TwitterIcon.svg\");\n/* harmony import */ var _static_images_TelegramIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/images/TelegramIcon.svg */ \"./static/images/TelegramIcon.svg\");\n/* harmony import */ var _static_images_ImageT_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/images/ImageT.svg */ \"./static/images/ImageT.svg\");\n/* harmony import */ var _static_images_ImageE_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/images/ImageE.svg */ \"./static/images/ImageE.svg\");\n/* harmony import */ var _static_images_ImageO_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/ImageO.svg */ \"./static/images/ImageO.svg\");\n/* harmony import */ var _static_images_Logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../static/images/Logo.svg */ \"./static/images/Logo.svg\");\n/* harmony import */ var _static_images_Instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../static/images/Instagram.svg */ \"./static/images/Instagram.svg\");\n/* harmony import */ var _static_images_Mail_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../static/images/Mail.svg */ \"./static/images/Mail.svg\");\n/* harmony import */ var _static_images_Spotify_Original_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../static/images/Spotify - Original.svg */ \"./static/images/Spotify - Original.svg\");\n/* harmony import */ var _static_images_TikTok_Original_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../static/images/TikTok - Original.svg */ \"./static/images/TikTok - Original.svg\");\n/* harmony import */ var _static_images_YouTube_Original_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../static/images/YouTube - Original.svg */ \"./static/images/YouTube - Original.svg\");\n/* harmony import */ var _Tokenomics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Tokenomics */ \"./app/components/Tokenomics/index.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Content = function Content() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Content__WEBPACK_IMPORTED_MODULE_1__.ContentStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"preview\",\n    id: \"test1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"preview-title\"\n  }, \"Cossacs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"preview-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"preview-main-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Introducing Cossacks: Unleashing the Spirit of Ukrainian Warriors in the World of Crypto. \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null), \"Cossacks, a captivating and deflationary meme coin, has emerged as a shining star on the Ethereum blockchain. This unique digital currency pays homage to the indomitable Ukrainian warriors who valiantly defend freedom in the eastern reaches of our beloved country. Drawing inspiration from the iconic kurgan stelae, an emblematic pagan idol, Cossacks encapsulates the essence of their courageous spirit.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"logo\",\n    src: _static_images_Logo_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    className: \"logo-for-mobile\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"preview-secondery-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Embarking on an extraordinary journey, Cossacks coin draws parallels to the beloved Ukrainian cartoon, \\\"How Cossacks...\\\". In this animated masterpiece, an anthropomorphic stone majestically overlooks the hill, serving as the foundation for the valiant Cossacks. This remarkable tale has captivated the hearts of many, thus we embraced the iconic kurgan stelae, a symbol that resonates deeply with fans of the cartoon, as the crowning symbol of the Cossacks coin. Just as the stone stands tall and resolute in the animated realm, so too shall Cossacks coin embody the unwavering spirit and determination of its source of inspiration.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"preview-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Buy Cossacks\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"get-start\",\n    id: \"test2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Collect your Army\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"number-block\"\n  }, \"1\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Create a Wallet\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"number-block\"\n  }, \"2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Get Some ETH\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Have ETH in your wallet to switch to Cossacks. If you don\\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"number-block\"\n  }, \"3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Go to Uniswap\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $CSKS token address into Uniswap, select Cossacs, and confirm. When Metamask prompts you for a wallet signature, sign.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"number-block\"\n  }, \"4\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", null, \"Switch ETH for Cossacks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Switch ETH for Cossacks. We have ZERO taxes so you don\\u2019t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Roadmap__WEBPACK_IMPORTED_MODULE_2__.Roadmap, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tokenomics__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contacts\",\n    id: \"test4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Connect to community\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contacts-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"kossacs\",\n    src: _static_images_CossacksWithBorder_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    className: \"contacts-content-img\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contacts-content-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"icons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://www.dextools.io/app/en/ether/pair-explorer/0xa6e477acdeee7204ee72ef006d9fe7f080b7b4e2\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"T\",\n    src: _static_images_ImageT_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://etherscan.io/token/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"E\",\n    src: _static_images_ImageE_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"O\",\n    src: _static_images_ImageO_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://twitter.com/0xCossacks\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"twitter\",\n    src: _static_images_TwitterIcon_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://t.me/CossacksETH\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"telegram\",\n    src: _static_images_TelegramIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://instagram.com/0xCossacks\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"instagram\",\n    src: _static_images_Instagram_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://tiktok.com/@0xcossacks\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"Tiktok\",\n    src: _static_images_TikTok_Original_svg__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://youtu.be/jIMjgNDwTxg\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"YouTube\",\n    src: _static_images_YouTube_Original_svg__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://open.spotify.com/album/2VtkbKUooQ1aMoPHeVBOxM\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"Spotify\",\n    src: _static_images_Spotify_Original_svg__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"mailto:ceo@cossacks.vip\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"Mail\",\n    src: _static_images_Mail_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"disclaimer\"\n  }, \"$CSKS coin has no association with the cartoon or PC game developers. This token is simply a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.\"));\n};\n\n//# sourceURL=webpack:///./app/components/Content/index.tsx?");

/***/ }),

/***/ "./app/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Footer/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _styled_components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/Footer */ \"./app/styled-components/Footer/index.tsx\");\n\n\nvar Footer = function Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Footer__WEBPACK_IMPORTED_MODULE_1__.FooterWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"copyright\"\n  }, \"\\xA9 2023 by Cossacs. All rights reserved!\"));\n};\n\n//# sourceURL=webpack:///./app/components/Footer/index.tsx?");

/***/ }),

/***/ "./app/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   HeaderForPhone: function() { return /* binding */ HeaderForPhone; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _styled_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/Header */ \"./app/styled-components/Header/index.tsx\");\n/* harmony import */ var _static_images_Logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/images/Logo.svg */ \"./static/images/Logo.svg\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ \"../node_modules/react-scroll/modules/index.js\");\n\n\n\n\nvar Header = function Header(_ref) {\n  var open = _ref.open,\n    setOpen = _ref.setOpen;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Header__WEBPACK_IMPORTED_MODULE_1__.HeaderWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _static_images_Logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    className: \"logo\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"header-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    activeClass: \"active\",\n    to: \"test1\",\n    spy: true,\n    smooth: true,\n    offset: 50,\n    duration: 500\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Main info\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    activeClass: \"active\",\n    to: \"test2\",\n    spy: true,\n    smooth: true,\n    offset: 50,\n    duration: 500\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Collect your Army\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    activeClass: \"active\",\n    to: \"test3\",\n    spy: true,\n    smooth: true,\n    offset: 50,\n    duration: 500\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Roadmap\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    activeClass: \"active\",\n    to: \"tokenomics\",\n    spy: true,\n    smooth: true,\n    offset: 50,\n    duration: 500\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Tokenomics\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    activeClass: \"active\",\n    to: \"test4\",\n    spy: true,\n    smooth: true,\n    offset: 50,\n    duration: 500\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Community\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"header-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Buy\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Header__WEBPACK_IMPORTED_MODULE_1__.HeaderForPhoneIcon, {\n    className: \"header-icon\",\n    onClick: function onClick() {\n      return setOpen(!open);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"stroke\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"stroke\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: open ? \"stroke\" : \"stroke-open\"\n  }))));\n};\nvar HeaderForPhone = function HeaderForPhone(_ref2) {\n  var setOpen = _ref2.setOpen;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Header__WEBPACK_IMPORTED_MODULE_1__.HeaderForPhoneStyled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    onClick: function onClick() {\n      setOpen(false);\n      react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollToTop({\n        duration: 1000,\n        delay: 100,\n        smooth: true,\n        spy: true\n      });\n    }\n  }, \"Main info\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    onClick: function onClick() {\n      setOpen(false);\n      setTimeout(function () {\n        var _document$getElementB;\n        var h1 = (_document$getElementB = document.getElementById(\"test1\")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight;\n        react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollTo(h1, {\n          duration: 1000,\n          smooth: true,\n          spy: true\n        });\n      }, 100);\n    }\n  }, \"Collect your Army\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    onClick: function onClick() {\n      setOpen(false);\n      setTimeout(function () {\n        var _document$getElementB2, _document$getElementB3;\n        var h1 = (_document$getElementB2 = document.getElementById(\"test1\")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.offsetHeight;\n        var h2 = (_document$getElementB3 = document.getElementById(\"test2\")) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.offsetHeight;\n        react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollTo(h1 + h2, {\n          duration: 1000,\n          smooth: true,\n          spy: true\n        });\n      }, 100);\n    }\n  }, \"Roadmap\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    onClick: function onClick() {\n      setOpen(false);\n      setTimeout(function () {\n        var _document$getElementB4, _document$getElementB5, _document$getElementB6;\n        var h1 = (_document$getElementB4 = document.getElementById(\"test1\")) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.offsetHeight;\n        var h2 = (_document$getElementB5 = document.getElementById(\"test2\")) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.offsetHeight;\n        var h3 = (_document$getElementB6 = document.getElementById(\"test3\")) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.offsetHeight;\n        react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollTo(h1 + h2 + h3, {\n          duration: 1000,\n          smooth: true,\n          spy: true\n        });\n      }, 100);\n    }\n  }, \"Tokenomics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    onClick: function onClick() {\n      setOpen(false);\n      setTimeout(function () {\n        var _document$getElementB7, _document$getElementB8, _document$getElementB9, _document$getElementB10;\n        var h1 = (_document$getElementB7 = document.getElementById(\"test1\")) === null || _document$getElementB7 === void 0 ? void 0 : _document$getElementB7.offsetHeight;\n        var h2 = (_document$getElementB8 = document.getElementById(\"test2\")) === null || _document$getElementB8 === void 0 ? void 0 : _document$getElementB8.offsetHeight;\n        var h3 = (_document$getElementB9 = document.getElementById(\"test3\")) === null || _document$getElementB9 === void 0 ? void 0 : _document$getElementB9.offsetHeight;\n        var h4 = (_document$getElementB10 = document.getElementById(\"tokenomics\")) === null || _document$getElementB10 === void 0 ? void 0 : _document$getElementB10.offsetHeight;\n        react_scroll__WEBPACK_IMPORTED_MODULE_3__.animateScroll.scrollTo(h1 + h2 + h3 + h4, {\n          duration: 1000,\n          smooth: true,\n          spy: true\n        });\n      }, 100);\n    }\n  }, \"Community\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"header-button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://app.uniswap.org/#/tokens/ethereum/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Buy\"))));\n};\n\n//# sourceURL=webpack:///./app/components/Header/index.tsx?");

/***/ }),

/***/ "./app/components/Roadmap/index.tsx":
/*!******************************************!*\
  !*** ./app/components/Roadmap/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Roadmap: function() { return /* binding */ Roadmap; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _styled_components_Roadmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled-components/Roadmap */ \"./app/styled-components/Roadmap/index.tsx\");\n/* harmony import */ var _static_images_bycicleWithBorder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/images/bycicleWithBorder.png */ \"./static/images/bycicleWithBorder.png\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Roadmap = function Roadmap() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    animate = _useState2[0],\n    setAnimate = _useState2[1];\n  var handleScrollAnimation = function handleScrollAnimation() {\n    var element = document.getElementById(\"test3\");\n    if (element) {\n      var rect = element.getBoundingClientRect();\n      var isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;\n      setAnimate(isVisible);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    window.addEventListener(\"scroll\", handleScrollAnimation);\n    return function () {\n      window.removeEventListener(\"scroll\", handleScrollAnimation);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_components_Roadmap__WEBPACK_IMPORTED_MODULE_1__.RoadmapStyledWrapper, {\n    id: \"test3\",\n    animate: animate\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Roadmap\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"roadmap-short-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Capitalizing on the resounding success of renowned meme coins such as Pepe and Dogecoin, Cossacks aims to be a successful meme-based cryptocurrency as it combines cleverness, humor, and cultural significance to attract a large audience and become one of the top meme coins in the cryptocurrency world.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"roadmap-image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"bike\",\n    src: _static_images_bycicleWithBorder_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"steps\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"step\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"War I\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Token Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Website\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Army Base \"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"step\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"WAR II\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - CoinGecko/ Coinmarketcap Listings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Marketing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Army: 10,000+ holders\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"step\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"WAR III\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Get $CSKS Trending on Twitter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - CEX Listings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" \", \"- Pledge to donate 2T coins to Cossacks Warriors fighting for freedom in Ukraine\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \" - Army: 100,000+ holders\")))));\n};\n\n//# sourceURL=webpack:///./app/components/Roadmap/index.tsx?");

/***/ }),

/***/ "./app/components/Tokenomics/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/Tokenomics/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _static_images_tokenomics_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/images/tokenomics.png */ \"./static/images/tokenomics.png\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./app/components/Tokenomics/styles.css\");\n\n\n\nvar Tokenomics = function Tokenomics() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"tokenomics\",\n    id: \"tokenomics\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Tokenomics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"ttitle\"\n  }, \"Total supply: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"444,444,444,444,444\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"tokenomicsBody\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"tokenomicsInfo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"tokenomicsInfoContent\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"LP supply: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"422,222,222,222,222\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://etherscan.io/token/0x5bf23d44304cc645c98f15bc2696fc0eb1ccc0c7?a=0xdf203f5aa930cb1161a11a9b921d7e4559b2b4f3\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"5% allocated\")), \" \", \"for community development purposes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"LP tokens\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://etherscan.io/tx/0x233a5ee41d4771cce909dd030c8b9436f08d3efc10dc8d02c5f4f13451244a27\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"burnt\")), \" \", \", contract\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://etherscan.io/tx/0x3dd72d98c8dca1430b3a004e17f1966b4789085a22632da37d88efe84430caeb#eventlog\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"renounced\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"No taxes, GoPlus Token Security\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"spec\"\n  }, \"Rating A+++\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    alt: \"graph\",\n    src: _static_images_tokenomics_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    className: \"graph\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tokenomics);\n\n//# sourceURL=webpack:///./app/components/Tokenomics/index.tsx?");

/***/ }),

/***/ "./app/styled-components/Content/index.tsx":
/*!*************************************************!*\
  !*** ./app/styled-components/Content/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContentStyled: function() { return /* binding */ ContentStyled; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar ContentStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  .disclaimer {\\n    padding: 2em 5%;\\n    opacity: 0.8;\\n    cont-size: 24px;\\n  }\\n  h2 {\\n    text-align: center;\\n    font-size: 36px;\\n  }\\n  display: flex;\\n  flex-direction: column;\\n  .preview {\\n    display: flex;\\n    flex-direction: column;\\n    padding: 0 10% 5% 10%;\\n    // gap: 3em;\\n    .preview-title {\\n      text-align: center;\\n      font-size: 48px;\\n      font-weight: 700;\\n    }\\n    .preview-content {\\n      display: flex;\\n      flex-direction: column;\\n      align-items: center;\\n      gap: 1em;\\n      width: 100%;\\n      .preview-main-content {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n      }\\n      .logo-for-mobile {\\n        max-width: 400px;\\n        min-width: 200px;\\n      }\\n      .preview-secondery-content {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n      }\\n    }\\n    .preview-button {\\n      display: flex;\\n      justify-content: center;\\n      a {\\n        cursor: pointer;\\n        box-shadow: 10px 10px 10px #7a6700;\\n        label {\\n          font-family: Norse;\\n          font-size: 30px;\\n          font-weight: 900;\\n          color: black;\\n          cursor: pointer;\\n          letter-spacing: 0.1em;\\n        }\\n        width: 16em;\\n        text-align: center;\\n        margin-top: 2em;\\n        padding: 1em 4em;\\n        border: 2px solid rgba(0, 0, 0, 0);\\n        border-radius: 10px;\\n\\n        background: linear-gradient(\\n          91.79deg,\\n          #ffd600 31.78%,\\n          rgba(255, 255, 255, 0.88) 50.76%,\\n          #ffd600 69.22%\\n        );\\n        transition: all 0.2s linear;\\n        &:hover {\\n          opacity: 0.8;\\n        }\\n      }\\n    }\\n    label {\\n      width: 75%;\\n      font-size: 20px;\\n      font-weight: 450;\\n    }\\n    @media (max-width: 720px) {\\n      gap: 1em;\\n      .preview-content {\\n        display: flex;\\n        flex-direction: column;\\n        aligh-item: center;\\n        gap: 1em;\\n        width: 100%;\\n        .preview-main-content {\\n          width: 100%;\\n          display: flex;\\n          justify-content: center;\\n        }\\n        .preview-secondery-content {\\n          width: 100%;\\n          display: flex;\\n          justify-content: center;\\n        }\\n      }\\n      .preview-button {\\n        label {\\n          width: 8em;\\n        }\\n      }\\n      label {\\n        width: 100%;\\n      }\\n    }\\n    @media (min-width: 1100px) {\\n      .logo-for-mobile {\\n        display: none;\\n      }\\n    }\\n  }\\n  .get-start {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 2em;\\n    padding: 5%;\\n    .row-start {\\n      display: flex;\\n      align-items: center;\\n      gap: 5em;\\n      .number-block {\\n        padding: 0.5em 1em;\\n        border-radius: 10px;\\n        font-size: 42px;\\n        font-weight: 750;\\n        font-family: Norse;\\n        background: linear-gradient(\\n          91.79deg,\\n          #ffd600 31.78%,\\n          rgba(255, 255, 255, 0.88) 50.76%,\\n          #ffd600 69.22%\\n        );\\n        color: black;\\n      }\\n      .content {\\n        display: flex;\\n        flex-direction: column;\\n        h4 {\\n          font-family: Norse;\\n          color: rgb(255 214 0);\\n          font-size: 24px;\\n        }\\n        label {\\n          font-size: 24px;\\n          color: white;\\n          text-align: start;\\n          padding-bottom: 1em;\\n        }\\n      }\\n    }\\n    @media (max-width: 560px) {\\n      .row-start {\\n        gap: 2em;\\n        flex-direction: column;\\n        .content {\\n          align-items: center;\\n          label {\\n            color: white;\\n            text-align: center;\\n          }\\n        }\\n      }\\n    }\\n  }\\n  .contacts {\\n    padding: 5%;\\n    .contacts-content {\\n      display: flex;\\n      justify-content: center;\\n      gap: 4em;\\n      .contacts-content-img {\\n        // width: 50%;\\n      }\\n      .contacts-content-text {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-evenly;\\n        align-items: center;\\n        label {\\n          max-width: 40em;\\n          font-size: 24px;\\n        }\\n        .icons {\\n          display: flex;\\n          flex-direction: column;\\n          gap: 2em;\\n          div {\\n            display: flex;\\n            justify-content: center;\\n            gap: 2em;\\n          }\\n          img {\\n            width: 80px;\\n            cursor: pointer;\\n            @media (max-width: 524px) {\\n              width: 40px;\\n            }\\n          }\\n        }\\n      }\\n      @media (max-width: 1240px) {\\n        align-items: center;\\n        flex-direction: column;\\n        gap: 2em;\\n        .contacts-content-img {\\n          width: 320px;\\n          height: auto;\\n        }\\n        .contacts-content-text {\\n          gap: 3em;\\n        }\\n      }\\n    }\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./app/styled-components/Content/index.tsx?");

/***/ }),

/***/ "./app/styled-components/Footer/index.tsx":
/*!************************************************!*\
  !*** ./app/styled-components/Footer/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FooterWrapper: function() { return /* binding */ FooterWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: calc(100% - 10% - 5%);\\n  margin: 0 5%;\\n  padding: 1em 2.5%;\\n  border-top: 1px solid white;\\n  display: flex;\\n  gap: 2em;\\n  justify-content: center;\\n  align-items: center;\\n  .copyright {\\n    font-family: Norse;\\n    gont-size: 12px;\\n    color: white;\\n    opacity: 0.8;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./app/styled-components/Footer/index.tsx?");

/***/ }),

/***/ "./app/styled-components/Header/index.tsx":
/*!************************************************!*\
  !*** ./app/styled-components/Header/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderForPhoneIcon: function() { return /* binding */ HeaderForPhoneIcon; },\n/* harmony export */   HeaderForPhoneStyled: function() { return /* binding */ HeaderForPhoneStyled; },\n/* harmony export */   HeaderWrapper: function() { return /* binding */ HeaderWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../size */ \"./app/styled-components/size/index.ts\");\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: calc(100% - 10%);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 1% 5%;\\n  .logo {\\n    @media \", \" {\\n      height: 80px;\\n      weight: auto;\\n    }\\n    @media \", \" {\\n      height: 90px;\\n      weight: auto;\\n    }\\n    @media \", \" {\\n      height: 100px;\\n      weight: auto;\\n    }\\n  }\\n  .header-links {\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    gap: 2em;\\n    label {\\n      cursor: pointer;\\n      color: white;\\n      font-size: 24px;\\n      font-weight: 500;\\n      font-family: Norse;\\n      transition: all 0.2s linear;\\n      &:hover {\\n        opacity: 0.7;\\n      }\\n    }\\n    .header-button {\\n      box-shadow: 10px 10px 10px #7a6700;\\n      border-radius: 12px;\\n      a label {\\n        color: black;\\n        cursor: pointer;\\n        letter-spacing: 0.1em;\\n        padding: 0.4em 1.5em;\\n        font-family: Norse;\\n        font-size: 24px;\\n        border-radius: 12px;\\n        background: linear-gradient(\\n          91.79deg,\\n          #ffd600 31.78%,\\n          rgba(255, 255, 255, 0.88) 50.76%,\\n          #ffd600 69.22%\\n        );\\n        transition: all 0.2s linear;\\n        &:hover {\\n          opacity: 0.8;\\n        }\\n      }\\n    }\\n  }\\n\\n  @media \", \" {\\n    .header-links {\\n      gap: 0;\\n    }\\n    label {\\n      display: none;\\n    }\\n    .logo {\\n      display: block;\\n    }\\n    .header-icon {\\n      display: flex;\\n    }\\n  }\\n\\n  @media (min-width: 1100px) {\\n    label {\\n      display: block;\\n    }\\n    select {\\n      display: block;\\n    }\\n    .header-links {\\n      width: 100%;\\n      gap: 2em;\\n      justify-content: space-evenly;\\n    }\\n    .header-icon {\\n      display: none;\\n    }\\n  }\\n\"])), _size__WEBPACK_IMPORTED_MODULE_0__.device.mobileS, _size__WEBPACK_IMPORTED_MODULE_0__.device.tablet, _size__WEBPACK_IMPORTED_MODULE_0__.device.laptop, _size__WEBPACK_IMPORTED_MODULE_0__.device.mobileS);\nvar HeaderForPhoneIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 40px;\\n  height: 1em;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n  flex-direction: column;\\n  cursor: pointer;\\n  .stroke {\\n    height: 2px;\\n    width: 40px;\\n    background: white;\\n  }\\n  .stroke-open {\\n    height: 2px;\\n    width: 20px;\\n    background: white;\\n  }\\n\"])));\nvar HeaderForPhoneStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-direction: column;\\n  gap: 2em;\\n  justify-content: center;\\n  height: 80vh;\\n  label {\\n    color: white;\\n    font-size: 24px;\\n    font-weight: 500;\\n    transition: all 0.2s linear;\\n    cursor: pointer;\\n    &:hover {\\n      opacity: 0.7;\\n    }\\n  }\\n  .header-button {\\n    padding: 2em 0;\\n    a label {\\n      color: black;\\n      cursor: pointer;\\n      letter-spacing: 0.1em;\\n      padding: 0.4em 2em;\\n      font-family: Norse;\\n      font-size: 32px;\\n      border-radius: 12px;\\n      background: linear-gradient(\\n        91.79deg,\\n        #ffd600 31.78%,\\n        rgba(255, 255, 255, 0.88) 50.76%,\\n        #ffd600 69.22%\\n      );\\n      transition: all 0.2s linear;\\n      &:hover {\\n        opacity: 0.8;\\n      }\\n    }\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./app/styled-components/Header/index.tsx?");

/***/ }),

/***/ "./app/styled-components/Main/index.tsx":
/*!**********************************************!*\
  !*** ./app/styled-components/Main/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainWrapper: function() { return /* binding */ MainWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  0% {\\n    opacity: 0.2;\\n  }\\n  50% {\\n    opacity: 1;\\n  }\\n  100% {\\n    opacity: 0.2;\\n  }\\n\"])));\nvar MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  .rune {\\n    position: absolute;\\n    z-index: -1;\\n    width: auto;\\n    height: 40%;\\n    left: 5%;\\n    top: 40%;\\n    opacity: 0.5;\\n    animation: \", \" 4s ease-out;\\n    animation-iteration-count: infinite;\\n    // animation-delay: 2s;\\n  }\\n\\n  .coin {\\n    position: absolute;\\n    z-index: -1;\\n    width: auto;\\n    height: 60%;\\n    right: 0;\\n    top: 15%;\\n    opacity: 0.8;\\n  }\\n\\n  .coin_group {\\n    position: absolute;\\n    z-index: -1;\\n    width: auto;\\n    height: 250px;\\n    right: 0;\\n    top: 70%;\\n    opacity: 0.9;\\n  }\\n  @media (max-width: 1100px) {\\n    .rune {\\n      display: none;\\n    }\\n\\n    .coin {\\n      display: none;\\n    }\\n\\n    .coin_group {\\n      display: none;\\n    }\\n  }\\n\"])), fadeIn);\n\n//# sourceURL=webpack:///./app/styled-components/Main/index.tsx?");

/***/ }),

/***/ "./app/styled-components/Roadmap/index.tsx":
/*!*************************************************!*\
  !*** ./app/styled-components/Roadmap/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RoadmapStyledWrapper: function() { return /* binding */ RoadmapStyledWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  from {\\n    right: -50%;\\n  }\\n  to {\\n    right: 0;\\n  }\\n\"])));\nvar RoadmapStyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  padding: 5% 0;\\n  .roadmap-image {\\n    display: flex;\\n    justify-content: center;\\n    overflow: hidden;\\n    img {\\n      \", \"\\n      position: relative;\\n      // animation: example 2s;\\n      // animation-timing-function: linear;\\n      width: 60%;\\n      overflow: hidden;\\n      max-width: 900px;\\n      min-width: 320px;\\n    }\\n  }\\n  .roadmap-short-text {\\n    padding: 2em 0;\\n    display: flex;\\n    justify-content: center;\\n    label {\\n      padding: 0 5%;\\n      font-size: 24px;\\n      font-weight: 500;\\n      max-width: 900px;\\n    }\\n  }\\n  .steps {\\n    display: flex;\\n    justify-content: center;\\n    flex-wrap: wrap;\\n    gap: 4em;\\n    .step {\\n      background: #ffd600;\\n      border-radius: 10px;\\n      width: 200px;\\n      height: 450px;\\n      padding: 2em;\\n      h3 {\\n        margin: 0;\\n        padding: 0;\\n        font-family: Norse;\\n        font-size: 36px;\\n        font-weight: 750;\\n        color: black;\\n      }\\n      label {\\n        p {\\n          color: black;\\n        }\\n        font-size: 24px;\\n        font-weight: 500;\\n      }\\n    }\\n  }\\n\"])), function (props) {\n  return props.animate && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n          animation: \", \" 1s ease-out;\\n        \"])), fadeIn);\n});\n\n//# sourceURL=webpack:///./app/styled-components/Roadmap/index.tsx?");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./App.tsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./index.tsx?");

/***/ }),

/***/ "./static/images/Coin.svg":
/*!********************************!*\
  !*** ./static/images/Coin.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b199cdc7aaafb7c702bf162f272a416f.svg\");\n\n//# sourceURL=webpack:///./static/images/Coin.svg?");

/***/ }),

/***/ "./static/images/CossacksWithBorder.png":
/*!**********************************************!*\
  !*** ./static/images/CossacksWithBorder.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f5317d02d5b4db3cc1cc929d0f6719be.png\");\n\n//# sourceURL=webpack:///./static/images/CossacksWithBorder.png?");

/***/ }),

/***/ "./static/images/Group_coins.svg":
/*!***************************************!*\
  !*** ./static/images/Group_coins.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"29ab2650e7ac3e2293665eba8a6a75c6.svg\");\n\n//# sourceURL=webpack:///./static/images/Group_coins.svg?");

/***/ }),

/***/ "./static/images/ImageE.svg":
/*!**********************************!*\
  !*** ./static/images/ImageE.svg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9125a70582fdc5a5795226b66bbd072e.svg\");\n\n//# sourceURL=webpack:///./static/images/ImageE.svg?");

/***/ }),

/***/ "./static/images/ImageO.svg":
/*!**********************************!*\
  !*** ./static/images/ImageO.svg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7c466e3dc37fdd0d0e729f3328c1b17a.svg\");\n\n//# sourceURL=webpack:///./static/images/ImageO.svg?");

/***/ }),

/***/ "./static/images/ImageT.svg":
/*!**********************************!*\
  !*** ./static/images/ImageT.svg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9eb193fa5865be634fb1b560d12b3b5e.svg\");\n\n//# sourceURL=webpack:///./static/images/ImageT.svg?");

/***/ }),

/***/ "./static/images/Instagram.svg":
/*!*************************************!*\
  !*** ./static/images/Instagram.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0bd60e0ca0e0412172b7bd47f340a01d.svg\");\n\n//# sourceURL=webpack:///./static/images/Instagram.svg?");

/***/ }),

/***/ "./static/images/Logo.svg":
/*!********************************!*\
  !*** ./static/images/Logo.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"82950b6ca77c3f714bb76d61ea98bdd3.svg\");\n\n//# sourceURL=webpack:///./static/images/Logo.svg?");

/***/ }),

/***/ "./static/images/Mail.svg":
/*!********************************!*\
  !*** ./static/images/Mail.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d3b70093da0b330fb9820f31ae5bce3a.svg\");\n\n//# sourceURL=webpack:///./static/images/Mail.svg?");

/***/ }),

/***/ "./static/images/Rune_final.svg":
/*!**************************************!*\
  !*** ./static/images/Rune_final.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7072d1b81c524e86d1284db7595d8c0d.svg\");\n\n//# sourceURL=webpack:///./static/images/Rune_final.svg?");

/***/ }),

/***/ "./static/images/Spotify - Original.svg":
/*!**********************************************!*\
  !*** ./static/images/Spotify - Original.svg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8b46528859b9d2029c0e11c4a4bab781.svg\");\n\n//# sourceURL=webpack:///./static/images/Spotify_-_Original.svg?");

/***/ }),

/***/ "./static/images/TelegramIcon.svg":
/*!****************************************!*\
  !*** ./static/images/TelegramIcon.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"de5a37adedd816abfbf5e28534063cd6.svg\");\n\n//# sourceURL=webpack:///./static/images/TelegramIcon.svg?");

/***/ }),

/***/ "./static/images/TikTok - Original.svg":
/*!*********************************************!*\
  !*** ./static/images/TikTok - Original.svg ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ac9d2dd8da785b8c82ec21161ee8d78a.svg\");\n\n//# sourceURL=webpack:///./static/images/TikTok_-_Original.svg?");

/***/ }),

/***/ "./static/images/TwitterIcon.svg":
/*!***************************************!*\
  !*** ./static/images/TwitterIcon.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"59fac456431f43e1bc4d147ec968b9cc.svg\");\n\n//# sourceURL=webpack:///./static/images/TwitterIcon.svg?");

/***/ }),

/***/ "./static/images/YouTube - Original.svg":
/*!**********************************************!*\
  !*** ./static/images/YouTube - Original.svg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"210eca8d05459c7f41ec852993efdeea.svg\");\n\n//# sourceURL=webpack:///./static/images/YouTube_-_Original.svg?");

/***/ }),

/***/ "./static/images/bycicleWithBorder.png":
/*!*********************************************!*\
  !*** ./static/images/bycicleWithBorder.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"614299c74cf3403709d42e9b2a26a2b6.png\");\n\n//# sourceURL=webpack:///./static/images/bycicleWithBorder.png?");

/***/ }),

/***/ "./static/images/tokenomics.png":
/*!**************************************!*\
  !*** ./static/images/tokenomics.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e1ef13615be9a89733bd093ccf526a74.png\");\n\n//# sourceURL=webpack:///./static/images/tokenomics.png?");

/***/ }),

/***/ "./app/components/Tokenomics/styles.css":
/*!**********************************************!*\
  !*** ./app/components/Tokenomics/styles.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./app/components/Tokenomics/styles.css?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-scroll_modules_index_js-n-a04191"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-scroll_modules_index_js-n-a04191"], function() { return __webpack_require__("./index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;