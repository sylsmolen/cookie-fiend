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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browserAction/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/browserAction/browserStorage.js":
/*!*********************************************!*\
  !*** ./src/browserAction/browserStorage.js ***!
  \*********************************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
var test = "TEST";

/***/ }),

/***/ "./src/browserAction/script.js":
/*!*************************************!*\
  !*** ./src/browserAction/script.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserStorage */ "./src/browserAction/browserStorage.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

console.log("yoyo");

console.log(_browserStorage__WEBPACK_IMPORTED_MODULE_0__["test"]);
var COOKIE_FIEND = "COOKIE_FIEND";

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.reduceRight(function (res, fn) {
      return [fn.call.apply(fn, [null].concat(_toConsumableArray(res)))];
    }, args)[0];
  };
};

var composePromise = function composePromise() {
  for (var _len3 = arguments.length, functions = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    functions[_key3] = arguments[_key3];
  }

  return function (initialValue) {
    return functions.reduceRight(function (sum, fn) {
      return Promise.resolve(sum).then(fn);
    }, initialValue);
  };
};

var log = function log() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
};

var logErr = function logErr(txt) {
  return function (err) {
    return console.error(txt, err);
  };
};

var head = function head(arr) {
  return arr[0];
};

var getProp = function getProp(prop) {
  return function (obj) {
    return obj[prop];
  };
};

var thunk = function thunk(func) {
  return function (data) {
    return function () {
      return func(data);
    };
  };
};

var inspect = function inspect(value) {
  console.log(value);
  return value;
};

var unary = function unary(fn) {
  return function (arg) {
    return fn(arg);
  };
};

var parseTwice = compose(JSON.parse, JSON.parse);
/* BROWSER STORAGE */

var getStorageItemName = function getStorageItemName(domain) {
  return "".concat(COOKIE_FIEND, "::").concat(domain);
};

