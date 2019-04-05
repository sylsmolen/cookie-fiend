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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScripts/cookie-fiend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contentScripts/cookie-fiend.js":
/*!********************************************!*\
  !*** ./src/contentScripts/cookie-fiend.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

console.log("COOKIE_FIEND");
var COOKIE_FIEND = "COOKIE_FIEND";
var EVENTS = {
  CLICK: "click",
  STYLE: "style"
};
var EXECUTION_MODE = {
  ONCE: "once",
  INTERVAL: "interval",
  ON_LOAD: "on load"
};
var data = [];
/* HELPERS */

var log = function log(el) {
  return console.log(el), el;
};

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

var getProp = function getProp(prop) {
  return function (obj) {
    return obj[prop];
  };
};

var map = function map(func) {
  return function (data) {
    return data.map(func);
  };
};

var mapTo = compose(map, getProp);

var forEach = function forEach(func) {
  return function (data) {
    return data.forEach(func);
  };
};

var reduceToNewArr = function reduceToNewArr(func) {
  return function (data) {
    return data.reduce(func, []);
  };
};

var timeout = function timeout(time) {
  return function (func) {
    return setTimeout(func, time);
  };
};

var interval = function interval(time) {
  return function (func) {
    return setInterval(func, time);
  };
};

var thunk = function thunk(func) {
  return function (data) {
    return function () {
      return func(data);
    };
  };
};

var runAndResolve = function runAndResolve(func) {
  return function (resolve) {
    return compose(resolve, func);
  };
};

var createTimeoutCallback = function createTimeoutCallback(time, func) {
  return compose(timeout(time), runAndResolve(func));
};

var createPromise = function createPromise(callback) {
  return new Promise(callback);
};

var createTimeoutPromise = compose(createPromise, createTimeoutCallback);

var getTimeoutPromise = function getTimeoutPromise(time) {
  return function (func) {
    return createTimeoutPromise(time, func);
  };
};

var createOnLoadCallback = function createOnLoadCallback(elementToLoad, func) {
  return function (resolve) {
    console.log("waiting for", elementToLoad);
    var intervalRef = setInterval(function () {
      if (document.querySelector(elementToLoad)) {
        console.log(elementToLoad, "found");
        clearInterval(intervalRef);
        resolve();
        func();
      }
    }, 500);
  };
};

var createOnLoadPromise = compose(createPromise, createOnLoadCallback);

var getOnLoadPromise = function getOnLoadPromise(elementToLoad) {
  return function (func) {
    return createOnLoadPromise(elementToLoad, func);
  };
};

var getTail = function getTail(arr) {
  return arr[arr.length - 1];
};

var copy = compose(JSON.parse, JSON.stringify);
/* EVENT HANDLERS */

var selectElement = function selectElement(eventObj) {
  var element = document.querySelector(eventObj.selector);

  if (element) {
    console.log("selected", eventObj.name);
    eventObj.selectedElement = element;
    return eventObj;
  }

  console.log("select failed", eventObj.name);
  return eventObj;
};

var click = function click(eventObj) {
  if (eventObj.selectedElement) {
    eventObj.selectedElement.click();
    console.log("clicked", eventObj.name);
    return eventObj;
  }

  console.log("click failed", eventObj.name);
  return eventObj;
};

var style = function style(eventObj) {
  if (eventObj.selectedElement) {
    Object.keys(eventObj.value).forEach(function (cssProp) {
      eventObj.selectedElement.style[cssProp] = eventObj.value[cssProp];
    });
    console.log("style", eventObj.name);
    return eventObj;
  }

  console.log("style failed", eventObj.name);
  return eventObj;
};

var getEventHandler = function getEventHandler(eventObj) {
  switch (eventObj.event) {
    case EVENTS.CLICK:
      {
        return click(eventObj);
      }

    case EVENTS.STYLE:
      {
        return style(eventObj);
      }

    default:
      {
        return eventObj;
      }
  }
};
/* EVENT LIST */


var sortByPosition = function sortByPosition(curr, prev) {
  return curr.position - prev.position;
};

var sortEvents = function sortEvents(data) {
  return data.sort(sortByPosition);
};

