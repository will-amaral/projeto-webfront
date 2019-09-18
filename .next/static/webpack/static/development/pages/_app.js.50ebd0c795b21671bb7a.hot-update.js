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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./components/AppContainer/routes.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/AppContainer/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Sidebar() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function isActive(path) {
    if (path === router.pathname) {
      return true;
    } else {
      return false;
    }
  }

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Geral"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _routes__WEBPACK_IMPORTED_MODULE_3__["routes"].geral.map(function (link) {
    return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
      isActive: isActive(link.path),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, link.name);
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Administra\xE7\xE3o"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Financeiro"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Hist\xF3rico de Sa\xFAde"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Alertas"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Relat\xF3rios")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Configura\xE7\xF5es"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Meu perfil"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Minha conta"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Ajuda")));
}

/***/ }),

/***/ "./components/AppContainer/routes.js":
/*!*******************************************!*\
  !*** ./components/AppContainer/routes.js ***!
  \*******************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = {
  geral: [{
    path: '/',
    name: 'Dashboard',
    key: 1
  }, {
    path: '/alunos',
    name: 'Alunos',
    key: 2
  }, {
    path: '/professores',
    name: 'Professoers',
    key: 3
  }, {
    path: '/exercícios',
    name: 'Exercícios',
    key: 4
  }],
  admin: [{
    path: '/financeiro',
    name: 'Financeiro',
    key: 5
  }, {
    path: '/saude',
    name: 'Histórico de Saúde',
    key: 6
  }, {
    path: '/alertas',
    name: 'Alertas',
    key: 7
  }, {
    path: '/relatorios',
    name: 'Relatórios',
    key: 8
  }],
  config: [{
    path: '/perfil',
    name: 'Meu Perfil',
    key: 9
  }, {
    path: '/conta',
    name: 'Minha Conta',
    key: 10
  }, {
    path: '/ajuda',
    name: 'Ajuda',
    key: 11
  }]
};

/***/ })

})
//# sourceMappingURL=_app.js.50ebd0c795b21671bb7a.hot-update.js.map