var getItem = function getItem(key) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(storageItem) {
        var eventConfig;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  eventConfig = parseTwice(storageItem[key]);
                  console.log("eventConfig", eventConfig);
                } catch (err) {
                  console.log("raw result:", storageItem[key]);
                  logErr("get item failed")(err);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var setSyncStorageAsync = function setSyncStorageAsync(valueThunk) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(key) {
        var value, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                value = valueThunk();
                _context2.next = 3;
                return browser.storage.sync.set(_defineProperty({}, key, value)).then(log("storage saved", "key", key, "value", value), logErr("set storage failed"));

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var getSyncStorageAsync = function getSyncStorageAsync(key) {
  return browser.storage.sync.get(key).then(getItem(key), logErr("getSyncStorage"));
};

var getTextAreaFieldValue = function getTextAreaFieldValue() {
  var textField = document.querySelector("#lsTxtArea");
  console.log(textField);

  if (textField.value) {
    return textField.value;
  }

  return "";
};

var getUserInputAndSaveToStorageAsync = setSyncStorageAsync(getTextAreaFieldValue);
var activeTabQuery = window.browser.tabs.query({
  currentWindow: true,
  active: true
});

var getActiveTabUrlAsync =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return activeTabQuery.then(head, logErr("couldn't get active tab"));

          case 2:
            result = _context3.sent;

            if (!(result && result.hasOwnProperty("url"))) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", result.url);

          case 5:
            return _context3.abrupt("return", result);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getActiveTabUrlAsync() {
    return _ref3.apply(this, arguments);
  };
}();

var createLinkElement = window.document.createElement("a");

var setAttribute = function setAttribute(attr) {
  return function (element) {
    return function (value) {
      element.setAttribute(attr, value);
      return element;
    };
  };
};

var setHref = setAttribute("href");
var setHrefOnLink = setHref(createLinkElement);
var getDomainFromUrl = compose(getProp("hostname"), setHrefOnLink);
var getStorageKeyAsync = composePromise(getStorageItemName, getDomainFromUrl, getActiveTabUrlAsync);
var setConfigForCurrentDomain = composePromise(getUserInputAndSaveToStorageAsync, getStorageKeyAsync);
var getConfigForCurrentDomain = composePromise(getSyncStorageAsync, getStorageKeyAsync);
/* EVENTS */

var setlocalStorageBtn = document.querySelector("#setLocalStorageBtn");
var getlocalStorageBtn = document.querySelector("#getLocalStorageBtn");
setlocalStorageBtn.addEventListener("click", setConfigForCurrentDomain);
getlocalStorageBtn.addEventListener("click", getConfigForCurrentDomain);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXJBY3Rpb24vYnJvd3NlclN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jyb3dzZXJBY3Rpb24vc2NyaXB0LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJjb25zb2xlIiwibG9nIiwiQ09PS0lFX0ZJRU5EIiwiY29tcG9zZSIsImZucyIsImFyZ3MiLCJyZWR1Y2VSaWdodCIsInJlcyIsImZuIiwiY2FsbCIsImNvbXBvc2VQcm9taXNlIiwiZnVuY3Rpb25zIiwiaW5pdGlhbFZhbHVlIiwic3VtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwibG9nRXJyIiwidHh0IiwiZXJyIiwiZXJyb3IiLCJoZWFkIiwiYXJyIiwiZ2V0UHJvcCIsInByb3AiLCJvYmoiLCJ0aHVuayIsImZ1bmMiLCJkYXRhIiwiaW5zcGVjdCIsInZhbHVlIiwidW5hcnkiLCJhcmciLCJwYXJzZVR3aWNlIiwiSlNPTiIsInBhcnNlIiwiZ2V0U3RvcmFnZUl0ZW1OYW1lIiwiZG9tYWluIiwiZ2V0SXRlbSIsImtleSIsInN0b3JhZ2VJdGVtIiwiZXZlbnRDb25maWciLCJzZXRTeW5jU3RvcmFnZUFzeW5jIiwidmFsdWVUaHVuayIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsInNldCIsImdldFN5bmNTdG9yYWdlQXN5bmMiLCJnZXQiLCJnZXRUZXh0QXJlYUZpZWxkVmFsdWUiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRVc2VySW5wdXRBbmRTYXZlVG9TdG9yYWdlQXN5bmMiLCJhY3RpdmVUYWJRdWVyeSIsIndpbmRvdyIsInRhYnMiLCJxdWVyeSIsImN1cnJlbnRXaW5kb3ciLCJhY3RpdmUiLCJnZXRBY3RpdmVUYWJVcmxBc3luYyIsInJlc3VsdCIsImhhc093blByb3BlcnR5IiwidXJsIiwiY3JlYXRlTGlua0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXR0ciIsImVsZW1lbnQiLCJzZXRIcmVmIiwic2V0SHJlZk9uTGluayIsImdldERvbWFpbkZyb21VcmwiLCJnZXRTdG9yYWdlS2V5QXN5bmMiLCJzZXRDb25maWdGb3JDdXJyZW50RG9tYWluIiwiZ2V0Q29uZmlnRm9yQ3VycmVudERvbWFpbiIsInNldGxvY2FsU3RvcmFnZUJ0biIsImdldGxvY2FsU3RvcmFnZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPLElBQU1BLElBQUksR0FBRyxNQUFiLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUEMsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBO0FBRUFELE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixvREFBWjtBQUVBLElBQU1HLFlBQVksR0FBRyxjQUFyQjs7QUFFQSxJQUFNQyxPQUFP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QSxTQUFJLFVBQUFDLE9BQU87QUFBQSxXQUFJLFVBQUF2QyxLQUFLLEVBQUk7QUFDL0N1QyxhQUFPLENBQUNGLFlBQVIsQ0FBcUJDLElBQXJCLEVBQTJCdEMsS0FBM0I7QUFDQSxhQUFPdUMsT0FBUDtBQUNELEtBSG1DO0FBQUEsR0FBWDtBQUFBLENBQXpCOztBQUtBLElBQU1DLE9BQU8sR0FBR0gsWUFBWSxDQUFDLE1BQUQsQ0FBNUI7QUFFQSxJQUFNSSxhQUFhLEdBQUdELE9BQU8sQ0FBQ0wsaUJBQUQsQ0FBN0I7QUFFQSxJQUFNTyxnQkFBZ0IsR0FBR3JFLE9BQU8sQ0FDOUJvQixPQUFPLENBQUMsVUFBRCxDQUR1QixFQUU5QmdELGFBRjhCLENBQWhDO0FBS0EsSUFBTUUsa0JBQWtCLEdBQUcvRCxjQUFjLENBQ3ZDMEIsa0JBRHVDLEVBRXZDb0MsZ0JBRnVDLEVBR3ZDWCxvQkFIdUMsQ0FBekM7QUFNQSxJQUFNYSx5QkFBeUIsR0FBR2hFLGNBQWMsQ0FDOUM0QyxpQ0FEOEMsRUFFOUNtQixrQkFGOEMsQ0FBaEQ7QUFJQSxJQUFNRSx5QkFBeUIsR0FBR2pFLGNBQWMsQ0FDOUNzQyxtQkFEOEMsRUFFOUN5QixrQkFGOEMsQ0FBaEQ7QUFLQTs7QUFFQSxJQUFNRyxrQkFBa0IsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBM0I7QUFDQSxJQUFNd0Isa0JBQWtCLEdBQUd6QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQTNCO0FBRUF1QixrQkFBa0IsQ0FBQ0UsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDSix5QkFBN0M7QUFDQUcsa0JBQWtCLENBQUNDLGdCQUFuQixDQUFvQyxPQUFwQyxFQUE2Q0gseUJBQTdDLEUiLCJmaWxlIjoiYnJvd3Nlcl9hY3Rpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9icm93c2VyQWN0aW9uL3NjcmlwdC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCB0ZXN0ID0gXCJURVNUXCI7XG4iLCJjb25zb2xlLmxvZyhcInlveW9cIik7XG5pbXBvcnQgeyB0ZXN0IH0gZnJvbSBcIi4vYnJvd3NlclN0b3JhZ2VcIjtcblxuY29uc29sZS5sb2codGVzdCk7XG5cbmNvbnN0IENPT0tJRV9GSUVORCA9IFwiQ09PS0lFX0ZJRU5EXCI7XG5cbmNvbnN0IGNvbXBvc2UgPSAoLi4uZm5zKSA9PiAoLi4uYXJncykgPT5cbiAgZm5zLnJlZHVjZVJpZ2h0KChyZXMsIGZuKSA9PiBbZm4uY2FsbChudWxsLCAuLi5yZXMpXSwgYXJncylbMF07XG5cbmNvbnN0IGNvbXBvc2VQcm9taXNlID0gKC4uLmZ1bmN0aW9ucykgPT4gaW5pdGlhbFZhbHVlID0+XG4gIGZ1bmN0aW9ucy5yZWR1Y2VSaWdodChcbiAgICAoc3VtLCBmbikgPT4gUHJvbWlzZS5yZXNvbHZlKHN1bSkudGhlbihmbiksXG4gICAgaW5pdGlhbFZhbHVlXG4gICk7XG5cbmNvbnN0IGxvZyA9ICguLi5hcmdzKSA9PiBjb25zb2xlLmxvZyguLi5hcmdzKTtcbmNvbnN0IGxvZ0VyciA9IHR4dCA9PiBlcnIgPT4gY29uc29sZS5lcnJvcih0eHQsIGVycik7XG5jb25zdCBoZWFkID0gYXJyID0+IGFyclswXTtcbmNvbnN0IGdldFByb3AgPSBwcm9wID0+IG9iaiA9PiBvYmpbcHJvcF07XG5jb25zdCB0aHVuayA9IGZ1bmMgPT4gZGF0YSA9PiAoKSA9PiBmdW5jKGRhdGEpO1xuXG5jb25zdCBpbnNwZWN0ID0gdmFsdWUgPT4ge1xuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IHVuYXJ5ID0gZm4gPT4gYXJnID0+IGZuKGFyZyk7XG5jb25zdCBwYXJzZVR3aWNlID0gY29tcG9zZShcbiAgSlNPTi5wYXJzZSxcbiAgSlNPTi5wYXJzZVxuKTtcblxuLyogQlJPV1NFUiBTVE9SQUdFICovXG5cbmNvbnN0IGdldFN0b3JhZ2VJdGVtTmFtZSA9IGRvbWFpbiA9PiBgJHtDT09LSUVfRklFTkR9Ojoke2RvbWFpbn1gO1xuXG5jb25zdCBnZXRJdGVtID0ga2V5ID0+IGFzeW5jIHN0b3JhZ2VJdGVtID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBldmVudENvbmZpZyA9IHBhcnNlVHdpY2Uoc3RvcmFnZUl0ZW1ba2V5XSk7XG4gICAgY29uc29sZS5sb2coXCJldmVudENvbmZpZ1wiLCBldmVudENvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwicmF3IHJlc3VsdDpcIiwgc3RvcmFnZUl0ZW1ba2V5XSk7XG4gICAgbG9nRXJyKFwiZ2V0IGl0ZW0gZmFpbGVkXCIpKGVycik7XG4gIH1cbn07XG5cbmNvbnN0IHNldFN5bmNTdG9yYWdlQXN5bmMgPSB2YWx1ZVRodW5rID0+IGFzeW5jIGtleSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gdmFsdWVUaHVuaygpO1xuICBjb25zdCByZXMgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2Uuc3luY1xuICAgIC5zZXQoe1xuICAgICAgW2tleV06IHZhbHVlXG4gICAgfSlcbiAgICAudGhlbihcbiAgICAgIGxvZyhcInN0b3JhZ2Ugc2F2ZWRcIiwgXCJrZXlcIiwga2V5LCBcInZhbHVlXCIsIHZhbHVlKSxcbiAgICAgIGxvZ0VycihcInNldCBzdG9yYWdlIGZhaWxlZFwiKVxuICAgICk7XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBnZXRTeW5jU3RvcmFnZUFzeW5jID0ga2V5ID0+XG4gIGJyb3dzZXIuc3RvcmFnZS5zeW5jLmdldChrZXkpLnRoZW4oZ2V0SXRlbShrZXkpLCBsb2dFcnIoXCJnZXRTeW5jU3RvcmFnZVwiKSk7XG5cbmNvbnN0IGdldFRleHRBcmVhRmllbGRWYWx1ZSA9ICgpID0+IHtcbiAgY29uc3QgdGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsc1R4dEFyZWFcIik7XG4gIGNvbnNvbGUubG9nKHRleHRGaWVsZCk7XG4gIGlmICh0ZXh0RmllbGQudmFsdWUpIHtcbiAgICByZXR1cm4gdGV4dEZpZWxkLnZhbHVlO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuY29uc3QgZ2V0VXNlcklucHV0QW5kU2F2ZVRvU3RvcmFnZUFzeW5jID0gc2V0U3luY1N0b3JhZ2VBc3luYyhcbiAgZ2V0VGV4dEFyZWFGaWVsZFZhbHVlXG4pO1xuXG5jb25zdCBhY3RpdmVUYWJRdWVyeSA9IHdpbmRvdy5icm93c2VyLnRhYnMucXVlcnkoe1xuICBjdXJyZW50V2luZG93OiB0cnVlLFxuICBhY3RpdmU6IHRydWVcbn0pO1xuXG5jb25zdCBnZXRBY3RpdmVUYWJVcmxBc3luYyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWN0aXZlVGFiUXVlcnkudGhlbihcbiAgICBoZWFkLFxuICAgIGxvZ0VycihcImNvdWxkbid0IGdldCBhY3RpdmUgdGFiXCIpXG4gICk7XG5cbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpIHtcbiAgICByZXR1cm4gcmVzdWx0LnVybDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY3JlYXRlTGlua0VsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbmNvbnN0IHNldEF0dHJpYnV0ZSA9IGF0dHIgPT4gZWxlbWVudCA9PiB2YWx1ZSA9PiB7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBzZXRIcmVmID0gc2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblxuY29uc3Qgc2V0SHJlZk9uTGluayA9IHNldEhyZWYoY3JlYXRlTGlua0VsZW1lbnQpO1xuXG5jb25zdCBnZXREb21haW5Gcm9tVXJsID0gY29tcG9zZShcbiAgZ2V0UHJvcChcImhvc3RuYW1lXCIpLFxuICBzZXRIcmVmT25MaW5rXG4pO1xuXG5jb25zdCBnZXRTdG9yYWdlS2V5QXN5bmMgPSBjb21wb3NlUHJvbWlzZShcbiAgZ2V0U3RvcmFnZUl0ZW1OYW1lLFxuICBnZXREb21haW5Gcm9tVXJsLFxuICBnZXRBY3RpdmVUYWJVcmxBc3luY1xuKTtcblxuY29uc3Qgc2V0Q29uZmlnRm9yQ3VycmVudERvbWFpbiA9IGNvbXBvc2VQcm9taXNlKFxuICBnZXRVc2VySW5wdXRBbmRTYXZlVG9TdG9yYWdlQXN5bmMsXG4gIGdldFN0b3JhZ2VLZXlBc3luY1xuKTtcbmNvbnN0IGdldENvbmZpZ0ZvckN1cnJlbnREb21haW4gPSBjb21wb3NlUHJvbWlzZShcbiAgZ2V0U3luY1N0b3JhZ2VBc3luYyxcbiAgZ2V0U3RvcmFnZUtleUFzeW5jXG4pO1xuXG4vKiBFVkVOVFMgKi9cblxuY29uc3Qgc2V0bG9jYWxTdG9yYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXRMb2NhbFN0b3JhZ2VCdG5cIik7XG5jb25zdCBnZXRsb2NhbFN0b3JhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dldExvY2FsU3RvcmFnZUJ0blwiKTtcblxuc2V0bG9jYWxTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRDb25maWdGb3JDdXJyZW50RG9tYWluKTtcbmdldGxvY2FsU3RvcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0Q29uZmlnRm9yQ3VycmVudERvbWFpbik7XG4iXSwic291cmNlUm9vdCI6IiJ9