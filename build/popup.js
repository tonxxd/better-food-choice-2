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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Popup/popup.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Popup/popup.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes spinAround {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n.is-unselectable, .button, .file {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em; }\n\n.title:not(:last-child),\n.subtitle:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.button.is-loading::after, .select.is-loading::after, .control.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em; }\n\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.button, .input, .textarea, .select select, .file-cta,\n.file-name {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top; }\n  .button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,\n  .file-name:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n  .is-focused.file-name, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,\n  .file-name:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,\n  .is-active.file-name {\n    outline: none; }\n  .button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],\n  .file-name[disabled],\n  fieldset[disabled] .button,\n  fieldset[disabled] .input,\n  fieldset[disabled] .textarea,\n  fieldset[disabled] .select select,\n  .select fieldset[disabled] select,\n  fieldset[disabled] .file-cta,\n  fieldset[disabled] .file-name {\n    cursor: not-allowed; }\n\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n  td:not([align]),\n  th:not([align]) {\n    text-align: left; }\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5; }\n\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none; }\n  a strong {\n    color: currentColor; }\n  a:hover {\n    color: #363636; }\n\ncode {\n  background-color: whitesmoke;\n  color: #f14668;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: 0.875em; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #363636;\n  font-weight: 700; }\n\nfieldset {\n  border: none; }\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal; }\n  pre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0; }\n\ntable td,\ntable th {\n  vertical-align: top; }\n  table td:not([align]),\n  table th:not([align]) {\n    text-align: left; }\n\ntable th {\n  color: #363636; }\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-pulled-right {\n  float: right !important; }\n\n.is-clipped {\n  overflow: hidden !important; }\n\n.is-size-1 {\n  font-size: 3rem !important; }\n\n.is-size-2 {\n  font-size: 2.5rem !important; }\n\n.is-size-3 {\n  font-size: 2rem !important; }\n\n.is-size-4 {\n  font-size: 1.5rem !important; }\n\n.is-size-5 {\n  font-size: 1.25rem !important; }\n\n.is-size-6 {\n  font-size: 1rem !important; }\n\n.is-size-7 {\n  font-size: 0.75rem !important; }\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important; }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important; }\n  .is-size-3-mobile {\n    font-size: 2rem !important; }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important; }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important; }\n  .is-size-6-mobile {\n    font-size: 1rem !important; }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important; }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important; }\n  .is-size-3-tablet {\n    font-size: 2rem !important; }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important; }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important; }\n  .is-size-6-tablet {\n    font-size: 1rem !important; }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important; }\n  .is-size-2-touch {\n    font-size: 2.5rem !important; }\n  .is-size-3-touch {\n    font-size: 2rem !important; }\n  .is-size-4-touch {\n    font-size: 1.5rem !important; }\n  .is-size-5-touch {\n    font-size: 1.25rem !important; }\n  .is-size-6-touch {\n    font-size: 1rem !important; }\n  .is-size-7-touch {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important; }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important; }\n  .is-size-3-desktop {\n    font-size: 2rem !important; }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important; }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important; }\n  .is-size-6-desktop {\n    font-size: 1rem !important; }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important; }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important; }\n  .is-size-3-widescreen {\n    font-size: 2rem !important; }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important; }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important; }\n  .is-size-6-widescreen {\n    font-size: 1rem !important; }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important; }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important; }\n  .is-size-3-fullhd {\n    font-size: 2rem !important; }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important; }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important; }\n  .is-size-6-fullhd {\n    font-size: 1rem !important; }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important; } }\n\n.has-text-centered {\n  text-align: center !important; }\n\n.has-text-justified {\n  text-align: justify !important; }\n\n.has-text-left {\n  text-align: left !important; }\n\n.has-text-right {\n  text-align: right !important; }\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important; } }\n\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important; } }\n\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important; } }\n\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important; } }\n\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important; } }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-uppercase {\n  text-transform: uppercase !important; }\n\n.is-italic {\n  font-style: italic !important; }\n\n.has-text-white {\n  color: white !important; }\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n\n.has-background-white {\n  background-color: white !important; }\n\n.has-text-black {\n  color: #0a0a0a !important; }\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important; }\n\n.has-background-black {\n  background-color: #0a0a0a !important; }\n\n.has-text-light {\n  color: whitesmoke !important; }\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important; }\n\n.has-background-light {\n  background-color: whitesmoke !important; }\n\n.has-text-dark {\n  color: #363636 !important; }\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important; }\n\n.has-background-dark {\n  background-color: #363636 !important; }\n\n.has-text-primary {\n  color: #00d1b2 !important; }\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important; }\n\n.has-background-primary {\n  background-color: #00d1b2 !important; }\n\n.has-text-link {\n  color: #3273dc !important; }\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important; }\n\n.has-background-link {\n  background-color: #3273dc !important; }\n\n.has-text-info {\n  color: #3298dc !important; }\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #207dbc !important; }\n\n.has-background-info {\n  background-color: #3298dc !important; }\n\n.has-text-success {\n  color: #48c774 !important; }\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a85c !important; }\n\n.has-background-success {\n  background-color: #48c774 !important; }\n\n.has-text-warning {\n  color: #ffdd57 !important; }\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important; }\n\n.has-background-warning {\n  background-color: #ffdd57 !important; }\n\n.has-text-danger {\n  color: #f14668 !important; }\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important; }\n\n.has-background-danger {\n  background-color: #f14668 !important; }\n\n.has-text-black-bis {\n  color: #121212 !important; }\n\n.has-background-black-bis {\n  background-color: #121212 !important; }\n\n.has-text-black-ter {\n  color: #242424 !important; }\n\n.has-background-black-ter {\n  background-color: #242424 !important; }\n\n.has-text-grey-darker {\n  color: #363636 !important; }\n\n.has-background-grey-darker {\n  background-color: #363636 !important; }\n\n.has-text-grey-dark {\n  color: #4a4a4a !important; }\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important; }\n\n.has-text-grey {\n  color: #7a7a7a !important; }\n\n.has-background-grey {\n  background-color: #7a7a7a !important; }\n\n.has-text-grey-light {\n  color: #b5b5b5 !important; }\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important; }\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important; }\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important; }\n\n.has-text-white-ter {\n  color: whitesmoke !important; }\n\n.has-background-white-ter {\n  background-color: whitesmoke !important; }\n\n.has-text-white-bis {\n  color: #fafafa !important; }\n\n.has-background-white-bis {\n  background-color: #fafafa !important; }\n\n.has-text-weight-light {\n  font-weight: 300 !important; }\n\n.has-text-weight-normal {\n  font-weight: 400 !important; }\n\n.has-text-weight-medium {\n  font-weight: 500 !important; }\n\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-monospace {\n  font-family: monospace !important; }\n\n.is-family-code {\n  font-family: monospace !important; }\n\n.is-block {\n  display: block !important; }\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important; } }\n\n.is-flex {\n  display: flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important; } }\n\n.is-inline {\n  display: inline !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important; } }\n\n.is-inline-block {\n  display: inline-block !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important; } }\n\n.is-inline-flex {\n  display: inline-flex !important; }\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important; } }\n\n.is-hidden {\n  display: none !important; }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important; } }\n\n.is-invisible {\n  visibility: hidden !important; }\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-paddingless {\n  padding: 0 !important; }\n\n.is-radiusless {\n  border-radius: 0 !important; }\n\n.is-shadowless {\n  box-shadow: none !important; }\n\n.is-relative {\n  position: relative !important; }\n\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem; }\n  .columns.is-mobile > .column.is-narrow {\n    flex: none; }\n  .columns.is-mobile > .column.is-full {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > .column.is-three-quarters {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > .column.is-two-thirds {\n    flex: none;\n    width: 66.6666%; }\n  .columns.is-mobile > .column.is-half {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-one-third {\n    flex: none;\n    width: 33.3333%; }\n  .columns.is-mobile > .column.is-one-quarter {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > .column.is-one-fifth {\n    flex: none;\n    width: 20%; }\n  .columns.is-mobile > .column.is-two-fifths {\n    flex: none;\n    width: 40%; }\n  .columns.is-mobile > .column.is-three-fifths {\n    flex: none;\n    width: 60%; }\n  .columns.is-mobile > .column.is-four-fifths {\n    flex: none;\n    width: 80%; }\n  .columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%; }\n  .columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%; }\n  .columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%; }\n  .columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%; }\n  .columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%; }\n  .columns.is-mobile > .column.is-offset-one-fifth {\n    margin-left: 20%; }\n  .columns.is-mobile > .column.is-offset-two-fifths {\n    margin-left: 40%; }\n  .columns.is-mobile > .column.is-offset-three-fifths {\n    margin-left: 60%; }\n  .columns.is-mobile > .column.is-offset-four-fifths {\n    margin-left: 80%; }\n  .columns.is-mobile > .column.is-0 {\n    flex: none;\n    width: 0%; }\n  .columns.is-mobile > .column.is-offset-0 {\n    margin-left: 0%; }\n  .columns.is-mobile > .column.is-1 {\n    flex: none;\n    width: 8.33333%; }\n  .columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333%; }\n  .columns.is-mobile > .column.is-2 {\n    flex: none;\n    width: 16.66667%; }\n  .columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66667%; }\n  .columns.is-mobile > .column.is-3 {\n    flex: none;\n    width: 25%; }\n  .columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%; }\n  .columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%; }\n  .columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333%; }\n  .columns.is-mobile > .column.is-5 {\n    flex: none;\n    width: 41.66667%; }\n  .columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66667%; }\n  .columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%; }\n  .columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%; }\n  .columns.is-mobile > .column.is-7 {\n    flex: none;\n    width: 58.33333%; }\n  .columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333%; }\n  .columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%; }\n  .columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66667%; }\n  .columns.is-mobile > .column.is-9 {\n    flex: none;\n    width: 75%; }\n  .columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%; }\n  .columns.is-mobile > .column.is-10 {\n    flex: none;\n    width: 83.33333%; }\n  .columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333%; }\n  .columns.is-mobile > .column.is-11 {\n    flex: none;\n    width: 91.66667%; }\n  .columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66667%; }\n  .columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%; }\n  .columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%; }\n  @media screen and (max-width: 768px) {\n    .column.is-narrow-mobile {\n      flex: none; }\n    .column.is-full-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-mobile {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-mobile {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-mobile {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-mobile {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-mobile {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-mobile {\n      margin-left: 50%; }\n    .column.is-offset-one-third-mobile {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-mobile {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-mobile {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-mobile {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-mobile {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-mobile {\n      margin-left: 80%; }\n    .column.is-0-mobile {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-mobile {\n      margin-left: 0%; }\n    .column.is-1-mobile {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-mobile {\n      margin-left: 8.33333%; }\n    .column.is-2-mobile {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-mobile {\n      margin-left: 16.66667%; }\n    .column.is-3-mobile {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-mobile {\n      margin-left: 25%; }\n    .column.is-4-mobile {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-mobile {\n      margin-left: 33.33333%; }\n    .column.is-5-mobile {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-mobile {\n      margin-left: 41.66667%; }\n    .column.is-6-mobile {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-mobile {\n      margin-left: 50%; }\n    .column.is-7-mobile {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-mobile {\n      margin-left: 58.33333%; }\n    .column.is-8-mobile {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-mobile {\n      margin-left: 66.66667%; }\n    .column.is-9-mobile {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-mobile {\n      margin-left: 75%; }\n    .column.is-10-mobile {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-mobile {\n      margin-left: 83.33333%; }\n    .column.is-11-mobile {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-mobile {\n      margin-left: 91.66667%; }\n    .column.is-12-mobile {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-mobile {\n      margin-left: 100%; } }\n  @media screen and (min-width: 769px), print {\n    .column.is-narrow, .column.is-narrow-tablet {\n      flex: none; }\n    .column.is-full, .column.is-full-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters, .column.is-three-quarters-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds, .column.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half, .column.is-half-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third, .column.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter, .column.is-one-quarter-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth, .column.is-one-fifth-tablet {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths, .column.is-two-fifths-tablet {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths, .column.is-three-fifths-tablet {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths, .column.is-four-fifths-tablet {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%; }\n    .column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%; }\n    .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n      margin-left: 80%; }\n    .column.is-0, .column.is-0-tablet {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0, .column.is-offset-0-tablet {\n      margin-left: 0%; }\n    .column.is-1, .column.is-1-tablet {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333%; }\n    .column.is-2, .column.is-2-tablet {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66667%; }\n    .column.is-3, .column.is-3-tablet {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%; }\n    .column.is-4, .column.is-4-tablet {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333%; }\n    .column.is-5, .column.is-5-tablet {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66667%; }\n    .column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%; }\n    .column.is-7, .column.is-7-tablet {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333%; }\n    .column.is-8, .column.is-8-tablet {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66667%; }\n    .column.is-9, .column.is-9-tablet {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%; }\n    .column.is-10, .column.is-10-tablet {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333%; }\n    .column.is-11, .column.is-11-tablet {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66667%; }\n    .column.is-12, .column.is-12-tablet {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%; } }\n  @media screen and (max-width: 1023px) {\n    .column.is-narrow-touch {\n      flex: none; }\n    .column.is-full-touch {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-touch {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-touch {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-touch {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-touch {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-touch {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-touch {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-touch {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-touch {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-touch {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-touch {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-touch {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-touch {\n      margin-left: 50%; }\n    .column.is-offset-one-third-touch {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-touch {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-touch {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-touch {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-touch {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-touch {\n      margin-left: 80%; }\n    .column.is-0-touch {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-touch {\n      margin-left: 0%; }\n    .column.is-1-touch {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-touch {\n      margin-left: 8.33333%; }\n    .column.is-2-touch {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-touch {\n      margin-left: 16.66667%; }\n    .column.is-3-touch {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-touch {\n      margin-left: 25%; }\n    .column.is-4-touch {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-touch {\n      margin-left: 33.33333%; }\n    .column.is-5-touch {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-touch {\n      margin-left: 41.66667%; }\n    .column.is-6-touch {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-touch {\n      margin-left: 50%; }\n    .column.is-7-touch {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-touch {\n      margin-left: 58.33333%; }\n    .column.is-8-touch {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-touch {\n      margin-left: 66.66667%; }\n    .column.is-9-touch {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-touch {\n      margin-left: 75%; }\n    .column.is-10-touch {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-touch {\n      margin-left: 83.33333%; }\n    .column.is-11-touch {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-touch {\n      margin-left: 91.66667%; }\n    .column.is-12-touch {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-touch {\n      margin-left: 100%; } }\n  @media screen and (min-width: 1024px) {\n    .column.is-narrow-desktop {\n      flex: none; }\n    .column.is-full-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-desktop {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-desktop {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-desktop {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-desktop {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-desktop {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-desktop {\n      margin-left: 50%; }\n    .column.is-offset-one-third-desktop {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-desktop {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-desktop {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-desktop {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-desktop {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-desktop {\n      margin-left: 80%; }\n    .column.is-0-desktop {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-desktop {\n      margin-left: 0%; }\n    .column.is-1-desktop {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-desktop {\n      margin-left: 8.33333%; }\n    .column.is-2-desktop {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-desktop {\n      margin-left: 16.66667%; }\n    .column.is-3-desktop {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-desktop {\n      margin-left: 25%; }\n    .column.is-4-desktop {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-desktop {\n      margin-left: 33.33333%; }\n    .column.is-5-desktop {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-desktop {\n      margin-left: 41.66667%; }\n    .column.is-6-desktop {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-desktop {\n      margin-left: 50%; }\n    .column.is-7-desktop {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-desktop {\n      margin-left: 58.33333%; }\n    .column.is-8-desktop {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-desktop {\n      margin-left: 66.66667%; }\n    .column.is-9-desktop {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-desktop {\n      margin-left: 75%; }\n    .column.is-10-desktop {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-desktop {\n      margin-left: 83.33333%; }\n    .column.is-11-desktop {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-desktop {\n      margin-left: 91.66667%; }\n    .column.is-12-desktop {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-desktop {\n      margin-left: 100%; } }\n  @media screen and (min-width: 1216px) {\n    .column.is-narrow-widescreen {\n      flex: none; }\n    .column.is-full-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-widescreen {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-widescreen {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-widescreen {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-widescreen {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-widescreen {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-widescreen {\n      margin-left: 50%; }\n    .column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-widescreen {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-widescreen {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-widescreen {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-widescreen {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-widescreen {\n      margin-left: 80%; }\n    .column.is-0-widescreen {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-widescreen {\n      margin-left: 0%; }\n    .column.is-1-widescreen {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-widescreen {\n      margin-left: 8.33333%; }\n    .column.is-2-widescreen {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-widescreen {\n      margin-left: 16.66667%; }\n    .column.is-3-widescreen {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-widescreen {\n      margin-left: 25%; }\n    .column.is-4-widescreen {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-widescreen {\n      margin-left: 33.33333%; }\n    .column.is-5-widescreen {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-widescreen {\n      margin-left: 41.66667%; }\n    .column.is-6-widescreen {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-widescreen {\n      margin-left: 50%; }\n    .column.is-7-widescreen {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-widescreen {\n      margin-left: 58.33333%; }\n    .column.is-8-widescreen {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-widescreen {\n      margin-left: 66.66667%; }\n    .column.is-9-widescreen {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-widescreen {\n      margin-left: 75%; }\n    .column.is-10-widescreen {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-widescreen {\n      margin-left: 83.33333%; }\n    .column.is-11-widescreen {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-widescreen {\n      margin-left: 91.66667%; }\n    .column.is-12-widescreen {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-widescreen {\n      margin-left: 100%; } }\n  @media screen and (min-width: 1408px) {\n    .column.is-narrow-fullhd {\n      flex: none; }\n    .column.is-full-fullhd {\n      flex: none;\n      width: 100%; }\n    .column.is-three-quarters-fullhd {\n      flex: none;\n      width: 75%; }\n    .column.is-two-thirds-fullhd {\n      flex: none;\n      width: 66.6666%; }\n    .column.is-half-fullhd {\n      flex: none;\n      width: 50%; }\n    .column.is-one-third-fullhd {\n      flex: none;\n      width: 33.3333%; }\n    .column.is-one-quarter-fullhd {\n      flex: none;\n      width: 25%; }\n    .column.is-one-fifth-fullhd {\n      flex: none;\n      width: 20%; }\n    .column.is-two-fifths-fullhd {\n      flex: none;\n      width: 40%; }\n    .column.is-three-fifths-fullhd {\n      flex: none;\n      width: 60%; }\n    .column.is-four-fifths-fullhd {\n      flex: none;\n      width: 80%; }\n    .column.is-offset-three-quarters-fullhd {\n      margin-left: 75%; }\n    .column.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%; }\n    .column.is-offset-half-fullhd {\n      margin-left: 50%; }\n    .column.is-offset-one-third-fullhd {\n      margin-left: 33.3333%; }\n    .column.is-offset-one-quarter-fullhd {\n      margin-left: 25%; }\n    .column.is-offset-one-fifth-fullhd {\n      margin-left: 20%; }\n    .column.is-offset-two-fifths-fullhd {\n      margin-left: 40%; }\n    .column.is-offset-three-fifths-fullhd {\n      margin-left: 60%; }\n    .column.is-offset-four-fifths-fullhd {\n      margin-left: 80%; }\n    .column.is-0-fullhd {\n      flex: none;\n      width: 0%; }\n    .column.is-offset-0-fullhd {\n      margin-left: 0%; }\n    .column.is-1-fullhd {\n      flex: none;\n      width: 8.33333%; }\n    .column.is-offset-1-fullhd {\n      margin-left: 8.33333%; }\n    .column.is-2-fullhd {\n      flex: none;\n      width: 16.66667%; }\n    .column.is-offset-2-fullhd {\n      margin-left: 16.66667%; }\n    .column.is-3-fullhd {\n      flex: none;\n      width: 25%; }\n    .column.is-offset-3-fullhd {\n      margin-left: 25%; }\n    .column.is-4-fullhd {\n      flex: none;\n      width: 33.33333%; }\n    .column.is-offset-4-fullhd {\n      margin-left: 33.33333%; }\n    .column.is-5-fullhd {\n      flex: none;\n      width: 41.66667%; }\n    .column.is-offset-5-fullhd {\n      margin-left: 41.66667%; }\n    .column.is-6-fullhd {\n      flex: none;\n      width: 50%; }\n    .column.is-offset-6-fullhd {\n      margin-left: 50%; }\n    .column.is-7-fullhd {\n      flex: none;\n      width: 58.33333%; }\n    .column.is-offset-7-fullhd {\n      margin-left: 58.33333%; }\n    .column.is-8-fullhd {\n      flex: none;\n      width: 66.66667%; }\n    .column.is-offset-8-fullhd {\n      margin-left: 66.66667%; }\n    .column.is-9-fullhd {\n      flex: none;\n      width: 75%; }\n    .column.is-offset-9-fullhd {\n      margin-left: 75%; }\n    .column.is-10-fullhd {\n      flex: none;\n      width: 83.33333%; }\n    .column.is-offset-10-fullhd {\n      margin-left: 83.33333%; }\n    .column.is-11-fullhd {\n      flex: none;\n      width: 91.66667%; }\n    .column.is-offset-11-fullhd {\n      margin-left: 91.66667%; }\n    .column.is-12-fullhd {\n      flex: none;\n      width: 100%; }\n    .column.is-offset-12-fullhd {\n      margin-left: 100%; } }\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem; }\n  .columns:last-child {\n    margin-bottom: -0.75rem; }\n  .columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem); }\n  .columns.is-centered {\n    justify-content: center; }\n  .columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0; }\n    .columns.is-gapless > .column {\n      margin: 0;\n      padding: 0 !important; }\n    .columns.is-gapless:not(:last-child) {\n      margin-bottom: 1.5rem; }\n    .columns.is-gapless:last-child {\n      margin-bottom: 0; }\n  .columns.is-mobile {\n    display: flex; }\n  .columns.is-multiline {\n    flex-wrap: wrap; }\n  .columns.is-vcentered {\n    align-items: center; }\n  @media screen and (min-width: 769px), print {\n    .columns:not(.is-desktop) {\n      display: flex; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-desktop {\n      display: flex; } }\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap)); }\n  .columns.is-variable .column {\n    padding-left: var(--columnGap);\n    padding-right: var(--columnGap); }\n  .columns.is-variable.is-0 {\n    --columnGap: 0rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-0-mobile {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-0-tablet {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-0-tablet-only {\n      --columnGap: 0rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-0-touch {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-0-desktop {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-0-desktop-only {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-0-widescreen {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-0-widescreen-only {\n      --columnGap: 0rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-0-fullhd {\n      --columnGap: 0rem; } }\n  .columns.is-variable.is-1 {\n    --columnGap: 0.25rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-1-mobile {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-1-tablet {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-1-tablet-only {\n      --columnGap: 0.25rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-1-touch {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-1-desktop {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-1-desktop-only {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-1-widescreen {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-1-widescreen-only {\n      --columnGap: 0.25rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-1-fullhd {\n      --columnGap: 0.25rem; } }\n  .columns.is-variable.is-2 {\n    --columnGap: 0.5rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-2-mobile {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-2-tablet {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-2-tablet-only {\n      --columnGap: 0.5rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-2-touch {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-2-desktop {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-2-desktop-only {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-2-widescreen {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-2-widescreen-only {\n      --columnGap: 0.5rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-2-fullhd {\n      --columnGap: 0.5rem; } }\n  .columns.is-variable.is-3 {\n    --columnGap: 0.75rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-3-mobile {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-3-tablet {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-3-tablet-only {\n      --columnGap: 0.75rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-3-touch {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-3-desktop {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-3-desktop-only {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-3-widescreen {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-3-widescreen-only {\n      --columnGap: 0.75rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-3-fullhd {\n      --columnGap: 0.75rem; } }\n  .columns.is-variable.is-4 {\n    --columnGap: 1rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-4-mobile {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-4-tablet {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-4-tablet-only {\n      --columnGap: 1rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-4-touch {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-4-desktop {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-4-desktop-only {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-4-widescreen {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-4-widescreen-only {\n      --columnGap: 1rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-4-fullhd {\n      --columnGap: 1rem; } }\n  .columns.is-variable.is-5 {\n    --columnGap: 1.25rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-5-mobile {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-5-tablet {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-5-tablet-only {\n      --columnGap: 1.25rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-5-touch {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-5-desktop {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-5-desktop-only {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-5-widescreen {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-5-widescreen-only {\n      --columnGap: 1.25rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-5-fullhd {\n      --columnGap: 1.25rem; } }\n  .columns.is-variable.is-6 {\n    --columnGap: 1.5rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-6-mobile {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-6-tablet {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-6-tablet-only {\n      --columnGap: 1.5rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-6-touch {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-6-desktop {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-6-desktop-only {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-6-widescreen {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-6-widescreen-only {\n      --columnGap: 1.5rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-6-fullhd {\n      --columnGap: 1.5rem; } }\n  .columns.is-variable.is-7 {\n    --columnGap: 1.75rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-7-mobile {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-7-tablet {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-7-tablet-only {\n      --columnGap: 1.75rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-7-touch {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-7-desktop {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-7-desktop-only {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-7-widescreen {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-7-widescreen-only {\n      --columnGap: 1.75rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-7-fullhd {\n      --columnGap: 1.75rem; } }\n  .columns.is-variable.is-8 {\n    --columnGap: 2rem; }\n  @media screen and (max-width: 768px) {\n    .columns.is-variable.is-8-mobile {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 769px), print {\n    .columns.is-variable.is-8-tablet {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 769px) and (max-width: 1023px) {\n    .columns.is-variable.is-8-tablet-only {\n      --columnGap: 2rem; } }\n  @media screen and (max-width: 1023px) {\n    .columns.is-variable.is-8-touch {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 1024px) {\n    .columns.is-variable.is-8-desktop {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 1024px) and (max-width: 1215px) {\n    .columns.is-variable.is-8-desktop-only {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 1216px) {\n    .columns.is-variable.is-8-widescreen {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 1216px) and (max-width: 1407px) {\n    .columns.is-variable.is-8-widescreen-only {\n      --columnGap: 2rem; } }\n  @media screen and (min-width: 1408px) {\n    .columns.is-variable.is-8-fullhd {\n      --columnGap: 2rem; } }\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap; }\n  .button strong {\n    color: inherit; }\n  .button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em; }\n  .button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.5em - 1px);\n    margin-right: 0.25em; }\n  .button .icon:last-child:not(:first-child) {\n    margin-left: 0.25em;\n    margin-right: calc(-0.5em - 1px); }\n  .button .icon:first-child:last-child {\n    margin-left: calc(-0.5em - 1px);\n    margin-right: calc(-0.5em - 1px); }\n  .button:hover, .button.is-hovered {\n    border-color: #b5b5b5;\n    color: #363636; }\n  .button:focus, .button.is-focused {\n    border-color: #3273dc;\n    color: #363636; }\n    .button:focus:not(:active), .button.is-focused:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n  .button:active, .button.is-active {\n    border-color: #4a4a4a;\n    color: #363636; }\n  .button.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline; }\n    .button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n      background-color: whitesmoke;\n      color: #363636; }\n    .button.is-text:active, .button.is-text.is-active {\n      background-color: #e8e8e8;\n      color: #363636; }\n    .button.is-text[disabled],\n    fieldset[disabled] .button.is-text {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none; }\n  .button.is-white {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n    .button.is-white:hover, .button.is-white.is-hovered {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a; }\n    .button.is-white:focus, .button.is-white.is-focused {\n      border-color: transparent;\n      color: #0a0a0a; }\n      .button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n    .button.is-white:active, .button.is-white.is-active {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      color: #0a0a0a; }\n    .button.is-white[disabled],\n    fieldset[disabled] .button.is-white {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-white.is-inverted {\n      background-color: #0a0a0a;\n      color: white; }\n      .button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n        background-color: black; }\n      .button.is-white.is-inverted[disabled],\n      fieldset[disabled] .button.is-white.is-inverted {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white; }\n    .button.is-white.is-loading::after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n    .button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n      .button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a; }\n      .button.is-white.is-outlined.is-loading::after {\n        border-color: transparent transparent white white !important; }\n      .button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n      .button.is-white.is-outlined[disabled],\n      fieldset[disabled] .button.is-white.is-outlined {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n    .button.is-white.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n      .button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n        background-color: #0a0a0a;\n        color: white; }\n      .button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent white white !important; }\n      .button.is-white.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n  .button.is-black {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n    .button.is-black:hover, .button.is-black.is-hovered {\n      background-color: #040404;\n      border-color: transparent;\n      color: white; }\n    .button.is-black:focus, .button.is-black.is-focused {\n      border-color: transparent;\n      color: white; }\n      .button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n    .button.is-black:active, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: white; }\n    .button.is-black[disabled],\n    fieldset[disabled] .button.is-black {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-black.is-inverted {\n      background-color: white;\n      color: #0a0a0a; }\n      .button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-black.is-inverted[disabled],\n      fieldset[disabled] .button.is-black.is-inverted {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a; }\n    .button.is-black.is-loading::after {\n      border-color: transparent transparent white white !important; }\n    .button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a; }\n      .button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white; }\n      .button.is-black.is-outlined.is-loading::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n      .button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent white white !important; }\n      .button.is-black.is-outlined[disabled],\n      fieldset[disabled] .button.is-black.is-outlined {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a; }\n    .button.is-black.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white; }\n      .button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n        background-color: white;\n        color: #0a0a0a; }\n      .button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important; }\n      .button.is-black.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white; }\n  .button.is-light {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-light:focus, .button.is-light.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n    .button.is-light:active, .button.is-light.is-active {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-light[disabled],\n    fieldset[disabled] .button.is-light {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-light.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: whitesmoke; }\n      .button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n        background-color: rgba(0, 0, 0, 0.7); }\n      .button.is-light.is-inverted[disabled],\n      fieldset[disabled] .button.is-light.is-inverted {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke; }\n    .button.is-light.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke; }\n      .button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-light.is-outlined.is-loading::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n      .button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-light.is-outlined[disabled],\n      fieldset[disabled] .button.is-light.is-outlined {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke; }\n    .button.is-light.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: whitesmoke; }\n      .button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important; }\n      .button.is-light.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7); }\n  .button.is-dark {\n    background-color: #363636;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-dark:hover, .button.is-dark.is-hovered {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-dark:focus, .button.is-dark.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n    .button.is-dark:active, .button.is-dark.is-active {\n      background-color: #292929;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-dark[disabled],\n    fieldset[disabled] .button.is-dark {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-dark.is-inverted {\n      background-color: #fff;\n      color: #363636; }\n      .button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-dark.is-inverted[disabled],\n      fieldset[disabled] .button.is-dark.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636; }\n    .button.is-dark.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636; }\n      .button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n        background-color: #363636;\n        border-color: #363636;\n        color: #fff; }\n      .button.is-dark.is-outlined.is-loading::after {\n        border-color: transparent transparent #363636 #363636 !important; }\n      .button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-dark.is-outlined[disabled],\n      fieldset[disabled] .button.is-dark.is-outlined {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636; }\n    .button.is-dark.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #363636; }\n      .button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #363636 #363636 !important; }\n      .button.is-dark.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n  .button.is-primary {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #00c4a7;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary:focus, .button.is-primary.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n    .button.is-primary:active, .button.is-primary.is-active {\n      background-color: #00b89c;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-primary[disabled],\n    fieldset[disabled] .button.is-primary {\n      background-color: #00d1b2;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-primary.is-inverted {\n      background-color: #fff;\n      color: #00d1b2; }\n      .button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-primary.is-inverted[disabled],\n      fieldset[disabled] .button.is-primary.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #00d1b2; }\n    .button.is-primary.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #00d1b2;\n      color: #00d1b2; }\n      .button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n        background-color: #00d1b2;\n        border-color: #00d1b2;\n        color: #fff; }\n      .button.is-primary.is-outlined.is-loading::after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n      .button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-primary.is-outlined[disabled],\n      fieldset[disabled] .button.is-primary.is-outlined {\n        background-color: transparent;\n        border-color: #00d1b2;\n        box-shadow: none;\n        color: #00d1b2; }\n    .button.is-primary.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #00d1b2; }\n      .button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #00d1b2 #00d1b2 !important; }\n      .button.is-primary.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n    .button.is-primary.is-light {\n      background-color: #ebfffc;\n      color: #00947e; }\n      .button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n        background-color: #defffa;\n        border-color: transparent;\n        color: #00947e; }\n      .button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n        background-color: #d1fff8;\n        border-color: transparent;\n        color: #00947e; }\n  .button.is-link {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-link:hover, .button.is-link.is-hovered {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-link:focus, .button.is-link.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n    .button.is-link:active, .button.is-link.is-active {\n      background-color: #2366d1;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-link[disabled],\n    fieldset[disabled] .button.is-link {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-link.is-inverted {\n      background-color: #fff;\n      color: #3273dc; }\n      .button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-link.is-inverted[disabled],\n      fieldset[disabled] .button.is-link.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc; }\n    .button.is-link.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-link.is-outlined {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc; }\n      .button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff; }\n      .button.is-link.is-outlined.is-loading::after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n      .button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-link.is-outlined[disabled],\n      fieldset[disabled] .button.is-link.is-outlined {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc; }\n    .button.is-link.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #3273dc; }\n      .button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #3273dc #3273dc !important; }\n      .button.is-link.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n    .button.is-link.is-light {\n      background-color: #eef3fc;\n      color: #2160c4; }\n      .button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n        background-color: #e3ecfa;\n        border-color: transparent;\n        color: #2160c4; }\n      .button.is-link.is-light:active, .button.is-link.is-light.is-active {\n        background-color: #d8e4f8;\n        border-color: transparent;\n        color: #2160c4; }\n  .button.is-info {\n    background-color: #3298dc;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-info:hover, .button.is-info.is-hovered {\n      background-color: #2793da;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-info:focus, .button.is-info.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25); }\n    .button.is-info:active, .button.is-info.is-active {\n      background-color: #238cd1;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-info[disabled],\n    fieldset[disabled] .button.is-info {\n      background-color: #3298dc;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-info.is-inverted {\n      background-color: #fff;\n      color: #3298dc; }\n      .button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-info.is-inverted[disabled],\n      fieldset[disabled] .button.is-info.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3298dc; }\n    .button.is-info.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #3298dc;\n      color: #3298dc; }\n      .button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n        background-color: #3298dc;\n        border-color: #3298dc;\n        color: #fff; }\n      .button.is-info.is-outlined.is-loading::after {\n        border-color: transparent transparent #3298dc #3298dc !important; }\n      .button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-info.is-outlined[disabled],\n      fieldset[disabled] .button.is-info.is-outlined {\n        background-color: transparent;\n        border-color: #3298dc;\n        box-shadow: none;\n        color: #3298dc; }\n    .button.is-info.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #3298dc; }\n      .button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #3298dc #3298dc !important; }\n      .button.is-info.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n    .button.is-info.is-light {\n      background-color: #eef6fc;\n      color: #1d72aa; }\n      .button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n        background-color: #e3f1fa;\n        border-color: transparent;\n        color: #1d72aa; }\n      .button.is-info.is-light:active, .button.is-info.is-light.is-active {\n        background-color: #d8ebf8;\n        border-color: transparent;\n        color: #1d72aa; }\n  .button.is-success {\n    background-color: #48c774;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #3ec46d;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-success:focus, .button.is-success.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25); }\n    .button.is-success:active, .button.is-success.is-active {\n      background-color: #3abb67;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-success[disabled],\n    fieldset[disabled] .button.is-success {\n      background-color: #48c774;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-success.is-inverted {\n      background-color: #fff;\n      color: #48c774; }\n      .button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-success.is-inverted[disabled],\n      fieldset[disabled] .button.is-success.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #48c774; }\n    .button.is-success.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #48c774;\n      color: #48c774; }\n      .button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n        background-color: #48c774;\n        border-color: #48c774;\n        color: #fff; }\n      .button.is-success.is-outlined.is-loading::after {\n        border-color: transparent transparent #48c774 #48c774 !important; }\n      .button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-success.is-outlined[disabled],\n      fieldset[disabled] .button.is-success.is-outlined {\n        background-color: transparent;\n        border-color: #48c774;\n        box-shadow: none;\n        color: #48c774; }\n    .button.is-success.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #48c774; }\n      .button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #48c774 #48c774 !important; }\n      .button.is-success.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n    .button.is-success.is-light {\n      background-color: #effaf3;\n      color: #257942; }\n      .button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n        background-color: #e6f7ec;\n        border-color: transparent;\n        color: #257942; }\n      .button.is-success.is-light:active, .button.is-success.is-light.is-active {\n        background-color: #dcf4e4;\n        border-color: transparent;\n        color: #257942; }\n  .button.is-warning {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning:focus, .button.is-warning.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n    .button.is-warning:active, .button.is-warning.is-active {\n      background-color: #ffd83d;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning[disabled],\n    fieldset[disabled] .button.is-warning {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-warning.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57; }\n      .button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n        background-color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning.is-inverted[disabled],\n      fieldset[disabled] .button.is-warning.is-inverted {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57; }\n    .button.is-warning.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n    .button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57; }\n      .button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning.is-outlined.is-loading::after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n      .button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important; }\n      .button.is-warning.is-outlined[disabled],\n      fieldset[disabled] .button.is-warning.is-outlined {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57; }\n    .button.is-warning.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7); }\n      .button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57; }\n      .button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important; }\n      .button.is-warning.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7); }\n    .button.is-warning.is-light {\n      background-color: #fffbeb;\n      color: #947600; }\n      .button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n        background-color: #fff8de;\n        border-color: transparent;\n        color: #947600; }\n      .button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n        background-color: #fff6d1;\n        border-color: transparent;\n        color: #947600; }\n  .button.is-danger {\n    background-color: #f14668;\n    border-color: transparent;\n    color: #fff; }\n    .button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #f03a5f;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger:focus, .button.is-danger.is-focused {\n      border-color: transparent;\n      color: #fff; }\n      .button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n    .button.is-danger:active, .button.is-danger.is-active {\n      background-color: #ef2e55;\n      border-color: transparent;\n      color: #fff; }\n    .button.is-danger[disabled],\n    fieldset[disabled] .button.is-danger {\n      background-color: #f14668;\n      border-color: transparent;\n      box-shadow: none; }\n    .button.is-danger.is-inverted {\n      background-color: #fff;\n      color: #f14668; }\n      .button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n        background-color: #f2f2f2; }\n      .button.is-danger.is-inverted[disabled],\n      fieldset[disabled] .button.is-danger.is-inverted {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #f14668; }\n    .button.is-danger.is-loading::after {\n      border-color: transparent transparent #fff #fff !important; }\n    .button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #f14668;\n      color: #f14668; }\n      .button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n        background-color: #f14668;\n        border-color: #f14668;\n        color: #fff; }\n      .button.is-danger.is-outlined.is-loading::after {\n        border-color: transparent transparent #f14668 #f14668 !important; }\n      .button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #fff #fff !important; }\n      .button.is-danger.is-outlined[disabled],\n      fieldset[disabled] .button.is-danger.is-outlined {\n        background-color: transparent;\n        border-color: #f14668;\n        box-shadow: none;\n        color: #f14668; }\n    .button.is-danger.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff; }\n      .button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n        background-color: #fff;\n        color: #f14668; }\n      .button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n        border-color: transparent transparent #f14668 #f14668 !important; }\n      .button.is-danger.is-inverted.is-outlined[disabled],\n      fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff; }\n    .button.is-danger.is-light {\n      background-color: #feecf0;\n      color: #cc0f35; }\n      .button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n        background-color: #fde0e6;\n        border-color: transparent;\n        color: #cc0f35; }\n      .button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n        background-color: #fcd4dc;\n        border-color: transparent;\n        color: #cc0f35; }\n  .button.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .button.is-normal {\n    font-size: 1rem; }\n  .button.is-medium {\n    font-size: 1.25rem; }\n  .button.is-large {\n    font-size: 1.5rem; }\n  .button[disabled],\n  fieldset[disabled] .button {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5; }\n  .button.is-fullwidth {\n    display: flex;\n    width: 100%; }\n  .button.is-loading {\n    color: transparent !important;\n    pointer-events: none; }\n    .button.is-loading::after {\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important; }\n  .button.is-static {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    box-shadow: none;\n    pointer-events: none; }\n  .button.is-rounded {\n    border-radius: 290486px;\n    padding-left: calc(1em + 0.25em);\n    padding-right: calc(1em + 0.25em); }\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .buttons .button {\n    margin-bottom: 0.5rem; }\n    .buttons .button:not(:last-child):not(.is-fullwidth) {\n      margin-right: 0.5rem; }\n  .buttons:last-child {\n    margin-bottom: -0.5rem; }\n  .buttons:not(:last-child) {\n    margin-bottom: 1rem; }\n  .buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n    font-size: 1.25rem; }\n  .buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n    font-size: 1.5rem; }\n  .buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px; }\n  .buttons.has-addons .button:last-child {\n    margin-right: 0; }\n  .buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2; }\n  .buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n    z-index: 3; }\n    .buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n      z-index: 4; }\n  .buttons.has-addons .button.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  .buttons.is-centered {\n    justify-content: center; }\n    .buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n  .buttons.is-right {\n    justify-content: flex-end; }\n    .buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n      margin-left: 0.25rem;\n      margin-right: 0.25rem; }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n  .title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit; }\n  .title sub,\n  .subtitle sub {\n    font-size: 0.75em; }\n  .title sup,\n  .subtitle sup {\n    font-size: 0.75em; }\n  .title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n  .title strong {\n    color: inherit;\n    font-weight: inherit; }\n  .title + .highlight {\n    margin-top: -0.75rem; }\n  .title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem; }\n  .title.is-1 {\n    font-size: 3rem; }\n  .title.is-2 {\n    font-size: 2.5rem; }\n  .title.is-3 {\n    font-size: 2rem; }\n  .title.is-4 {\n    font-size: 1.5rem; }\n  .title.is-5 {\n    font-size: 1.25rem; }\n  .title.is-6 {\n    font-size: 1rem; }\n  .title.is-7 {\n    font-size: 0.75rem; }\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n  .subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n  .subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem; }\n  .subtitle.is-1 {\n    font-size: 3rem; }\n  .subtitle.is-2 {\n    font-size: 2.5rem; }\n  .subtitle.is-3 {\n    font-size: 2rem; }\n  .subtitle.is-4 {\n    font-size: 1.5rem; }\n  .subtitle.is-5 {\n    font-size: 1.25rem; }\n  .subtitle.is-6 {\n    font-size: 1rem; }\n  .subtitle.is-7 {\n    font-size: 0.75rem; }\n\n.input, .textarea, .select select {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636; }\n  .input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3); }\n  .input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {\n    border-color: #b5b5b5; }\n  .input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {\n    border-color: #3273dc;\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n  .input[disabled], .textarea[disabled], .select select[disabled],\n  fieldset[disabled] .input,\n  fieldset[disabled] .textarea,\n  fieldset[disabled] .select select,\n  .select fieldset[disabled] select {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a; }\n    .input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,\n    fieldset[disabled] .input::-moz-placeholder,\n    fieldset[disabled] .textarea::-moz-placeholder,\n    fieldset[disabled] .select select::-moz-placeholder,\n    .select fieldset[disabled] select::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n    .input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,\n    fieldset[disabled] .input::-webkit-input-placeholder,\n    fieldset[disabled] .textarea::-webkit-input-placeholder,\n    fieldset[disabled] .select select::-webkit-input-placeholder,\n    .select fieldset[disabled] select::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n    .input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,\n    fieldset[disabled] .input:-moz-placeholder,\n    fieldset[disabled] .textarea:-moz-placeholder,\n    fieldset[disabled] .select select:-moz-placeholder,\n    .select fieldset[disabled] select:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n    .input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,\n    fieldset[disabled] .input:-ms-input-placeholder,\n    fieldset[disabled] .textarea:-ms-input-placeholder,\n    fieldset[disabled] .select select:-ms-input-placeholder,\n    .select fieldset[disabled] select:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3); }\n\n.input, .textarea {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%; }\n  .input[readonly], .textarea[readonly] {\n    box-shadow: none; }\n  .is-white.input, .is-white.textarea {\n    border-color: white; }\n    .is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n  .is-black.input, .is-black.textarea {\n    border-color: #0a0a0a; }\n    .is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n  .is-light.input, .is-light.textarea {\n    border-color: whitesmoke; }\n    .is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n  .is-dark.input, .is-dark.textarea {\n    border-color: #363636; }\n    .is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n  .is-primary.input, .is-primary.textarea {\n    border-color: #00d1b2; }\n    .is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n  .is-link.input, .is-link.textarea {\n    border-color: #3273dc; }\n    .is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n  .is-info.input, .is-info.textarea {\n    border-color: #3298dc; }\n    .is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25); }\n  .is-success.input, .is-success.textarea {\n    border-color: #48c774; }\n    .is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25); }\n  .is-warning.input, .is-warning.textarea {\n    border-color: #ffdd57; }\n    .is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n  .is-danger.input, .is-danger.textarea {\n    border-color: #f14668; }\n    .is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {\n      box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n  .is-small.input, .is-small.textarea {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .is-medium.input, .is-medium.textarea {\n    font-size: 1.25rem; }\n  .is-large.input, .is-large.textarea {\n    font-size: 1.5rem; }\n  .is-fullwidth.input, .is-fullwidth.textarea {\n    display: block;\n    width: 100%; }\n  .is-inline.input, .is-inline.textarea {\n    display: inline;\n    width: auto; }\n\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em); }\n\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0; }\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical; }\n  .textarea:not([rows]) {\n    max-height: 40em;\n    min-height: 8em; }\n  .textarea[rows] {\n    height: initial; }\n  .textarea.has-fixed-size {\n    resize: none; }\n\n.checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative; }\n  .checkbox input, .radio input {\n    cursor: pointer; }\n  .checkbox:hover, .radio:hover {\n    color: #363636; }\n  .checkbox[disabled], .radio[disabled],\n  fieldset[disabled] .checkbox,\n  fieldset[disabled] .radio {\n    color: #7a7a7a;\n    cursor: not-allowed; }\n\n.radio + .radio {\n  margin-left: 0.5em; }\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top; }\n  .select:not(.is-multiple) {\n    height: 2.5em; }\n  .select:not(.is-multiple):not(.is-loading)::after {\n    border-color: #3273dc;\n    right: 1.125em;\n    z-index: 4; }\n  .select.is-rounded select {\n    border-radius: 290486px;\n    padding-left: 1em; }\n  .select select {\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none; }\n    .select select::-ms-expand {\n      display: none; }\n    .select select[disabled]:hover,\n    fieldset[disabled] .select select:hover {\n      border-color: whitesmoke; }\n    .select select:not([multiple]) {\n      padding-right: 2.5em; }\n    .select select[multiple] {\n      height: auto;\n      padding: 0; }\n      .select select[multiple] option {\n        padding: 0.5em 1em; }\n  .select:not(.is-multiple):not(.is-loading):hover::after {\n    border-color: #363636; }\n  .select.is-white:not(:hover)::after {\n    border-color: white; }\n  .select.is-white select {\n    border-color: white; }\n    .select.is-white select:hover, .select.is-white select.is-hovered {\n      border-color: #f2f2f2; }\n    .select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25); }\n  .select.is-black:not(:hover)::after {\n    border-color: #0a0a0a; }\n  .select.is-black select {\n    border-color: #0a0a0a; }\n    .select.is-black select:hover, .select.is-black select.is-hovered {\n      border-color: black; }\n    .select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25); }\n  .select.is-light:not(:hover)::after {\n    border-color: whitesmoke; }\n  .select.is-light select {\n    border-color: whitesmoke; }\n    .select.is-light select:hover, .select.is-light select.is-hovered {\n      border-color: #e8e8e8; }\n    .select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25); }\n  .select.is-dark:not(:hover)::after {\n    border-color: #363636; }\n  .select.is-dark select {\n    border-color: #363636; }\n    .select.is-dark select:hover, .select.is-dark select.is-hovered {\n      border-color: #292929; }\n    .select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25); }\n  .select.is-primary:not(:hover)::after {\n    border-color: #00d1b2; }\n  .select.is-primary select {\n    border-color: #00d1b2; }\n    .select.is-primary select:hover, .select.is-primary select.is-hovered {\n      border-color: #00b89c; }\n    .select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25); }\n  .select.is-link:not(:hover)::after {\n    border-color: #3273dc; }\n  .select.is-link select {\n    border-color: #3273dc; }\n    .select.is-link select:hover, .select.is-link select.is-hovered {\n      border-color: #2366d1; }\n    .select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25); }\n  .select.is-info:not(:hover)::after {\n    border-color: #3298dc; }\n  .select.is-info select {\n    border-color: #3298dc; }\n    .select.is-info select:hover, .select.is-info select.is-hovered {\n      border-color: #238cd1; }\n    .select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 152, 220, 0.25); }\n  .select.is-success:not(:hover)::after {\n    border-color: #48c774; }\n  .select.is-success select {\n    border-color: #48c774; }\n    .select.is-success select:hover, .select.is-success select.is-hovered {\n      border-color: #3abb67; }\n    .select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25); }\n  .select.is-warning:not(:hover)::after {\n    border-color: #ffdd57; }\n  .select.is-warning select {\n    border-color: #ffdd57; }\n    .select.is-warning select:hover, .select.is-warning select.is-hovered {\n      border-color: #ffd83d; }\n    .select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25); }\n  .select.is-danger:not(:hover)::after {\n    border-color: #f14668; }\n  .select.is-danger select {\n    border-color: #f14668; }\n    .select.is-danger select:hover, .select.is-danger select.is-hovered {\n      border-color: #ef2e55; }\n    .select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25); }\n  .select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem; }\n  .select.is-medium {\n    font-size: 1.25rem; }\n  .select.is-large {\n    font-size: 1.5rem; }\n  .select.is-disabled::after {\n    border-color: #7a7a7a; }\n  .select.is-fullwidth {\n    width: 100%; }\n    .select.is-fullwidth select {\n      width: 100%; }\n  .select.is-loading::after {\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none; }\n  .select.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .select.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n  .select.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative; }\n  .file.is-white .file-cta {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a; }\n  .file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a; }\n  .file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a; }\n  .file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a; }\n  .file.is-black .file-cta {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white; }\n  .file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n    background-color: #040404;\n    border-color: transparent;\n    color: white; }\n  .file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white; }\n  .file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n    background-color: black;\n    border-color: transparent;\n    color: white; }\n  .file.is-light .file-cta {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-dark .file-cta {\n    background-color: #363636;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: #fff; }\n  .file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n    background-color: #292929;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-primary .file-cta {\n    background-color: #00d1b2;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n    background-color: #00c4a7;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);\n    color: #fff; }\n  .file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n    background-color: #00b89c;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-link .file-cta {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff; }\n  .file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-info .file-cta {\n    background-color: #3298dc;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n    background-color: #2793da;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 152, 220, 0.25);\n    color: #fff; }\n  .file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n    background-color: #238cd1;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-success .file-cta {\n    background-color: #48c774;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n    background-color: #3ec46d;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(72, 199, 116, 0.25);\n    color: #fff; }\n  .file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n    background-color: #3abb67;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-warning .file-cta {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7); }\n  .file.is-danger .file-cta {\n    background-color: #f14668;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n    background-color: #f03a5f;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n    color: #fff; }\n  .file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n    background-color: #ef2e55;\n    border-color: transparent;\n    color: #fff; }\n  .file.is-small {\n    font-size: 0.75rem; }\n  .file.is-medium {\n    font-size: 1.25rem; }\n    .file.is-medium .file-icon .fa {\n      font-size: 21px; }\n  .file.is-large {\n    font-size: 1.5rem; }\n    .file.is-large .file-icon .fa {\n      font-size: 28px; }\n  .file.has-name .file-cta {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n  .file.has-name .file-name {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .file.has-name.is-empty .file-cta {\n    border-radius: 4px; }\n  .file.has-name.is-empty .file-name {\n    display: none; }\n  .file.is-boxed .file-label {\n    flex-direction: column; }\n  .file.is-boxed .file-cta {\n    flex-direction: column;\n    height: auto;\n    padding: 1em 3em; }\n  .file.is-boxed .file-name {\n    border-width: 0 1px 1px; }\n  .file.is-boxed .file-icon {\n    height: 1.5em;\n    width: 1.5em; }\n    .file.is-boxed .file-icon .fa {\n      font-size: 21px; }\n  .file.is-boxed.is-small .file-icon .fa {\n    font-size: 14px; }\n  .file.is-boxed.is-medium .file-icon .fa {\n    font-size: 28px; }\n  .file.is-boxed.is-large .file-icon .fa {\n    font-size: 35px; }\n  .file.is-boxed.has-name .file-cta {\n    border-radius: 4px 4px 0 0; }\n  .file.is-boxed.has-name .file-name {\n    border-radius: 0 0 4px 4px;\n    border-width: 0 1px 1px; }\n  .file.is-centered {\n    justify-content: center; }\n  .file.is-fullwidth .file-label {\n    width: 100%; }\n  .file.is-fullwidth .file-name {\n    flex-grow: 1;\n    max-width: none; }\n  .file.is-right {\n    justify-content: flex-end; }\n    .file.is-right .file-cta {\n      border-radius: 0 4px 4px 0; }\n    .file.is-right .file-name {\n      border-radius: 4px 0 0 4px;\n      border-width: 1px 0 1px 1px;\n      order: -1; }\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative; }\n  .file-label:hover .file-cta {\n    background-color: #eeeeee;\n    color: #363636; }\n  .file-label:hover .file-name {\n    border-color: #d5d5d5; }\n  .file-label:active .file-cta {\n    background-color: #e8e8e8;\n    color: #363636; }\n  .file-label:active .file-name {\n    border-color: #cfcfcf; }\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap; }\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a; }\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis; }\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em; }\n  .file-icon .fa {\n    font-size: 14px; }\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700; }\n  .label:not(:last-child) {\n    margin-bottom: 0.5em; }\n  .label.is-small {\n    font-size: 0.75rem; }\n  .label.is-medium {\n    font-size: 1.25rem; }\n  .label.is-large {\n    font-size: 1.5rem; }\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem; }\n  .help.is-white {\n    color: white; }\n  .help.is-black {\n    color: #0a0a0a; }\n  .help.is-light {\n    color: whitesmoke; }\n  .help.is-dark {\n    color: #363636; }\n  .help.is-primary {\n    color: #00d1b2; }\n  .help.is-link {\n    color: #3273dc; }\n  .help.is-info {\n    color: #3298dc; }\n  .help.is-success {\n    color: #48c774; }\n  .help.is-warning {\n    color: #ffdd57; }\n  .help.is-danger {\n    color: #f14668; }\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem; }\n\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start; }\n  .field.has-addons .control:not(:last-child) {\n    margin-right: -1px; }\n  .field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n  .field.has-addons .control:first-child:not(:only-child) .button,\n  .field.has-addons .control:first-child:not(:only-child) .input,\n  .field.has-addons .control:first-child:not(:only-child) .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n  .field.has-addons .control:last-child:not(:only-child) .button,\n  .field.has-addons .control:last-child:not(:only-child) .input,\n  .field.has-addons .control:last-child:not(:only-child) .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0; }\n  .field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n  .field.has-addons .control .input:not([disabled]):hover,\n  .field.has-addons .control .input:not([disabled]).is-hovered,\n  .field.has-addons .control .select select:not([disabled]):hover,\n  .field.has-addons .control .select select:not([disabled]).is-hovered {\n    z-index: 2; }\n  .field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n  .field.has-addons .control .input:not([disabled]):focus,\n  .field.has-addons .control .input:not([disabled]).is-focused,\n  .field.has-addons .control .input:not([disabled]):active,\n  .field.has-addons .control .input:not([disabled]).is-active,\n  .field.has-addons .control .select select:not([disabled]):focus,\n  .field.has-addons .control .select select:not([disabled]).is-focused,\n  .field.has-addons .control .select select:not([disabled]):active,\n  .field.has-addons .control .select select:not([disabled]).is-active {\n    z-index: 3; }\n    .field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n    .field.has-addons .control .input:not([disabled]):focus:hover,\n    .field.has-addons .control .input:not([disabled]).is-focused:hover,\n    .field.has-addons .control .input:not([disabled]):active:hover,\n    .field.has-addons .control .input:not([disabled]).is-active:hover,\n    .field.has-addons .control .select select:not([disabled]):focus:hover,\n    .field.has-addons .control .select select:not([disabled]).is-focused:hover,\n    .field.has-addons .control .select select:not([disabled]):active:hover,\n    .field.has-addons .control .select select:not([disabled]).is-active:hover {\n      z-index: 4; }\n  .field.has-addons .control.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1; }\n  .field.has-addons.has-addons-centered {\n    justify-content: center; }\n  .field.has-addons.has-addons-right {\n    justify-content: flex-end; }\n  .field.has-addons.has-addons-fullwidth .control {\n    flex-grow: 1;\n    flex-shrink: 0; }\n\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start; }\n  .field.is-grouped > .control {\n    flex-shrink: 0; }\n    .field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem; }\n    .field.is-grouped > .control.is-expanded {\n      flex-grow: 1;\n      flex-shrink: 1; }\n  .field.is-grouped.is-grouped-centered {\n    justify-content: center; }\n  .field.is-grouped.is-grouped-right {\n    justify-content: flex-end; }\n  .field.is-grouped.is-grouped-multiline {\n    flex-wrap: wrap; }\n    .field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n      margin-bottom: 0.75rem; }\n    .field.is-grouped.is-grouped-multiline:last-child {\n      margin-bottom: -0.75rem; }\n    .field.is-grouped.is-grouped-multiline:not(:last-child) {\n      margin-bottom: 0; }\n\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex; } }\n\n.field-label .label {\n  font-size: inherit; }\n\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem; } }\n\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right; }\n    .field-label.is-small {\n      font-size: 0.75rem;\n      padding-top: 0.375em; }\n    .field-label.is-normal {\n      padding-top: 0.375em; }\n    .field-label.is-medium {\n      font-size: 1.25rem;\n      padding-top: 0.375em; }\n    .field-label.is-large {\n      font-size: 1.5rem;\n      padding-top: 0.375em; } }\n\n.field-body .field .field {\n  margin-bottom: 0; }\n\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1; }\n    .field-body .field {\n      margin-bottom: 0; }\n    .field-body > .field {\n      flex-shrink: 1; }\n      .field-body > .field:not(.is-narrow) {\n        flex-grow: 1; }\n      .field-body > .field:not(:last-child) {\n        margin-right: 0.75rem; } }\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: left; }\n  .control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n  .control.has-icons-right .select:focus ~ .icon {\n    color: #4a4a4a; }\n  .control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n  .control.has-icons-right .select.is-small ~ .icon {\n    font-size: 0.75rem; }\n  .control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n  .control.has-icons-right .select.is-medium ~ .icon {\n    font-size: 1.25rem; }\n  .control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n  .control.has-icons-right .select.is-large ~ .icon {\n    font-size: 1.5rem; }\n  .control.has-icons-left .icon, .control.has-icons-right .icon {\n    color: #dbdbdb;\n    height: 2.5em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.5em;\n    z-index: 4; }\n  .control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.5em; }\n  .control.has-icons-left .icon.is-left {\n    left: 0; }\n  .control.has-icons-right .input,\n  .control.has-icons-right .select select {\n    padding-right: 2.5em; }\n  .control.has-icons-right .icon.is-right {\n    right: 0; }\n  .control.is-loading::after {\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4; }\n  .control.is-loading.is-small:after {\n    font-size: 0.75rem; }\n  .control.is-loading.is-medium:after {\n    font-size: 1.25rem; }\n  .control.is-loading.is-large:after {\n    font-size: 1.5rem; }\n\n/* normalize css starts here */\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n/* normalize css ends here */\nbody {\n  padding: 30px;\n  width: 300px;\n  background: #f7f7f7; }\n\n.settings {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (random, alphabet, size) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  var step = Math.ceil(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var i = step
    var bytes = random(i)
    while (i--) {
      id += alphabet[bytes[i] & mask] || ''
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,f,r={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(k)}function k(){var n,l,i,t,o,f,r;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,f=(o=(l=n).__v).__e,(r=l.__P)&&(i=[],t=T(r,o,s({},o),l.__n,void 0!==r.ownerSVGElement,null,i,null==f?m(o):f),$(i,o),t!=f&&w(o)))}function _(n,l,u,i,t,o,f,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==r&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=T(n,u,p=p||r,i,t,o,f,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||P(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],i)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,i,t){var o,f,r,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(f in i)u&&f in u||C(o,f,"");if(u)for(r in u)i&&u[r]===i[r]||C(o,r,u[r])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,i,t,o,f,r,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&t[a.__c],C=a?x?x.props.value:a.__:t,i.__c?g=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=i.__e,u.__k=i.__k,h.__h.length&&r.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,f,r,e,c),h.base=u.__e,h.__h.length&&r.push(h),g&&(h.__E=h.__=null),h.__e=null}else u.__e=j(i.__e,u,i,t,o,f,r,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,f,c){var s,a,h,v,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||r).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===r)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,d,y,t,c),l.__k=l.props.children,v||_(n,l,u,i,"foreignObject"!==l.type&&t,o,f,r,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,f;if(n.unmount&&n.unmount(l),(t=l.ref)&&z(t,null,u),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=null,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(f=0;f<t.length;f++)t[f]&&A(t[f],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,i){var t,f,c;n.__&&n.__(l,u),f=(t=i===o)?null:i&&i.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(t?u:i||u).__k=l,f||r,r,void 0!==u.ownerSVGElement,i&&!t?[i]:f?null:e.slice.call(u.childNodes),c,i||r,t),$(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError)u.setState(u.constructor.getDerivedStateFromError(n));else{if(null==u.componentDidCatch)continue;u.componentDidCatch(n)}return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},d.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=r,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return A; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,i=[],o=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function a(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u);var r=u.__H||(u.__H={t:[],u:[]});return t>=r.t.length&&r.t.push({}),r.t[t]}function v(n){return m(x,n)}function m(n,r,i){var o=a(t++);return o.__c||(o.__c=u,o.i=[i?i(r):x(void 0,r),function(t){var u=n(o.i[0],t);o.i[0]!==u&&(o.i[0]=u,o.__c.setState({}))}]),o.i}function p(n,r){var i=a(t++);q(i.o,r)&&(i.i=n,i.o=r,u.__H.u.push(i))}function l(n,r){var i=a(t++);q(i.o,r)&&(i.i=n,i.o=r,u.__h.push(i))}function d(n){return y(function(){return{current:n}},[])}function s(n,t,u){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function y(n,u){var r=a(t++);return q(r.o,u)?(r.o=u,r.v=n,r.i=n()):r.i}function T(n,t){return y(function(){return n},t)}function w(n){var r=u.context[n.__c];if(!r)return n.__;var i=a(t++);return null==i.i&&(i.i=!0,r.sub(u)),r.props.value}function A(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function F(){i.some(function(n){n.__P&&(n.__H.u.forEach(_),n.__H.u.forEach(g),n.__H.u=[])}),i=[]}function _(n){n.m&&n.m()}function g(n){var t=n.i();"function"==typeof t&&(n.m=t)}function q(n,t){return!n||t.some(function(t,u){return t!==n[u]})}function x(n,t){return"function"==typeof t?t(n):t}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){o&&o(n),t=0,(u=n.__c).__H&&(u.__H.u.forEach(_),u.__H.u.forEach(g),u.__H.u=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i.push(u)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u))})(F))}},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(n,t){t.some(function(n){n.__h.forEach(_),n.__h=n.__h.filter(function(n){return!n.i||g(n)})}),c&&c(n,t)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(n){e&&e(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()})}};
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");


