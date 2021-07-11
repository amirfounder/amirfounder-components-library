import React, { useContext, createContext, useRef, useDebugValue, createElement, useState } from 'react';

const ThemeContext = /*#__PURE__*/createContext();
/**
 * @name ThemeProvider
 * @description Renders the theme styles context onto the page
 * @param {*} props Props
 * @prop theme
 * @returns Component
 */

const ThemeProvider = ({
  theme,
  ...props
}) => {
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
/**
 * @name useThemeContext
 * @description Wrapper for the useContext(ThemeContext) method.
 * @returns Object
 */


const useThemeContext = () => useContext(ThemeContext);

function _extends() {
  _extends = Object.assign || function (target) {
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

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n=b$1?Symbol.for("react.forward_ref"):60112,p=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g$1:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z$1(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k$1;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g$1;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A$1(a)||z$1(a)===l};reactIs_production_min.isConcurrentMode=A$1;reactIs_production_min.isContextConsumer=function(a){return z$1(a)===k$1};reactIs_production_min.isContextProvider=function(a){return z$1(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z$1(a)===n};reactIs_production_min.isFragment=function(a){return z$1(a)===e};reactIs_production_min.isLazy=function(a){return z$1(a)===t};
reactIs_production_min.isMemo=function(a){return z$1(a)===r};reactIs_production_min.isPortal=function(a){return z$1(a)===d};reactIs_production_min.isProfiler=function(a){return z$1(a)===g$1};reactIs_production_min.isStrictMode=function(a){return z$1(a)===f};reactIs_production_min.isSuspense=function(a){return z$1(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g$1||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y||a.$$typeof===v$1)};reactIs_production_min.typeOf=z$1;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$1.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$1.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_button__2X_Ir{line-height:2px}";
var styles = {"button":"Button-module_button__2X_Ir"};
styleInject(css_248z);

/**
 * @nmae Button
 * @description Renders the Button component
 * @param {*} props Props
 * @prop backgroundColor - 'background-color' css property
 * @prop borderColor - 'border-color' css property
 * @prop color - 'color' css property
 * @prop hoverBorderColor - 'border-color' css property for :hover selector
 * @prop hoverBackgroundColor - 'background-color' css property for :hover selector
 * @prop hoverColor - 'color' css property for :hover selector
 * @prop fontSize - 'font-size' css property
 * @prop theme - theme property : pass the theme object
 * @prop padding - 'padding' css property
 * @prop size - abstract prop for size
 * @prop variant - abstract prop for border, background, 
 * @returns Component
 */

const Button = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: styles.main,
    theme: theme ? theme : null
  }, props), props.children);
};
Button.PropTypes = {
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['outline', 'filled'])
};

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs = reactIs$1.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v(){return (v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$1.exports.typeOf(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return "function"==typeof e}function _(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),R="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0;}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e);},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r);},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(s);}}},q=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return (Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return !1}return !0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a);}o.push(s),this.staticRulesId=s;}else {for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f;}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new stylis_min(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=React.createContext();ue.Consumer;var de=React.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return useContext(ue)||he}function me(){return useContext(de)||pe}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return "-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return "";if(N(e))return "."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$1.exports.isElement(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{useRef(),Ie.has(n)||(console.warn(n),Ie.add(n));}catch(e){Ce.test(e.message)&&Ie.delete(n);}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a);}return e}var ze=React.createContext();ze.Consumer;var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&useDebugValue(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t];})),[r,o]}(Oe(t,useContext(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return "production"!==process.env.NODE_ENV&&useDebugValue(s),"production"!==process.env.NODE_ENV&&!t&&r&&r(s),s}(s,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,index,_):!N||index(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,createElement(_,C)}(C,e,t,P)};return O.displayName=f,(C=React.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var i=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+i+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(f,g)),C.toString=function(){return "."+C.styledComponentId},s&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!reactIs$1.exports.isValidElementType(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);

const generateColumnJustifySelf = props => {
  // SETUP
  const alignment = props.alignment;
  const theme = props.theme && props.theme.column; // IMPORTANCE 1 --> EXACT

  if (alignment) return alignment.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.alignment) return theme.alignment.toLowerCase(); // DEFAULT

  return 'inherit';
};

/**
 * Styling for the Column Component
 */

const StyledColumn = qe.div`
  align-items: center;
  justify-self: ${props => generateColumnJustifySelf(props)};
`;

/**
 * @name Column
 * @description Renders the Column Component
 * @param {*} props Props
 * @prop alignment
 * @prop theme
 * @returns Component
 */

const Column = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledColumn, _extends({
    className: "af-column",
    theme: theme ? theme : null
  }, props), props.children);
};

/**
 * @name generateBackgroundColorStyle
 * @description Converts the background color  into a background color for the container
 * @param {String} backgroundColor Background color 
 * @returns String - color
 */
const generateContainerBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor;
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (backgroundColor) return backgroundColor.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase(); // DEFAULT

  return 'white';
};
const generateContainerMaxWidth = props => {
  // SETUP
  const maxWidth = props.maxWidth && props.maxWidth.toLowerCase();
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (maxWidth) return maxWidth; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.maxWidth) return theme.maxWidth.toLowerCase(); // NO DEFAULT
};
/**
 * @name handleSizeStyle
 * @description Converts the height  into a height for the contianer
 * @param {String} height Height 
 * @returns String height
 */

const generateContainerMinHeight = props => {
  // SETUP
  const minHeight = props.minHeight;
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (minHeight) return minHeight.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.minHeight) return theme.minHeight.toLowerCase(); // NO DEFAULT
};
/**
 * @name handleWidthStyle
 * @description Converts the width  into a width for the container
 * @param {String} width Width 
 * @returns String width
 */

