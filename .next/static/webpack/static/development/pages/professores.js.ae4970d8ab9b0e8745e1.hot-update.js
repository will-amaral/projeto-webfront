webpackHotUpdate("static/development/pages/professores.js",{

/***/ "./components/Professores/AddProfessor.js":
/*!************************************************!*\
  !*** ./components/Professores/AddProfessor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddProfessor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModalContainer */ "./components/ModalContainer.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Professores/AddProfessor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function AddProfessor(_ref) {
  var active = _ref.active,
      close = _ref.close;
  return __jsx(_ModalContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    active: active,
    close: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Formul\xE1rio para adicionar professor"));
}

/***/ }),

/***/ "./components/Professores/index.js":
/*!*****************************************!*\
  !*** ./components/Professores/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alunos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SimpleInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleInput */ "./components/SimpleInput.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ "./components/Professores/Cards.js");
/* harmony import */ var _AddProfessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddProfessor */ "./components/Professores/AddProfessor.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Professores/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Alunos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modal = _useState[0],
      setModal = _useState[1];

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_SimpleInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    hasTextAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isColor: "primary",
    onClick: function onClick() {
      return setModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    className: "fas fa-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Cadastrar Professor")))), __jsx(_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_AddProfessor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: modal,
    close: function close() {
      return setModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=professores.js.ae4970d8ab9b0e8745e1.hot-update.js.map