/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");
var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");
var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");
var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");
var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js");

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/Popup/index.js":
/*!****************************!*\
  !*** ./src/Popup/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup.scss */ "./src/Popup/popup.scss");
/* harmony import */ var _popup_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_popup_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/Popup/storage.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_7__);









var Settings = function Settings(_ref) {
  var goBack = _ref.goBack;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      country = _useState2[0],
      setCountry = _useState2[1];

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!country) return;
    _storage__WEBPACK_IMPORTED_MODULE_6__["default"].set({
      country: country
    });
  }, [country]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = setCountry;
              _context.next = 3;
              return _storage__WEBPACK_IMPORTED_MODULE_6__["default"].get('country');

            case 3:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    "class": "page"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("a", {
    href: "#",
    onClick: function onClick(e) {
      return goBack('home');
    },
    "class": "has-text-dark is-size-6 settings"
  }, "Back"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("h2", {
    "class": "title is-size-3"
  }, "Settings"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    "class": "field"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("label", {
    "class": "label"
  }, "Country"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    "class": "control"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    "class": "select"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("select", {
    value: country,
    onChange: function onChange(e) {
      return setCountry(e.target.value);
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("option", {
    value: "de"
  }, "Deutchland"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("option", {
    value: "ch"
  }, "Schweiz"))))));
};

var Popup = function Popup() {
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // generate user id if not defined
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _storage__WEBPACK_IMPORTED_MODULE_6__["default"].get('userID');

            case 2:
              if (_context2.sent) {
                _context2.next = 4;
                break;
              }

              _storage__WEBPACK_IMPORTED_MODULE_6__["default"].set({
                userID: shortid__WEBPACK_IMPORTED_MODULE_7___default.a.generate()
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, []);

  var startStudy = function startStudy(e) {
    e.preventDefault();
    chrome.tabs.query({
      active: true,
      currentWindow: true
    },
    /*#__PURE__*/
    function () {
      var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(tabs) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = chrome.tabs;
                _context3.t1 = tabs[0].id;
                _context3.next = 4;
                return _storage__WEBPACK_IMPORTED_MODULE_6__["default"].get('country');

              case 4:
                _context3.t2 = _context3.sent;
                _context3.next = 7;
                return _storage__WEBPACK_IMPORTED_MODULE_6__["default"].get('userID');

              case 7:
                _context3.t3 = _context3.sent;
                _context3.t4 = {
                  action: 'startSurvey',
                  lang: _context3.t2,
                  userID: _context3.t3
                };
                _context3.t5 = {
                  payload: _context3.t4
                };

                _context3.t0.sendMessage.call(_context3.t0, _context3.t1, _context3.t5);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useState"])('home'),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  return Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    id: "popup"
  }, page == 'home' && Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("div", {
    "class": "page"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("h1", {
    "class": "title"
  }, "Better Food Choices"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("h2", {
    "class": "subtitle"
  }, "Study"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("a", {
    href: "#",
    onClick: function onClick(e) {
      return setPage('settings');
    },
    "class": "has-text-dark is-size-6 settings"
  }, "Settings"), Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])("button", {
    "class": "button is-primary",
    onClick: startStudy
  }, "Start study")), page == 'settings' && Object(preact__WEBPACK_IMPORTED_MODULE_3__["h"])(Settings, {
    goBack: setPage
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/Popup/popup.scss":
/*!******************************!*\
  !*** ./src/Popup/popup.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./popup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Popup/popup.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/Popup/storage.js":
/*!******************************!*\
  !*** ./src/Popup/storage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Storage);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Storage, null, [{
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(key) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (res) {
                  chrome.storage.sync.get([key], function (result) {
                    res(result[key]);
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(obj) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (res) {
                  chrome.storage.sync.set(obj, function () {
                    res();
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function set(_x2) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }]);

  return Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _Popup_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup/index.js */ "./src/Popup/index.js");


Object(preact__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_Popup_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=popup.js.map