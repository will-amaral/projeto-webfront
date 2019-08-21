webpackHotUpdate("static/development/pages/cadastrar.js",{

/***/ "./components/Signup/Form.js":
/*!***********************************!*\
  !*** ./components/Signup/Form.js ***!
  \***********************************/
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
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Signup/Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Form(_ref) {
  var loading = _ref.loading,
      handleSignup = _ref.handleSignup;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Column"], {
    tag: "form",
    isSize: "2/3",
    onSubmit: handleSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    isHorizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["FieldBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    group: true,
    expand: true,
    icon: "user",
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    type: "text",
    value: name,
    placeholder: "Entre seu nome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "envelope",
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    type: "email",
    value: email,
    placeholder: "Entre seu e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    isHorizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["FieldBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    group: true,
    expand: true,
    icon: "lock",
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    type: "password",
    value: password,
    placeholder: "Entre sua senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "lock",
    onChange: function onChange(event) {
      return setConfirm(event.target.value);
    },
    type: "password",
    value: confirm,
    placeholder: "Confirme a sua senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, loading ? __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isLoading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isColor: "white",
    isOutlined: true,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Entrar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    isAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Voltar"))))));
}

/***/ })

})
//# sourceMappingURL=cadastrar.js.8f8387a5d0675a939f86.hot-update.js.map