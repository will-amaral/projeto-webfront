webpackHotUpdate("static/development/pages/professores/[id].js",{

/***/ "./components/ConfirmAction.js":
/*!*************************************!*\
  !*** ./components/ConfirmAction.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalContainer */ "./components/ModalContainer.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/ConfirmAction.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ConfirmAction(_ref) {
  var active = _ref.active,
      close = _ref.close;
  return __jsx(_ModalContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isCard: true,
    title: "Deletar Usu\xE1rio",
    active: active,
    close: close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Tem certeza de que deseja deletar este usu\xE1rio?"));
}

/***/ }),

/***/ "./components/DropOptions.js":
/*!***********************************!*\
  !*** ./components/DropOptions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConfirmAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmAction */ "./components/ConfirmAction.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/DropOptions.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function DropOptions(_ref) {
  var buttonName = _ref.buttonName;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modal = _useState[0],
      setModal = _useState[1];

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    isHoverable: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownTrigger"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isColor: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    className: "fa fa-user-edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, buttonName))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    className: "fa fa-edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "Editar Informa\xE7\xF5es"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownDivider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    href: "#",
    onClick: function onClick() {
      return setModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    className: "fa fa-trash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "Excluir Usu\xE1rio"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownDivider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "small",
    className: "fa fa-share-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "Compartilhar Perfil"))), __jsx(_ConfirmAction__WEBPACK_IMPORTED_MODULE_2__["default"], {
    active: modal,
    close: function close() {
      return setModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/PerfilProfessor/DeleteProfessor.js":
false,

/***/ "./components/PerfilProfessor/DropOptions.js":
false,

/***/ "./components/PerfilProfessor/index.js":
/*!*********************************************!*\
  !*** ./components/PerfilProfessor/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfilAluno; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bloomer */ "./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Perfil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Perfil */ "./components/PerfilProfessor/Perfil.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Main */ "./components/PerfilProfessor/Main.js");
/* harmony import */ var _mockData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mockData */ "./components/mockData.js");
/* harmony import */ var _DropOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropOptions */ "./components/DropOptions.js");
var _jsxFileName = "/home/will/Documents/School/projeto-ifsp/webfront/components/PerfilProfessor/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function PerfilAluno(_ref) {
  var id = _ref.id;

  var _data$find = _mockData__WEBPACK_IMPORTED_MODULE_5__["data"].find(function (obj) {
    return obj.id.toString() === id;
  }),
      name = _data$find.name,
      area = _data$find.area,
      email = _data$find.email,
      level = _data$find.level,
      photo = _data$find.photo;

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/professores",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "large",
    className: "fa fa-arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), "Voltar"))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    hasTextAlign: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_DropOptions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    buttonName: "Editar Professor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Columns"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    isSize: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name,
    photo: photo,
    area: area,
    level: level,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Perfil__WEBPACK_IMPORTED_MODULE_3__["default"], {
    email: email,
    area: area,
    level: level,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=[id].js.ecd0556e22229fbda5cc.hot-update.js.map