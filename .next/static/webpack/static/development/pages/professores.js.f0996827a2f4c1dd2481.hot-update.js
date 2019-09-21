webpackHotUpdate("static/development/pages/professores.js",{

/***/ "./components/ModalContainer.js":
/*!**************************************!*\
  !*** ./components/ModalContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/ModalContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ModalContainer(_ref) {
  var active = _ref.active,
      close = _ref.close,
      children = _ref.children,
      colored = _ref.colored;
  var style = {
    color: {
      backgroundColor: '#00d1b2'
    },
    size: {
      width: '60vw'
    }
  };
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isActive: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalBackground"], {
    style: colored && style.color,
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
    style: style.size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, children)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalClose"], {
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=professores.js.f0996827a2f4c1dd2481.hot-update.js.map