/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUser = exports.FETCH_USER = undefined;

var _axios = __webpack_require__(13);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USER = exports.FETCH_USER = "fetch_user";
var fetchUser = exports.fetchUser = function fetchUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("user function getting called");
              _context.next = 3;
              return _axios2.default.get("https://react-ssr-api.herokuapp.com/users");

            case 3:
              res = _context.sent;

              dispatch({
                type: FETCH_USER,
                payload: res
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

var _UserList = __webpack_require__(18);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: "/",
  component: _Home2.default,
  exact: true
}, _extends({}, _UserList2.default, {
  path: "/users"
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _createStore = __webpack_require__(9);

var _createStore2 = _interopRequireDefault(_createStore);

var _renderer = __webpack_require__(14);

var _renderer2 = _interopRequireDefault(_renderer);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require("express");
var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)();

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(10);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _userReducer = __webpack_require__(12);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _userReducer2.default
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

// const initialState = {usersData:}
exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(16);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(19);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return "\n  <html>\n  <head>\n  </head>\n  <body>\n        <div id=\"root\">" + content + "</div>\n        <script>\n           window.initialState = " + (0, _serializeJavascript2.default)(store.getState()) + "\n        </script>\n        <script src=\"bundle.js\"></script>\n      </body>\n  </html>\n  ";
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      "home"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return console.log("clicked");
        } },
      "Click me"
    )
  );
};
exports.default = Home;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function UserList(_ref) {
  var users = _ref.users,
      fetchUser = _ref.fetchUser;

  (0, _react.useEffect)(function () {
    console.log("loading data", users);
    fetchUser();
  }, []);

  var renderUser = function renderUser(users) {
    return users.map(function (item, index) {
      return _react2.default.createElement(
        "li",
        { key: item.id },
        item.name
      );
    });
  };

  return _react2.default.createElement(
    "div",
    null,
    "UserList",
    _react2.default.createElement(
      "ul",
      null,
      renderUser(users)
    )
  );
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchUser)());
};

var mapStateToProps = function mapStateToProps(state) {
  return { users: state.users };
};

// export { loadData };

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUser: _actions.fetchUser })(UserList)
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })
/******/ ]);