var addNewPosition = function addNewPosition(currEvent, position) {
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // const eventCopy = copy(currEvent); // copy won't work, WTF!?
  var eventCopy = JSON.parse(JSON.stringify(currEvent));

  if (position > 0) {
    eventCopy.position = +(eventCopy.position + "." + position);
    result.push(eventCopy);
    return addNewPosition(currEvent, position - 1, result);
  } else {
    result.push(eventCopy);
  }

  return result;
};

var createEventsToRepeat = function createEventsToRepeat(eventAcc, currEvent) {
  if (currEvent.repeat > 0) {
    var repeatedEvent = addNewPosition(currEvent, currEvent.repeat);
    eventAcc.push.apply(eventAcc, _toConsumableArray(repeatedEvent));
  } else {
    eventAcc.push(currEvent);
  }

  return eventAcc;
};

var addRepeatedEvents = reduceToNewArr(createEventsToRepeat);
var handleEvent = compose(getEventHandler, selectElement);
var delayedEvent = thunk(handleEvent);

var getExecutionMode = function getExecutionMode(eventObj) {
  var timeoutTrigger = compose(getTimeoutPromise(eventObj.timeout), delayedEvent);
  var intervalTrigger = compose(interval(eventObj.modeParam), delayedEvent);
  var onLoadTrigger = compose(getOnLoadPromise(eventObj.modeParam), delayedEvent);

  switch (eventObj.mode) {
    case EXECUTION_MODE.ONCE:
      {
        eventObj.trigger = thunk(timeoutTrigger)(eventObj);
        return eventObj;
      }

    case EXECUTION_MODE.INTERVAL:
      {
        eventObj.trigger = thunk(intervalTrigger)(eventObj);
        return eventObj;
      }

    case EXECUTION_MODE.ON_LOAD:
      {
        eventObj.trigger = thunk(onLoadTrigger)(eventObj);
        return eventObj;
      }

    default:
      return eventObj;
  }
};

var createEventList = map(getExecutionMode);
/* LOCAL STORAGE */

var readLocalStorageAsync = function readLocalStorageAsync() {
  return browser.storage.sync.get("COOKIE_FIEND").then(getItem, onGetStorageError);
};

var getItem = function getItem(storageItem) {
  try {
    var rawConfig = JSON.parse(storageItem[COOKIE_FIEND]);
    var eventConfig = JSON.parse(rawConfig);
    console.log("eventConfig loaded", eventConfig);
    return eventConfig;
  } catch (err) {
    console.error(err);
  }
};

var onGetStorageError = function onGetStorageError(err) {
  console.log("get sync storage error", err);
};
/* MAIN */


var getEvents = compose(createEventList, sortEvents, addRepeatedEvents);
var mapToTriggerList = mapTo("trigger");
var getEventQueue = compose(mapToTriggerList, getEvents);

var reduceAsync = function reduceAsync(eventQueue) {
  return eventQueue.reduce(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(promise, eventPromise) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return promise;

            case 2:
              _context.next = 4;
              return eventPromise();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), Promise.resolve());
};

