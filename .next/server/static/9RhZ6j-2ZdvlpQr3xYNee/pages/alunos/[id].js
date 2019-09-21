module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0M+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const styles = {
  background: {
    background: `linear-gradient(
            rgba(0, 158, 108, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(/static/img/bg.jpg) no-repeat center center fixed`,
    backgroundSize: 'cover'
  },
  logo: {
    width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30
  },
  gradient: {
    background: `linear-gradient(
            141deg, #04DB92 0%, #00D9D5 100%)`
  },
  levelBar: {
    borderRadius: '10%',
    width: '100%',
    height: '0.2rem',
    marginTop: 20
  },
  sectionTitle: {
    color: '#BBBBBB',
    fontWeight: '400',
    letterSpacing: '0.1rem'
  },
  separator: {
    width: '100%',
    height: '0.05rem',
    backgroundColor: '#BBBBBB',
    marginBottom: 10
  }
};
/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),

/***/ "0dL2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "bloomer"
var external_bloomer_ = __webpack_require__("xKMl");

// EXTERNAL MODULE: ./components/ModalContainer.js
var ModalContainer = __webpack_require__("yiya");

// CONCATENATED MODULE: ./components/ConfirmAction.js

var __jsx = external_react_default.a.createElement;

function ConfirmAction({
  active,
  close
}) {
  return __jsx(ModalContainer["a" /* default */], {
    isCard: true,
    title: "Deletar Usu\xE1rio",
    active: active,
    close: close
  }, __jsx("p", null, "Tem certeza de que deseja deletar este usu\xE1rio?"));
}
// CONCATENATED MODULE: ./components/DropOptions.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropOptions; });

var DropOptions_jsx = external_react_default.a.createElement;



function DropOptions({
  buttonName
}) {
  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])(false);
  return DropOptions_jsx(external_bloomer_["Dropdown"], {
    isHoverable: true
  }, DropOptions_jsx(external_bloomer_["DropdownTrigger"], null, DropOptions_jsx(external_bloomer_["Button"], {
    isColor: "primary"
  }, DropOptions_jsx(external_bloomer_["Icon"], {
    isSize: "small",
    className: "fa fa-user-edit"
  }), DropOptions_jsx("span", null, buttonName))), DropOptions_jsx(external_bloomer_["DropdownMenu"], null, DropOptions_jsx(external_bloomer_["DropdownContent"], null, DropOptions_jsx(external_bloomer_["DropdownItem"], {
    href: "#"
  }, DropOptions_jsx(external_bloomer_["Icon"], {
    isSize: "small",
    className: "fa fa-edit"
  }), "Editar Informa\xE7\xF5es"), DropOptions_jsx(external_bloomer_["DropdownDivider"], null), DropOptions_jsx(external_bloomer_["DropdownItem"], {
    href: "#",
    onClick: () => setModal(true)
  }, DropOptions_jsx(external_bloomer_["Icon"], {
    isSize: "small",
    className: "fa fa-trash"
  }), "Excluir Usu\xE1rio"), DropOptions_jsx(external_bloomer_["DropdownDivider"], null), DropOptions_jsx(external_bloomer_["DropdownItem"], {
    href: "#"
  }, DropOptions_jsx(external_bloomer_["Icon"], {
    isSize: "small",
    className: "fa fa-share-alt"
  }), "Compartilhar Perfil"))), DropOptions_jsx(ConfirmAction, {
    active: modal,
    close: () => setModal(false)
  }));
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EwX0");


/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "EwX0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "bloomer"
var external_bloomer_ = __webpack_require__("xKMl");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/styles.js
var styles = __webpack_require__("0M+7");

// CONCATENATED MODULE: ./components/PerfilAluno/SectionTitle.js

var __jsx = external_react_default.a.createElement;


function SectionTitle({
  children
}) {
  return __jsx(external_react_default.a.Fragment, null, __jsx(external_bloomer_["Subtitle"], {
    style: styles["a" /* default */].sectionTitle,
    isSize: 6
  }, children), __jsx("div", {
    style: styles["a" /* default */].separator
  }));
}
// CONCATENATED MODULE: ./components/PerfilAluno/Perfil.js

var Perfil_jsx = external_react_default.a.createElement;