const generateContainerMinWidth = props => {
  // SETUP
  const minWidth = props.minWidth;
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (minWidth) return minWidth.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.minWidth) return theme.minWidth.toLowerCase(); // NO DEFAULT
};
const generateContainerMargin = props => {
  // SETUP
  const margin = props.margin && props.margin.toLowerCase();
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (margin) return margin; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.margin) return theme.margin.toLowerCase(); // DEFAULT

  return '0px';
};
const generateContainerPadding = props => {
  // SETUP
  const padding = props.padding;
  const size = props.size;
  const theme = props.theme && props.theme.container; // IMPORTANCE 1 --> EXACT

  if (padding) return padding.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size === 'large') return '40px';
    if (size === 'medium') return '20px';
    if (size === 'small') return '10px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.padding) return theme.padding.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      if (theme.size === 'large') return '40px';
      if (theme.size === 'medium') return '20px';
      if (theme.size === 'small') return '10px';
    }
  } // DEFAULT


  return '20px';
};

const StyledContainer = qe.div`
  background-color: ${props => generateContainerBackgroundColor(props)};
  max-height: ${props => generateContainerMinHeight(props)};
  max-width: ${props => generateContainerMaxWidth(props)};
  min-height: ${props => generateContainerMinHeight(props)};
  min-width: ${props => generateContainerMinWidth(props)};
  padding: ${props => generateContainerPadding(props)};
  margin: ${props => generateContainerMargin(props)};
`;

/**
 * @name Container
 * @description Renders the Container component
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @prop margin
 * @prop maxHeight
 * @prop maxWidth
 * @prop minHeight
 * @prop minWidth
 * @prop padding
 * @returns Component
 */

const Container = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledContainer, _extends({
    className: "af-container",
    theme: theme ? theme : null
  }, props), props.children);
};

const generateSectionGridTemplateColumns = props => {
  // SETUP
  const columns = props.columns && props.columns.toLowerCase();
  const children = props.children; // IMPORTANCE 1 --> EXACT

  if (columns) return columns; // IF CHILDREN LENGTH > 1

  if (children && children.length && children.length > 1) return `repeat(${children.length}, minmax(100px, 1fr))`; // DEFAULT

  return '1fr';
};
const generateSectionAlignItems = props => {
  // SETUP
  const alignItems = props.alignItems && props.alignItems.toLowerCase();
  const verticalAlignment = props.verticalAlignment && props.verticalAlignment.toLowerCase();
  const theme = props.theme && props.theme.section; // IMPORTANCE 1 --> EXACT

  if (alignItems) return alignItems; // IMPORTANCE 2 --> ABSTRACT

  if (verticalAlignment) return verticalAlignment; // IMPORTANCE 3 --> GLOBAL

  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.alignItems) return theme.alignItems.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) ABSTRACT

    if (theme.verticalAlignment) return theme.verticalAlignment.toLowerCase();
  } // DEFAULT


  return 'center';
};
const generateSectionPadding = props => {
  // SETUP
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.section; // IMPORTANCE 1 --> EXACT

  if (padding) return padding; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.padding) return theme.padding.toLowerCase(); // DEFAULT

  return '0px';
};
const generateSectionMinHeight = props => {
  // SETUP
  const minHeight = props.minHeight && props.minHeight.toLowerCase();
  const theme = props.theme && props.theme.section; // IMPORTANCE 1 --> EXACT

  if (minHeight) return minHeight; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.minHeight) return theme.minHeight.toLowerCase(); // DEFAULT

  return '0px';
};
const generateBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.section; // IMPORTANCE 1 --> EXACT

  if (backgroundColor) return backgroundColor; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase(); // DEFAULT

  return 'transparent';
};

const StyledSection = qe.div`
  z-index: 0;
  grid-template-columns: ${props => generateSectionGridTemplateColumns(props)};
  align-items: ${props => generateSectionAlignItems(props)};
  padding: ${props => generateSectionPadding(props)};
  min-height: ${props => generateSectionMinHeight(props)};
  background-color: ${props => generateBackgroundColor(props)};
  display: grid;
  column-gap: 1rem;
  align-items: center;
`;

/**
 * @name Section
 * @description Redners the Section component
 * @param {*} Props props
 * @prop alignItems
 * @prop backgroundColor
 * @prop columns
 * @prop minHeight
 * @prop padding
 * @prop theme
 * @prop verticalAlignment
 * @returns Component
 */

const Section = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledSection, _extends({
    className: "af-section",
    padding: props.padding ? props.padding : '0 3vw',
    theme: theme ? theme : null
  }, props), props.children);
};

const generateHeaderBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor;
  const theme = props.theme && props.theme.header; // IMPORTANCE 1 --> EXACT

  if (backgroundColor) return backgroundColor.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase();
  return 'white';
};
const generateHeaderBoxShadow = props => {
  // SETUP
  const shadow = props.shadow;
  const theme = props.theme && props.theme.header; // IMPORTANCE 1 --> EXACT

  if (shadow) return '0px 10px 15px rgba(0,0,0,0.15)'; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.shadow) return shadow.toLowerCase(); // NO DEFAULT
};
const generateHeaderHeight = props => {
  // SETUP
  const size = props.size;
  const height = props.height;
  const theme = props.theme && props.theme.header; // IMPORTANCE 1 --> EXACT

  if (height) return height.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size.toLowerCase() === 'large') return '10vh';
    if (size.toLowerCase() === 'medium') return '7vh';
    if (size.toLowerCase() === 'small') return '5vh';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.height) return theme.height.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '10vh';
      if (theme.size.toLowerCase() === 'medium') return '7vh';
      if (theme.size.toLowerCase() === 'small') return '5vh';
    }
  }

  return '7vh';
};
const generateHeaderMaxHeight = props => {
  // SETUP
  const size = props.size;
  const maxHeight = props.maxHeight;
  const theme = props.theme && props.theme.header; // IMPORTANCE 1 --> EXACT

  if (maxHeight) return maxHeight.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size.toLowerCase() === 'large') return '130px';
    if (size.toLowerCase() === 'medium') return '100px';
    if (size.toLowerCase() === 'small') return '70px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.maxHeight) return theme.maxHeight.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '130px';
      if (theme.size.toLowerCase() === 'medium') return '100px';
      if (theme.size.toLowerCase() === 'small') return '70px';
    }
  }

  return '100px';
};
const generateHeaderMinHeight = props => {
  // SETUP
  const size = props.size;
  const minHeight = props.minHeight;
  const theme = props.theme && props.theme.header; // IMPORTANCE 1 --> EXACT

  if (minHeight) return minHeight.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size.toLowerCase() === 'large') return '100px';
    if (size.toLowerCase() === 'medium') return '70px';
    if (size.toLowerCase() === 'small') return '40px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.minHeight) return theme.minHeight.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '100px';
      if (theme.size.toLowerCase() === 'medium') return '70px';
      if (theme.size.toLowerCase() === 'small') return '40px';
    }
  }

  return '80px';
};

const StyledHeader = qe.div`
  z-index: 99;
  align-items: center;
  display: grid;
  background-color: ${props => generateHeaderBackgroundColor(props)};
  box-shadow: ${props => generateHeaderBoxShadow(props)};
  height: ${props => generateHeaderHeight(props)};
  max-height: ${props => generateHeaderMaxHeight(props)};
  min-height: ${props => generateHeaderMinHeight(props)};
`;

/**
 * @name Header
 * @description Renders the Header compoennt
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @prop height
 * @prop maxHeight
 * @prop minHeight
 * @prop padding
 * @prop shadow
 * @prop size
 * @returns Component
 */

const Header = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledHeader, _extends({
    className: "af-header",
    theme: theme ? theme : null
  }, props), /*#__PURE__*/React.createElement(Section, _extends({
    padding: props.padding ? props.padding : '0 3vw',
    theme: theme ? theme : null,
    verticalAlignment: "center"
  }, props), props.children));
};

const Constants = Object.freeze({
  PROPS: {
    SIZES: {
      LARGE: 'large',
      MEDIUM: 'medium',
      SMALL: 'small'
    },
    FONT_FAMILIES: {
      ROBOTO: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
    }
  }
});

const generateHeadingColor = props => {
  // SETUP
  const color = props.color;
  const theme = props.theme && props.theme.heading; // IMPORTANCE 1 --> EXACT

  if (color) return color.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.color) return theme.color.toLowerCase(); // DEFAULT

  return 'black';
};
const generateHeadingFontWeight = props => {
  // SETUP
  const fontWeight = props.fontWeight;
  const theme = props.theme && props.theme.heading; // IMPORTANCE 1 --> EXACT

  if (fontWeight) return fontWeight.toLowerCase();
  if (theme && theme.heading) return theme.heading.toLowerCase(); // DEFAULT

  return fontWeight ? fontWeight.toLowerCase() : 300;
};
const generateHeadingFontSize = (level, props) => {
  // SETUP
  const fontSize = props.fontSize;
  const theme = props.theme && props.theme.heading; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize.toLowerCase(); // IMPORTANCE 2 --> LEVEL

  if (level) {
    switch (Number(level)) {
      case 1:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 1
        if (theme && theme.one && theme.one.fontSize) return theme.one.fontSize.toLowerCase(); // DEFAULT LEVEL 1

        return '4rem';

      case 2:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 2
        if (theme && theme.two && theme.one.fontSize) return theme.two.fontSize.toLowerCase(); // DEFAULT LEVEL 2

        return '3rem';

      case 3:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 3
        if (theme && theme.three && theme.one.fontSize) return theme.three.fontSize.toLowerCase(); // DEFAULT LEVEL 3

        return '2rem';

      case 4:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 4
        if (theme && theme.four && theme.one.fontSize) return theme.four.fontSize.toLowerCase(); // DEFAULT LEVEL 4

        return '1.6rem';

      case 5:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 5
        if (theme && theme.five && theme.one.fontSize) return theme.five.fontSize.toLowerCase(); // DEFAULT LEVEL 5

        return '1.2rem';

      case 6:
        // IMPORTANCE 2.1 --> (GLOBAL) LEVEL 6
        if (theme && theme.six && theme.one.fontSize) return theme.six.fontSize.toLowerCase(); // DEFAULT LEVEL 6

        return '0.8rem';
    }
  } // DEFAULT


  return '3rem';
};
const generateHeadingBackgroundRepeat = props => {
  // SETUP
  const background = props.background;
  const backgroundRepeat = props.backgroundRepeat; // ONLY APPLY IF BACKGROUND IS PRESENT

  if (background) {
    if (backgroundRepeat) return backgroundRepeat.toLowerCase();
    return 'no-repeat';
  } // NO DEFAULT

};
const generateHeadingBackgroundSize = props => {
  // SETUP
  const background = props.background;
  const backgroundSize = props.backgroundSize; // ONLY APPLY IF BACKGROUND IS PRESENT

  if (background) {
    if (backgroundSize) backgroundSize.toLowerCase();
    return 'cover';
  } // NO DEFAULT

};
const generateHeadingBackgroundAttachment = props => {
  // SETUP
  const background = props.background;
  const backgroundAttachment = props.backgroundAttachment; // ONLY APPLY IF BACKGROUND IS PRESENT

  if (background) {
    if (backgroundAttachment) return backgroundAttachment.toLowerCase();
    return 'scroll';
  } // NO DEFAULT

};
const generateHeadingBackground = props => {
  // SETUP
  const background = props.background; // ONLY APPLY IF BACKGROUND IS PRESENT

  if (background) return `url(${background})`; // DEFAULT

  return 'none';
};
const generateHeadingWebkitTextFillColor = props => {
  // SETUP
  const background = props.background; // ONLY APPLY IF BACKGROUND IS PRESENT

  if (background) return 'transparent'; // NO DEFAULT
};