var runEventQueue =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(data) {
    var awaitedData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return data;

          case 2:
            awaitedData = _context2.sent;
            return _context2.abrupt("return", compose(reduceAsync, getEventQueue)(awaitedData));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function runEventQueue(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var runCookieFiend = compose(runEventQueue, readLocalStorageAsync);
runCookieFiend();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHRzL2Nvb2tpZS1maWVuZC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiQ09PS0lFX0ZJRU5EIiwiRVZFTlRTIiwiQ0xJQ0siLCJTVFlMRSIsIkVYRUNVVElPTl9NT0RFIiwiT05DRSIsIklOVEVSVkFMIiwiT05fTE9BRCIsImRhdGEiLCJlbCIsImNvbXBvc2UiLCJmbnMiLCJhcmdzIiwicmVkdWNlUmlnaHQiLCJyZXMiLCJmbiIsImNhbGwiLCJnZXRQcm9wIiwicHJvcCIsIm9iaiIsIm1hcCIsImZ1bmMiLCJtYXBUbyIsImZvckVhY2giLCJyZWR1Y2VUb05ld0FyciIsInJlZHVjZSIsInRpbWVvdXQiLCJ0aW1lIiwic2V0VGltZW91dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0aHVuayIsInJ1bkFuZFJlc29sdmUiLCJyZXNvbHZlIiwiY3JlYXRlVGltZW91dENhbGxiYWNrIiwiY3JlYXRlUHJvbWlzZSIsImNhbGxiYWNrIiwiUHJvbWlzZSIsImNyZWF0ZVRpbWVvdXRQcm9taXNlIiwiZ2V0VGltZW91dFByb21pc2UiLCJjcmVhdGVPbkxvYWRDYWxsYmFjayIsImVsZW1lbnRUb0xvYWQiLCJpbnRlcnZhbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVPbkxvYWRQcm9taXNlIiwiZ2V0T25Mb2FkUHJvbWlzZSIsImdldFRhaWwiLCJhcnIiLCJsZW5ndGgiLCJjb3B5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2VsZWN0RWxlbWVudCIsImV2ZW50T2JqIiwiZWxlbWVudCIsInNlbGVjdG9yIiwibmFtZSIsInNlbGVjdGVkRWxlbWVudCIsImNsaWNrIiwic3R5bGUiLCJPYmplY3QiLCJrZXlzIiwidmFsdWUiLCJjc3NQcm9wIiwiZ2V0RXZlbnRIYW5kbGVyIiwiZXZlbnQiLCJzb3J0QnlQb3NpdGlvbiIsImN1cnIiLCJwcmV2IiwicG9zaXRpb24iLCJzb3J0RXZlbnRzIiwic29ydCIsImFkZE5ld1Bvc2l0aW9uIiwiY3VyckV2ZW50IiwicmVzdWx0IiwiZXZlbnRDb3B5IiwicHVzaCIsImNyZWF0ZUV2ZW50c1RvUmVwZWF0IiwiZXZlbnRBY2MiLCJyZXBlYXQiLCJyZXBlYXRlZEV2ZW50IiwiYWRkUmVwZWF0ZWRFdmVudHMiLCJoYW5kbGVFdmVudCIsImRlbGF5ZWRFdmVudCIsImdldEV4ZWN1dGlvbk1vZGUiLCJ0aW1lb3V0VHJpZ2dlciIsImludGVydmFsVHJpZ2dlciIsIm1vZGVQYXJhbSIsIm9uTG9hZFRyaWdnZXIiLCJtb2RlIiwidHJpZ2dlciIsImNyZWF0ZUV2ZW50TGlzdCIsInJlYWRMb2NhbFN0b3JhZ2VBc3luYyIsImJyb3dzZXIiLCJzdG9yYWdlIiwic3luYyIsImdldCIsInRoZW4iLCJnZXRJdGVtIiwib25HZXRTdG9yYWdlRXJyb3IiLCJzdG9yYWdlSXRlbSIsInJhd0NvbmZpZyIsImV2ZW50Q29uZmlnIiwiZXJyIiwiZXJyb3IiLCJnZXRFdmVudHMiLCJtYXBUb1RyaWdnZXJMaXN0IiwiZ2V0RXZlbnRRdWV1ZSIsInJlZHVjZUFzeW5jIiwiZXZlbnRRdWV1ZSIsInByb21pc2UiLCJldmVudFByb21pc2UiLCJydW5FdmVudFF1ZXVlIiwiYXdhaXRlZERhdGEiLCJydW5Db29raWVGaWVuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFF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aXB0cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbnRlbnRTY3JpcHRzL2Nvb2tpZS1maWVuZC5qc1wiKTtcbiIsImNvbnNvbGUubG9nKFwiQ09PS0lFX0ZJRU5EXCIpO1xuXG5jb25zdCBDT09LSUVfRklFTkQgPSBcIkNPT0tJRV9GSUVORFwiO1xuXG5jb25zdCBFVkVOVFMgPSB7XG4gIENMSUNLOiBcImNsaWNrXCIsXG4gIFNUWUxFOiBcInN0eWxlXCJcbn07XG5cbmNvbnN0IEVYRUNVVElPTl9NT0RFID0ge1xuICBPTkNFOiBcIm9uY2VcIixcbiAgSU5URVJWQUw6IFwiaW50ZXJ2YWxcIixcbiAgT05fTE9BRDogXCJvbiBsb2FkXCJcbn07XG5cbmNvbnN0IGRhdGEgPSBbXTtcblxuLyogSEVMUEVSUyAqL1xuXG5jb25zdCBsb2cgPSBlbCA9PiAoY29uc29sZS5sb2coZWwpLCBlbCk7XG5jb25zdCBjb21wb3NlID0gKC4uLmZucykgPT4gKC4uLmFyZ3MpID0+XG4gIGZucy5yZWR1Y2VSaWdodCgocmVzLCBmbikgPT4gW2ZuLmNhbGwobnVsbCwgLi4ucmVzKV0sIGFyZ3MpWzBdO1xuXG5jb25zdCBnZXRQcm9wID0gcHJvcCA9PiBvYmogPT4gb2JqW3Byb3BdO1xuY29uc3QgbWFwID0gZnVuYyA9PiBkYXRhID0+IGRhdGEubWFwKGZ1bmMpO1xuY29uc3QgbWFwVG8gPSBjb21wb3NlKFxuICBtYXAsXG4gIGdldFByb3Bcbik7XG5jb25zdCBmb3JFYWNoID0gZnVuYyA9PiBkYXRhID0+IGRhdGEuZm9yRWFjaChmdW5jKTtcbmNvbnN0IHJlZHVjZVRvTmV3QXJyID0gZnVuYyA9PiBkYXRhID0+IGRhdGEucmVkdWNlKGZ1bmMsIFtdKTtcbmNvbnN0IHRpbWVvdXQgPSB0aW1lID0+IGZ1bmMgPT4gc2V0VGltZW91dChmdW5jLCB0aW1lKTtcbmNvbnN0IGludGVydmFsID0gdGltZSA9PiBmdW5jID0+IHNldEludGVydmFsKGZ1bmMsIHRpbWUpO1xuY29uc3QgdGh1bmsgPSBmdW5jID0+IGRhdGEgPT4gKCkgPT4gZnVuYyhkYXRhKTtcblxuY29uc3QgcnVuQW5kUmVzb2x2ZSA9IGZ1bmMgPT4gcmVzb2x2ZSA9PlxuICBjb21wb3NlKFxuICAgIHJlc29sdmUsXG4gICAgZnVuY1xuICApO1xuXG5jb25zdCBjcmVhdGVUaW1lb3V0Q2FsbGJhY2sgPSAodGltZSwgZnVuYykgPT5cbiAgY29tcG9zZShcbiAgICB0aW1lb3V0KHRpbWUpLFxuICAgIHJ1bkFuZFJlc29sdmUoZnVuYylcbiAgKTtcblxuY29uc3QgY3JlYXRlUHJvbWlzZSA9IGNhbGxiYWNrID0+IG5ldyBQcm9taXNlKGNhbGxiYWNrKTtcblxuY29uc3QgY3JlYXRlVGltZW91dFByb21pc2UgPSBjb21wb3NlKFxuICBjcmVhdGVQcm9taXNlLFxuICBjcmVhdGVUaW1lb3V0Q2FsbGJhY2tcbik7XG5cbmNvbnN0IGdldFRpbWVvdXRQcm9taXNlID0gdGltZSA9PiBmdW5jID0+IGNyZWF0ZVRpbWVvdXRQcm9taXNlKHRpbWUsIGZ1bmMpO1xuXG5jb25zdCBjcmVhdGVPbkxvYWRDYWxsYmFjayA9IChlbGVtZW50VG9Mb2FkLCBmdW5jKSA9PiByZXNvbHZlID0+IHtcbiAgY29uc29sZS5sb2coXCJ3YWl0aW5nIGZvclwiLCBlbGVtZW50VG9Mb2FkKTtcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudFRvTG9hZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUb0xvYWQsIFwiZm91bmRcIik7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIGZ1bmMoKTtcbiAgICB9XG4gIH0sIDUwMCk7XG59O1xuXG5jb25zdCBjcmVhdGVPbkxvYWRQcm9taXNlID0gY29tcG9zZShcbiAgY3JlYXRlUHJvbWlzZSxcbiAgY3JlYXRlT25Mb2FkQ2FsbGJhY2tcbik7XG5cbmNvbnN0IGdldE9uTG9hZFByb21pc2UgPSBlbGVtZW50VG9Mb2FkID0+IGZ1bmMgPT5cbiAgY3JlYXRlT25Mb2FkUHJvbWlzZShlbGVtZW50VG9Mb2FkLCBmdW5jKTtcblxuY29uc3QgZ2V0VGFpbCA9IGFyciA9PiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuY29uc3QgY29weSA9IGNvbXBvc2UoXG4gIEpTT04ucGFyc2UsXG4gIEpTT04uc3RyaW5naWZ5XG4pO1xuXG4vKiBFVkVOVCBIQU5ETEVSUyAqL1xuXG5jb25zdCBzZWxlY3RFbGVtZW50ID0gZXZlbnRPYmogPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihldmVudE9iai5zZWxlY3Rvcik7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFwiLCBldmVudE9iai5uYW1lKTtcbiAgICBldmVudE9iai5zZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHJldHVybiBldmVudE9iajtcbiAgfVxuICBjb25zb2xlLmxvZyhcInNlbGVjdCBmYWlsZWRcIiwgZXZlbnRPYmoubmFtZSk7XG4gIHJldHVybiBldmVudE9iajtcbn07XG5cbmNvbnN0IGNsaWNrID0gZXZlbnRPYmogPT4ge1xuICBpZiAoZXZlbnRPYmouc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgZXZlbnRPYmouc2VsZWN0ZWRFbGVtZW50LmNsaWNrKCk7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIsIGV2ZW50T2JqLm5hbWUpO1xuICAgIHJldHVybiBldmVudE9iajtcbiAgfVxuICBjb25zb2xlLmxvZyhcImNsaWNrIGZhaWxlZFwiLCBldmVudE9iai5uYW1lKTtcbiAgcmV0dXJuIGV2ZW50T2JqO1xufTtcblxuY29uc3Qgc3R5bGUgPSBldmVudE9iaiA9PiB7XG4gIGlmIChldmVudE9iai5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICBPYmplY3Qua2V5cyhldmVudE9iai52YWx1ZSkuZm9yRWFjaChjc3NQcm9wID0+IHtcbiAgICAgIGV2ZW50T2JqLnNlbGVjdGVkRWxlbWVudC5zdHlsZVtjc3NQcm9wXSA9IGV2ZW50T2JqLnZhbHVlW2Nzc1Byb3BdO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJzdHlsZVwiLCBldmVudE9iai5uYW1lKTtcbiAgICByZXR1cm4gZXZlbnRPYmo7XG4gIH1cbiAgY29uc29sZS5sb2coXCJzdHlsZSBmYWlsZWRcIiwgZXZlbnRPYmoubmFtZSk7XG4gIHJldHVybiBldmVudE9iajtcbn07XG5cbmNvbnN0IGdldEV2ZW50SGFuZGxlciA9IGV2ZW50T2JqID0+IHtcbiAgc3dpdGNoIChldmVudE9iai5ldmVudCkge1xuICAgIGNhc2UgRVZFTlRTLkNMSUNLOiB7XG4gICAgICByZXR1cm4gY2xpY2soZXZlbnRPYmopO1xuICAgIH1cblxuICAgIGNhc2UgRVZFTlRTLlNUWUxFOiB7XG4gICAgICByZXR1cm4gc3R5bGUoZXZlbnRPYmopO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBldmVudE9iajtcbiAgICB9XG4gIH1cbn07XG5cbi8qIEVWRU5UIExJU1QgKi9cblxuY29uc3Qgc29ydEJ5UG9zaXRpb24gPSAoY3VyciwgcHJldikgPT4gY3Vyci5wb3NpdGlvbiAtIHByZXYucG9zaXRpb247XG5jb25zdCBzb3J0RXZlbnRzID0gZGF0YSA9PiBkYXRhLnNvcnQoc29ydEJ5UG9zaXRpb24pO1xuXG5jb25zdCBhZGROZXdQb3NpdGlvbiA9IChjdXJyRXZlbnQsIHBvc2l0aW9uLCByZXN1bHQgPSBbXSkgPT4ge1xuICAvLyBjb25zdCBldmVudENvcHkgPSBjb3B5KGN1cnJFdmVudCk7IC8vIGNvcHkgd29uJ3Qgd29yaywgV1RGIT9cbiAgY29uc3QgZXZlbnRDb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjdXJyRXZlbnQpKTtcblxuICBpZiAocG9zaXRpb24gPiAwKSB7XG4gICAgZXZlbnRDb3B5LnBvc2l0aW9uID0gKyhldmVudENvcHkucG9zaXRpb24gKyBcIi5cIiArIHBvc2l0aW9uKTtcbiAgICByZXN1bHQucHVzaChldmVudENvcHkpO1xuICAgIHJldHVybiBhZGROZXdQb3NpdGlvbihjdXJyRXZlbnQsIHBvc2l0aW9uIC0gMSwgcmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQucHVzaChldmVudENvcHkpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUV2ZW50c1RvUmVwZWF0ID0gKGV2ZW50QWNjLCBjdXJyRXZlbnQpID0+IHtcbiAgaWYgKGN1cnJFdmVudC5yZXBlYXQgPiAwKSB7XG4gICAgY29uc3QgcmVwZWF0ZWRFdmVudCA9IGFkZE5ld1Bvc2l0aW9uKGN1cnJFdmVudCwgY3VyckV2ZW50LnJlcGVhdCk7XG4gICAgZXZlbnRBY2MucHVzaCguLi5yZXBlYXRlZEV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBldmVudEFjYy5wdXNoKGN1cnJFdmVudCk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRBY2M7XG59O1xuXG5jb25zdCBhZGRSZXBlYXRlZEV2ZW50cyA9IHJlZHVjZVRvTmV3QXJyKGNyZWF0ZUV2ZW50c1RvUmVwZWF0KTtcblxuY29uc3QgaGFuZGxlRXZlbnQgPSBjb21wb3NlKFxuICBnZXRFdmVudEhhbmRsZXIsXG4gIHNlbGVjdEVsZW1lbnRcbik7XG5cbmNvbnN0IGRlbGF5ZWRFdmVudCA9IHRodW5rKGhhbmRsZUV2ZW50KTtcblxuY29uc3QgZ2V0RXhlY3V0aW9uTW9kZSA9IGV2ZW50T2JqID0+IHtcbiAgY29uc3QgdGltZW91dFRyaWdnZXIgPSBjb21wb3NlKFxuICAgIGdldFRpbWVvdXRQcm9taXNlKGV2ZW50T2JqLnRpbWVvdXQpLFxuICAgIGRlbGF5ZWRFdmVudFxuICApO1xuXG4gIGNvbnN0IGludGVydmFsVHJpZ2dlciA9IGNvbXBvc2UoXG4gICAgaW50ZXJ2YWwoZXZlbnRPYmoubW9kZVBhcmFtKSxcbiAgICBkZWxheWVkRXZlbnRcbiAgKTtcblxuICBjb25zdCBvbkxvYWRUcmlnZ2VyID0gY29tcG9zZShcbiAgICBnZXRPbkxvYWRQcm9taXNlKGV2ZW50T2JqLm1vZGVQYXJhbSksXG4gICAgZGVsYXllZEV2ZW50XG4gICk7XG5cbiAgc3dpdGNoIChldmVudE9iai5tb2RlKSB7XG4gICAgY2FzZSBFWEVDVVRJT05fTU9ERS5PTkNFOiB7XG4gICAgICBldmVudE9iai50cmlnZ2VyID0gdGh1bmsodGltZW91dFRyaWdnZXIpKGV2ZW50T2JqKTtcbiAgICAgIHJldHVybiBldmVudE9iajtcbiAgICB9XG5cbiAgICBjYXNlIEVYRUNVVElPTl9NT0RFLklOVEVSVkFMOiB7XG4gICAgICBldmVudE9iai50cmlnZ2VyID0gdGh1bmsoaW50ZXJ2YWxUcmlnZ2VyKShldmVudE9iaik7XG4gICAgICByZXR1cm4gZXZlbnRPYmo7XG4gICAgfVxuXG4gICAgY2FzZSBFWEVDVVRJT05fTU9ERS5PTl9MT0FEOiB7XG4gICAgICBldmVudE9iai50cmlnZ2VyID0gdGh1bmsob25Mb2FkVHJpZ2dlcikoZXZlbnRPYmopO1xuICAgICAgcmV0dXJuIGV2ZW50T2JqO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZXZlbnRPYmo7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUV2ZW50TGlzdCA9IG1hcChnZXRFeGVjdXRpb25Nb2RlKTtcblxuLyogTE9DQUwgU1RPUkFHRSAqL1xuXG5jb25zdCByZWFkTG9jYWxTdG9yYWdlQXN5bmMgPSAoKSA9PlxuICBicm93c2VyLnN0b3JhZ2Uuc3luYy5nZXQoXCJDT09LSUVfRklFTkRcIikudGhlbihnZXRJdGVtLCBvbkdldFN0b3JhZ2VFcnJvcik7XG5cbmNvbnN0IGdldEl0ZW0gPSBzdG9yYWdlSXRlbSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3Q29uZmlnID0gSlNPTi5wYXJzZShzdG9yYWdlSXRlbVtDT09LSUVfRklFTkRdKTtcbiAgICBjb25zdCBldmVudENvbmZpZyA9IEpTT04ucGFyc2UocmF3Q29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50Q29uZmlnIGxvYWRlZFwiLCBldmVudENvbmZpZyk7XG4gICAgcmV0dXJuIGV2ZW50Q29uZmlnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn07XG5cbmNvbnN0IG9uR2V0U3RvcmFnZUVycm9yID0gZXJyID0+IHtcbiAgY29uc29sZS5sb2coXCJnZXQgc3luYyBzdG9yYWdlIGVycm9yXCIsIGVycik7XG59O1xuXG4vKiBNQUlOICovXG5cbmNvbnN0IGdldEV2ZW50cyA9IGNvbXBvc2UoXG4gIGNyZWF0ZUV2ZW50TGlzdCxcbiAgc29ydEV2ZW50cyxcbiAgYWRkUmVwZWF0ZWRFdmVudHNcbik7XG5cbmNvbnN0IG1hcFRvVHJpZ2dlckxpc3QgPSBtYXBUbyhcInRyaWdnZXJcIik7XG5cbmNvbnN0IGdldEV2ZW50UXVldWUgPSBjb21wb3NlKFxuICBtYXBUb1RyaWdnZXJMaXN0LFxuICBnZXRFdmVudHNcbik7XG5cbmNvbnN0IHJlZHVjZUFzeW5jID0gZXZlbnRRdWV1ZSA9PlxuICBldmVudFF1ZXVlLnJlZHVjZShhc3luYyAocHJvbWlzZSwgZXZlbnRQcm9taXNlKSA9PiB7XG4gICAgYXdhaXQgcHJvbWlzZTtcbiAgICBhd2FpdCBldmVudFByb21pc2UoKTtcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG5jb25zdCBydW5FdmVudFF1ZXVlID0gYXN5bmMgZGF0YSA9PiB7XG4gIGNvbnN0IGF3YWl0ZWREYXRhID0gYXdhaXQgZGF0YTtcbiAgcmV0dXJuIGNvbXBvc2UoXG4gICAgcmVkdWNlQXN5bmMsXG4gICAgZ2V0RXZlbnRRdWV1ZVxuICApKGF3YWl0ZWREYXRhKTtcbn07XG5cbmNvbnN0IHJ1bkNvb2tpZUZpZW5kID0gY29tcG9zZShcbiAgcnVuRXZlbnRRdWV1ZSxcbiAgcmVhZExvY2FsU3RvcmFnZUFzeW5jXG4pO1xuXG5ydW5Db29raWVGaWVuZCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==