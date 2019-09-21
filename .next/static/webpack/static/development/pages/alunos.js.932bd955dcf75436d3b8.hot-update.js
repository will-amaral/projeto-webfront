webpackHotUpdate("static/development/pages/alunos.js",{

/***/ "./components/ModalContainer.js":
/*!**************************************!*\
  !*** ./components/ModalContainer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/ModalContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ModalContainer(_ref) {
  var active = _ref.active,
      close = _ref.close,
      children = _ref.children,
      colored = _ref.colored,
      isCard = _ref.isCard,
      title = _ref.title;
  var style = {
    color: {
      backgroundColor: '#00d1b2'
    },
    size: {
      width: isCard ? '30vw' : '60vw'
    }
  };

  if (isCard) {
    return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      hasTextAlign: "left",
      isActive: active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalBackground"], {
      onClick: close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCard"], {
      style: style.size,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardHeader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Delete"], {
      onClick: close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, children), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardFooter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isColor: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Sim"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isColor: "danger",
      onClick: close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Cancelar"))));
  }

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isActive: active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalBackground"], {
    style: colored && style.color,
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
    style: style.size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, children)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalClose"], {
    onClick: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=alunos.js.932bd955dcf75436d3b8.hot-update.js.map