const shared = Ae`
  background: ${props => generateHeadingBackground(props)};
  background-attachment: ${props => generateHeadingBackgroundAttachment(props)};
  background-clip: text;
  background-repeat: ${props => generateHeadingBackgroundRepeat(props)};
  background-size: ${props => generateHeadingBackgroundSize(props)};
  color: ${props => generateHeadingColor(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-weight: ${props => generateHeadingFontWeight(props)};
  margin-block-start: 0em;
  margin-block-end: .5em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${props => generateHeadingWebkitTextFillColor(props)};
`;
const StyledH1 = qe.h1`
  ${shared}
  font-size: ${props => generateHeadingFontSize(1, props)};
`;
const StyledH2 = qe.h2`
  ${shared}
  font-size: ${props => generateHeadingFontSize(2, props)};
`;
const StyledH3 = qe.h3`
  ${shared}
  font-size: ${props => generateHeadingFontSize(3, props)};
`;
const StyledH4 = qe.h4`
  ${shared}
  font-size: ${props => generateHeadingFontSize(4, props)};
`;
const StyledH5 = qe.h5`
  ${shared}
  font-size: ${props => generateHeadingFontSize(5, props)};
`;
const StyledH6 = qe.h6`
  ${shared}
  font-size: ${props => generateHeadingFontSize(6, props)};
`;

/**
 * @name Heading
 * @description Renders the Heading component
 * @param {*} props Props
 * @prop background
 * @prop backgroundAttachment
 * @prop backgroundRepeat
 * @prop backgroundSize
 * @prop color
 * @prop fontSize
 * @prop fontWeight
 * @prop theme
 * @returns Component
 */

const Heading = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, !props.level ? /*#__PURE__*/React.createElement(StyledH2, _extends({
    className: "af-heading"
  }, props), props.children) : Number(props.level) === 1 ? /*#__PURE__*/React.createElement(StyledH1, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : Number(props.level) === 2 ? /*#__PURE__*/React.createElement(StyledH2, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : Number(props.level) === 3 ? /*#__PURE__*/React.createElement(StyledH3, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : Number(props.level) === 4 ? /*#__PURE__*/React.createElement(StyledH4, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : Number(props.level) === 5 ? /*#__PURE__*/React.createElement(StyledH5, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : Number(props.level) === 6 ? /*#__PURE__*/React.createElement(StyledH6, _extends({
    className: "af-heading",
    theme: theme ? theme : null
  }, props), props.children) : /*#__PURE__*/React.createElement(StyledH2, _extends({
    className: "af-heading"
  }, props), props.children));
};

const generateInputWidth = props => {
  // SETUP
  const width = props.width && props.width.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const padding = props.padding;
  const theme = props.theme && props.theme.input; // IMPORTANCE 1 --> EXACT

  if (width) {
    // IMPORTANCE 1.1 --> PADDING
    if (padding) return `calc(${width} - ${getHorizontalPadding(padding)})`; // DEFAULT

    return width;
  }

  if (padding) return `calc(100% - ${getHorizontalPadding(padding)})`; // IMPORTANCE 3 --> SIZE

  if (size) {
    switch (size.toLowerCase()) {
      case 'large':
        return `calc(100% - 30px)`;

      case 'medium':
        return `calc(100% - 20px)`;

      case 'small':
        return `calc(100% - 10px)`;
    }
  } // IMPORTANCE 4 --> GLOBAL


  if (theme) {
    // IMPORTANCE 4.1 --> (GLOBAL) WIDTH
    if (theme.width) {
      // IMPORTANCE 4.1.1 --> (GLOBAL) WIDTH AND (GLOBAL) PADDING
      if (theme.padding) return `calc(${theme.width} - ${getHorizontalPadding(theme.padding)})`; // IMPORTANCE 4.1.2 --> (GLOBAL) WIDTH AND PADDING

      if (padding) return `calc(${theme.width} - ${getHorizontalPadding(padding)})`; // DEFAULT

      return theme.width;
    }

    if (theme.padding) `calc(100% - ${getHorizontalPadding(theme.padding)})`; // IMPORTANCE 4.3 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return `calc(100% - 30px)`;

        case 'medium':
          return `calc(100% - 20px)`;

        case 'small':
          return `calc(100% - 10px)`;
      }
    }
  } // DEFAULT


  return `calc(100% - 20px)`;
};
const generateInputPadding = props => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.input; // IMPORTANCE 1 --> EXACT

  if (padding) return padding.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size === 'large') return '15px';
    if (size === 'medium') return '10px';
    if (size === 'small') return '5px';
  }

  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) PADDING
    if (theme.padding) return theme.padding.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      if (theme.size.toLowerCase() === 'large') return '15px';
      if (theme.size.toLowerCase() === 'medium') return '10px';
      if (theme.size.toLowerCase() === 'small') return '5px';
    }
  } // DEFAULT


  return '10px';
};
const generateInputLineHeight = props => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const theme = props.theme && props.theme.input; // IMPORTANCE 1 --> EXACT

  if (lineHeight) return lineHeight.toLowerCase(); // IMPORTANCE 2 --> SIZE

  switch (size) {
    case 'large':
      return '1.4em';

    case 'medium':
      return '1.2em';

    case 'small':
      return '1em';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.lineHeight) return theme.lineHeight.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size) {
        case 'large':
          return '1.4em';

        case 'medium':
          return '1.2em';

        case 'small':
          return '1em';
      }
    }
  } // DEFAULT


  return '1.2em';
};
const generateInputFontSize = props => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const theme = props.theme && props.theme.input; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size === 'large') return '20px';
    if (size === 'medium') return '16px';
    if (size === 'small') return '12px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) FONT SIZE
    if (theme.fontSize) return theme.fontSize.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return '20px';

        case 'medium':
          return '16px';

        case 'small':
          return '12px';
      }
    }
  } // DEFAULT


  return '16px';
};

