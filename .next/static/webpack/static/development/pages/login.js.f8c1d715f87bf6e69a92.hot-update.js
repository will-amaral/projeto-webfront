webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/index.js":
/*!***********************************!*\
  !*** ./components/Login/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CustomNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CustomNotification */ "./components/CustomNotification.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ "./components/Login/Form.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/auth */ "./utils/auth.js");


var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Login/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var backgroundStyles = {
  background: "linear-gradient(\n        rgba(0, 158, 108, 0.5),\n        rgba(0, 0, 0, 0.5)\n      ), url(/static/img/bg.jpg) no-repeat center center fixed",
  backgroundSize: 'cover'
};
function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      message = _useState[0],
      setMessage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  function handleSubmit(_x, _x2, _x3) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, email, password) {
      var _ref, token;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              if (!(!email || !password)) {
                _context.next = 6;
                break;
              }

              setMessage('Preencha todos os campos para continuar!');
              setColor('danger');
              _context.next = 22;
              break;

            case 6:
              setLoading(true);
              _context.prev = 7;
              _context.next = 10;
              return _utils_api__WEBPACK_IMPORTED_MODULE_7__["default"].post('/login', {
                email: email,
                password: password
              });

            case 10:
              _ref = _context.sent;
              token = _ref.data.token;
              Object(_utils_auth__WEBPACK_IMPORTED_MODULE_8__["login"])(token);
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](7);
              console.log(_context.t0);
              setMessage(_context.t0.response.data.message);
              setColor('danger');

            case 21:
              setLoading(false);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 16]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  ;
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Columns"], {
    isVCentered: true,
    isGapless: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    isSize: {
      mobile: "full",
      desktop: "1/4"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    isColor: "primary",
    isFullHeight: true,
    isBold: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["HeroBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Gym App"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Fa\xE7a o login para prosseguir"), __jsx(_CustomNotification__WEBPACK_IMPORTED_MODULE_5__["default"], {
    message: message,
    color: color,
    close: function close() {
      return setMessage('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    loading: loading,
    handleSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Column"], {
    isHidden: "touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_3__["Hero"], {
    isFullHeight: true,
    style: backgroundStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=login.js.f8c1d715f87bf6e69a92.hot-update.js.map