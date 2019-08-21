webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/Form.js":
/*!**********************************!*\
  !*** ./components/Login/Form.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormField */ "./components/FormField.js");
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Login/Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Form(_ref) {
  var loading = _ref.loading,
      handleSubmit = _ref.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  return __jsx("form", {
    onSubmit: function onSubmit(event) {
      return handleSubmit(event, email, password);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "envelope",
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    type: "email",
    value: email,
    placeholder: "Entre seu e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "lock",
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    type: "password",
    value: password,
    placeholder: "Entre sua senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, loading ? __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isLoading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isColor: "white",
    isOutlined: true,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Entrar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, " Lembrar de mim "))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    isAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cadastrar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Cadastrar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/recuperar-senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Recuperar a senha"))))));
}

/***/ })

})
//# sourceMappingURL=login.js.dd3ee4b90f6471bfc346.hot-update.js.map