const StyledInput = qe.input`
  background-color: #fff;
  border: ;
  border-width: 1px;
  border-radius: 3px;
  border-color: #999;
  border-style: solid;
  display: block;
  font-size: ${props => generateInputFontSize(props)};
  line-height: ${props => generateInputLineHeight(props)};
  margin-block-end: .67em;
  margin-block-start: .67em;
  width: ${props => generateInputWidth(props)};
  padding: ${props => generateInputPadding(props)};
  :focus {
    outline: none;
  }
`;

/**
 * @name Input
 * @description Renders the Input component
 * @param {*} props Props
 * @prop fontSize
 * @prop theme
 * @prop lineHeight
 * @prop padding
 * @prop size
 * @prop width
 * @returns Component
 */

const Input = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    className: "af-input",
    theme: theme ? theme : null
  }, props));
};

const generateLinkColor = props => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 --> EXACT

  if (color) return color.toLowerCase(); // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.color) return theme.color.toLowerCase(); // NO DEFAULT
};
const generateLinkHoverColor = props => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const hoverColor = props.hoverColor && props.hoverColor.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 --> HOVER COLOR

  if (hoverColor) return hoverColor; // IMPORTANCE 2 --> (GLOBAL) HOVER COLOR

  if (theme && theme.hoverColor) return theme.hoverColor.toLowerCase(); // IMPORTANCE 3 --> COLOR

  if (color) {
    switch (color) {
      case 'black':
        return '#666';

      case 'white':
        return '#ccc';
    }
  } // IMPORTANCE 4 --> (GLOBAL) COLOR


  if (theme && theme.color) switch (theme.color.toLowerCase()) {
    case 'black':
      return '#666';

    case 'white':
      return '#ccc';
  } // DEFAULT

  return '#666';
};
const generateLinkFontSize = props => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize; // IMPORTANCE 2 --> SIZE

  switch (size) {
    case 'large':
      return '18px';

    case 'medium':
      return '16px';

    case 'small':
      return '14px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) FONT SIZE
    if (theme.fontSize) return theme.fontSize.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return '18px';

        case 'medium':
          return '16px';

        case 'small':
          return '14px';
      }
    }
  } // NO DEFAULT

};
const generateLinkFontWeight = props => {
  // SETUP
  const weight = props.weight && props.weight.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 --> EXACT 

  if (weight) return weight; // IMPORTANCE 2 --> GLOBALS

  if (theme && theme.weight) return theme.weight.toLowerCase(); // DEFAULT

  return 300;
};
const generateLinkBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 -> EXACT

  if (backgroundColor) return backgroundColor; // IMPORTANCE 2 -> GLOBAL

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase(); // NO DEFAULT
};
const generateLinkHoverBackgroundColor = props => {
  // SETUP
  const hoverBackgroundColor = props.hoverBackgroundColor && props.hoverBackgroundColor.toLowerCase();
  const theme = props.theme && props.theme.link; // IMPORTANCE 1 -> EXACT

  if (hoverBackgroundColor) return hoverBackgroundColor; // IMPORTANCE 2 -> GLOBAL

  if (theme && theme.hover && theme.hover.backgroundColor) return theme.hover.backgroundColor.toLowerCase(); // NO DEFAULT
};
const generateLinkPadding = props => {
  // DEFAULT
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.link;
  console.log(props.theme.link); // IMPORTANCE 1 - EXACT

  if (padding) return padding; // IMPORTANCE 2 - THEME

  if (theme && theme.padding) return theme.padding.toLowerCase(); // NO DEFAULT
};

const StyledLink = qe.div`
  background-color: ${props => generateLinkBackgroundColor(props)};
  color: ${props => generateLinkColor(props)};
  display: inline-block;
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${props => generateLinkFontSize(props)};
  font-weight: ${props => generateLinkFontWeight(props)};
  padding: ${props => generateLinkPadding(props)};
  :hover {
    color: ${props => generateLinkHoverColor(props)};
    background-color: ${props => generateLinkHoverBackgroundColor(props)};
    cursor: pointer;
    transition-duration: .3s;
  }
  :not(:hover) {
    transition-duration: .3s;
  }
`;

const {
  useHistory: useHistory$1
} = require('react-router-dom');
/**
 * @name Link
 * @description Renders the Link component.
 * @param {*} props Props
 * @prop color
 * @prop fontSize
 * @prop hoverColor
 * @prop size
 * @prop theme
 * @prop weight
 * @returns Component
 */

const Link = props => {
  const theme = useThemeContext();
  const history = useHistory$1();
  /**
   * @name handleClick
   * @description Uses history to redirect to the provided path
   */

  const handleClick = () => {
    if (props.to) history.push(props.to);
    if (props.href) window.open(props.href, '_blank');
  };

  return /*#__PURE__*/React.createElement(StyledLink, _extends({
    className: "af-link",
    onClick: handleClick,
    theme: theme ? theme : null
  }, props), props.children);
};

