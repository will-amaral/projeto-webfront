webpackHotUpdate("static/development/pages/alunos.js",{

/***/ "./components/Alunos/AddAluno.js":
/*!***************************************!*\
  !*** ./components/Alunos/AddAluno.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddAluno; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModalContainer */ "./components/ModalContainer.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Signup */ "./components/Signup/index.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Alunos/AddAluno.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddAluno(_ref) {
  var active = _ref.active,
      close = _ref.close;
  return __jsx(_ModalContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    colored: true,
    active: active,
    close: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_Signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/BoldContainer.js":
/*!*************************************!*\
  !*** ./components/BoldContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoldContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/BoldContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BoldContainer(_ref) {
  var children = _ref.children;
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Hero"], {
    isColor: "primary",
    isFullHeight: true,
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].gradient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["HeroBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children)));
}

/***/ }),

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
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormField */ "./components/FormField.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Signup/Form.js";

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

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    tag: "form",
    isSize: "2/3",
    onSubmit: handleSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    isHorizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["FieldBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    group: true,
    expand: true,
    icon: "user",
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    type: "text",
    value: name,
    placeholder: "Entre o nome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "envelope",
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    type: "email",
    value: email,
    placeholder: "Entre o e-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    isHorizontal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["FieldBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_FormField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    group: true,
    expand: true,
    icon: "lock",
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    type: "password",
    value: password,
    placeholder: "Entre a senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_FormField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: "lock",
    onChange: function onChange(event) {
      return setConfirm(event.target.value);
    },
    type: "password",
    value: confirm,
    placeholder: "Confirme a senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, loading ? __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isFullWidth: true,
    isLoading: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }) : __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isFullWidth: true,
    isColor: "white",
    isOutlined: true,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Entrar"))));
}

/***/ }),

/***/ "./components/Signup/index.js":
/*!************************************!*\
  !*** ./components/Signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BoldContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BoldContainer */ "./components/BoldContainer.js");
/* harmony import */ var _CustomNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomNotification */ "./components/CustomNotification.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ "./components/Signup/Form.js");


var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Signup/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Signup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  function handleSignup() {
    return _handleSignup.apply(this, arguments);
  }

  function _handleSignup() {
    _handleSignup = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSignup.apply(this, arguments);
  }

  return __jsx(_BoldContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Criar novo usu\xE1rio"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Entre os dados abaixo para criar uma nova conta"), __jsx(_CustomNotification__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message,
    color: color,
    close: function close() {
      return setMessage('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Columns"], {
    isCentered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    handleSignup: handleSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=alunos.js.9c172ab4207905e7dff7.hot-update.js.map