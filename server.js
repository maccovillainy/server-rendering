(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _path = __webpack_require__(1);

	var _path2 = _interopRequireDefault(_path);

	var _express = __webpack_require__(2);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	var _routes = __webpack_require__(9);

	var _routes2 = _interopRequireDefault(_routes);

	var _server = __webpack_require__(5);

	var _serveStatic = __webpack_require__(6);

	var _serveStatic2 = _interopRequireDefault(_serveStatic);

	var _reactRouter = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var argv = __webpack_require__(8).argv;

	var app = (0, _express2.default)();
	// let React = require('react')
	// let renderToString = require('react-dom/server');
	// let App = require('./app.jsx')

	// app.use((req, res, next) => {
	//   res.header("Access-Control-Allow-Origin", "*");
	//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	//   res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, PUT, DELETE, POST")
	//   next();
	// })
	app.use((0, _serveStatic2.default)(_path2.default.join(process.cwd(), 'views')));
	if (argv.c) {
	  app.use(function (req, res) {
	    res.send(renderFullPage(''));
	  });
	} else {
	  app.use(handleRender);
	}

	function handleRender(req, res) {
	  var html = '';
	  if (req.url.match('favicon')) {
	    return res.send('');
	  }

	  (0, _reactRouter.match)({
	    routes: _routes2.default,
	    location: req.url
	  }, function (err, redirect, props) {
	    if (redirect) {
	      res.redirect(301, redirect.pathname + redirect.search);
	    } else if (err) {
	      console.log(err);
	      next(err);
	      // res.send(500, error.message);
	    } else if (props === null) {
	      res.status(404);
	      html = 'Not found';
	      res.send(html);
	    } else {
	      html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderFullPage(html));
	    }
	  });

	  // Send the rendered page back to the client
	}

	function renderFullPage(html) {
	  return '<!doctype html>\n<html>\n  <head>\n    <title>Redux Universal Example</title>\n  </head>\n  <body>\n    <div id="root">' + html + '</div>\n    <script src="/js/dist/bundle.js"></script>\n  </body>\n</html>';
	}

	// app.use(require('cookie-parser')(credentials.cookieSecret));

	// app.use(expressSession({
	// 	secret: credentials.cookieSecret,
	// 	resave: false,
	// 	saveUninitialized: false
	// }))
	// app.use(require('body-parser').urlencoded({ extended: true }));
	// // Установка механизма представления handlebars
	// let handlebars = require('express-handlebars')
	// 	.create({ defaultLayout:'main' });
	// app.engine('handlebars', handlebars.engine);
	// app.set('view engine', 'handlebars');


	// app.use(expressValidator());

	// app.use(express.static(__dirname + '/public'));

	app.set('port', process.env.PORT || 3000);

	// app.get('/', (req, res) =>{
	//   const html = renderToString(
	//     <App />
	//   )
	// 	res.send(html)
	// }) 

	// пользовательская страница 404
	app.use(function (req, res) {
	  res.type('text/plain');
	  res.status(404);
	  res.send(404);
	});
	// пользовательская страница 500
	app.use(function (err, req, res, next) {
	  console.error(err.stack);
	  res.type('text/plain');
	  res.status(500);
	  res.send(500);
	});

	app.listen(app.get('port'), function () {
	  console.log('Express запущен на http://localhost:' + app.get('port') + '; нажмите Ctrl+C для завершения.');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      test: 1111
	    };

	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      console.log(9990);
	      this.setState({
	        test: 2222
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Hello world! ',
	          this.state.test
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("serve-static");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("optimist");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(7);

	var _app = __webpack_require__(4);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _app2.default });

/***/ }
/******/ ])));