const generateLogoFontSize = props => {
  // SETUP
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const theme = props.theme && props.theme.logo; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    switch (size.toLowerCase()) {
      case 'large':
        return '20px';

      case 'medium':
        return '16px';

      case 'small':
        return '14px';
    }
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.fontSize) return theme.fontSize.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return '20px';

        case 'medium':
          return '16px';

        case 'small':
          return '14px';
      }
    }
  } // DEFAULT


  return '18px';
};
const generateLogoColor = props => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const theme = props.theme && props.theme.logo; // IMPORTANCE 1 --> EXACT

  if (color) return color; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.color) return theme.color; // DEFAULT

  return 'black';
};

const StyledLogo = qe.div`
  color: ${props => generateLogoColor(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${props => generateLogoFontSize(props)};
  font-weight: 300;
  :hover {
    cursor: pointer;
  }
`;

const {
  useHistory
} = require('react-router-dom');
/**
 * @name Logo
 * @description Renders the Logo component
 * @param {*} props Props
 * @prop color
 * @prop fontSize
 * @prop them
 * @returns Component
 */

const Logo = props => {
  const theme = useThemeContext();
  const history = useHistory();
  /**
   * @name handleClick
   * @description Uses history to redirect to the root path '/' if onclick not specified
   * @returns null
   */

  const handleClick = () => props.onClick ? props.onClick() : history.push("/");

  return /*#__PURE__*/React.createElement(StyledLogo, _extends({
    className: "af-logo",
    onClick: handleClick,
    theme: theme ? theme : null
  }, props), props.children ? props.children : 'Amir Sharapov');
};

const generateMenuJustifySelf = props => {
  // SETUP
  const alignment = props.alignment && props.alignment.toLowerCase();
  const theme = props.theme && props.theme.menu; // IMPORTANCE 1 --> EXACT

  if (alignment) {
    switch (alignment) {
      // IF START OR LEFT
      case 'start':
      case 'left':
        return 'start';
      // IF CENTER

      case 'center':
        return 'center';
      // IF END OR RIGHT

      case 'end':
      case 'right':
        return 'end';
      // ELSE ASSUME START

      default:
        return 'start';
    }
  } // IMPORTANCE 2 --> GLOBAL


  if (theme && theme.alignment) switch (theme.alignment) {
    // IF START OR LEFT
    case 'start':
    case 'left':
      return 'start';
    // IF CENTER

    case 'center':
      return 'center';
    // IF END OR RIGHT

    case 'end':
    case 'right':
      return 'end';
    // ELSE ASSUME START

    default:
      return 'start';
  } // NO DEFAULT
};
const generateMenuBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.menu; // IMPORTANCE 1 -> EXACT

  if (backgroundColor) return backgroundColor; // IMPORTANCE 2 -> THEME

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase(); // NO DEFAULT
}; // MENU ITEM

const generateMenuItemDisplay = props => {
  // SETUP
  const display = props.childDisplay && props.childDisplay.toLowerCase();
  const direction = props.direction && props.direction.toLowerCase();
  const theme = props.theme && props.theme.menu; // IMPORTANCE 1 -> EXACT

  if (display) return display.toLowerCase(); // IMPORTANCE 2 -> ABSTRACT

  if (direction) {
    switch (direction) {
      case 'vertical':
        return 'block';

      case 'horizontal':
        return 'inline-block';
    }
  } // IMPORTANCE 3 -> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 -> (GLOBAL) EXACT
    if (theme.childDisplay) return theme.childDisplay.toLowerCase(); // IMPORTANCE 3.2 -> (GLOBAL) ABSTRACT

    if (theme.direction) {
      switch (theme.direction.toLowerCase()) {
        case 'vertical':
          return 'block';

        case 'horizontal':
          return 'inline-block';
      }
    }
  } // DEFAULT


  return 'inline-block';
};
const generateMenuItemPadding = props => {
  // SETUP
  const padding = props.childPadding && props.childPadding.toLowerCase();
  const theme = props.theme && props.theme.menu; // IMPORTANCE 1 --> EXACT

  if (padding) return padding; // IMPORTANCE 2 --> GLOBALS

  if (theme && theme.childPadding) return theme.childPadding.toLowerCase(); // NO DEFAULT
};
const generateMenuItemMargin = (props, childSelector) => {
  // SETUP
  const direction = props.direction && props.direction.toLowerCase();
  const spaceBetween = props.spaceBetween && props.spaceBetween.toLowerCase();
  const theme = props.theme && props.theme.menu; // IF HORIZONTAL

  if (!direction || direction === 'horizontal') switch (childSelector) {
    // IF CHILD IS ONLY CHILD ELEMENT
    case 'only':
      return '0vw';
    // IF CHILD ELEMENT IS NOT FIRST NOR LAST

    case 'not-first-not-last':
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween}`; // IMPORTANCE 2 --> GLOBAL

      if (theme && theme.spaceBetween) return `0px ${theme.spaceBetween}`;
      return '0px 1.5vw';
    // IF CHILD ELEMENT IS FIRST

    case 'first':
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px ${spaceBetween} 0px 0px`; // IMPORTANCE 2 --> GLOBAL

      if (theme && theme.spaceBetween) return `0px ${theme.spaceBetween} 0px 0px`;
      return '0px 1.5vw 0px 0px';
    // IF CHILD ELEMENT IS LAST

    case 'last':
      // IMPORTANCE 1 --> EXACT
      if (spaceBetween) return `0px 0px 0px ${spaceBetween}`; // IMPORTANCE 2 --> GLOBAL

      if (theme && theme.spaceBetween) return `0px 0px 0px ${theme.spaceBetween}`;
      return '0px 0px 0px 1.5vw';
    // ELSE --> ASSUME ONLY ELEMENT

    default:
      return '0vw';
  } // NO DEFAULT
};

