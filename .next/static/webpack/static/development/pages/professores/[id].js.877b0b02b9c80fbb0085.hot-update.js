webpackHotUpdate("static/development/pages/professores/[id].js",{

/***/ "./components/PerfilProfessor/Details.js":
/*!***********************************************!*\
  !*** ./components/PerfilProfessor/Details.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./components/styles.js");

var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/PerfilProfessor/Details.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Details(_ref) {
  var name = _ref.name,
      area = _ref.area,
      level = _ref.level,
      photo = _ref.photo;
  var style = {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    border: "0.2rem solid ".concat(level.color),
    borderRadius: '50%'
  };
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    style: style,
    isSize: "128x128",
    src: photo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, name), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
    isSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, area), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
    style: {
      backgroundColor: level.color
    },
    isSize: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, level.name), __jsx("div", {
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _styles__WEBPACK_IMPORTED_MODULE_3__["default"].levelBar, {
      backgroundColor: level.color
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=[id].js.877b0b02b9c80fbb0085.hot-update.js.map