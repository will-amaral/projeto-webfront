webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AppContainer/Sidebar.js":
/*!********************************************!*\
  !*** ./components/AppContainer/Sidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./components/AppContainer/routes.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/AppContainer/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Sidebar() {
  var geral = _routes__WEBPACK_IMPORTED_MODULE_4__["routes"].geral,
      admin = _routes__WEBPACK_IMPORTED_MODULE_4__["routes"].admin,
      config = _routes__WEBPACK_IMPORTED_MODULE_4__["routes"].config;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function isActive(path) {
    if (path === router.pathname) {
      return true;
    } else {
      return false;
    }
  }

  function mapRoutes(route) {
    return route.map(function (_ref) {
      var key = _ref.key,
          path = _ref.path,
          name = _ref.name;
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: path,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
        key: key,
        isActive: isActive(path),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, name));
    });
  }

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Geral"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, mapRoutes(geral)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Administra\xE7\xE3o"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, mapRoutes(admin)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Configura\xE7\xF5es"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, mapRoutes(config)));
}

/***/ })

})
//# sourceMappingURL=_app.js.558514cbc5ea14cb6f51.hot-update.js.map