const StyledMenu = qe.ul`
  background-color: ${props => generateMenuBackgroundColor(props)};
  justify-self: ${props => generateMenuJustifySelf(props)};
  list-style-type: none;
  position: relative;
  padding: 0px;
  & > li {
    display: ${props => generateMenuItemDisplay(props)};
    padding: ${props => generateMenuItemPadding(props)};
  }
  & > :only-child {
    margin: ${props => generateMenuItemMargin(props, 'only')};
  }
  & > :last-child {
    margin: ${props => generateMenuItemMargin(props, 'last')};
  }
  & > :first-child {
    margin: ${props => generateMenuItemMargin(props, 'first')};
  }
  & > :not(first-child):not(last-child) {
    margin: ${props => generateMenuItemMargin(props, 'not-first-not-last')};
  }
`;

/**
 * @name Menu
 * @description Renders the Menu component
 * @param {*} props Props
 * @prop alignment
 * @prop direction - vertical or horizontal
 * @prop theme
 * @prop padding
 * @prop spaceBetween
 * @returns Component
 */

const Menu = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledMenu, _extends({
    className: "af-menu",
    theme: theme ? theme : null
  }, props), props.children);
};

const StyledMenuItem = qe.li`
  display: inline-block;
  & > div {
    color: black;
  }
`;

const MenuItem = props => {
  return /*#__PURE__*/React.createElement(StyledMenuItem, {
    className: "af-menu-item"
  }, /*#__PURE__*/React.createElement(Link, _extends({
    to: props.to
  }, props), props.children));
};

const generateModalBackground = props => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.modal; // IMPORTANCE 1 --> EXACT

  if (backgroundColor) return backgroundColor; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.backgroundColor) return backgroundColor.toLowerCase(); // DEFAULT

  return 'rgba(0,0,0,0.25)';
};
const generateModalAlignItems = props => {
  // SETUP
  const alignItems = props.alignItems && props.alignItems.toLowerCase();
  const theme = props.theme && props.theme.modal; // IMPORTANCE 1 --> EXACT

  if (alignItems) return alignItems; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.alignItems) return theme.alignItems.toLowerCase(); // DEFAULT

  return 'center';
};
const generateModalJustifyContent = props => {
  // SETUP
  const justifyContent = props.justifyContent && props.justifyContent.toLowerCase();
  const theme = props.theme && props.theme.modal; // IMPORTANCE 1 --> EXACT

  if (justifyContent) return justifyContent; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.justifyContent) return theme.justifyContent.toLowerCase(); // DEFAULT

  return 'center';
};

const StyledModal = qe.div`
  position: fixed;
  top: 0px;
  left: 0px;
`;
const StyledModalBackground = qe.div`
  background-color: ${props => generateModalBackground(props)};
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: ${props => generateModalAlignItems(props)};
  justify-content: ${props => generateModalJustifyContent(props)};
`;

/**
 * @name Modal
 * @description Renders a modal.
 * @param {*} props Props
 * @prop alignItems
 * @prop backgroundColor
 * @prop theme
 * @prop justifyContent
 * @returns Component
 */

const Modal = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledModal, _extends({
    className: "af-modal",
    hidden: !props.show,
    theme: theme ? theme : null
  }, props), /*#__PURE__*/React.createElement(StyledModalBackground, _extends({
    className: "af-modal-background",
    theme: theme ? theme : null
  }, props), /*#__PURE__*/React.createElement(Container, _extends({
    minWidth: props.width ? props.width.toLowercase() : '40vw',
    maxWidth: props.width ? props.width.toLowercase() : '40vw',
    margin: props.margin ? props.margin.toLowercase() : '20px',
    theme: theme ? theme : null
  }, props), props.children)));
};

const generatePageBackgroundColor = props => {
  // SETUP
  const backgroundColor = props.backgroundColor && props.backgroundColor.toLowerCase();
  const theme = props.theme && props.theme.page; // IMPORTANCE 1 --> EXACT

  if (backgroundColor) return backgroundColor; // IMPORTANCE 1 --> GLOBAL

  if (theme && theme.backgroundColor) return theme.backgroundColor.toLowerCase(); // DEFUALT

  return 'transparent';
};

const StyledPage = qe.div`
  z-index: 0;
  background-color: ${props => generatePageBackgroundColor(props)};
`;

/**
 * @name Page
 * @description Renders the Page component
 * @param {*} props Props
 * @prop backgroundColor
 * @prop theme
 * @returns Component
 */

const Page = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledPage, _extends({
    className: "af-page",
    theme: theme ? theme : null
  }, props), props.children);
};

const generateParagraphFontSize = props => {
  // SETUP
  const size = props.size && props.size.toLowerCase();
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const theme = props.theme && props.theme.paragraph; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize.toLowerCase(); // IMPORTANCE 2 --> SIZE

  if (size) {
    if (size.toLowerCase() === 'large') return '18px';
    if (size.toLowerCase() === 'medium') return '16px';
    if (size.toLowerCase() === 'small') return '14px';
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    // IMPORTANCE 3.1 --> (GLOBAL) EXACT
    if (theme.fontSize) return theme.fontSize.toLowerCase(); // IMPORTANCE 3.2 --> (GLOBAL) SIZE

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return '20px';

        case 'medium':
          return '16px';

        case 'small':
          return '12px';
      }
    }
  } // DEFAULT


  return '16px';
};
const generateParagraphFontWeight = props => {
  // SETUP
  const fontWeight = props.fontWeight && props.fontWeight.toLowerCase();
  const theme = props.theme && props.theme.paragraph; // IMPORTANCE 1 --> EXACT

  if (fontWeight) return fontWeight; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.fontWeight) return theme.fontWeight.toLowerCase(); // DEFAULT

  return 300;
};
const generateParagraphLineHeight = props => {
  // SETUP
  const lineHeight = props.lineHeight && props.lineHeight.toLowerCase();
  const theme = props.theme && props.theme.paragraph; // IMPORTANCE 1 --> EXACT

  if (lineHeight) return lineHeight; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.lineHeight) return theme.lineHeight.toLowerCase(); // DEFAULT

  return '1.8em';
};

