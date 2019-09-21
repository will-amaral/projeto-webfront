webpackHotUpdate("static/development/pages/professores/[id].js",{

/***/ "./components/PerfilProfessor/Perfil.js":
/*!**********************************************!*\
  !*** ./components/PerfilProfessor/Perfil.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perfil; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsTab */ "./components/PerfilProfessor/DetailsTab.js");
/* harmony import */ var _AlunosTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AlunosTab */ "./components/PerfilProfessor/AlunosTab.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/PerfilProfessor/Perfil.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Perfil(_ref) {
  var email = _ref.email,
      area = _ref.area,
      level = _ref.level;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      tab = _useState[0],
      setTab = _useState[1];

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    onClick: function onClick() {
      return setTab(true);
    },
    isActive: tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["TabLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Detalhes")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    onClick: function onClick() {
      return setTab(false);
    },
    isActive: !tab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["TabLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Alunos")))), tab ? __jsx(_DetailsTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    email: email,
    area: area,
    level: level,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }) : __jsx(_AlunosTab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=[id].js.e605ea506ce560ed1402.hot-update.js.map