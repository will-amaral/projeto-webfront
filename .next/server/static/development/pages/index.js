module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/CardItem.js":
/*!*************************************!*\
  !*** ./components/Home/CardItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/CardItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CardItem(props) {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeaderTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeaderIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    className: "fa fa-angle-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    hasIcons: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "medium",
    isAlign: "left",
    className: "fa fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./components/Home/Header.js":
/*!***********************************!*\
  !*** ./components/Home/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header(props) {
  const toggleMenu = () => {
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

/***/ "./components/Home/MainArea.js":
/*!*************************************!*\
  !*** ./components/Home/MainArea.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tiles */ "./components/Home/Tiles.js");
/* harmony import */ var _CardItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardItem */ "./components/Home/CardItem.js");
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/MainArea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function MainArea({
  profile: {
    name
  }
}) {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Hero"], {
    isColor: "primary",
    isSize: "small",
    isBold: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["HeroBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Ol\xE1, jovem ", name), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Tenha um \xF3timo dia!"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Tiles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Buscar usu\xE1rios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_CardItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Buscar exerc\xEDcios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/Home/Sidebar.js":
/*!************************************!*\
  !*** ./components/Home/Sidebar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Sidebar() {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    isHidden: "mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Geral"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    isActive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Dashboard"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Alunos")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Administra\xE7\xE3o"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Aulas"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Exerc\xEDcios"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Anaer\xF3bicos"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Aer\xF3biocs"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Hipertr\xF3ficos")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Calend\xE1rio"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Alertas")), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Configura\xE7\xF5es"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Meu perfil"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Minha conta"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["MenuLink"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Ajuda")));
}

/***/ }),

/***/ "./components/Home/TileItem.js":
/*!*************************************!*\
  !*** ./components/Home/TileItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/TileItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function TileItem(props) {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Tile"], {
    isParent: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Tile"], {
    title: props.title,
    subtitle: props.subtitle,
    isChild: true,
    render: props => __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, props.title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_2__["Subtitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.subtitle)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Home/Tiles.js":
/*!**********************************!*\
  !*** ./components/Home/Tiles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tiles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TileItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileItem */ "./components/Home/TileItem.js");
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/Tiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Tiles() {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Tile"], {
    isAncestor: true,
    hasTextAlign: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_TileItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "439k",
    subtitle: "Fichas Abertas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_TileItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "59k",
    subtitle: "Alunos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_TileItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "3.4k",
    subtitle: "Professores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_TileItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "19",
    subtitle: "Solicita\xE7\xF5es",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/Home/index.js":
/*!**********************************!*\
  !*** ./components/Home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "bloomer");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Home/Header.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./components/Home/Sidebar.js");
/* harmony import */ var _MainArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainArea */ "./components/Home/MainArea.js");
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/components/Home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home() {
  const {
    0: profile,
    1: setProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: 'Will'
  });
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ "./components/Home/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/will/Documents/School/Projeto-IFSP/projeto-webfront/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/will/Documents/School/Projeto-IFSP/projeto-webfront/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "bloomer":
/*!**************************!*\
  !*** external "bloomer" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bloomer");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map