const StyledParagraph = qe.p`
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${props => generateParagraphFontSize(props)};
  font-weight: ${props => generateParagraphFontWeight(props)};
  line-height: ${props => generateParagraphLineHeight(props)};
  margin-block-end: 2rem;
`;

/**
 * @name Paragraph
 * @description Renders the paragraph component
 * @param {*} Props children
 * @prop fontSize
 * @prop fontWeight
 * @prop theme
 * @prop lineHeight
 * @prop size
 * @returns Component
 */

const Paragraph = props => {
  const theme = useThemeContext();
  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    className: "af-paragraph",
    theme: theme ? theme : null
  }, props), props.children);
};

const generateTextColor = props => {
  // SETUP
  const color = props.color && props.color.toLowerCase();
  const theme = props.theme && props.theme.text; // IMPORTANCE 1 --> EXACT

  if (color) return color; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.color) return theme.color.toLowerCase(); // DEFAULT

  return 'black';
};
const generateTextFontSize = () => {
  // SETUP
  const fontSize = props.fontSize && props.fontSize.toLowerCase();
  const size = props.size && props.size.toLowerCase();
  const theme = props.theme && props.theme.text; // IMPORTANCE 1 --> EXACT

  if (fontSize) return fontSize; // IMPORTANCE 2 --> SIZE

  if (size) {
    switch (size) {
      case 'large':
        return '20px';

      case 'medium':
        return '16px';

      case 'small':
        return '12px';
    }
  } // IMPORTANCE 3 --> GLOBAL


  if (theme) {
    if (theme.fontSize) return theme.fontSize.toLowerCase();

    if (theme.size) {
      switch (theme.size.toLowerCase()) {
        case 'large':
          return '20px';

        case 'medium':
          return '16px';

        case 'small':
          return '12px';
      }
    }
  } // DEFAULT


  return '16px';
};
const generateTextDisplay = props => {
  // SETUP
  const display = props.display && props.display.toLowerCase();
  const theme = props.theme && props.theme.text; // IMPORTANCE 1 --> EXACT

  if (display) return display; // IMPORTANCE 2 --> GLOBAL

  if (theme && theme.display) return theme.display.toLowerCase(); // NO DEFAULT
};

qe.span`
  color: ${props => generateTextColor(props)};
  display: ${props => generateTextDisplay(props)};
  font-family: ${Constants.PROPS.FONT_FAMILIES.ROBOTO};
  font-size: ${props => generateTextFontSize()};
`;

const generateDropdownPadding = props => {
  // SETUP
  const padding = props.padding && props.padding.toLowerCase();
  const theme = props.theme && props.theme.dropdown; // IMPORTANCE 1 - EXACT

  if (padding) return padding.toLowerCase(); // IMPORTANCE 2 - THEME

  if (theme && theme.padding) return theme.padding.toLowerCase(); // DEFAULT

  return '20px 0px 0px 0px';
};

const StyledDropdownContainer = qe.div`
  display: inline-block;
`;
const StyledDropdown = qe.div`
  position: absolute;
  padding: ${props => generateDropdownPadding(props)};
`;
const StyledDropdownAnchorWrapper = qe.span``;

const Dropdown = props => {
  const theme = useThemeContext();
  const [show, setShow] = useState(false);

  const handleMouseOver = () => setShow(true);

  const handleMouseOut = () => setShow(false);

  return /*#__PURE__*/React.createElement(StyledDropdownContainer, {
    className: "af-dropdown",
    onMouseOut: handleMouseOut,
    onMouseOver: handleMouseOver
  }, /*#__PURE__*/React.createElement(StyledDropdownAnchorWrapper, {
    className: "af-anchor-wrapper"
  }, props.anchor()), /*#__PURE__*/React.createElement(StyledDropdown, _extends({
    className: "af-dropdown-container",
    hidden: !show,
    theme: theme ? theme : null
  }, props), props.children));
};
Dropdown.PropTypes = {
  anchor: PropTypes.element
};

const generateSubMenuTransform = props => {
  // DEFAULT
  const transform = props.transform && props.transform.toLowerCase();
  const theme = props.theme && props.theme.submenu; // IMPORTNACE 1

  if (transform) return transform; // IMPORTNACE 2

  if (theme && theme.transform) return theme.transform.toLowerCase(); // NO DEFAULT
};

const StyledSubMenu = qe.div`
  position: absolute;
  transform: ${props => generateSubMenuTransform(props)};
`;

const SubMenu = props => {
  useThemeContext();
  return /*#__PURE__*/React.createElement(StyledSubMenu, _extends({
    className: "af-submenu"
  }, props), /*#__PURE__*/React.createElement(Menu, {
    direction: "vertical"
  }, props.children));
};

export { Button, Column, Container, Dropdown, Header, Heading, Input, Link, Logo, Menu, MenuItem, Modal, Page, Paragraph, Section, SubMenu, ThemeProvider };
