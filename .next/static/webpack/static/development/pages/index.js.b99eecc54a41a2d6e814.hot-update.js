webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Dashboard/index.js":
/*!***************************************!*\
  !*** ./components/Dashboard/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tiles */ "./components/Dashboard/Tiles.js");
/* harmony import */ var _CardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardItem */ "./components/Dashboard/CardItem.js");
/* harmony import */ var _SimpleInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SimpleInput */ "./components/SimpleInput.js");
/* harmony import */ var _Activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Activity */ "./components/Dashboard/Activity.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./components/styles.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/Dashboard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Dashboard(_ref) {
  var profile = _ref.profile;
  var data = [{
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  }, {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  }, {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  }, {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  }, {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  }, {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  }, {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }];
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Hero"], {
    isColor: "primary",
    isSize: "small",
    style: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].gradient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["HeroBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Ol\xE1, ", profile.name), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Tenha um \xF3timo dia!"))), __jsx(_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_CardItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Feed de Atividades",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Activity__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_Activity__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_Activity__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_SimpleInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(_CardItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Progress\xE3o Mensal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
    width: 400,
    height: 178,
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    dataKey: "pv",
    fill: "#8884d8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    dataKey: "uv",
    fill: "#82ca9d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))))));
}

/***/ })

})
//# sourceMappingURL=index.js.b99eecc54a41a2d6e814.hot-update.js.map