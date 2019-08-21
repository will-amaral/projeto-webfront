webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/FormField.js":
/*!*********************************!*\
  !*** ./components/FormField.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/FormField.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FormField(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var group = props.group,
      expand = props.expand,
      icon = props.icon,
      onChange = props.onChange,
      type = props.type,
      value = props.value,
      placeholder = props.placeholder;
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    isGrouped: group,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    isExpanded: expand,
    hasIcons: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    isAlign: "left",
    className: "fas fa-".concat(icon),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), active && __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Help"], {
    isColor: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, message)));
}

/***/ }),

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
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "password",
    name: "password",
    placeholder: "Senha",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, loading ? __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isLoading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isFullWidth: true,
    isColor: "white",
    isOutlined: true,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Entrar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " Lembrar de mim "))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    isAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cadastrar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Cadastrar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/recuperar-senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Recuperar a senha"))))));
}

/***/ })

})
//# sourceMappingURL=login.js.01cf3325ff72b64138f6.hot-update.js.map