function Perfil() {
  return Perfil_jsx(external_bloomer_["Box"], null, Perfil_jsx(external_bloomer_["Section"], null, Perfil_jsx(external_bloomer_["Media"], null, Perfil_jsx(external_bloomer_["MediaLeft"], null, Perfil_jsx(external_bloomer_["Image"], {
    isSize: "96x96",
    src: "https://i.pravatar.cc/150?img=13"
  })), Perfil_jsx(external_bloomer_["MediaContent"], null, Perfil_jsx(external_bloomer_["Title"], null, "Fulano de Tal"), Perfil_jsx(external_bloomer_["Subtitle"], {
    hasTextColor: "primary",
    isSize: 5
  }, "fulano@detal.com"), Perfil_jsx(external_bloomer_["Subtitle"], {
    hasTextColor: "success",
    isSize: 6
  }, Perfil_jsx(external_bloomer_["Icon"], {
    style: {
      marginRight: 10
    },
    isSize: "small",
    className: "fas fa-check-circle"
  }), "conta ativa")), Perfil_jsx(external_bloomer_["MediaRight"], null, Perfil_jsx(external_bloomer_["Level"], null, Perfil_jsx(external_bloomer_["LevelRight"], {
    hasTextColor: "primary"
  }, Perfil_jsx(external_bloomer_["LevelItem"], null, Perfil_jsx(external_bloomer_["Title"], {
    isSize: 4,
    hasTextColor: "primary"
  }, "R$ 80,00")), Perfil_jsx(external_bloomer_["LevelItem"], null, Perfil_jsx(external_bloomer_["Icon"], {
    isSize: "large",
    className: "fas fa-chart-pie fa-2x"
  })), Perfil_jsx(external_bloomer_["LevelItem"], null, Perfil_jsx(external_bloomer_["Icon"], {
    isSize: "large",
    className: "fas fa-envelope fa-2x"
  }))))))), Perfil_jsx(external_bloomer_["Section"], null, Perfil_jsx(external_bloomer_["Columns"], null, Perfil_jsx(external_bloomer_["Column"], null, Perfil_jsx(SectionTitle, null, "INFORMA\xC7\xD5ES PESSOAIS"), Perfil_jsx(external_bloomer_["Content"], null, Perfil_jsx("p", null, Perfil_jsx("strong", null, "Nome Completo: "), " Fulano de Tal da Silva", Perfil_jsx("br", null), Perfil_jsx("strong", null, "Idade: "), " 27 anos", Perfil_jsx("br", null), Perfil_jsx("strong", null, "Endere\xE7o: "), " Rua de Tal, n\xBA 26, Campos do Jord\xE3o-SP 12460-000"))), Perfil_jsx(external_bloomer_["Column"], null, Perfil_jsx(SectionTitle, null, "DADOS FINANCEIROS"), Perfil_jsx(external_bloomer_["Content"], null, Perfil_jsx("p", null, Perfil_jsx("strong", null, "Data de Vencimento: "), " 10", Perfil_jsx("br", null), Perfil_jsx("strong", null, "Forma de Pagamento: "), " Cart\xE3o de Cr\xE9dito"))))), Perfil_jsx(external_bloomer_["Section"], null, Perfil_jsx(external_bloomer_["Columns"], null, Perfil_jsx(external_bloomer_["Column"], null, Perfil_jsx(SectionTitle, null, "CONTATO"), Perfil_jsx(external_bloomer_["Content"], null, Perfil_jsx("p", null, Perfil_jsx("strong", null, "Telefone: "), " (12) 12345-6789"))), Perfil_jsx(external_bloomer_["Column"], null, Perfil_jsx(SectionTitle, null, "SOCIAL"), Perfil_jsx(external_bloomer_["Content"], null, Perfil_jsx("p", null, Perfil_jsx("strong", null, "facebook: "), " fb.com/fulanadetal", Perfil_jsx("br", null), Perfil_jsx("strong", null, "instagram: "), " @fulanadetal"))))));
}
// EXTERNAL MODULE: ./components/DropOptions.js + 1 modules
var DropOptions = __webpack_require__("0dL2");

// CONCATENATED MODULE: ./components/PerfilAluno/index.js

var PerfilAluno_jsx = external_react_default.a.createElement;




function PerfilAluno(props) {
  return PerfilAluno_jsx(external_bloomer_["Column"], null, PerfilAluno_jsx(external_bloomer_["Columns"], null, PerfilAluno_jsx(external_bloomer_["Column"], null, PerfilAluno_jsx(link_default.a, {
    href: "/alunos"
  }, PerfilAluno_jsx("a", null, PerfilAluno_jsx(external_bloomer_["Icon"], {
    isSize: "large",
    className: "fa fa-arrow-left"
  }), "Voltar"))), PerfilAluno_jsx(external_bloomer_["Column"], {
    hasTextAlign: "right"
  }, PerfilAluno_jsx(DropOptions["a" /* default */], {
    buttonName: "Editar Aluno"
  }))), PerfilAluno_jsx(Perfil, null));
}
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// CONCATENATED MODULE: ./pages/alunos/[id].js

var _id_jsx = external_react_default.a.createElement;




function Aluno() {
  const router = Object(router_["useRouter"])();
  const {
    id
  } = router.query;
  return _id_jsx(PerfilAluno, {
    id: id
  });
}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(auth["c" /* withAuth */])(Aluno));

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "SMlj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* unused harmony export auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withAuth; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yzAy");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function login(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('token', token, {
    expires: 1
  });
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
}
function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token');
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
}
function auth(ctx) {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(ctx);

  if (ctx.req && !token) {
    console.log('Não existem cookies');
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  }

  if (!token) {
    console.log('Não existe token');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
  }

  console.log('Cookie: ' + token);
  return token;
}
function withAuth(WrappedComponent) {
  function Wrapper(props) {
    return __jsx(WrappedComponent, props);
  }

  Wrapper.getInitialProps = async function (ctx) {
    const token = auth(ctx);
    Object(_api__WEBPACK_IMPORTED_MODULE_5__[/* setHeader */ "b"])(token);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, componentProps, {
      token
    });
  };

  return Wrapper;
}

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xKMl":
/***/ (function(module, exports) {

module.exports = require("bloomer");

/***/ }),

/***/ "yiya":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKMl");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ModalContainer({
  active,
  close,
  children,
  colored,
  isCard,
  title
}) {
  const style = {
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
      isActive: active
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalBackground"], {
      onClick: close
    }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCard"], {
      style: style.size
    }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardHeader"], null, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardTitle"], null, title), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Delete"], {
      onClick: close
    })), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardBody"], null, children), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalCardFooter"], null, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isColor: "primary"
    }, "Sim"), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isColor: "danger",
      onClick: close
    }, "Cancelar"))));
  }

  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isActive: active
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalBackground"], {
    style: colored && style.color,
    onClick: close
  }), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
    style: style.size
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Box"], null, children)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["ModalClose"], {
    onClick: close
  }));
}

/***/ }),

/***/ "yzAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setHeader; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:4000'
});
function setHeader(token) {
  api.interceptors.request.use(async function (config) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });