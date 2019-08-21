webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Home/Header.js":
/*!***********************************!*\
  !*** ./components/Home/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header(props) {
  var toggleMenu = function toggleMenu() {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('#navMenu').classList.toggle('is-active');
  };

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    style: {
      fontWeight: 300
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Gym App"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarBurger"], {
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("span", {
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
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarMenu"], {
    id: "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarStart"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Home"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Perfil"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Alunos"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Professores")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarEnd"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["NavbarItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isOutlined: true,
    isColor: "primary",
    onClick: props.handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Sair"))))));
}

/***/ }),

/***/ "./components/Home/Navbar.js":
false,

/***/ "./components/Home/index.js":
/*!**********************************!*\
  !*** ./components/Home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Home/Header.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./components/Home/Sidebar.js");
/* harmony import */ var _MainArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainArea */ "./components/Home/MainArea.js");
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: 'Will'
  }),
      profile = _useState[0],
      setProfile = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      marginTop: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx(_MainArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    profile: profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.590f13e28fabeab5b2b2.hot-update.js.map