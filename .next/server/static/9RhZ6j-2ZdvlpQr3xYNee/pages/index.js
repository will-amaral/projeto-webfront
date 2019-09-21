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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "AuZQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKMl");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SimpleInput() {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Field"], null, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Control"], {
    hasIcons: true
  }, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Input"], null), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    isSize: "medium",
    isAlign: "left",
    className: "fa fa-search"
  })));
}

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "bloomer"
var external_bloomer_ = __webpack_require__("xKMl");

// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__("Uq7R");

// CONCATENATED MODULE: ./components/Dashboard/TileItem.js

var __jsx = external_react_default.a.createElement;

function TileItem(props) {
  return __jsx(external_bloomer_["Tile"], {
    isParent: true
  }, __jsx(external_bloomer_["Tile"], {
    title: props.title,
    subtitle: props.subtitle,
    isChild: true,
    render: props => __jsx(external_bloomer_["Box"], props, __jsx(external_bloomer_["Title"], null, props.title), __jsx(external_bloomer_["Subtitle"], null, props.subtitle))
  }));
}
// CONCATENATED MODULE: ./components/Dashboard/Tiles.js

var Tiles_jsx = external_react_default.a.createElement;


function Tiles() {
  return Tiles_jsx(external_bloomer_["Tile"], {
    style: {
      marginTop: 0
    },
    isAncestor: true,
    hasTextAlign: "centered"
  }, Tiles_jsx(TileItem, {
    title: "400k",
    subtitle: "Fichas Abertas"
  }), Tiles_jsx(TileItem, {
    title: "400k",
    subtitle: "Fichas Abertas"
  }), Tiles_jsx(TileItem, {
    title: "400k",
    subtitle: "Fichas Abertas"
  }));
}
// EXTERNAL MODULE: ./components/CardContainer.js
var CardContainer = __webpack_require__("Z0lo");

// EXTERNAL MODULE: ./components/SimpleInput.js
var SimpleInput = __webpack_require__("AuZQ");

// CONCATENATED MODULE: ./components/Dashboard/Activity.js

var Activity_jsx = external_react_default.a.createElement;

function Activity() {
  return Activity_jsx(external_bloomer_["Media"], null, Activity_jsx(external_bloomer_["MediaLeft"], null, Activity_jsx(external_bloomer_["Icon"], {
    isSize: "small",
    className: "fa fa-bell"
  })), Activity_jsx(external_bloomer_["MediaContent"], null, Activity_jsx(external_bloomer_["Content"], null, Activity_jsx("p", null, Activity_jsx("small", null, "2 minutos atr\xE1s"), Activity_jsx("br", null), Activity_jsx("b", null, "Fulano de Tal"), " entrou no sistema"))));
}
// EXTERNAL MODULE: ./components/styles.js
var styles = __webpack_require__("0M+7");

// CONCATENATED MODULE: ./components/Dashboard/index.js

var Dashboard_jsx = external_react_default.a.createElement;







function Dashboard({
  profile
}) {
  const data = [{
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
  return Dashboard_jsx(external_bloomer_["Column"], null, Dashboard_jsx(external_bloomer_["Hero"], {
    isColor: "primary",
    isSize: "small",
    style: styles["a" /* default */].gradient
  }, Dashboard_jsx(external_bloomer_["HeroBody"], null, Dashboard_jsx(external_bloomer_["Title"], null, "Ol\xE1, ", profile.name), Dashboard_jsx(external_bloomer_["Subtitle"], null, "Tenha um \xF3timo dia!"))), Dashboard_jsx(Tiles, null), Dashboard_jsx(external_bloomer_["Columns"], null, Dashboard_jsx(external_bloomer_["Column"], {
    isSize: 6
  }, Dashboard_jsx(CardContainer["a" /* default */], {
    title: "Feed de Atividades"
  }, Dashboard_jsx(Activity, null), Dashboard_jsx(Activity, null), Dashboard_jsx(Activity, null))), Dashboard_jsx(external_bloomer_["Column"], {
    isSize: 6
  }, Dashboard_jsx(SimpleInput["a" /* default */], null), Dashboard_jsx(CardContainer["a" /* default */], {
    title: "Progress\xE3o Mensal"
  }, Dashboard_jsx(external_recharts_["BarChart"], {
    width: 370,
    height: 178,
    data: data
  }, Dashboard_jsx(external_recharts_["Bar"], {
    dataKey: "pv",
    fill: "#F37335"
  }))))));
}
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__("yzAy");

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__("SMlj");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;




function Index({
  user
}) {
  return pages_jsx(Dashboard, {
    profile: user
  });
}

Index.getInitialProps = async function (ctx) {
  try {
    const {
      data
    } = await api["a" /* default */].get('/user/profile');
    return {
      user: data.profile
    };
  } catch (error) {
    console.log('Erro de requisição');
  }
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(auth["c" /* withAuth */])(Index));

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

/***/ "Uq7R":
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "Z0lo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKMl");
/* harmony import */ var bloomer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bloomer__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CardContainer({
  title,
  children
}) {
  return __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Card"], null, title && __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], null, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardHeaderTitle"], null, title)), __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, __jsx(bloomer__WEBPACK_IMPORTED_MODULE_1__["Content"], null, children)));
}

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xKMl":
/***/ (function(module, exports) {

module.exports = require("bloomer");

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