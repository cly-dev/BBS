webpackJsonp([2],{

/***/ "1Xzd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6BCL":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.7 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Tether = factory();
  }
}(this, function() {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  try {
    if (node.ownerDocument !== document) {
      var _frameElement = node.ownerDocument.defaultView.frameElement;
      if (_frameElement) {
        var frameRect = getActualBoundingClientRect(_frameElement);
        rect.top += frameRect.top;
        rect.bottom += frameRect.top;
        rect.left += frameRect.left;
        rect.right += frameRect.left;
      }
    }
  } catch (err) {
    // Ignore "Access is denied" in IE11/Edge
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (typeof window.devicePixelRatio === 'number' && devicePixelRatio % 1 === 0) {
            xPos = Math.round(xPos * devicePixelRatio) / devicePixelRatio;
            yPos = Math.round(yPos * devicePixelRatio) / devicePixelRatio;
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var isFullscreenElement = function isFullscreenElement(e) {
            var d = e.ownerDocument;
            var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
            return fe === e;
          };

          var offsetParentIsBody = true;

          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ "7Otq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ }),

/***/ "97D+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Z4A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/IconsetW.93f2891.png";

/***/ }),

/***/ "CBuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/emoji_spritesheet_3.d76a9fc.png";

/***/ }),

/***/ "H+iO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/emoji_spritesheet_2.06aca5a.png";

/***/ }),

/***/ "Hn9x":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw=="

/***/ }),

/***/ "I4I5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Bbs/Articledetails.vue
var Articledetails = __webpack_require__("X3sj");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7530b978","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Bbs/Articledetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail"},[_c('div',{staticClass:"detail_header"},[_c('div',{staticClass:"author_portrait"},[_c('el-popover',{attrs:{"placement":"top-start","width":"300","trigger":"hover"}},[_c('div',{staticClass:"portrait_hover"},[_c('div',{staticClass:"author_container"},[_c('img',{attrs:{"src":__webpack_require__("7Otq"),"alt":"请检查网络"}}),_vm._v(" "),_c('div',{staticClass:"author_message"},[_c('span',[_vm._v("阿勇")]),_vm._v(" "),_c('span',[_vm._v("岁月悠长")])])]),_vm._v(" "),_c('div',{staticClass:"author_otherinfo"},[_c('ul',[_c('li',[_c('span',[_vm._v("回答")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("文章")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("关注者")]),_vm._v(" "),_c('span',[_vm._v("4545")])])])]),_vm._v(" "),_c('div',{staticClass:"author_operation"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"}},[_vm._v("关注")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-s-promotion"}},[_vm._v("访问")])],1)]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_c('img',{staticClass:"portrait_img",attrs:{"src":__webpack_require__("7Otq")}})])])],1),_vm._v(" "),_c('div',{staticClass:"author_information"},[_c('span',{staticClass:"author_name"},[_vm._v("阿勇")]),_vm._v(" "),_c('el-tooltip',{attrs:{"placement":"top"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._v(_vm._s(_vm.grade))]),_vm._v(" "),_c('img',{staticClass:"author_grade",attrs:{"src":__webpack_require__("ofAM")}})]),_vm._v(" "),_c('span',{staticClass:"push_time",staticStyle:{"transform":"translate(0px,5px)"}},[_vm._v(_vm._s(_vm.articleData.createTime)+" 标签: "),_vm._l((_vm.label),function(value,key){return _c('el-button',{key:key,attrs:{"size":"mini"}},[_vm._v(_vm._s(value))])})],2)],1)]),_vm._v(" "),_c('div',{staticClass:"detail_main"},[_c('div',{staticClass:"detail_title"},[_c('h2',{attrs:{"align":"center"}},[_vm._v(_vm._s(_vm.articleData.title))])]),_vm._v(" "),_c('article',{staticClass:"detail_content",domProps:{"innerHTML":_vm._s(_vm.articleData.content)}})]),_vm._v(" "),_c('div',{staticClass:"detail_comment"},[_c('span',{staticClass:"detail_bottom"},[_vm._v("我也是有底线的呦......")]),_vm._v(" "),_c('div',{staticClass:"article_appreciate",attrs:{"align":"center"}},[_c('div',{staticClass:"appreciate_btn"},[_c('el-button',{attrs:{"type":"danger","plain":""},on:{"click":function($event){_vm.appreciateOuter = true}}},[_vm._v("赞赏")])],1)]),_vm._v(" "),_c('div',{staticClass:"article_operation"},[_c('ul',[_c('li',[_vm._v("浏览1000+")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.Scorllcomment()}}},[_vm._v(_vm._s(_vm.CommentFlay))]),_vm._v(" "),_c('li',[_c('span',{staticClass:"demonstration"},[_vm._v("分享")]),_vm._v(" "),_c('el-dropdown',{attrs:{"trigger":"click"}},[_c('span',{staticClass:"el-dropdown-link"},[_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',[_vm._v("QQ")]),_vm._v(" "),_c('el-dropdown-item',[_vm._v("微信")]),_vm._v(" "),_c('el-dropdown-item',[_vm._v("微博")])],1)],1)],1),_vm._v(" "),_c('li',[_vm._v("收藏")]),_vm._v(" "),_c('li',[_vm._v("编辑")]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v("举报")])])]),_vm._v(" "),_c('div',{staticClass:"article_comment"},[_c('div',{staticClass:"commment_number"},[_c('span',[_vm._v(_vm._s(_vm.CommentFlay)+" ")])]),_vm._v(" "),_c('div',{staticClass:"comment_container",staticStyle:{"display":"block"}},[_c('div',{staticClass:"comment_input"},[_c('VueEmoji',{ref:"emoji",attrs:{"value":_vm.content},on:{"input":_vm.onInput}})],1),_vm._v(" "),_c('div',{staticClass:"comment_push"},[_c('el-button',{attrs:{"type":"primary","size":"medium","loading":_vm.pushLoading},on:{"click":function($event){return _vm.Pushing()}}},[_vm._v("发表")])],1)]),_vm._v(" "),_vm._m(0),_vm._v(" "),(_vm.commentData=='')?_c('div',{staticClass:"comment_null"},[_c('span',[_vm._v("空空如也")])]):_vm._e(),_vm._v(" "),_vm._l((_vm.commentData),function(item,index){return _c('div',{key:index,staticClass:"comment_content"},[_c('div',{staticClass:"comment_user"},[_c('el-popover',{attrs:{"width":"300","trigger":"hover","placement":"bottom-start"}},[_c('div',{staticClass:"portrait_hover"},[_c('div',{staticClass:"author_container"},[_c('img',{attrs:{"src":__webpack_require__("7Otq"),"alt":"请检查网络"}}),_vm._v(" "),_c('div',{staticClass:"author_message"},[_c('span',[_vm._v("阿勇")]),_vm._v(" "),_c('span',[_vm._v("岁月悠长")])])]),_vm._v(" "),_c('div',{staticClass:"author_otherinfo"},[_c('ul',[_c('li',[_c('span',[_vm._v("回答")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("文章")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("关注者")]),_vm._v(" "),_c('span',[_vm._v("4545")])])])]),_vm._v(" "),_c('div',{staticClass:"author_operation"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"}},[_vm._v("关注")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-s-promotion"}},[_vm._v("访问")])],1)]),_vm._v(" "),_c('img',{attrs:{"slot":"reference","src":__webpack_require__("HdUg")},slot:"reference"})]),_vm._v(" "),_c('span',{staticClass:"comment_name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"comment_time"},[_vm._v(_vm._s(item.createTime))])],1),_vm._v(" "),_c('div',{staticClass:"content_data"},[_c('p',[_vm._v(_vm._s(item.content))])]),_vm._v(" "),_c('div',{staticClass:"comment_operation",on:{"mouseover":function($event){return _vm.Hovering(index)},"mouseout":function($event){return _vm.Hoverout(index)}}},[_c('div',{staticClass:"comment_support",attrs:{"data-support":""}},[_c('img',{attrs:{"src":__webpack_require__("vy/8")},on:{"click":function($event){return _vm.Clicksupport(item,index)}}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.num))])]),_vm._v(" "),_c('div',{staticClass:"operation_content",attrs:{"data-flay":"true"}},[_c('ul',[_c('li',{on:{"click":function($event){return _vm.Replyclick(index)}}},[_vm._v("回复")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.Stampclick(index)}}},[_vm._v(_vm._s(_vm.stamp(item.stamp)))]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v("举报")]),_vm._v(" "),_c('li',[_c('el-popconfirm',{attrs:{"title":"要删除此条评论嘛"},on:{"confirm":function($event){return _vm.deleteComment(item,index)}}},[_c('span',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("删除")])])],1)])]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}}),_vm._v(" "),_c('div',{staticClass:"comment_containers"},[_c('div',{staticClass:"comment_input"},[_c('VueEmoji',{ref:"emoji",refInFor:true,staticClass:"reply"})],1),_vm._v(" "),_c('div',{staticClass:"comment_push"},[_c('el-button',{attrs:{"type":"primary","size":"medium","loading":item.replyloading},on:{"click":function($event){return _vm.Replying(index)}}},[_vm._v("回复")])],1)])]),_vm._v(" "),_vm._l((item.list),function(value,key){return _c('div',{key:key,staticClass:"reply_list"},[_c('div',{staticClass:"comment_user"},[_c('el-popover',{attrs:{"width":"300","trigger":"hover","placement":"bottom-start"}},[_c('div',{staticClass:"portrait_hover"},[_c('div',{staticClass:"author_container"},[_c('img',{attrs:{"src":__webpack_require__("7Otq"),"alt":"请检查网络"}}),_vm._v(" "),_c('div',{staticClass:"author_message"},[_c('span',[_vm._v("阿勇")]),_vm._v(" "),_c('span',[_vm._v("岁月悠长")])])]),_vm._v(" "),_c('div',{staticClass:"author_otherinfo"},[_c('ul',[_c('li',[_c('span',[_vm._v("回答")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("文章")]),_vm._v(" "),_c('span',[_vm._v("1122")])]),_vm._v(" "),_c('li',[_c('span',[_vm._v("关注者")]),_vm._v(" "),_c('span',[_vm._v("4545")])])])]),_vm._v(" "),_c('div',{staticClass:"author_operation"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus"}},[_vm._v("关注")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-s-promotion"}},[_vm._v("访问")])],1)]),_vm._v(" "),_c('img',{attrs:{"slot":"reference","src":__webpack_require__("HdUg")},slot:"reference"})]),_vm._v(" "),_c('span',{staticClass:"comment_name"},[_vm._v(_vm._s(value.name))]),_vm._v(" "),_c('span',{staticClass:"comment_time"},[_vm._v("01-25")])],1),_vm._v(" "),_c('div',{staticClass:"content_data"},[_c('p',[_vm._v(_vm._s(value.content))])]),_vm._v(" "),_c('div',{staticClass:"reply_comment_operation",on:{"mouseover":function($event){$event.stopPropagation();return _vm.replyHovering(value,key)},"mouseout":function($event){$event.stopPropagation();return _vm.replyHoverout(value,key)}}},[_c('div',{staticClass:"reply_comment_support"},[_c('img',{attrs:{"src":_vm.supPort(value.support)},on:{"click":function($event){return _vm.CommentSupportclick(value)}}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(value.num))])]),_vm._v(" "),_c('div',{staticClass:"reply_operation_content"},[_c('ul',[_c('li',{on:{"click":function($event){return _vm.CommentReplyclick(index,value,key)}}},[_vm._v("回复")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.CommentStampclick(value)}}},[_vm._v(_vm._s(_vm.stamp(value.stamp)))]),_vm._v(" "),_c('li',{on:{"click":function($event){_vm.dialogVisible = true}}},[_vm._v("举报")]),_vm._v(" "),_c('li',[_c('el-popconfirm',{attrs:{"title":"要删除此条回复嘛","offset":"100"},on:{"confirm":function($event){return _vm.deleteReply()}}},[_c('span',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("删除")])])],1)])]),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})]),_vm._v(" "),(item.list[key].replyclick)?_c('div',{staticClass:"reply_comment_container"},[_c('div',{staticClass:"reply_comment_input"},[_c('VueEmoji',{ref:"emoji",refInFor:true,attrs:{"width":'350'}})],1),_vm._v(" "),_c('div',{staticClass:"reply_comment_push"},[_c('el-button',{attrs:{"type":"primary","size":"medium","loading":value.replyloading},on:{"click":function($event){return _vm.commentReplying(index)}}},[_vm._v("回复")])],1)]):_vm._e()])})],2)}),_vm._v(" "),_c('div',{staticClass:"block",attrs:{"align":"center"}},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage1,"page-size":10,"layout":"total, prev, pager, next","total":this.commentData.length},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.currentPage1=$event},"update:current-page":function($event){_vm.currentPage1=$event}}})],1)],2)]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"30%","center":"","visible":_vm.appreciateOuter},on:{"update:visible":function($event){_vm.appreciateOuter=$event}}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('h3',[_vm._v("赞赏(您的鼓励是对创作者最大的支持)")])]),_vm._v(" "),_c('el-dialog',{attrs:{"width":"30%","title":"支付","visible":_vm.appreciateInner,"center":"","append-to-body":""},on:{"update:visible":function($event){_vm.appreciateInner=$event}}},[_c('el-button',{on:{"click":function($event){_vm.appreciateInner = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.appreciateInner = true}}},[_vm._v("我已支付")])],1),_vm._v(" "),_c('div',{staticClass:"appreciate_container"},[_vm._l((_vm.appreciateMoneyList),function(value,index){return _c('span',{key:index,on:{"click":function($event){return _vm.Choicemoney(value)}}},[_vm._v(_vm._s(value))])}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.appreciateMoney),expression:"appreciateMoney"}],staticClass:"appreciate_money",attrs:{"type":"number","placeholder":"任意金额"},domProps:{"value":(_vm.appreciateMoney)},on:{"input":function($event){if($event.target.composing){ return; }_vm.appreciateMoney=$event.target.value}}})],2),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.appreciateOuter = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.appreciateInner = true}}},[_vm._v("确定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"center":"","visible":_vm.dialogVisible,"width":"20%"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_c('h2',[_vm._v("举报")]),_vm._v(" "),_c('p',{staticStyle:{"color":"#C0C4CC"}},[_vm._v("(请选择理由)")])]),_vm._v(" "),_c('div',{staticStyle:{"width":"106%"}},[_c('el-checkbox-group',{attrs:{"max":3},model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_c('el-checkbox',{attrs:{"label":"垃圾广告"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"不实信息"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"有害信息"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"涉嫌侵权"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"诱导赞同、关注等行为"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"label":"辱骂、人身攻击等不友善行为"}})],1),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.reportContent),expression:"reportContent"}],staticClass:"report_input",attrs:{"cols":"30","rows":"10","placeholder":"请输入详细理由(选填)"},domProps:{"value":(_vm.reportContent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.reportContent=$event.target.value}}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("举报")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading_container"},[_c('div',{staticClass:"eye"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Bbs_Articledetails = (esExports);
// CONCATENATED MODULE: ./src/components/Bbs/Articledetails.vue
function injectStyle (ssrContext) {
  __webpack_require__("1Xzd")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7530b978"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Articledetails["a" /* default */],
  Bbs_Articledetails,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Bbs_Articledetails = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "IlDD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/emoji_spritesheet_4.9759ad2.png";

/***/ }),

/***/ "NQbs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PqHv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/emoji_spritesheet_0.cce267d.png";

/***/ }),

/***/ "UHME":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WozY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_data__ = __webpack_require__("Foau");



/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    //删除评论信息
    deleteComment: function deleteComment(value, index) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_data__["i" /* DeletecommentArticle */])({ commentId: value.commentId });

              case 2:
                result = _context.sent;

                if (result["data"].code == "200") {
                  _this.$message({
                    message: '删除成功',
                    type: 'success',
                    offset: 100
                  });
                }
                console.log(index);
                _this.commentData.splice(index, 1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },


    // 删除回复信息
    deleteReply: function deleteReply() {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        offset: 100
      });
    },


    // 切换页码事件
    handleSizeChange: function handleSizeChange(val) {
      console.log("\u6BCF\u9875 " + val + " \u6761");
    },
    handleCurrentChange: function handleCurrentChange(val) {
      console.log("\u5F53\u524D\u9875: " + val);
    },

    //评论踩动作
    CommentStampclick: function CommentStampclick(value) {
      if (!value.stamp && value.support) {
        value.support = false;
        this.supPort(value.support);
        value.num--;
        value.stamp = true;
        this.stamp(value.stamp);
      } else if (value.stamp && !value.support) {
        // console.log(11);
        value.stamp = false;
        this.stamp(value.stamp);
      } else {
        value.stamp = true;
        this.stamp(value.stamp);
      }
    },

    //赞评论区动作
    CommentSupportclick: function CommentSupportclick(value) {
      if (value.support) {
        this.$message({
          message: '只能点赞一次哦',
          type: 'warning',
          offset: 100
        });
      } else {
        value.support = true;
        this.supPort(value.support);
        value.num++;
        value.stamp = false;
        this.stamp(value.stamp);
      }
    },

    //踩动作
    Stampclick: function Stampclick(index) {
      if (!this.data[index].stamp && this.data[index].support) {
        this.data[index].support = false;
        this.supPort(this.data[index].support);
        this.data[index].num--;
        this.data[index].stamp = true;
        this.stamp(this.data[index].stamp);
      } else if (this.data[index].stamp && !this.data[index].support) {
        // console.log(11);
        this.data[index].stamp = false;
        this.stamp(this.data[index].stamp);
      } else {
        this.data[index].stamp = true;
        this.stamp(this.data[index].stamp);
      }
    },

    //点赞动作
    Clicksupport: function Clicksupport(value, index) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_data__["c" /* CommentAnswerLike */])({ commentId: value.commentId });

              case 2:
                result = _context2.sent;

                if (result["data".code == "200"]) {
                  $(".comment_support img").attr("src", "../../../static/images/campus/detail/article_aftersupport.png");
                  $(".comment_support span").text($(".comment_support span").text() + 1).css("color", "#409EFF");
                  _this2.$message({
                    message: '点赞成功',
                    type: 'success',
                    offset: 100
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    //点击评论动作
    Scorllcomment: function Scorllcomment() {
      $(document).scrollTop(this.componentInstance - 60);
    },

    //选择赞赏金额动作
    Choicemoney: function Choicemoney(value) {
      this.appreciateMoney = value;
    },

    //点击评论回复动作
    CommentReplyclick: function CommentReplyclick(index, value, key) {
      if (this.data[index].list[key].replyclick) {
        $(".reply_operation_content").eq(key).find("li").eq(0).text("回复");
        this.data[index].list[key].replyclick = false;
      } else {
        $(".reply_operation_content").eq(key).find("li").eq(0).text("取消回复");
        this.data[index].list[key].replyclick = true;
      }
    },


    //点击回复动作
    Replyclick: function Replyclick(index) {
      if ($(".operation_content").eq(index).get(0).getAttribute("data-flay") == "true") {
        $(".operation_content").eq(index).find("li").eq(0).text("取消回复");
        $(".operation_content").eq(index).get(0).setAttribute("data-flay", "false");
        $(".comment_containers").eq(index).css("display", "block");
      } else {
        $(".comment_containers").eq(index).css("display", "none");
        $(".operation_content").eq(index).find("li").eq(0).text("回复");
        $(".operation_content").eq(index).get(0).setAttribute("data-flay", "true");
      }
    },

    //滑过回复盒子动作
    replyHovering: function replyHovering(value, key) {
      console.log("1111");
      $(".reply_operation_content").get(key).style.display = "block";
    },

    //滑过回复盒子动作
    replyHoverout: function replyHoverout(value, key) {
      console.log("111122");
      $(".reply_operation_content").get(key).style.display = "none";
    },

    //滑出盒子动作
    Hoverout: function Hoverout(index) {
      if ($(".operation_content").eq(index).get(0).getAttribute("data-flay") == "true") {
        $(".operation_content").get(index).style.display = "none";
      }
    },

    //滑过盒子动作
    Hovering: function Hovering(index) {
      $(".operation_content").get(index).style.display = "block";
    },

    //获取输入框内容
    onInput: function onInput(event) {
      //事件。数据包含文本区域的值
      //将输入的话和表情赋给newss
      this.content = event.data;
    },

    // 获取回复评论内容
    Reply: function Reply(event) {
      this.replyCentent = event.data;
    },
    clearTextarea: function clearTextarea() {
      this.$refs.emoji.clear();
    },

    //发表评论动作
    Pushing: function Pushing() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result, date;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.pushLoading = true;
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_data__["d" /* CommentArticleInsert */])({
                  articleId: _this3.articleData.articleId,
                  content: _this3.content
                });

              case 3:
                result = _context3.sent;

                console.log(result);
                if (result["data"].code == "200") {
                  _this3.$message({
                    message: "发表成功",
                    type: "success",
                    offset: 100
                  });
                  _this3.$nextTick(function () {
                    _this3.content = "";
                  });
                  _this3.pushLoading = false;
                  date = new Date();

                  if (_this3.commentData.length < 10) {
                    _this3.commentData.unshift({
                      answerId: result["data"].date,
                      content: _this3.content,
                      createTime: new Date().getFullYear().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
                      name: "阿勇"
                    });
                  } else {
                    _this3.commentData.pop();
                    _this3.commentData.unshift({
                      answerId: result["data"].date,
                      content: _this3.content,
                      createTime: new Date().getFullYear().toString() + "-" + new Date().getMonth().toString() + "-" + new Date().getDate().toString() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
                      name: "阿勇"
                    });
                  }
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    //回复他们评论
    commentReplying: function commentReplying(index) {
      console.log($(".reply_comment_input").eq(index).find(".emoji-wysiwyg-editor").html());
      this.$axios({
        url: "接口地址",
        method: "GET",
        params: {}
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    },

    //回复评论动作
    Replying: function Replying(index) {
      console.log($(".comment_containers").eq(index - 1).find(".emoji-wysiwyg-editor").html());
      this.$axios({
        url: "接口地址",
        method: "GET",
        params: {}
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
      // console.log($(".comment_input .emoji-wysiwyg-editor").eq(index+1).html());
      // this.data[index].replyloading = true;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "X3sj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_data__ = __webpack_require__("Foau");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventBus_js__ = __webpack_require__("O6e2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__minxin_artDetail_js__ = __webpack_require__("WozY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_emoji_vue__ = __webpack_require__("xUXS");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_5__minxin_artDetail_js__["a" /* default */]],
  data: function data() {
    return {
      //评论信息
      commentData: [{
        name: "阿勇", content: "lalala", commentId: "7b719d38-74f7-4d36-a257-586af0f30bb8", createTime: "2021-03-04 18:21:58"
      }, {
        name: "阿勇", content: "lalala", commentId: "7b719d38-74f7-4d36-a257-586af0f30bb8", createTime: "2021-03-04 18:21:58"
      }, {
        name: "阿勇", content: "lalala", commentId: "7b719d38-74f7-4d36-a257-586af0f30bb8", createTime: "2021-03-04 18:21:58"
      }],
      //标签数据
      label: [],
      data: {},
      // 页码
      currentPage1: 5,
      //模拟数据
      articleData: {},
      //点赞信息对象
      Support: {
        //点赞图片地址
        supportImg: '../../../static/images/campus/detail/article_beforesupport.png',
        //点赞数
        supportNum: 18,
        supportStatu: false
      },
      //踩信息对象
      Stamp: {
        stampStatu: false,
        stampTxt: '踩'
      },
      //举报内容
      reportContent: '',
      //举报选项
      checkList: [],
      //举报dialog
      dialogVisible: false,
      //赞赏金额数组
      appreciateMoneyList: ['1.00', '5.00', '10.00', '20.00', '50.00', '100.00'],
      //赞赏金额
      appreciateMoney: '',
      //赞赏外层div
      appreciateOuter: false,
      //赞赏内层div
      appreciateInner: false,
      //按钮提示
      btnTis: '回复',
      //鼠标滑过盒子
      hoverStatu: false,
      //回复按钮点击状态
      replyStatu: false,
      // clientHeight 评论框到底部的距离
      commentDistance: '',
      //发表loading
      pushLoading: false,
      //回复loading
      replyLoading: false,
      //等级
      grade: '等级三',
      //评论内容
      content: '',
      //回复评论内容
      replyCentent: ''
    };
  },
  methods: {},
  computed: {
    //判断点击
    supPort: function supPort() {
      return function (data) {
        if (data) {
          return "../../../static/images/campus/detail/article_aftersupport.png";
        } else {
          return "../../../static/images/campus/detail/article_beforesupport.png";
        }
      };
    },
    stamp: function stamp() {
      return function (data) {
        if (!data) {
          return "踩";
        } else {
          return "取消踩";
        }
      };
    },
    CommentFlay: function CommentFlay() {
      if (this.commentData.length > 0) {
        return this.commentData.length + "\u6761\u8BC4\u8BBA";
      } else {
        return "\u6682\u65E0\u8BC4\u8BBA";
      }
    }
  },
  watch: {
    content: function content(newV, orderV) {
      console.log(newV);
    },
    data: function data(newV, orderV) {
      console.log(newV);
    }
  },
  components: {
    VueEmoji: __WEBPACK_IMPORTED_MODULE_6_emoji_vue__["a" /* default */]
  },
  created: function created() {
    var _this = this;

    // id=this.$route.params==="{}"? localStorage.getItem("articleId"):this.$route.params.id;
    // console.log(l);
    // console.log(id);
    var getArticle = function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["s" /* ShowArticle */])(id);

              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getArticle() {
        return _ref.apply(this, arguments);
      };
    }();

    var getLabel = function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["x" /* ShowLabel */])(id);

              case 2:
                result = _context2.sent;
                return _context2.abrupt("return", result);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getLabel() {
        return _ref2.apply(this, arguments);
      };
    }();

    var getComment = function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_data__["p" /* ShowAllCommentByPage */])(id);

              case 2:
                result = _context3.sent;
                return _context3.abrupt("return", result);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getComment() {
        return _ref3.apply(this, arguments);
      };
    }();

    var id = localStorage.getItem("articleId");
    var p1 = getArticle();
    var p2 = getLabel();
    var p3 = getComment();
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([p1, p2, p3]).then(function (res) {
      _this.articleData = res[0].data.date;
      _this.label = res[1].data.date;
      // this.commentData=res[2].data.date;
      $(".loading_container").css("display", "none");
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      // console.log(document.querySelector(".article_comment").clientHeight);
      _this2.componentInstance = $(".article_comment").offset().top;
      $(document).scrollTop(0);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "ezRD":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "iHZe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/IconsetW_1x.7b1ef41.png";

/***/ }),

/***/ "mqJx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/emoji_spritesheet_1.6cbaf42.png";

/***/ }),

/***/ "nTHN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ofAM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/用户_等级3.5fc58cc.png";

/***/ }),

/***/ "uZ3E":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nanoScrollerJS - v0.8.7 - 2015
* http://jamesflorentino.github.com/nanoScrollerJS/
* Copyright (c) 2015 James Florentino; Licensed MIT */
(function(factory) {
  if (true) {
    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("7t+N")], __WEBPACK_AMD_DEFINE_RESULT__ = (function($) {
      return factory($, window, document);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    return module.exports = factory(require('jquery'), window, document);
  } else {
    return factory(jQuery, window, document);
  }
})(function($, window, document) {
  "use strict";
  var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, ENTER, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEENTER, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, cAF, defaults, getBrowserScrollbarWidth, hasTransform, isFFWithBuggyScrollbar, rAF, transform, _elementStyle, _prefixStyle, _vendor;
  defaults = {

    /**
      a classname for the pane element.
      @property paneClass
      @type String
      @default 'nano-pane'
     */
    paneClass: 'nano-pane',

    /**
      a classname for the slider element.
      @property sliderClass
      @type String
      @default 'nano-slider'
     */
    sliderClass: 'nano-slider',

    /**
      a classname for the content element.
      @property contentClass
      @type String
      @default 'nano-content'
     */
    contentClass: 'nano-content',

    /**
      a setting to enable native scrolling in iOS devices.
      @property iOSNativeScrolling
      @type Boolean
      @default false
     */
    iOSNativeScrolling: false,

    /**
      a setting to prevent the rest of the page being
      scrolled when user scrolls the `.content` element.
      @property preventPageScrolling
      @type Boolean
      @default false
     */
    preventPageScrolling: false,

    /**
      a setting to disable binding to the resize event.
      @property disableResize
      @type Boolean
      @default false
     */
    disableResize: false,

    /**
      a setting to make the scrollbar always visible.
      @property alwaysVisible
      @type Boolean
      @default false
     */
    alwaysVisible: false,

    /**
      a default timeout for the `flash()` method.
      @property flashDelay
      @type Number
      @default 1500
     */
    flashDelay: 1500,

    /**
      a minimum height for the `.slider` element.
      @property sliderMinHeight
      @type Number
      @default 20
     */
    sliderMinHeight: 20,

    /**
      a maximum height for the `.slider` element.
      @property sliderMaxHeight
      @type Number
      @default null
     */
    sliderMaxHeight: null,

    /**
      an alternate document context.
      @property documentContext
      @type Document
      @default null
     */
    documentContext: null,

    /**
      an alternate window context.
      @property windowContext
      @type Window
      @default null
     */
    windowContext: null
  };

  /**
    @property SCROLLBAR
    @type String
    @static
    @final
    @private
   */
  SCROLLBAR = 'scrollbar';

  /**
    @property SCROLL
    @type String
    @static
    @final
    @private
   */
  SCROLL = 'scroll';

  /**
    @property MOUSEDOWN
    @type String
    @final
    @private
   */
  MOUSEDOWN = 'mousedown';

  /**
    @property MOUSEENTER
    @type String
    @final
    @private
   */
  MOUSEENTER = 'mouseenter';

  /**
    @property MOUSEMOVE
    @type String
    @static
    @final
    @private
   */
  MOUSEMOVE = 'mousemove';

  /**
    @property MOUSEWHEEL
    @type String
    @final
    @private
   */
  MOUSEWHEEL = 'mousewheel';

  /**
    @property MOUSEUP
    @type String
    @static
    @final
    @private
   */
  MOUSEUP = 'mouseup';

  /**
    @property RESIZE
    @type String
    @final
    @private
   */
  RESIZE = 'resize';

  /**
    @property DRAG
    @type String
    @static
    @final
    @private
   */
  DRAG = 'drag';

  /**
    @property ENTER
    @type String
    @static
    @final
    @private
   */
  ENTER = 'enter';

  /**
    @property UP
    @type String
    @static
    @final
    @private
   */
  UP = 'up';

  /**
    @property PANEDOWN
    @type String
    @static
    @final
    @private
   */
  PANEDOWN = 'panedown';

  /**
    @property DOMSCROLL
    @type String
    @static
    @final
    @private
   */
  DOMSCROLL = 'DOMMouseScroll';

  /**
    @property DOWN
    @type String
    @static
    @final
    @private
   */
  DOWN = 'down';

  /**
    @property WHEEL
    @type String
    @static
    @final
    @private
   */
  WHEEL = 'wheel';

  /**
    @property KEYDOWN
    @type String
    @static
    @final
    @private
   */
  KEYDOWN = 'keydown';

  /**
    @property KEYUP
    @type String
    @static
    @final
    @private
   */
  KEYUP = 'keyup';

  /**
    @property TOUCHMOVE
    @type String
    @static
    @final
    @private
   */
  TOUCHMOVE = 'touchmove';

  /**
    @property BROWSER_IS_IE7
    @type Boolean
    @static
    @final
    @private
   */
  BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;

  /**
    @property BROWSER_SCROLLBAR_WIDTH
    @type Number
    @static
    @default null
    @private
   */
  BROWSER_SCROLLBAR_WIDTH = null;
  rAF = window.requestAnimationFrame;
  cAF = window.cancelAnimationFrame;
  _elementStyle = document.createElement('div').style;
  _vendor = (function() {
    var i, transform, vendor, vendors, _i, _len;
    vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
    for (i = _i = 0, _len = vendors.length; _i < _len; i = ++_i) {
      vendor = vendors[i];
      transform = vendors[i] + 'ransform';
      if (transform in _elementStyle) {
        return vendors[i].substr(0, vendors[i].length - 1);
      }
    }
    return false;
  })();
  _prefixStyle = function(style) {
    if (_vendor === false) {
      return false;
    }
    if (_vendor === '') {
      return style;
    }
    return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
  };
  transform = _prefixStyle('transform');
  hasTransform = transform !== false;

  /**
    Returns browser's native scrollbar width
    @method getBrowserScrollbarWidth
    @return {Number} the scrollbar width in pixels
    @static
    @private
   */
  getBrowserScrollbarWidth = function() {
    var outer, outerStyle, scrollbarWidth;
    outer = document.createElement('div');
    outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width = '100px';
    outerStyle.height = '100px';
    outerStyle.overflow = SCROLL;
    outerStyle.top = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };
  isFFWithBuggyScrollbar = function() {
    var isOSXFF, ua, version;
    ua = window.navigator.userAgent;
    isOSXFF = /(?=.+Mac OS X)(?=.+Firefox)/.test(ua);
    if (!isOSXFF) {
      return false;
    }
    version = /Firefox\/\d{2}\./.exec(ua);
    if (version) {
      version = version[0].replace(/\D+/g, '');
    }
    return isOSXFF && +version > 23;
  };

  /**
    @class NanoScroll
    @param element {HTMLElement|Node} the main element
    @param options {Object} nanoScroller's options
    @constructor
   */
  NanoScroll = (function() {
    function NanoScroll(el, options) {
      this.el = el;
      this.options = options;
      BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
      this.$el = $(this.el);
      this.doc = $(this.options.documentContext || document);
      this.win = $(this.options.windowContext || window);
      this.body = this.doc.find('body');
      this.$content = this.$el.children("." + this.options.contentClass);
      this.$content.attr('tabindex', this.options.tabIndex || 0);
      this.content = this.$content[0];
      this.previousPosition = 0;
      if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
        this.nativeScrolling();
      } else {
        this.generate();
      }
      this.createEvents();
      this.addEvents();
      this.reset();
    }


    /**
      Prevents the rest of the page being scrolled
      when user scrolls the `.nano-content` element.
      @method preventScrolling
      @param event {Event}
      @param direction {String} Scroll direction (up or down)
      @private
     */

    NanoScroll.prototype.preventScrolling = function(e, direction) {
      if (!this.isActive) {
        return;
      }
      if (e.type === DOMSCROLL) {
        if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
          e.preventDefault();
        }
      } else if (e.type === MOUSEWHEEL) {
        if (!e.originalEvent || !e.originalEvent.wheelDelta) {
          return;
        }
        if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
          e.preventDefault();
        }
      }
    };


    /**
      Enable iOS native scrolling
      @method nativeScrolling
      @private
     */

    NanoScroll.prototype.nativeScrolling = function() {
      this.$content.css({
        WebkitOverflowScrolling: 'touch'
      });
      this.iOSNativeScrolling = true;
      this.isActive = true;
    };


    /**
      Updates those nanoScroller properties that
      are related to current scrollbar position.
      @method updateScrollValues
      @private
     */

    NanoScroll.prototype.updateScrollValues = function() {
      var content, direction;
      content = this.content;
      this.maxScrollTop = content.scrollHeight - content.clientHeight;
      this.prevScrollTop = this.contentScrollTop || 0;
      this.contentScrollTop = content.scrollTop;
      direction = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same";
      this.previousPosition = this.contentScrollTop;
      if (direction !== "same") {
        this.$el.trigger('update', {
          position: this.contentScrollTop,
          maximum: this.maxScrollTop,
          direction: direction
        });
      }
      if (!this.iOSNativeScrolling) {
        this.maxSliderTop = this.paneHeight - this.sliderHeight;
        this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
      }
    };


    /**
      Updates CSS styles for current scroll position.
      Uses CSS 2d transfroms and `window.requestAnimationFrame` if available.
      @method setOnScrollStyles
      @private
     */

    NanoScroll.prototype.setOnScrollStyles = function() {
      var cssValue;
      if (hasTransform) {
        cssValue = {};
        cssValue[transform] = "translate(0, " + this.sliderTop + "px)";
      } else {
        cssValue = {
          top: this.sliderTop
        };
      }
      if (rAF) {
        if (cAF && this.scrollRAF) {
          cAF(this.scrollRAF);
        }
        this.scrollRAF = rAF((function(_this) {
          return function() {
            _this.scrollRAF = null;
            return _this.slider.css(cssValue);
          };
        })(this));
      } else {
        this.slider.css(cssValue);
      }
    };


    /**
      Creates event related methods
      @method createEvents
      @private
     */

    NanoScroll.prototype.createEvents = function() {
      this.events = {
        down: (function(_this) {
          return function(e) {
            _this.isBeingDragged = true;
            _this.offsetY = e.pageY - _this.slider.offset().top;
            if (!_this.slider.is(e.target)) {
              _this.offsetY = 0;
            }
            _this.pane.addClass('active');
            _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
            _this.body.bind(MOUSEENTER, _this.events[ENTER]);
            return false;
          };
        })(this),
        drag: (function(_this) {
          return function(e) {
            _this.sliderY = e.pageY - _this.$el.offset().top - _this.paneTop - (_this.offsetY || _this.sliderHeight * 0.5);
            _this.scroll();
            if (_this.contentScrollTop >= _this.maxScrollTop && _this.prevScrollTop !== _this.maxScrollTop) {
              _this.$el.trigger('scrollend');
            } else if (_this.contentScrollTop === 0 && _this.prevScrollTop !== 0) {
              _this.$el.trigger('scrolltop');
            }
            return false;
          };
        })(this),
        up: (function(_this) {
          return function(e) {
            _this.isBeingDragged = false;
            _this.pane.removeClass('active');
            _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
            _this.body.unbind(MOUSEENTER, _this.events[ENTER]);
            return false;
          };
        })(this),
        resize: (function(_this) {
          return function(e) {
            _this.reset();
          };
        })(this),
        panedown: (function(_this) {
          return function(e) {
            _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
            _this.scroll();
            _this.events.down(e);
            return false;
          };
        })(this),
        scroll: (function(_this) {
          return function(e) {
            _this.updateScrollValues();
            if (_this.isBeingDragged) {
              return;
            }
            if (!_this.iOSNativeScrolling) {
              _this.sliderY = _this.sliderTop;
              _this.setOnScrollStyles();
            }
            if (e == null) {
              return;
            }
            if (_this.contentScrollTop >= _this.maxScrollTop) {
              if (_this.options.preventPageScrolling) {
                _this.preventScrolling(e, DOWN);
              }
              if (_this.prevScrollTop !== _this.maxScrollTop) {
                _this.$el.trigger('scrollend');
              }
            } else if (_this.contentScrollTop === 0) {
              if (_this.options.preventPageScrolling) {
                _this.preventScrolling(e, UP);
              }
              if (_this.prevScrollTop !== 0) {
                _this.$el.trigger('scrolltop');
              }
            }
          };
        })(this),
        wheel: (function(_this) {
          return function(e) {
            var delta;
            if (e == null) {
              return;
            }
            delta = e.delta || e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail || (e.originalEvent && -e.originalEvent.detail);
            if (delta) {
              _this.sliderY += -delta / 3;
            }
            _this.scroll();
            return false;
          };
        })(this),
        enter: (function(_this) {
          return function(e) {
            var _ref;
            if (!_this.isBeingDragged) {
              return;
            }
            if ((e.buttons || e.which) !== 1) {
              return (_ref = _this.events)[UP].apply(_ref, arguments);
            }
          };
        })(this)
      };
    };


    /**
      Adds event listeners with jQuery.
      @method addEvents
      @private
     */

    NanoScroll.prototype.addEvents = function() {
      var events;
      this.removeEvents();
      events = this.events;
      if (!this.options.disableResize) {
        this.win.bind(RESIZE, events[RESIZE]);
      }
      if (!this.iOSNativeScrolling) {
        this.slider.bind(MOUSEDOWN, events[DOWN]);
        this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
      }
      this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };


    /**
      Removes event listeners with jQuery.
      @method removeEvents
      @private
     */

    NanoScroll.prototype.removeEvents = function() {
      var events;
      events = this.events;
      this.win.unbind(RESIZE, events[RESIZE]);
      if (!this.iOSNativeScrolling) {
        this.slider.unbind();
        this.pane.unbind();
      }
      this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };


    /**
      Generates nanoScroller's scrollbar and elements for it.
      @method generate
      @chainable
      @private
     */

    NanoScroll.prototype.generate = function() {
      var contentClass, cssRule, currentPadding, options, pane, paneClass, sliderClass;
      options = this.options;
      paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
      if (!(pane = this.$el.children("." + paneClass)).length && !pane.children("." + sliderClass).length) {
        this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
      }
      this.pane = this.$el.children("." + paneClass);
      this.slider = this.pane.find("." + sliderClass);
      if (BROWSER_SCROLLBAR_WIDTH === 0 && isFFWithBuggyScrollbar()) {
        currentPadding = window.getComputedStyle(this.content, null).getPropertyValue('padding-right').replace(/[^0-9.]+/g, '');
        cssRule = {
          right: -14,
          paddingRight: +currentPadding + 14
        };
      } else if (BROWSER_SCROLLBAR_WIDTH) {
        cssRule = {
          right: -BROWSER_SCROLLBAR_WIDTH
        };
        this.$el.addClass('has-scrollbar');
      }
      if (cssRule != null) {
        this.$content.css(cssRule);
      }
      return this;
    };


    /**
      @method restore
      @private
     */

    NanoScroll.prototype.restore = function() {
      this.stopped = false;
      if (!this.iOSNativeScrolling) {
        this.pane.show();
      }
      this.addEvents();
    };


    /**
      Resets nanoScroller's scrollbar.
      @method reset
      @chainable
      @example
          $(".nano").nanoScroller();
     */

    NanoScroll.prototype.reset = function() {
      var content, contentHeight, contentPosition, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, parentMaxHeight, right, sliderHeight;
      if (this.iOSNativeScrolling) {
        this.contentHeight = this.content.scrollHeight;
        return;
      }
      if (!this.$el.find("." + this.options.paneClass).length) {
        this.generate().stop();
      }
      if (this.stopped) {
        this.restore();
      }
      content = this.content;
      contentStyle = content.style;
      contentStyleOverflowY = contentStyle.overflowY;
      if (BROWSER_IS_IE7) {
        this.$content.css({
          height: this.$content.height()
        });
      }
      contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
      parentMaxHeight = parseInt(this.$el.css("max-height"), 10);
      if (parentMaxHeight > 0) {
        this.$el.height("");
        this.$el.height(content.scrollHeight > parentMaxHeight ? parentMaxHeight : content.scrollHeight);
      }
      paneHeight = this.pane.outerHeight(false);
      paneTop = parseInt(this.pane.css('top'), 10);
      paneBottom = parseInt(this.pane.css('bottom'), 10);
      paneOuterHeight = paneHeight + paneTop + paneBottom;
      sliderHeight = Math.round(paneOuterHeight / contentHeight * paneHeight);
      if (sliderHeight < this.options.sliderMinHeight) {
        sliderHeight = this.options.sliderMinHeight;
      } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
        sliderHeight = this.options.sliderMaxHeight;
      }
      if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
        sliderHeight += BROWSER_SCROLLBAR_WIDTH;
      }
      this.maxSliderTop = paneOuterHeight - sliderHeight;
      this.contentHeight = contentHeight;
      this.paneHeight = paneHeight;
      this.paneOuterHeight = paneOuterHeight;
      this.sliderHeight = sliderHeight;
      this.paneTop = paneTop;
      this.slider.height(sliderHeight);
      this.events.scroll();
      this.pane.show();
      this.isActive = true;
      if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
        this.pane.hide();
        this.isActive = false;
      } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
        this.slider.hide();
      } else {
        this.slider.show();
      }
      this.pane.css({
        opacity: (this.options.alwaysVisible ? 1 : ''),
        visibility: (this.options.alwaysVisible ? 'visible' : '')
      });
      contentPosition = this.$content.css('position');
      if (contentPosition === 'static' || contentPosition === 'relative') {
        right = parseInt(this.$content.css('right'), 10);
        if (right) {
          this.$content.css({
            right: '',
            marginRight: right
          });
        }
      }
      return this;
    };


    /**
      @method scroll
      @private
      @example
          $(".nano").nanoScroller({ scroll: 'top' });
     */

    NanoScroll.prototype.scroll = function() {
      if (!this.isActive) {
        return;
      }
      this.sliderY = Math.max(0, this.sliderY);
      this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
      this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop);
      if (!this.iOSNativeScrolling) {
        this.updateScrollValues();
        this.setOnScrollStyles();
      }
      return this;
    };


    /**
      Scroll at the bottom with an offset value
      @method scrollBottom
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollBottom: value });
     */

    NanoScroll.prototype.scrollBottom = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
      this.stop().restore();
      return this;
    };


    /**
      Scroll at the top with an offset value
      @method scrollTop
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTop: value });
     */

    NanoScroll.prototype.scrollTop = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
      this.stop().restore();
      return this;
    };


    /**
      Scroll to an element
      @method scrollTo
      @param node {Node} A node to scroll to.
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTo: $('#a_node') });
     */

    NanoScroll.prototype.scrollTo = function(node) {
      if (!this.isActive) {
        return;
      }
      this.scrollTop(this.$el.find(node).get(0).offsetTop);
      return this;
    };


    /**
      To stop the operation.
      This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
      @method stop
      @chainable
      @example
          $(".nano").nanoScroller({ stop: true });
     */

    NanoScroll.prototype.stop = function() {
      if (cAF && this.scrollRAF) {
        cAF(this.scrollRAF);
        this.scrollRAF = null;
      }
      this.stopped = true;
      this.removeEvents();
      if (!this.iOSNativeScrolling) {
        this.pane.hide();
      }
      return this;
    };


    /**
      Destroys nanoScroller and restores browser's native scrollbar.
      @method destroy
      @chainable
      @example
          $(".nano").nanoScroller({ destroy: true });
     */

    NanoScroll.prototype.destroy = function() {
      if (!this.stopped) {
        this.stop();
      }
      if (!this.iOSNativeScrolling && this.pane.length) {
        this.pane.remove();
      }
      if (BROWSER_IS_IE7) {
        this.$content.height('');
      }
      this.$content.removeAttr('tabindex');
      if (this.$el.hasClass('has-scrollbar')) {
        this.$el.removeClass('has-scrollbar');
        this.$content.css({
          right: ''
        });
      }
      return this;
    };


    /**
      To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
      Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
      @method flash
      @chainable
      @example
          $(".nano").nanoScroller({ flash: true });
     */

    NanoScroll.prototype.flash = function() {
      if (this.iOSNativeScrolling) {
        return;
      }
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.pane.addClass('flashed');
      setTimeout((function(_this) {
        return function() {
          _this.pane.removeClass('flashed');
        };
      })(this), this.options.flashDelay);
      return this;
    };

    return NanoScroll;

  })();
  $.fn.nanoScroller = function(settings) {
    return this.each(function() {
      var options, scrollbar;
      if (!(scrollbar = this.nanoscroller)) {
        options = $.extend({}, defaults, settings);
        this.nanoscroller = scrollbar = new NanoScroll(this, options);
      }
      if (settings && typeof settings === "object") {
        $.extend(scrollbar.options, settings);
        if (settings.scrollBottom != null) {
          return scrollbar.scrollBottom(settings.scrollBottom);
        }
        if (settings.scrollTop != null) {
          return scrollbar.scrollTop(settings.scrollTop);
        }
        if (settings.scrollTo) {
          return scrollbar.scrollTo(settings.scrollTo);
        }
        if (settings.scroll === 'bottom') {
          return scrollbar.scrollBottom(0);
        }
        if (settings.scroll === 'top') {
          return scrollbar.scrollTop(0);
        }
        if (settings.scroll && settings.scroll instanceof $) {
          return scrollbar.scrollTo(settings.scroll);
        }
        if (settings.stop) {
          return scrollbar.stop();
        }
        if (settings.destroy) {
          return scrollbar.destroy();
        }
        if (settings.flash) {
          return scrollbar.flash();
        }
      }
      return scrollbar.reset();
    });
  };
  $.fn.nanoScroller.Constructor = NanoScroll;
});

//# sourceMappingURL=jquery.nanoscroller.js.map


/***/ }),

/***/ "vy/8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "xUXS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js
var jquery_nanoscroller = __webpack_require__("uZ3E");
var jquery_nanoscroller_default = /*#__PURE__*/__webpack_require__.n(jquery_nanoscroller);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/css/emoji.css
var css_emoji = __webpack_require__("NQbs");
var emoji_default = /*#__PURE__*/__webpack_require__.n(css_emoji);

// EXTERNAL MODULE: ./node_modules/nanoscroller/bin/css/nanoscroller.css
var nanoscroller = __webpack_require__("97D+");
var nanoscroller_default = /*#__PURE__*/__webpack_require__.n(nanoscroller);

// CONCATENATED MODULE: ./node_modules/emoji-vue/src/lib/js/util.js
/* harmony default export */ var js_util = (() => {
  var keyPrefix = ''
  var noPrefix = false
  var cache = {}
  var useCs = !!(window.chrome && chrome.storage && chrome.storage.local)
  var useLs = !useCs && !!window.localStorage

  function storageSetPrefix (newPrefix) {
    keyPrefix = newPrefix
  }

  function storageSetNoPrefix () {
    noPrefix = true
  }

  function storageGetPrefix () {
    if (noPrefix) {
      noPrefix = false
      return ''
    }
    return keyPrefix
  }

  function storageGetValue () {
    var keys = Array.prototype.slice.call(arguments),
      callback = keys.pop(),
      result = [],
      single = keys.length == 1,
      value,
      allFound = true,
      prefix = storageGetPrefix(),
      i, key

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i]
      if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined) {
        result.push(cache[key])
      } else if (useLs) {
        try {
          value = localStorage.getItem(key)
        } catch (e) {
          useLs = false
        }
        try {
          value = (value === undefined || value === null) ? false : JSON.parse(value)
        } catch (e) {
          value = false
        }
        result.push(cache[key] = value)
      } else if (!useCs) {
        result.push(cache[key] = false)
      } else {
        allFound = false
      }
    }

    if (allFound) {
      return callback(single ? result[0] : result)
    }

    chrome.storage.local.get(keys, function (resultObj) {
      var value
      result = []
      for (i = 0; i < keys.length; i++) {
        key = keys[i]
        value = resultObj[key]
        value = value === undefined || value === null ? false : JSON.parse(value)
        result.push(cache[key] = value)
      }

      callback(single ? result[0] : result)
    })
  };

  function storageSetValue (obj, callback) {
    var keyValues = {},
      prefix = storageGetPrefix(),
      key, value

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key]
        key = prefix + key
        cache[key] = value
        value = JSON.stringify(value)
        if (useLs) {
          try {
            localStorage.setItem(key, value)
          } catch (e) {
            useLs = false
          }
        } else {
          keyValues[key] = value
        }
      }
    }

    if (useLs || !useCs) {
      if (callback) {
        callback()
      }
      return
    }

    chrome.storage.local.set(keyValues, callback)
  };

  function storageRemoveValue () {
    var keys = Array.prototype.slice.call(arguments),
      prefix = storageGetPrefix(),
      i, key, callback

    if (typeof keys[keys.length - 1] === 'function') {
      callback = keys.pop()
    }

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i]
      delete cache[key]
      if (useLs) {
        try {
          localStorage.removeItem(key)
        } catch (e) {
          useLs = false
        }
      }
    }
    if (useCs) {
      chrome.storage.local.remove(keys, callback)
    } else if (callback) {
      callback()
    }
  };

  window.ConfigStorage = {
    prefix: storageSetPrefix,
    noPrefix: storageSetNoPrefix,
    get: storageGetValue,
    set: storageSetValue,
    remove: storageRemoveValue
  }
});

// CONCATENATED MODULE: ./node_modules/emoji-vue/src/lib/js/config.js

var Config = {}
Config.Emoji = {
  '00a9': ['\u00A9', ['copyright']],
  '00ae': ['\u00AE', ['registered']],
  '203c': ['\u203C', ['bangbang']],
  '2049': ['\u2049', ['interrobang']],
  '2122': ['\u2122', ['tm']],
  '2139': ['\u2139', ['information_source']],
  '2194': ['\u2194', ['left_right_arrow']],
  '2195': ['\u2195', ['arrow_up_down']],
  '2196': ['\u2196', ['arrow_upper_left']],
  '2197': ['\u2197', ['arrow_upper_right']],
  '2198': ['\u2198', ['arrow_lower_right']],
  '2199': ['\u2199', ['arrow_lower_left']],
  '21a9': ['\u21A9', ['leftwards_arrow_with_hook']],
  '21aa': ['\u21AA', ['arrow_right_hook']],
  '231a': ['\u231A', ['watch']],
  '231b': ['\u231B', ['hourglass']],
  '23e9': ['\u23E9', ['fast_forward']],
  '23ea': ['\u23EA', ['rewind']],
  '23eb': ['\u23EB', ['arrow_double_up']],
  '23ec': ['\u23EC', ['arrow_double_down']],
  '23f0': ['\u23F0', ['alarm_clock']],
  '23f3': ['\u23F3', ['hourglass_flowing_sand']],
  '24c2': ['\u24C2', ['m']],
  '25aa': ['\u25AA', ['black_small_square']],
  '25ab': ['\u25AB', ['white_small_square']],
  '25b6': ['\u25B6', ['arrow_forward']],
  '25c0': ['\u25C0', ['arrow_backward']],
  '25fb': ['\u25FB', ['white_medium_square']],
  '25fc': ['\u25FC', ['black_medium_square']],
  '25fd': ['\u25FD', ['white_medium_small_square']],
  '25fe': ['\u25FE', ['black_medium_small_square']],
  '2600': ['\u2600', ['sunny']],
  '2601': ['\u2601', ['cloud']],
  '260e': ['\u260E', ['phone', 'telephone']],
  '2611': ['\u2611', ['ballot_box_with_check']],
  '2614': ['\u2614', ['umbrella']],
  '2615': ['\u2615', ['coffee']],
  '261d': ['\u261D', ['point_up']],
  '263a': ['\u263A', ['relaxed']],
  '2648': ['\u2648', ['aries']],
  '2649': ['\u2649', ['taurus']],
  '264a': ['\u264A', ['gemini']],
  '264b': ['\u264B', ['cancer']],
  '264c': ['\u264C', ['leo']],
  '264d': ['\u264D', ['virgo']],
  '264e': ['\u264E', ['libra']],
  '264f': ['\u264F', ['scorpius']],
  '2650': ['\u2650', ['sagittarius']],
  '2651': ['\u2651', ['capricorn']],
  '2652': ['\u2652', ['aquarius']],
  '2653': ['\u2653', ['pisces']],
  '2660': ['\u2660', ['spades']],
  '2663': ['\u2663', ['clubs']],
  '2665': ['\u2665', ['hearts']],
  '2666': ['\u2666', ['diamonds']],
  '2668': ['\u2668', ['hotsprings']],
  '267b': ['\u267B', ['recycle']],
  '267f': ['\u267F', ['wheelchair']],
  '2693': ['\u2693', ['anchor']],
  '26a0': ['\u26A0', ['warning']],
  '26a1': ['\u26A1', ['zap']],
  '26aa': ['\u26AA', ['white_circle']],
  '26ab': ['\u26AB', ['black_circle']],
  '26bd': ['\u26BD', ['soccer']],
  '26be': ['\u26BE', ['baseball']],
  '26c4': ['\u26C4', ['snowman']],
  '26c5': ['\u26C5', ['partly_sunny']],
  '26ce': ['\u26CE', ['ophiuchus']],
  '26d4': ['\u26D4', ['no_entry']],
  '26ea': ['\u26EA', ['church']],
  '26f2': ['\u26F2', ['fountain']],
  '26f3': ['\u26F3', ['golf']],
  '26f5': ['\u26F5', ['boat', 'sailboat']],
  '26fa': ['\u26FA', ['tent']],
  '26fd': ['\u26FD', ['fuelpump']],
  '2702': ['\u2702', ['scissors']],
  '2705': ['\u2705', ['white_check_mark']],
  '2708': ['\u2708', ['airplane']],
  '2709': ['\u2709', ['email', 'envelope']],
  '270a': ['\u270A', ['fist']],
  '270b': ['\u270B', ['hand', 'raised_hand']],
  '270c': ['\u270C', ['v']],
  '270f': ['\u270F', ['pencil2']],
  '2712': ['\u2712', ['black_nib']],
  '2714': ['\u2714', ['heavy_check_mark']],
  '2716': ['\u2716', ['heavy_multiplication_x']],
  '2728': ['\u2728', ['sparkles']],
  '2733': ['\u2733', ['eight_spoked_asterisk']],
  '2734': ['\u2734', ['eight_pointed_black_star']],
  '2744': ['\u2744', ['snowflake']],
  '2747': ['\u2747', ['sparkle']],
  '274c': ['\u274C', ['x']],
  '274e': ['\u274E', ['negative_squared_cross_mark']],
  '2753': ['\u2753', ['question']],
  '2754': ['\u2754', ['grey_question']],
  '2755': ['\u2755', ['grey_exclamation']],
  '2757': ['\u2757', ['exclamation', 'heavy_exclamation_mark']],
  '2764': ['\u2764', ['heart'], '<3'],
  '2795': ['\u2795', ['heavy_plus_sign']],
  '2796': ['\u2796', ['heavy_minus_sign']],
  '2797': ['\u2797', ['heavy_division_sign']],
  '27a1': ['\u27A1', ['arrow_right']],
  '27b0': ['\u27B0', ['curly_loop']],
  '27bf': ['\u27BF', ['loop']],
  '2934': ['\u2934', ['arrow_heading_up']],
  '2935': ['\u2935', ['arrow_heading_down']],
  '2b05': ['\u2B05', ['arrow_left']],
  '2b06': ['\u2B06', ['arrow_up']],
  '2b07': ['\u2B07', ['arrow_down']],
  '2b1b': ['\u2B1B', ['black_large_square']],
  '2b1c': ['\u2B1C', ['white_large_square']],
  '2b50': ['\u2B50', ['star']],
  '2b55': ['\u2B55', ['o']],
  '3030': ['\u3030', ['wavy_dash']],
  '303d': ['\u303D', ['part_alternation_mark']],
  '3297': ['\u3297', ['congratulations']],
  '3299': ['\u3299', ['secret']],
  '1f004': ['\uD83C\uDC04', ['mahjong']],
  '1f0cf': ['\uD83C\uDCCF', ['black_joker']],
  '1f170': ['\uD83C\uDD70', ['a']],
  '1f171': ['\uD83C\uDD71', ['b']],
  '1f17e': ['\uD83C\uDD7E', ['o2']],
  '1f17f': ['\uD83C\uDD7F', ['parking']],
  '1f18e': ['\uD83C\uDD8E', ['ab']],
  '1f191': ['\uD83C\uDD91', ['cl']],
  '1f192': ['\uD83C\uDD92', ['cool']],
  '1f193': ['\uD83C\uDD93', ['free']],
  '1f194': ['\uD83C\uDD94', ['id']],
  '1f195': ['\uD83C\uDD95', ['new']],
  '1f196': ['\uD83C\uDD96', ['ng']],
  '1f197': ['\uD83C\uDD97', ['ok']],
  '1f198': ['\uD83C\uDD98', ['sos']],
  '1f199': ['\uD83C\uDD99', ['up']],
  '1f19a': ['\uD83C\uDD9A', ['vs']],
  '1f201': ['\uD83C\uDE01', ['koko']],
  '1f202': ['\uD83C\uDE02', ['sa']],
  '1f21a': ['\uD83C\uDE1A', ['u7121']],
  '1f22f': ['\uD83C\uDE2F', ['u6307']],
  '1f232': ['\uD83C\uDE32', ['u7981']],
  '1f233': ['\uD83C\uDE33', ['u7a7a']],
  '1f234': ['\uD83C\uDE34', ['u5408']],
  '1f235': ['\uD83C\uDE35', ['u6e80']],
  '1f236': ['\uD83C\uDE36', ['u6709']],
  '1f237': ['\uD83C\uDE37', ['u6708']],
  '1f238': ['\uD83C\uDE38', ['u7533']],
  '1f239': ['\uD83C\uDE39', ['u5272']],
  '1f23a': ['\uD83C\uDE3A', ['u55b6']],
  '1f250': ['\uD83C\uDE50', ['ideograph_advantage']],
  '1f251': ['\uD83C\uDE51', ['accept']],
  '1f300': ['\uD83C\uDF00', ['cyclone']],
  '1f301': ['\uD83C\uDF01', ['foggy']],
  '1f302': ['\uD83C\uDF02', ['closed_umbrella']],
  '1f303': ['\uD83C\uDF03', ['night_with_stars']],
  '1f304': ['\uD83C\uDF04', ['sunrise_over_mountains']],
  '1f305': ['\uD83C\uDF05', ['sunrise']],
  '1f306': ['\uD83C\uDF06', ['city_sunset']],
  '1f307': ['\uD83C\uDF07', ['city_sunrise']],
  '1f308': ['\uD83C\uDF08', ['rainbow']],
  '1f309': ['\uD83C\uDF09', ['bridge_at_night']],
  '1f30a': ['\uD83C\uDF0A', ['ocean']],
  '1f30b': ['\uD83C\uDF0B', ['volcano']],
  '1f30c': ['\uD83C\uDF0C', ['milky_way']],
  '1f30d': ['\uD83C\uDF0D', ['earth_africa']],
  '1f30e': ['\uD83C\uDF0E', ['earth_americas']],
  '1f30f': ['\uD83C\uDF0F', ['earth_asia']],
  '1f310': ['\uD83C\uDF10', ['globe_with_meridians']],
  '1f311': ['\uD83C\uDF11', ['new_moon']],
  '1f312': ['\uD83C\uDF12', ['waxing_crescent_moon']],
  '1f313': ['\uD83C\uDF13', ['first_quarter_moon']],
  '1f314': ['\uD83C\uDF14', ['moon', 'waxing_gibbous_moon']],
  '1f315': ['\uD83C\uDF15', ['full_moon']],
  '1f316': ['\uD83C\uDF16', ['waning_gibbous_moon']],
  '1f317': ['\uD83C\uDF17', ['last_quarter_moon']],
  '1f318': ['\uD83C\uDF18', ['waning_crescent_moon']],
  '1f319': ['\uD83C\uDF19', ['crescent_moon']],
  '1f320': ['\uD83C\uDF20', ['stars']],
  '1f31a': ['\uD83C\uDF1A', ['new_moon_with_face']],
  '1f31b': ['\uD83C\uDF1B', ['first_quarter_moon_with_face']],
  '1f31c': ['\uD83C\uDF1C', ['last_quarter_moon_with_face']],
  '1f31d': ['\uD83C\uDF1D', ['full_moon_with_face']],
  '1f31e': ['\uD83C\uDF1E', ['sun_with_face']],
  '1f31f': ['\uD83C\uDF1F', ['star2']],
  '1f330': ['\uD83C\uDF30', ['chestnut']],
  '1f331': ['\uD83C\uDF31', ['seedling']],
  '1f332': ['\uD83C\uDF32', ['evergreen_tree']],
  '1f333': ['\uD83C\uDF33', ['deciduous_tree']],
  '1f334': ['\uD83C\uDF34', ['palm_tree']],
  '1f335': ['\uD83C\uDF35', ['cactus']],
  '1f337': ['\uD83C\uDF37', ['tulip']],
  '1f338': ['\uD83C\uDF38', ['cherry_blossom']],
  '1f339': ['\uD83C\uDF39', ['rose']],
  '1f33a': ['\uD83C\uDF3A', ['hibiscus']],
  '1f33b': ['\uD83C\uDF3B', ['sunflower']],
  '1f33c': ['\uD83C\uDF3C', ['blossom']],
  '1f33d': ['\uD83C\uDF3D', ['corn']],
  '1f33e': ['\uD83C\uDF3E', ['ear_of_rice']],
  '1f33f': ['\uD83C\uDF3F', ['herb']],
  '1f340': ['\uD83C\uDF40', ['four_leaf_clover']],
  '1f341': ['\uD83C\uDF41', ['maple_leaf']],
  '1f342': ['\uD83C\uDF42', ['fallen_leaf']],
  '1f343': ['\uD83C\uDF43', ['leaves']],
  '1f344': ['\uD83C\uDF44', ['mushroom']],
  '1f345': ['\uD83C\uDF45', ['tomato']],
  '1f346': ['\uD83C\uDF46', ['eggplant']],
  '1f347': ['\uD83C\uDF47', ['grapes']],
  '1f348': ['\uD83C\uDF48', ['melon']],
  '1f349': ['\uD83C\uDF49', ['watermelon']],
  '1f34a': ['\uD83C\uDF4A', ['tangerine']],
  '1f34b': ['\uD83C\uDF4B', ['lemon']],
  '1f34c': ['\uD83C\uDF4C', ['banana']],
  '1f34d': ['\uD83C\uDF4D', ['pineapple']],
  '1f34e': ['\uD83C\uDF4E', ['apple']],
  '1f34f': ['\uD83C\uDF4F', ['green_apple']],
  '1f350': ['\uD83C\uDF50', ['pear']],
  '1f351': ['\uD83C\uDF51', ['peach']],
  '1f352': ['\uD83C\uDF52', ['cherries']],
  '1f353': ['\uD83C\uDF53', ['strawberry']],
  '1f354': ['\uD83C\uDF54', ['hamburger']],
  '1f355': ['\uD83C\uDF55', ['pizza']],
  '1f356': ['\uD83C\uDF56', ['meat_on_bone']],
  '1f357': ['\uD83C\uDF57', ['poultry_leg']],
  '1f358': ['\uD83C\uDF58', ['rice_cracker']],
  '1f359': ['\uD83C\uDF59', ['rice_ball']],
  '1f35a': ['\uD83C\uDF5A', ['rice']],
  '1f35b': ['\uD83C\uDF5B', ['curry']],
  '1f35c': ['\uD83C\uDF5C', ['ramen']],
  '1f35d': ['\uD83C\uDF5D', ['spaghetti']],
  '1f35e': ['\uD83C\uDF5E', ['bread']],
  '1f35f': ['\uD83C\uDF5F', ['fries']],
  '1f360': ['\uD83C\uDF60', ['sweet_potato']],
  '1f361': ['\uD83C\uDF61', ['dango']],
  '1f362': ['\uD83C\uDF62', ['oden']],
  '1f363': ['\uD83C\uDF63', ['sushi']],
  '1f364': ['\uD83C\uDF64', ['fried_shrimp']],
  '1f365': ['\uD83C\uDF65', ['fish_cake']],
  '1f366': ['\uD83C\uDF66', ['icecream']],
  '1f367': ['\uD83C\uDF67', ['shaved_ice']],
  '1f368': ['\uD83C\uDF68', ['ice_cream']],
  '1f369': ['\uD83C\uDF69', ['doughnut']],
  '1f36a': ['\uD83C\uDF6A', ['cookie']],
  '1f36b': ['\uD83C\uDF6B', ['chocolate_bar']],
  '1f36c': ['\uD83C\uDF6C', ['candy']],
  '1f36d': ['\uD83C\uDF6D', ['lollipop']],
  '1f36e': ['\uD83C\uDF6E', ['custard']],
  '1f36f': ['\uD83C\uDF6F', ['honey_pot']],
  '1f370': ['\uD83C\uDF70', ['cake']],
  '1f371': ['\uD83C\uDF71', ['bento']],
  '1f372': ['\uD83C\uDF72', ['stew']],
  '1f373': ['\uD83C\uDF73', ['egg']],
  '1f374': ['\uD83C\uDF74', ['fork_and_knife']],
  '1f375': ['\uD83C\uDF75', ['tea']],
  '1f376': ['\uD83C\uDF76', ['sake']],
  '1f377': ['\uD83C\uDF77', ['wine_glass']],
  '1f378': ['\uD83C\uDF78', ['cocktail']],
  '1f379': ['\uD83C\uDF79', ['tropical_drink']],
  '1f37a': ['\uD83C\uDF7A', ['beer']],
  '1f37b': ['\uD83C\uDF7B', ['beers']],
  '1f37c': ['\uD83C\uDF7C', ['baby_bottle']],
  '1f380': ['\uD83C\uDF80', ['ribbon']],
  '1f381': ['\uD83C\uDF81', ['gift']],
  '1f382': ['\uD83C\uDF82', ['birthday']],
  '1f383': ['\uD83C\uDF83', ['jack_o_lantern']],
  '1f384': ['\uD83C\uDF84', ['christmas_tree']],
  '1f385': ['\uD83C\uDF85', ['santa']],
  '1f386': ['\uD83C\uDF86', ['fireworks']],
  '1f387': ['\uD83C\uDF87', ['sparkler']],
  '1f388': ['\uD83C\uDF88', ['balloon']],
  '1f389': ['\uD83C\uDF89', ['tada']],
  '1f38a': ['\uD83C\uDF8A', ['confetti_ball']],
  '1f38b': ['\uD83C\uDF8B', ['tanabata_tree']],
  '1f38c': ['\uD83C\uDF8C', ['crossed_flags']],
  '1f38d': ['\uD83C\uDF8D', ['bamboo']],
  '1f38e': ['\uD83C\uDF8E', ['dolls']],
  '1f38f': ['\uD83C\uDF8F', ['flags']],
  '1f390': ['\uD83C\uDF90', ['wind_chime']],
  '1f391': ['\uD83C\uDF91', ['rice_scene']],
  '1f392': ['\uD83C\uDF92', ['school_satchel']],
  '1f393': ['\uD83C\uDF93', ['mortar_board']],
  '1f3a0': ['\uD83C\uDFA0', ['carousel_horse']],
  '1f3a1': ['\uD83C\uDFA1', ['ferris_wheel']],
  '1f3a2': ['\uD83C\uDFA2', ['roller_coaster']],
  '1f3a3': ['\uD83C\uDFA3', ['fishing_pole_and_fish']],
  '1f3a4': ['\uD83C\uDFA4', ['microphone']],
  '1f3a5': ['\uD83C\uDFA5', ['movie_camera']],
  '1f3a6': ['\uD83C\uDFA6', ['cinema']],
  '1f3a7': ['\uD83C\uDFA7', ['headphones']],
  '1f3a8': ['\uD83C\uDFA8', ['art']],
  '1f3a9': ['\uD83C\uDFA9', ['tophat']],
  '1f3aa': ['\uD83C\uDFAA', ['circus_tent']],
  '1f3ab': ['\uD83C\uDFAB', ['ticket']],
  '1f3ac': ['\uD83C\uDFAC', ['clapper']],
  '1f3ad': ['\uD83C\uDFAD', ['performing_arts']],
  '1f3ae': ['\uD83C\uDFAE', ['video_game']],
  '1f3af': ['\uD83C\uDFAF', ['dart']],
  '1f3b0': ['\uD83C\uDFB0', ['slot_machine']],
  '1f3b1': ['\uD83C\uDFB1', ['8ball']],
  '1f3b2': ['\uD83C\uDFB2', ['game_die']],
  '1f3b3': ['\uD83C\uDFB3', ['bowling']],
  '1f3b4': ['\uD83C\uDFB4', ['flower_playing_cards']],
  '1f3b5': ['\uD83C\uDFB5', ['musical_note']],
  '1f3b6': ['\uD83C\uDFB6', ['notes']],
  '1f3b7': ['\uD83C\uDFB7', ['saxophone']],
  '1f3b8': ['\uD83C\uDFB8', ['guitar']],
  '1f3b9': ['\uD83C\uDFB9', ['musical_keyboard']],
  '1f3ba': ['\uD83C\uDFBA', ['trumpet']],
  '1f3bb': ['\uD83C\uDFBB', ['violin']],
  '1f3bc': ['\uD83C\uDFBC', ['musical_score']],
  '1f3bd': ['\uD83C\uDFBD', ['running_shirt_with_sash']],
  '1f3be': ['\uD83C\uDFBE', ['tennis']],
  '1f3bf': ['\uD83C\uDFBF', ['ski']],
  '1f3c0': ['\uD83C\uDFC0', ['basketball']],
  '1f3c1': ['\uD83C\uDFC1', ['checkered_flag']],
  '1f3c2': ['\uD83C\uDFC2', ['snowboarder']],
  '1f3c3': ['\uD83C\uDFC3', ['runner', 'running']],
  '1f3c4': ['\uD83C\uDFC4', ['surfer']],
  '1f3c6': ['\uD83C\uDFC6', ['trophy']],
  '1f3c7': ['\uD83C\uDFC7', ['horse_racing']],
  '1f3c8': ['\uD83C\uDFC8', ['football']],
  '1f3c9': ['\uD83C\uDFC9', ['rugby_football']],
  '1f3ca': ['\uD83C\uDFCA', ['swimmer']],
  '1f3e0': ['\uD83C\uDFE0', ['house']],
  '1f3e1': ['\uD83C\uDFE1', ['house_with_garden']],
  '1f3e2': ['\uD83C\uDFE2', ['office']],
  '1f3e3': ['\uD83C\uDFE3', ['post_office']],
  '1f3e4': ['\uD83C\uDFE4', ['european_post_office']],
  '1f3e5': ['\uD83C\uDFE5', ['hospital']],
  '1f3e6': ['\uD83C\uDFE6', ['bank']],
  '1f3e7': ['\uD83C\uDFE7', ['atm']],
  '1f3e8': ['\uD83C\uDFE8', ['hotel']],
  '1f3e9': ['\uD83C\uDFE9', ['love_hotel']],
  '1f3ea': ['\uD83C\uDFEA', ['convenience_store']],
  '1f3eb': ['\uD83C\uDFEB', ['school']],
  '1f3ec': ['\uD83C\uDFEC', ['department_store']],
  '1f3ed': ['\uD83C\uDFED', ['factory']],
  '1f3ee': ['\uD83C\uDFEE', ['izakaya_lantern', 'lantern']],
  '1f3ef': ['\uD83C\uDFEF', ['japanese_castle']],
  '1f3f0': ['\uD83C\uDFF0', ['european_castle']],
  '1f400': ['\uD83D\uDC00', ['rat']],
  '1f401': ['\uD83D\uDC01', ['mouse2']],
  '1f402': ['\uD83D\uDC02', ['ox']],
  '1f403': ['\uD83D\uDC03', ['water_buffalo']],
  '1f404': ['\uD83D\uDC04', ['cow2']],
  '1f405': ['\uD83D\uDC05', ['tiger2']],
  '1f406': ['\uD83D\uDC06', ['leopard']],
  '1f407': ['\uD83D\uDC07', ['rabbit2']],
  '1f408': ['\uD83D\uDC08', ['cat2']],
  '1f409': ['\uD83D\uDC09', ['dragon']],
  '1f40a': ['\uD83D\uDC0A', ['crocodile']],
  '1f40b': ['\uD83D\uDC0B', ['whale2']],
  '1f40c': ['\uD83D\uDC0C', ['snail']],
  '1f40d': ['\uD83D\uDC0D', ['snake']],
  '1f40e': ['\uD83D\uDC0E', ['racehorse']],
  '1f40f': ['\uD83D\uDC0F', ['ram']],
  '1f410': ['\uD83D\uDC10', ['goat']],
  '1f411': ['\uD83D\uDC11', ['sheep']],
  '1f412': ['\uD83D\uDC12', ['monkey']],
  '1f413': ['\uD83D\uDC13', ['rooster']],
  '1f414': ['\uD83D\uDC14', ['chicken']],
  '1f415': ['\uD83D\uDC15', ['dog2']],
  '1f416': ['\uD83D\uDC16', ['pig2']],
  '1f417': ['\uD83D\uDC17', ['boar']],
  '1f418': ['\uD83D\uDC18', ['elephant']],
  '1f419': ['\uD83D\uDC19', ['octopus']],
  '1f41a': ['\uD83D\uDC1A', ['shell']],
  '1f41b': ['\uD83D\uDC1B', ['bug']],
  '1f41c': ['\uD83D\uDC1C', ['ant']],
  '1f41d': ['\uD83D\uDC1D', ['bee', 'honeybee']],
  '1f41e': ['\uD83D\uDC1E', ['beetle']],
  '1f41f': ['\uD83D\uDC1F', ['fish']],
  '1f420': ['\uD83D\uDC20', ['tropical_fish']],
  '1f421': ['\uD83D\uDC21', ['blowfish']],
  '1f422': ['\uD83D\uDC22', ['turtle']],
  '1f423': ['\uD83D\uDC23', ['hatching_chick']],
  '1f424': ['\uD83D\uDC24', ['baby_chick']],
  '1f425': ['\uD83D\uDC25', ['hatched_chick']],
  '1f426': ['\uD83D\uDC26', ['bird']],
  '1f427': ['\uD83D\uDC27', ['penguin']],
  '1f428': ['\uD83D\uDC28', ['koala']],
  '1f429': ['\uD83D\uDC29', ['poodle']],
  '1f42a': ['\uD83D\uDC2A', ['dromedary_camel']],
  '1f42b': ['\uD83D\uDC2B', ['camel']],
  '1f42c': ['\uD83D\uDC2C', ['dolphin', 'flipper']],
  '1f42d': ['\uD83D\uDC2D', ['mouse']],
  '1f42e': ['\uD83D\uDC2E', ['cow']],
  '1f42f': ['\uD83D\uDC2F', ['tiger']],
  '1f430': ['\uD83D\uDC30', ['rabbit']],
  '1f431': ['\uD83D\uDC31', ['cat']],
  '1f432': ['\uD83D\uDC32', ['dragon_face']],
  '1f433': ['\uD83D\uDC33', ['whale']],
  '1f434': ['\uD83D\uDC34', ['horse']],
  '1f435': ['\uD83D\uDC35', ['monkey_face']],
  '1f436': ['\uD83D\uDC36', ['dog']],
  '1f437': ['\uD83D\uDC37', ['pig']],
  '1f438': ['\uD83D\uDC38', ['frog']],
  '1f439': ['\uD83D\uDC39', ['hamster']],
  '1f43a': ['\uD83D\uDC3A', ['wolf']],
  '1f43b': ['\uD83D\uDC3B', ['bear']],
  '1f43c': ['\uD83D\uDC3C', ['panda_face']],
  '1f43d': ['\uD83D\uDC3D', ['pig_nose']],
  '1f43e': ['\uD83D\uDC3E', ['feet', 'paw_prints']],
  '1f440': ['\uD83D\uDC40', ['eyes']],
  '1f442': ['\uD83D\uDC42', ['ear']],
  '1f443': ['\uD83D\uDC43', ['nose']],
  '1f444': ['\uD83D\uDC44', ['lips']],
  '1f445': ['\uD83D\uDC45', ['tongue']],
  '1f446': ['\uD83D\uDC46', ['point_up_2']],
  '1f447': ['\uD83D\uDC47', ['point_down']],
  '1f448': ['\uD83D\uDC48', ['point_left']],
  '1f449': ['\uD83D\uDC49', ['point_right']],
  '1f44a': ['\uD83D\uDC4A', ['facepunch', 'punch']],
  '1f44b': ['\uD83D\uDC4B', ['wave']],
  '1f44c': ['\uD83D\uDC4C', ['ok_hand']],
  '1f44d': ['\uD83D\uDC4D', ['+1', 'thumbsup']],
  '1f44e': ['\uD83D\uDC4E', ['-1', 'thumbsdown']],
  '1f44f': ['\uD83D\uDC4F', ['clap']],
  '1f450': ['\uD83D\uDC50', ['open_hands']],
  '1f451': ['\uD83D\uDC51', ['crown']],
  '1f452': ['\uD83D\uDC52', ['womans_hat']],
  '1f453': ['\uD83D\uDC53', ['eyeglasses']],
  '1f454': ['\uD83D\uDC54', ['necktie']],
  '1f455': ['\uD83D\uDC55', ['shirt', 'tshirt']],
  '1f456': ['\uD83D\uDC56', ['jeans']],
  '1f457': ['\uD83D\uDC57', ['dress']],
  '1f458': ['\uD83D\uDC58', ['kimono']],
  '1f459': ['\uD83D\uDC59', ['bikini']],
  '1f45a': ['\uD83D\uDC5A', ['womans_clothes']],
  '1f45b': ['\uD83D\uDC5B', ['purse']],
  '1f45c': ['\uD83D\uDC5C', ['handbag']],
  '1f45d': ['\uD83D\uDC5D', ['pouch']],
  '1f45e': ['\uD83D\uDC5E', ['mans_shoe', 'shoe']],
  '1f45f': ['\uD83D\uDC5F', ['athletic_shoe']],
  '1f460': ['\uD83D\uDC60', ['high_heel']],
  '1f461': ['\uD83D\uDC61', ['sandal']],
  '1f462': ['\uD83D\uDC62', ['boot']],
  '1f463': ['\uD83D\uDC63', ['footprints']],
  '1f464': ['\uD83D\uDC64', ['bust_in_silhouette']],
  '1f465': ['\uD83D\uDC65', ['busts_in_silhouette']],
  '1f466': ['\uD83D\uDC66', ['boy']],
  '1f467': ['\uD83D\uDC67', ['girl']],
  '1f468': ['\uD83D\uDC68', ['man']],
  '1f469': ['\uD83D\uDC69', ['woman']],
  '1f46a': ['\uD83D\uDC6A', ['family']],
  '1f46b': ['\uD83D\uDC6B', ['couple']],
  '1f46c': ['\uD83D\uDC6C', ['two_men_holding_hands']],
  '1f46d': ['\uD83D\uDC6D', ['two_women_holding_hands']],
  '1f46e': ['\uD83D\uDC6E', ['cop']],
  '1f46f': ['\uD83D\uDC6F', ['dancers']],
  '1f470': ['\uD83D\uDC70', ['bride_with_veil']],
  '1f471': ['\uD83D\uDC71', ['person_with_blond_hair']],
  '1f472': ['\uD83D\uDC72', ['man_with_gua_pi_mao']],
  '1f473': ['\uD83D\uDC73', ['man_with_turban']],
  '1f474': ['\uD83D\uDC74', ['older_man']],
  '1f475': ['\uD83D\uDC75', ['older_woman']],
  '1f476': ['\uD83D\uDC76', ['baby']],
  '1f477': ['\uD83D\uDC77', ['construction_worker']],
  '1f478': ['\uD83D\uDC78', ['princess']],
  '1f479': ['\uD83D\uDC79', ['japanese_ogre']],
  '1f47a': ['\uD83D\uDC7A', ['japanese_goblin']],
  '1f47b': ['\uD83D\uDC7B', ['ghost']],
  '1f47c': ['\uD83D\uDC7C', ['angel']],
  '1f47d': ['\uD83D\uDC7D', ['alien']],
  '1f47e': ['\uD83D\uDC7E', ['space_invader']],
  '1f47f': ['\uD83D\uDC7F', ['imp']],
  '1f480': ['\uD83D\uDC80', ['skull']],
  '1f481': ['\uD83D\uDC81', ['information_desk_person']],
  '1f482': ['\uD83D\uDC82', ['guardsman']],
  '1f483': ['\uD83D\uDC83', ['dancer']],
  '1f484': ['\uD83D\uDC84', ['lipstick']],
  '1f485': ['\uD83D\uDC85', ['nail_care']],
  '1f486': ['\uD83D\uDC86', ['massage']],
  '1f487': ['\uD83D\uDC87', ['haircut']],
  '1f488': ['\uD83D\uDC88', ['barber']],
  '1f489': ['\uD83D\uDC89', ['syringe']],
  '1f48a': ['\uD83D\uDC8A', ['pill']],
  '1f48b': ['\uD83D\uDC8B', ['kiss']],
  '1f48c': ['\uD83D\uDC8C', ['love_letter']],
  '1f48d': ['\uD83D\uDC8D', ['ring']],
  '1f48e': ['\uD83D\uDC8E', ['gem']],
  '1f48f': ['\uD83D\uDC8F', ['couplekiss']],
  '1f490': ['\uD83D\uDC90', ['bouquet']],
  '1f491': ['\uD83D\uDC91', ['couple_with_heart']],
  '1f492': ['\uD83D\uDC92', ['wedding']],
  '1f493': ['\uD83D\uDC93', ['heartbeat']],
  '1f494': ['\uD83D\uDC94', ['broken_heart'], '<\/3'],
  '1f495': ['\uD83D\uDC95', ['two_hearts']],
  '1f496': ['\uD83D\uDC96', ['sparkling_heart']],
  '1f497': ['\uD83D\uDC97', ['heartpulse']],
  '1f498': ['\uD83D\uDC98', ['cupid']],
  '1f499': ['\uD83D\uDC99', ['blue_heart'], '<3'],
  '1f49a': ['\uD83D\uDC9A', ['green_heart'], '<3'],
  '1f49b': ['\uD83D\uDC9B', ['yellow_heart'], '<3'],
  '1f49c': ['\uD83D\uDC9C', ['purple_heart'], '<3'],
  '1f49d': ['\uD83D\uDC9D', ['gift_heart']],
  '1f49e': ['\uD83D\uDC9E', ['revolving_hearts']],
  '1f49f': ['\uD83D\uDC9F', ['heart_decoration']],
  '1f4a0': ['\uD83D\uDCA0', ['diamond_shape_with_a_dot_inside']],
  '1f4a1': ['\uD83D\uDCA1', ['bulb']],
  '1f4a2': ['\uD83D\uDCA2', ['anger']],
  '1f4a3': ['\uD83D\uDCA3', ['bomb']],
  '1f4a4': ['\uD83D\uDCA4', ['zzz']],
  '1f4a5': ['\uD83D\uDCA5', ['boom', 'collision']],
  '1f4a6': ['\uD83D\uDCA6', ['sweat_drops']],
  '1f4a7': ['\uD83D\uDCA7', ['droplet']],
  '1f4a8': ['\uD83D\uDCA8', ['dash']],
  '1f4a9': ['\uD83D\uDCA9', ['hankey', 'poop', 'shit']],
  '1f4aa': ['\uD83D\uDCAA', ['muscle']],
  '1f4ab': ['\uD83D\uDCAB', ['dizzy']],
  '1f4ac': ['\uD83D\uDCAC', ['speech_balloon']],
  '1f4ad': ['\uD83D\uDCAD', ['thought_balloon']],
  '1f4ae': ['\uD83D\uDCAE', ['white_flower']],
  '1f4af': ['\uD83D\uDCAF', ['100']],
  '1f4b0': ['\uD83D\uDCB0', ['moneybag']],
  '1f4b1': ['\uD83D\uDCB1', ['currency_exchange']],
  '1f4b2': ['\uD83D\uDCB2', ['heavy_dollar_sign']],
  '1f4b3': ['\uD83D\uDCB3', ['credit_card']],
  '1f4b4': ['\uD83D\uDCB4', ['yen']],
  '1f4b5': ['\uD83D\uDCB5', ['dollar']],
  '1f4b6': ['\uD83D\uDCB6', ['euro']],
  '1f4b7': ['\uD83D\uDCB7', ['pound']],
  '1f4b8': ['\uD83D\uDCB8', ['money_with_wings']],
  '1f4b9': ['\uD83D\uDCB9', ['chart']],
  '1f4ba': ['\uD83D\uDCBA', ['seat']],
  '1f4bb': ['\uD83D\uDCBB', ['computer']],
  '1f4bc': ['\uD83D\uDCBC', ['briefcase']],
  '1f4bd': ['\uD83D\uDCBD', ['minidisc']],
  '1f4be': ['\uD83D\uDCBE', ['floppy_disk']],
  '1f4bf': ['\uD83D\uDCBF', ['cd']],
  '1f4c0': ['\uD83D\uDCC0', ['dvd']],
  '1f4c1': ['\uD83D\uDCC1', ['file_folder']],
  '1f4c2': ['\uD83D\uDCC2', ['open_file_folder']],
  '1f4c3': ['\uD83D\uDCC3', ['page_with_curl']],
  '1f4c4': ['\uD83D\uDCC4', ['page_facing_up']],
  '1f4c5': ['\uD83D\uDCC5', ['date']],
  '1f4c6': ['\uD83D\uDCC6', ['calendar']],
  '1f4c7': ['\uD83D\uDCC7', ['card_index']],
  '1f4c8': ['\uD83D\uDCC8', ['chart_with_upwards_trend']],
  '1f4c9': ['\uD83D\uDCC9', ['chart_with_downwards_trend']],
  '1f4ca': ['\uD83D\uDCCA', ['bar_chart']],
  '1f4cb': ['\uD83D\uDCCB', ['clipboard']],
  '1f4cc': ['\uD83D\uDCCC', ['pushpin']],
  '1f4cd': ['\uD83D\uDCCD', ['round_pushpin']],
  '1f4ce': ['\uD83D\uDCCE', ['paperclip']],
  '1f4cf': ['\uD83D\uDCCF', ['straight_ruler']],
  '1f4d0': ['\uD83D\uDCD0', ['triangular_ruler']],
  '1f4d1': ['\uD83D\uDCD1', ['bookmark_tabs']],
  '1f4d2': ['\uD83D\uDCD2', ['ledger']],
  '1f4d3': ['\uD83D\uDCD3', ['notebook']],
  '1f4d4': ['\uD83D\uDCD4', ['notebook_with_decorative_cover']],
  '1f4d5': ['\uD83D\uDCD5', ['closed_book']],
  '1f4d6': ['\uD83D\uDCD6', ['book', 'open_book']],
  '1f4d7': ['\uD83D\uDCD7', ['green_book']],
  '1f4d8': ['\uD83D\uDCD8', ['blue_book']],
  '1f4d9': ['\uD83D\uDCD9', ['orange_book']],
  '1f4da': ['\uD83D\uDCDA', ['books']],
  '1f4db': ['\uD83D\uDCDB', ['name_badge']],
  '1f4dc': ['\uD83D\uDCDC', ['scroll']],
  '1f4dd': ['\uD83D\uDCDD', ['memo', 'pencil']],
  '1f4de': ['\uD83D\uDCDE', ['telephone_receiver']],
  '1f4df': ['\uD83D\uDCDF', ['pager']],
  '1f4e0': ['\uD83D\uDCE0', ['fax']],
  '1f4e1': ['\uD83D\uDCE1', ['satellite']],
  '1f4e2': ['\uD83D\uDCE2', ['loudspeaker']],
  '1f4e3': ['\uD83D\uDCE3', ['mega']],
  '1f4e4': ['\uD83D\uDCE4', ['outbox_tray']],
  '1f4e5': ['\uD83D\uDCE5', ['inbox_tray']],
  '1f4e6': ['\uD83D\uDCE6', ['package']],
  '1f4e7': ['\uD83D\uDCE7', ['e-mail']],
  '1f4e8': ['\uD83D\uDCE8', ['incoming_envelope']],
  '1f4e9': ['\uD83D\uDCE9', ['envelope_with_arrow']],
  '1f4ea': ['\uD83D\uDCEA', ['mailbox_closed']],
  '1f4eb': ['\uD83D\uDCEB', ['mailbox']],
  '1f4ec': ['\uD83D\uDCEC', ['mailbox_with_mail']],
  '1f4ed': ['\uD83D\uDCED', ['mailbox_with_no_mail']],
  '1f4ee': ['\uD83D\uDCEE', ['postbox']],
  '1f4ef': ['\uD83D\uDCEF', ['postal_horn']],
  '1f4f0': ['\uD83D\uDCF0', ['newspaper']],
  '1f4f1': ['\uD83D\uDCF1', ['iphone']],
  '1f4f2': ['\uD83D\uDCF2', ['calling']],
  '1f4f3': ['\uD83D\uDCF3', ['vibration_mode']],
  '1f4f4': ['\uD83D\uDCF4', ['mobile_phone_off']],
  '1f4f5': ['\uD83D\uDCF5', ['no_mobile_phones']],
  '1f4f6': ['\uD83D\uDCF6', ['signal_strength']],
  '1f4f7': ['\uD83D\uDCF7', ['camera']],
  '1f4f9': ['\uD83D\uDCF9', ['video_camera']],
  '1f4fa': ['\uD83D\uDCFA', ['tv']],
  '1f4fb': ['\uD83D\uDCFB', ['radio']],
  '1f4fc': ['\uD83D\uDCFC', ['vhs']],
  '1f500': ['\uD83D\uDD00', ['twisted_rightwards_arrows']],
  '1f501': ['\uD83D\uDD01', ['repeat']],
  '1f502': ['\uD83D\uDD02', ['repeat_one']],
  '1f503': ['\uD83D\uDD03', ['arrows_clockwise']],
  '1f504': ['\uD83D\uDD04', ['arrows_counterclockwise']],
  '1f505': ['\uD83D\uDD05', ['low_brightness']],
  '1f506': ['\uD83D\uDD06', ['high_brightness']],
  '1f507': ['\uD83D\uDD07', ['mute']],
  '1f508': ['\uD83D\uDD09', ['speaker']],
  '1f509': ['\uD83D\uDD09', ['sound']],
  '1f50a': ['\uD83D\uDD0A', ['loud_sound']],
  '1f50b': ['\uD83D\uDD0B', ['battery']],
  '1f50c': ['\uD83D\uDD0C', ['electric_plug']],
  '1f50d': ['\uD83D\uDD0D', ['mag']],
  '1f50e': ['\uD83D\uDD0E', ['mag_right']],
  '1f50f': ['\uD83D\uDD0F', ['lock_with_ink_pen']],
  '1f510': ['\uD83D\uDD10', ['closed_lock_with_key']],
  '1f511': ['\uD83D\uDD11', ['key']],
  '1f512': ['\uD83D\uDD12', ['lock']],
  '1f513': ['\uD83D\uDD13', ['unlock']],
  '1f514': ['\uD83D\uDD14', ['bell']],
  '1f515': ['\uD83D\uDD15', ['no_bell']],
  '1f516': ['\uD83D\uDD16', ['bookmark']],
  '1f517': ['\uD83D\uDD17', ['link']],
  '1f518': ['\uD83D\uDD18', ['radio_button']],
  '1f519': ['\uD83D\uDD19', ['back']],
  '1f51a': ['\uD83D\uDD1A', ['end']],
  '1f51b': ['\uD83D\uDD1B', ['on']],
  '1f51c': ['\uD83D\uDD1C', ['soon']],
  '1f51d': ['\uD83D\uDD1D', ['top']],
  '1f51e': ['\uD83D\uDD1E', ['underage']],
  '1f51f': ['\uD83D\uDD1F', ['keycap_ten']],
  '1f520': ['\uD83D\uDD20', ['capital_abcd']],
  '1f521': ['\uD83D\uDD21', ['abcd']],
  '1f522': ['\uD83D\uDD22', ['1234']],
  '1f523': ['\uD83D\uDD23', ['symbols']],
  '1f524': ['\uD83D\uDD24', ['abc']],
  '1f525': ['\uD83D\uDD25', ['fire']],
  '1f526': ['\uD83D\uDD26', ['flashlight']],
  '1f527': ['\uD83D\uDD27', ['wrench']],
  '1f528': ['\uD83D\uDD28', ['hammer']],
  '1f529': ['\uD83D\uDD29', ['nut_and_bolt']],
  '1f52a': ['\uD83D\uDD2A', ['hocho']],
  '1f52b': ['\uD83D\uDD2B', ['gun']],
  '1f52c': ['\uD83D\uDD2C', ['microscope']],
  '1f52d': ['\uD83D\uDD2D', ['telescope']],
  '1f52e': ['\uD83D\uDD2E', ['crystal_ball']],
  '1f52f': ['\uD83D\uDD2F', ['six_pointed_star']],
  '1f530': ['\uD83D\uDD30', ['beginner']],
  '1f531': ['\uD83D\uDD31', ['trident']],
  '1f532': ['\uD83D\uDD32', ['black_square_button']],
  '1f533': ['\uD83D\uDD33', ['white_square_button']],
  '1f534': ['\uD83D\uDD34', ['red_circle']],
  '1f535': ['\uD83D\uDD35', ['large_blue_circle']],
  '1f536': ['\uD83D\uDD36', ['large_orange_diamond']],
  '1f537': ['\uD83D\uDD37', ['large_blue_diamond']],
  '1f538': ['\uD83D\uDD38', ['small_orange_diamond']],
  '1f539': ['\uD83D\uDD39', ['small_blue_diamond']],
  '1f53a': ['\uD83D\uDD3A', ['small_red_triangle']],
  '1f53b': ['\uD83D\uDD3B', ['small_red_triangle_down']],
  '1f53c': ['\uD83D\uDD3C', ['arrow_up_small']],
  '1f53d': ['\uD83D\uDD3D', ['arrow_down_small']],
  '1f550': ['\uD83D\uDD50', ['clock1']],
  '1f551': ['\uD83D\uDD51', ['clock2']],
  '1f552': ['\uD83D\uDD52', ['clock3']],
  '1f553': ['\uD83D\uDD53', ['clock4']],
  '1f554': ['\uD83D\uDD54', ['clock5']],
  '1f555': ['\uD83D\uDD55', ['clock6']],
  '1f556': ['\uD83D\uDD56', ['clock7']],
  '1f557': ['\uD83D\uDD57', ['clock8']],
  '1f558': ['\uD83D\uDD58', ['clock9']],
  '1f559': ['\uD83D\uDD59', ['clock10']],
  '1f55a': ['\uD83D\uDD5A', ['clock11']],
  '1f55b': ['\uD83D\uDD5B', ['clock12']],
  '1f55c': ['\uD83D\uDD5C', ['clock130']],
  '1f55d': ['\uD83D\uDD5D', ['clock230']],
  '1f55e': ['\uD83D\uDD5E', ['clock330']],
  '1f55f': ['\uD83D\uDD5F', ['clock430']],
  '1f560': ['\uD83D\uDD60', ['clock530']],
  '1f561': ['\uD83D\uDD61', ['clock630']],
  '1f562': ['\uD83D\uDD62', ['clock730']],
  '1f563': ['\uD83D\uDD63', ['clock830']],
  '1f564': ['\uD83D\uDD64', ['clock930']],
  '1f565': ['\uD83D\uDD65', ['clock1030']],
  '1f566': ['\uD83D\uDD66', ['clock1130']],
  '1f567': ['\uD83D\uDD67', ['clock1230']],
  '1f5fb': ['\uD83D\uDDFB', ['mount_fuji']],
  '1f5fc': ['\uD83D\uDDFC', ['tokyo_tower']],
  '1f5fd': ['\uD83D\uDDFD', ['statue_of_liberty']],
  '1f5fe': ['\uD83D\uDDFE', ['japan']],
  '1f5ff': ['\uD83D\uDDFF', ['moyai']],
  '1f600': ['\uD83D\uDE00', ['grinning']],
  '1f601': ['\uD83D\uDE01', ['grin']],
  '1f602': ['\uD83D\uDE02', ['joy']],
  '1f603': ['\uD83D\uDE03', ['smiley'], ':)'],
  '1f604': ['\uD83D\uDE04', ['smile'], ':)'],
  '1f605': ['\uD83D\uDE05', ['sweat_smile']],
  '1f606': ['\uD83D\uDE06', ['satisfied']],
  '1f607': ['\uD83D\uDE07', ['innocent']],
  '1f608': ['\uD83D\uDE08', ['smiling_imp']],
  '1f609': ['\uD83D\uDE09', ['wink'], ';)'],
  '1f60a': ['\uD83D\uDE0A', ['blush']],
  '1f60b': ['\uD83D\uDE0B', ['yum']],
  '1f60c': ['\uD83D\uDE0C', ['relieved']],
  '1f60d': ['\uD83D\uDE0D', ['heart_eyes']],
  '1f60e': ['\uD83D\uDE0E', ['sunglasses']],
  '1f60f': ['\uD83D\uDE0F', ['smirk']],
  '1f610': ['\uD83D\uDE10', ['neutral_face']],
  '1f611': ['\uD83D\uDE11', ['expressionless']],
  '1f612': ['\uD83D\uDE12', ['unamused']],
  '1f613': ['\uD83D\uDE13', ['sweat']],
  '1f614': ['\uD83D\uDE14', ['pensive']],
  '1f615': ['\uD83D\uDE15', ['confused']],
  '1f616': ['\uD83D\uDE16', ['confounded']],
  '1f617': ['\uD83D\uDE17', ['kissing']],
  '1f618': ['\uD83D\uDE18', ['kissing_heart']],
  '1f619': ['\uD83D\uDE19', ['kissing_smiling_eyes']],
  '1f61a': ['\uD83D\uDE1A', ['kissing_closed_eyes']],
  '1f61b': ['\uD83D\uDE1B', ['stuck_out_tongue']],
  '1f61c': ['\uD83D\uDE1C', ['stuck_out_tongue_winking_eye'], ';p'],
  '1f61d': ['\uD83D\uDE1D', ['stuck_out_tongue_closed_eyes']],
  '1f61e': ['\uD83D\uDE1E', ['disappointed'], ':('],
  '1f61f': ['\uD83D\uDE1F', ['worried']],
  '1f620': ['\uD83D\uDE20', ['angry']],
  '1f621': ['\uD83D\uDE21', ['rage']],
  '1f622': ['\uD83D\uDE22', ['cry'], ":'("],
  '1f623': ['\uD83D\uDE23', ['persevere']],
  '1f624': ['\uD83D\uDE24', ['triumph']],
  '1f625': ['\uD83D\uDE25', ['disappointed_relieved']],
  '1f626': ['\uD83D\uDE26', ['frowning']],
  '1f627': ['\uD83D\uDE27', ['anguished']],
  '1f628': ['\uD83D\uDE28', ['fearful']],
  '1f629': ['\uD83D\uDE29', ['weary']],
  '1f62a': ['\uD83D\uDE2A', ['sleepy']],
  '1f62b': ['\uD83D\uDE2B', ['tired_face']],
  '1f62c': ['\uD83D\uDE2C', ['grimacing']],
  '1f62d': ['\uD83D\uDE2D', ['sob'], ":'("],
  '1f62e': ['\uD83D\uDE2E', ['open_mouth']],
  '1f62f': ['\uD83D\uDE2F', ['hushed']],
  '1f630': ['\uD83D\uDE30', ['cold_sweat']],
  '1f631': ['\uD83D\uDE31', ['scream']],
  '1f632': ['\uD83D\uDE32', ['astonished']],
  '1f633': ['\uD83D\uDE33', ['flushed']],
  '1f634': ['\uD83D\uDE34', ['sleeping']],
  '1f635': ['\uD83D\uDE35', ['dizzy_face']],
  '1f636': ['\uD83D\uDE36', ['no_mouth']],
  '1f637': ['\uD83D\uDE37', ['mask']],
  '1f638': ['\uD83D\uDE38', ['smile_cat']],
  '1f639': ['\uD83D\uDE39', ['joy_cat']],
  '1f63a': ['\uD83D\uDE3A', ['smiley_cat']],
  '1f63b': ['\uD83D\uDE3B', ['heart_eyes_cat']],
  '1f63c': ['\uD83D\uDE3C', ['smirk_cat']],
  '1f63d': ['\uD83D\uDE3D', ['kissing_cat']],
  '1f63e': ['\uD83D\uDE3E', ['pouting_cat']],
  '1f63f': ['\uD83D\uDE3F', ['crying_cat_face']],
  '1f640': ['\uD83D\uDE40', ['scream_cat']],
  '1f645': ['\uD83D\uDE45', ['no_good']],
  '1f646': ['\uD83D\uDE46', ['ok_woman']],
  '1f647': ['\uD83D\uDE47', ['bow']],
  '1f648': ['\uD83D\uDE48', ['see_no_evil']],
  '1f649': ['\uD83D\uDE49', ['hear_no_evil']],
  '1f64a': ['\uD83D\uDE4A', ['speak_no_evil']],
  '1f64b': ['\uD83D\uDE4B', ['raising_hand']],
  '1f64c': ['\uD83D\uDE4C', ['raised_hands']],
  '1f64d': ['\uD83D\uDE4D', ['person_frowning']],
  '1f64e': ['\uD83D\uDE4E', ['person_with_pouting_face']],
  '1f64f': ['\uD83D\uDE4F', ['pray']],
  '1f680': ['\uD83D\uDE80', ['rocket']],
  '1f681': ['\uD83D\uDE81', ['helicopter']],
  '1f682': ['\uD83D\uDE82', ['steam_locomotive']],
  '1f683': ['\uD83D\uDE83', ['railway_car']],
  '1f68b': ['\uD83D\uDE8B', ['train']],
  '1f684': ['\uD83D\uDE84', ['bullettrain_side']],
  '1f685': ['\uD83D\uDE85', ['bullettrain_front']],
  '1f686': ['\uD83D\uDE86', ['train2']],
  '1f687': ['\uD83D\uDE87', ['metro']],
  '1f688': ['\uD83D\uDE88', ['light_rail']],
  '1f689': ['\uD83D\uDE89', ['station']],
  '1f68a': ['\uD83D\uDE8A', ['tram']],
  '1f68c': ['\uD83D\uDE8C', ['bus']],
  '1f68d': ['\uD83D\uDE8D', ['oncoming_bus']],
  '1f68e': ['\uD83D\uDE8E', ['trolleybus']],
  '1f68f': ['\uD83D\uDE8F', ['busstop']],
  '1f690': ['\uD83D\uDE90', ['minibus']],
  '1f691': ['\uD83D\uDE91', ['ambulance']],
  '1f692': ['\uD83D\uDE92', ['fire_engine']],
  '1f693': ['\uD83D\uDE93', ['police_car']],
  '1f694': ['\uD83D\uDE94', ['oncoming_police_car']],
  '1f695': ['\uD83D\uDE95', ['taxi']],
  '1f696': ['\uD83D\uDE96', ['oncoming_taxi']],
  '1f697': ['\uD83D\uDE97', ['car', 'red_car']],
  '1f698': ['\uD83D\uDE98', ['oncoming_automobile']],
  '1f699': ['\uD83D\uDE99', ['blue_car']],
  '1f69a': ['\uD83D\uDE9A', ['truck']],
  '1f69b': ['\uD83D\uDE9B', ['articulated_lorry']],
  '1f69c': ['\uD83D\uDE9C', ['tractor']],
  '1f69d': ['\uD83D\uDE9D', ['monorail']],
  '1f69e': ['\uD83D\uDE9E', ['mountain_railway']],
  '1f69f': ['\uD83D\uDE9F', ['suspension_railway']],
  '1f6a0': ['\uD83D\uDEA0', ['mountain_cableway']],
  '1f6a1': ['\uD83D\uDEA1', ['aerial_tramway']],
  '1f6a2': ['\uD83D\uDEA2', ['ship']],
  '1f6a3': ['\uD83D\uDEA3', ['rowboat']],
  '1f6a4': ['\uD83D\uDEA4', ['speedboat']],
  '1f6a5': ['\uD83D\uDEA5', ['traffic_light']],
  '1f6a6': ['\uD83D\uDEA6', ['vertical_traffic_light']],
  '1f6a7': ['\uD83D\uDEA7', ['construction']],
  '1f6a8': ['\uD83D\uDEA8', ['rotating_light']],
  '1f6a9': ['\uD83D\uDEA9', ['triangular_flag_on_post']],
  '1f6aa': ['\uD83D\uDEAA', ['door']],
  '1f6ab': ['\uD83D\uDEAB', ['no_entry_sign']],
  '1f6ac': ['\uD83D\uDEAC', ['smoking']],
  '1f6ad': ['\uD83D\uDEAD', ['no_smoking']],
  '1f6ae': ['\uD83D\uDEAE', ['put_litter_in_its_place']],
  '1f6af': ['\uD83D\uDEAF', ['do_not_litter']],
  '1f6b0': ['\uD83D\uDEB0', ['potable_water']],
  '1f6b1': ['\uD83D\uDEB1', ['non-potable_water']],
  '1f6b2': ['\uD83D\uDEB2', ['bike']],
  '1f6b3': ['\uD83D\uDEB3', ['no_bicycles']],
  '1f6b4': ['\uD83D\uDEB4', ['bicyclist']],
  '1f6b5': ['\uD83D\uDEB5', ['mountain_bicyclist']],
  '1f6b6': ['\uD83D\uDEB6', ['walking']],
  '1f6b7': ['\uD83D\uDEB7', ['no_pedestrians']],
  '1f6b8': ['\uD83D\uDEB8', ['children_crossing']],
  '1f6b9': ['\uD83D\uDEB9', ['mens']],
  '1f6ba': ['\uD83D\uDEBA', ['womens']],
  '1f6bb': ['\uD83D\uDEBB', ['restroom']],
  '1f6bc': ['\uD83D\uDEBC', ['baby_symbol']],
  '1f6bd': ['\uD83D\uDEBD', ['toilet']],
  '1f6be': ['\uD83D\uDEBE', ['wc']],
  '1f6bf': ['\uD83D\uDEBF', ['shower']],
  '1f6c0': ['\uD83D\uDEC0', ['bath']],
  '1f6c1': ['\uD83D\uDEC1', ['bathtub']],
  '1f6c2': ['\uD83D\uDEC2', ['passport_control']],
  '1f6c3': ['\uD83D\uDEC3', ['customs']],
  '1f6c4': ['\uD83D\uDEC4', ['baggage_claim']],
  '1f6c5': ['\uD83D\uDEC5', ['left_luggage']],
  '0023': ['\u0023\u20E3', ['hash']],
  '0030': ['\u0030\u20E3', ['zero']],
  '0031': ['\u0031\u20E3', ['one']],
  '0032': ['\u0032\u20E3', ['two']],
  '0033': ['\u0033\u20E3', ['three']],
  '0034': ['\u0034\u20E3', ['four']],
  '0035': ['\u0035\u20E3', ['five']],
  '0036': ['\u0036\u20E3', ['six']],
  '0037': ['\u0037\u20E3', ['seven']],
  '0038': ['\u0038\u20E3', ['eight']],
  '0039': ['\u0039\u20E3', ['nine']],
  '1f1e8-1f1f3': ['\uD83C\uDDE8\uD83C\uDDF3', ['cn']],
  '1f1e9-1f1ea': ['\uD83C\uDDE9\uD83C\uDDEA', ['de']],
  '1f1ea-1f1f8': ['\uD83C\uDDEA\uD83C\uDDF8', ['es']],
  '1f1eb-1f1f7': ['\uD83C\uDDEB\uD83C\uDDF7', ['fr']],
  '1f1ec-1f1e7': ['\uD83C\uDDEC\uD83C\uDDE7', ['gb', 'uk']],
  '1f1ee-1f1f9': ['\uD83C\uDDEE\uD83C\uDDF9', ['it']],
  '1f1ef-1f1f5': ['\uD83C\uDDEF\uD83C\uDDF5', ['jp']],
  '1f1f0-1f1f7': ['\uD83C\uDDF0\uD83C\uDDF7', ['kr']],
  '1f1f7-1f1fa': ['\uD83C\uDDF7\uD83C\uDDFA', ['ru']],
  '1f1fa-1f1f8': ['\uD83C\uDDFA\uD83C\uDDF8', ['us']]
}

Config.EmojiCategories = [
    ['1f604', '1f603', '1f600', '1f60a', '263a', '1f609', '1f60d', '1f618', '1f61a', '1f617', '1f619', '1f61c', '1f61d', '1f61b', '1f633', '1f601', '1f614', '1f60c', '1f612', '1f61e', '1f623', '1f622', '1f602', '1f62d', '1f62a', '1f625', '1f630', '1f605', '1f613', '1f629', '1f62b', '1f628', '1f631', '1f620', '1f621', '1f624', '1f616', '1f606', '1f60b', '1f637', '1f60e', '1f634', '1f635', '1f632', '1f61f', '1f626', '1f627', '1f608', '1f47f', '1f62e', '1f62c', '1f610', '1f615', '1f62f', '1f636', '1f607', '1f60f', '1f611', '1f472', '1f473', '1f46e', '1f477', '1f482', '1f476', '1f466', '1f467', '1f468', '1f469', '1f474', '1f475', '1f471', '1f47c', '1f478', '1f63a', '1f638', '1f63b', '1f63d', '1f63c', '1f640', '1f63f', '1f639', '1f63e', '1f479', '1f47a', '1f648', '1f649', '1f64a', '1f480', '1f47d', '1f4a9', '1f525', '2728', '1f31f', '1f4ab', '1f4a5', '1f4a2', '1f4a6', '1f4a7', '1f4a4', '1f4a8', '1f442', '1f440', '1f443', '1f445', '1f444', '1f44d', '1f44e', '1f44c', '1f44a', '270a', '270c', '1f44b', '270b', '1f450', '1f446', '1f447', '1f449', '1f448', '1f64c', '1f64f', '261d', '1f44f', '1f4aa', '1f6b6', '1f3c3', '1f483', '1f46b', '1f46a', '1f46c', '1f46d', '1f48f', '1f491', '1f46f', '1f646', '1f645', '1f481', '1f64b', '1f486', '1f487', '1f485', '1f470', '1f64e', '1f64d', '1f647', '1f3a9', '1f451', '1f452', '1f45f', '1f45e', '1f461', '1f460', '1f462', '1f455', '1f454', '1f45a', '1f457', '1f3bd', '1f456', '1f458', '1f459', '1f4bc', '1f45c', '1f45d', '1f45b', '1f453', '1f380', '1f302', '1f484', '1f49b', '1f499', '1f49c', '1f49a', '2764', '1f494', '1f497', '1f493', '1f495', '1f496', '1f49e', '1f498', '1f48c', '1f48b', '1f48d', '1f48e', '1f464', '1f465', '1f4ac', '1f463', '1f4ad'],
    ['1f436', '1f43a', '1f431', '1f42d', '1f439', '1f430', '1f438', '1f42f', '1f428', '1f43b', '1f437', '1f43d', '1f42e', '1f417', '1f435', '1f412', '1f434', '1f411', '1f418', '1f43c', '1f427', '1f426', '1f424', '1f425', '1f423', '1f414', '1f40d', '1f422', '1f41b', '1f41d', '1f41c', '1f41e', '1f40c', '1f419', '1f41a', '1f420', '1f41f', '1f42c', '1f433', '1f40b', '1f404', '1f40f', '1f400', '1f403', '1f405', '1f407', '1f409', '1f40e', '1f410', '1f413', '1f415', '1f416', '1f401', '1f402', '1f432', '1f421', '1f40a', '1f42b', '1f42a', '1f406', '1f408', '1f429', '1f43e', '1f490', '1f338', '1f337', '1f340', '1f339', '1f33b', '1f33a', '1f341', '1f343', '1f342', '1f33f', '1f33e', '1f344', '1f335', '1f334', '1f332', '1f333', '1f330', '1f331', '1f33c', '1f310', '1f31e', '1f31d', '1f31a', '1f311', '1f312', '1f313', '1f314', '1f315', '1f316', '1f317', '1f318', '1f31c', '1f31b', '1f319', '1f30d', '1f30e', '1f30f', '1f30b', '1f30c', '1f320', '2b50', '2600', '26c5', '2601', '26a1', '2614', '2744', '26c4', '1f300', '1f301', '1f308', '1f30a'],
    ['1f38d', '1f49d', '1f38e', '1f392', '1f393', '1f38f', '1f386', '1f387', '1f390', '1f391', '1f383', '1f47b', '1f385', '1f384', '1f381', '1f38b', '1f389', '1f38a', '1f388', '1f38c', '1f52e', '1f3a5', '1f4f7', '1f4f9', '1f4fc', '1f4bf', '1f4c0', '1f4bd', '1f4be', '1f4bb', '1f4f1', '260e', '1f4de', '1f4df', '1f4e0', '1f4e1', '1f4fa', '1f4fb', '1f50a', '1f509', '1f508', '1f507', '1f514', '1f515', '1f4e3', '1f4e2', '23f3', '231b', '23f0', '231a', '1f513', '1f512', '1f50f', '1f510', '1f511', '1f50e', '1f4a1', '1f526', '1f506', '1f505', '1f50c', '1f50b', '1f50d', '1f6c0', '1f6c1', '1f6bf', '1f6bd', '1f527', '1f529', '1f528', '1f6aa', '1f6ac', '1f4a3', '1f52b', '1f52a', '1f48a', '1f489', '1f4b0', '1f4b4', '1f4b5', '1f4b7', '1f4b6', '1f4b3', '1f4b8', '1f4f2', '1f4e7', '1f4e5', '1f4e4', '2709', '1f4e9', '1f4e8', '1f4ef', '1f4eb', '1f4ea', '1f4ec', '1f4ed', '1f4ee', '1f4e6', '1f4dd', '1f4c4', '1f4c3', '1f4d1', '1f4ca', '1f4c8', '1f4c9', '1f4dc', '1f4cb', '1f4c5', '1f4c6', '1f4c7', '1f4c1', '1f4c2', '2702', '1f4cc', '1f4ce', '2712', '270f', '1f4cf', '1f4d0', '1f4d5', '1f4d7', '1f4d8', '1f4d9', '1f4d3', '1f4d4', '1f4d2', '1f4da', '1f4d6', '1f516', '1f4db', '1f52c', '1f52d', '1f4f0', '1f3a8', '1f3ac', '1f3a4', '1f3a7', '1f3bc', '1f3b5', '1f3b6', '1f3b9', '1f3bb', '1f3ba', '1f3b7', '1f3b8', '1f47e', '1f3ae', '1f0cf', '1f3b4', '1f004', '1f3b2', '1f3af', '1f3c8', '1f3c0', '26bd', '26be', '1f3be', '1f3b1', '1f3c9', '1f3b3', '26f3', '1f6b5', '1f6b4', '1f3c1', '1f3c7', '1f3c6', '1f3bf', '1f3c2', '1f3ca', '1f3c4', '1f3a3', '2615', '1f375', '1f376', '1f37c', '1f37a', '1f37b', '1f378', '1f379', '1f377', '1f374', '1f355', '1f354', '1f35f', '1f357', '1f356', '1f35d', '1f35b', '1f364', '1f371', '1f363', '1f365', '1f359', '1f358', '1f35a', '1f35c', '1f372', '1f362', '1f361', '1f373', '1f35e', '1f369', '1f36e', '1f366', '1f368', '1f367', '1f382', '1f370', '1f36a', '1f36b', '1f36c', '1f36d', '1f36f', '1f34e', '1f34f', '1f34a', '1f34b', '1f352', '1f347', '1f349', '1f353', '1f351', '1f348', '1f34c', '1f350', '1f34d', '1f360', '1f346', '1f345', '1f33d'],
    ['1f3e0', '1f3e1', '1f3eb', '1f3e2', '1f3e3', '1f3e5', '1f3e6', '1f3ea', '1f3e9', '1f3e8', '1f492', '26ea', '1f3ec', '1f3e4', '1f307', '1f306', '1f3ef', '1f3f0', '26fa', '1f3ed', '1f5fc', '1f5fe', '1f5fb', '1f304', '1f305', '1f303', '1f5fd', '1f309', '1f3a0', '1f3a1', '26f2', '1f3a2', '1f6a2', '26f5', '1f6a4', '1f6a3', '2693', '1f680', '2708', '1f4ba', '1f681', '1f682', '1f68a', '1f689', '1f69e', '1f686', '1f684', '1f685', '1f688', '1f687', '1f69d', '1f683', '1f68b', '1f68e', '1f68c', '1f68d', '1f699', '1f698', '1f697', '1f695', '1f696', '1f69b', '1f69a', '1f6a8', '1f693', '1f694', '1f692', '1f691', '1f690', '1f6b2', '1f6a1', '1f69f', '1f6a0', '1f69c', '1f488', '1f68f', '1f3ab', '1f6a6', '1f6a5', '26a0', '1f6a7', '1f530', '26fd', '1f3ee', '1f3b0', '2668', '1f5ff', '1f3aa', '1f3ad', '1f4cd', '1f6a9', '1f1ef-1f1f5', '1f1f0-1f1f7', '1f1e9-1f1ea', '1f1e8-1f1f3', '1f1fa-1f1f8', '1f1eb-1f1f7', '1f1ea-1f1f8', '1f1ee-1f1f9', '1f1f7-1f1fa', '1f1ec-1f1e7'],
    ['0031', '0032', '0033', '0034', '0035', '0036', '0037', '0038', '0039', '0030', '1f51f', '1f522', '0023', '1f523', '2b06', '2b07', '2b05', '27a1', '1f520', '1f521', '1f524', '2197', '2196', '2198', '2199', '2194', '2195', '1f504', '25c0', '25b6', '1f53c', '1f53d', '21a9', '21aa', '2139', '23ea', '23e9', '23eb', '23ec', '2935', '2934', '1f197', '1f500', '1f501', '1f502', '1f195', '1f199', '1f192', '1f193', '1f196', '1f4f6', '1f3a6', '1f201', '1f22f', '1f233', '1f235', '1f234', '1f232', '1f250', '1f239', '1f23a', '1f236', '1f21a', '1f6bb', '1f6b9', '1f6ba', '1f6bc', '1f6be', '1f6b0', '1f6ae', '1f17f', '267f', '1f6ad', '1f237', '1f238', '1f202', '24c2', '1f6c2', '1f6c4', '1f6c5', '1f6c3', '1f251', '3299', '3297', '1f191', '1f198', '1f194', '1f6ab', '1f51e', '1f4f5', '1f6af', '1f6b1', '1f6b3', '1f6b7', '1f6b8', '26d4', '2733', '2747', '274e', '2705', '2734', '1f49f', '1f19a', '1f4f3', '1f4f4', '1f170', '1f171', '1f18e', '1f17e', '1f4a0', '27bf', '267b', '2648', '2649', '264a', '264b', '264c', '264d', '264e', '264f', '2650', '2651', '2652', '2653', '26ce', '1f52f', '1f3e7', '1f4b9', '1f4b2', '1f4b1', '00a9', '00ae', '2122', '274c', '203c', '2049', '2757', '2753', '2755', '2754', '2b55', '1f51d', '1f51a', '1f519', '1f51b', '1f51c', '1f503', '1f55b', '1f567', '1f550', '1f55c', '1f551', '1f55d', '1f552', '1f55e', '1f553', '1f55f', '1f554', '1f560', '1f555', '1f556', '1f557', '1f558', '1f559', '1f55a', '1f561', '1f562', '1f563', '1f564', '1f565', '1f566', '2716', '2795', '2796', '2797', '2660', '2665', '2663', '2666', '1f4ae', '1f4af', '2714', '2611', '1f518', '1f517', '27b0', '3030', '303d', '1f531', '25fc', '25fb', '25fe', '25fd', '25aa', '25ab', '1f53a', '1f532', '1f533', '26ab', '26aa', '1f534', '1f535', '1f53b', '2b1c', '2b1b', '1f536', '1f537', '1f538', '1f539']
]

Config.EmojiCategorySpritesheetDimens = [
    [7, 27],
    [4, 29],
    [7, 33],
    [3, 34],
    [7, 34]
]

Config.emoji_data = {
  '00a9': [
        ['\u00A9'], '\uE24E', '\uDBBA\uDF29', ['copyright'], 0, 0
  ],
  '00ae': [
        ['\u00AE'], '\uE24F', '\uDBBA\uDF2D', ['registered'], 0, 1
  ],
  '203c': [
        ['\u203C\uFE0F', '\u203C'], '', '\uDBBA\uDF06', ['bangbang'], 0, 2
  ],
  '2049': [
        ['\u2049\uFE0F', '\u2049'], '', '\uDBBA\uDF05', ['interrobang'], 0, 3
  ],
  '2122': [
        ['\u2122'], '\uE537', '\uDBBA\uDF2A', ['tm'], 0, 4
  ],
  '2139': [
        ['\u2139\uFE0F', '\u2139'], '', '\uDBBA\uDF47', ['information_source'], 0, 5
  ],
  '2194': [
        ['\u2194\uFE0F', '\u2194'], '', '\uDBBA\uDEF6', ['left_right_arrow'], 0, 6
  ],
  '2195': [
        ['\u2195\uFE0F', '\u2195'], '', '\uDBBA\uDEF7', ['arrow_up_down'], 0, 7
  ],
  '2196': [
        ['\u2196\uFE0F', '\u2196'], '\uE237', '\uDBBA\uDEF2', ['arrow_upper_left'], 0, 8
  ],
  '2197': [
        ['\u2197\uFE0F', '\u2197'], '\uE236', '\uDBBA\uDEF0', ['arrow_upper_right'], 0, 9
  ],
  '2198': [
        ['\u2198\uFE0F', '\u2198'], '\uE238', '\uDBBA\uDEF1', ['arrow_lower_right'], 0, 10
  ],
  '2199': [
        ['\u2199\uFE0F', '\u2199'], '\uE239', '\uDBBA\uDEF3', ['arrow_lower_left'], 0, 11
  ],
  '21a9': [
        ['\u21A9\uFE0F', '\u21A9'], '', '\uDBBA\uDF83', ['leftwards_arrow_with_hook'], 0, 12
  ],
  '21aa': [
        ['\u21AA\uFE0F', '\u21AA'], '', '\uDBBA\uDF88', ['arrow_right_hook'], 0, 13
  ],
  '231a': [
        ['\u231A\uFE0F', '\u231A'], '', '\uDBB8\uDC1D', ['watch'], 0, 14
  ],
  '231b': [
        ['\u231B\uFE0F', '\u231B'], '', '\uDBB8\uDC1C', ['hourglass'], 0, 15
  ],
  '23e9': [
        ['\u23E9'], '\uE23C', '\uDBBA\uDEFE', ['fast_forward'], 0, 16
  ],
  '23ea': [
        ['\u23EA'], '\uE23D', '\uDBBA\uDEFF', ['rewind'], 0, 17
  ],
  '23eb': [
        ['\u23EB'], '', '\uDBBA\uDF03', ['arrow_double_up'], 0, 18
  ],
  '23ec': [
        ['\u23EC'], '', '\uDBBA\uDF02', ['arrow_double_down'], 0, 19
  ],
  '23f0': [
        ['\u23F0'], '\uE02D', '\uDBB8\uDC2A', ['alarm_clock'], 0, 20
  ],
  '23f3': [
        ['\u23F3'], '', '\uDBB8\uDC1B', ['hourglass_flowing_sand'], 0, 21
  ],
  '24c2': [
        ['\u24C2\uFE0F', '\u24C2'], '\uE434', '\uDBB9\uDFE1', ['m'], 0, 22
  ],
  '25aa': [
        ['\u25AA\uFE0F', '\u25AA'], '\uE21A', '\uDBBA\uDF6E', ['black_small_square'], 0, 23
  ],
  '25ab': [
        ['\u25AB\uFE0F', '\u25AB'], '\uE21B', '\uDBBA\uDF6D', ['white_small_square'], 0, 24
  ],
  '25b6': [
        ['\u25B6\uFE0F', '\u25B6'], '\uE23A', '\uDBBA\uDEFC', ['arrow_forward'], 0, 25
  ],
  '25c0': [
        ['\u25C0\uFE0F', '\u25C0'], '\uE23B', '\uDBBA\uDEFD', ['arrow_backward'], 0, 26
  ],
  '25fb': [
        ['\u25FB\uFE0F', '\u25FB'], '\uE21B', '\uDBBA\uDF71', ['white_medium_square'], 0, 27
  ],
  '25fc': [
        ['\u25FC\uFE0F', '\u25FC'], '\uE21A', '\uDBBA\uDF72', ['black_medium_square'], 0, 28
  ],
  '25fd': [
        ['\u25FD\uFE0F', '\u25FD'], '\uE21B', '\uDBBA\uDF6F', ['white_medium_small_square'], 0, 29
  ],
  '25fe': [
        ['\u25FE\uFE0F', '\u25FE'], '\uE21A', '\uDBBA\uDF70', ['black_medium_small_square'], 1, 0
  ],
  '2600': [
        ['\u2600\uFE0F', '\u2600'], '\uE04A', '\uDBB8\uDC00', ['sunny'], 1, 1
  ],
  '2601': [
        ['\u2601\uFE0F', '\u2601'], '\uE049', '\uDBB8\uDC01', ['cloud'], 1, 2
  ],
  '260e': [
        ['\u260E\uFE0F', '\u260E'], '\uE009', '\uDBB9\uDD23', ['phone', 'telephone'], 1, 3
  ],
  '2611': [
        ['\u2611\uFE0F', '\u2611'], '', '\uDBBA\uDF8B', ['ballot_box_with_check'], 1, 4
  ],
  '2614': [
        ['\u2614\uFE0F', '\u2614'], '\uE04B', '\uDBB8\uDC02', ['umbrella'], 1, 5
  ],
  '2615': [
        ['\u2615\uFE0F', '\u2615'], '\uE045', '\uDBBA\uDD81', ['coffee'], 1, 6
  ],
  '261d': [
        ['\u261D\uFE0F', '\u261D'], '\uE00F', '\uDBBA\uDF98', ['point_up'], 1, 7
  ],
  '263a': [
        ['\u263A\uFE0F', '\u263A'], '\uE414', '\uDBB8\uDF36', ['relaxed'], 1, 8
  ],
  '2648': [
        ['\u2648\uFE0F', '\u2648'], '\uE23F', '\uDBB8\uDC2B', ['aries'], 1, 9
  ],
  '2649': [
        ['\u2649\uFE0F', '\u2649'], '\uE240', '\uDBB8\uDC2C', ['taurus'], 1, 10
  ],
  '264a': [
        ['\u264A\uFE0F', '\u264A'], '\uE241', '\uDBB8\uDC2D', ['gemini'], 1, 11
  ],
  '264b': [
        ['\u264B\uFE0F', '\u264B'], '\uE242', '\uDBB8\uDC2E', ['cancer'], 1, 12
  ],
  '264c': [
        ['\u264C\uFE0F', '\u264C'], '\uE243', '\uDBB8\uDC2F', ['leo'], 1, 13
  ],
  '264d': [
        ['\u264D\uFE0F', '\u264D'], '\uE244', '\uDBB8\uDC30', ['virgo'], 1, 14
  ],
  '264e': [
        ['\u264E\uFE0F', '\u264E'], '\uE245', '\uDBB8\uDC31', ['libra'], 1, 15
  ],
  '264f': [
        ['\u264F\uFE0F', '\u264F'], '\uE246', '\uDBB8\uDC32', ['scorpius'], 1, 16
  ],
  '2650': [
        ['\u2650\uFE0F', '\u2650'], '\uE247', '\uDBB8\uDC33', ['sagittarius'], 1, 17
  ],
  '2651': [
        ['\u2651\uFE0F', '\u2651'], '\uE248', '\uDBB8\uDC34', ['capricorn'], 1, 18
  ],
  '2652': [
        ['\u2652\uFE0F', '\u2652'], '\uE249', '\uDBB8\uDC35', ['aquarius'], 1, 19
  ],
  '2653': [
        ['\u2653\uFE0F', '\u2653'], '\uE24A', '\uDBB8\uDC36', ['pisces'], 1, 20
  ],
  '2660': [
        ['\u2660\uFE0F', '\u2660'], '\uE20E', '\uDBBA\uDF1B', ['spades'], 1, 21
  ],
  '2663': [
        ['\u2663\uFE0F', '\u2663'], '\uE20F', '\uDBBA\uDF1D', ['clubs'], 1, 22
  ],
  '2665': [
        ['\u2665\uFE0F', '\u2665'], '\uE20C', '\uDBBA\uDF1A', ['hearts'], 1, 23
  ],
  '2666': [
        ['\u2666\uFE0F', '\u2666'], '\uE20D', '\uDBBA\uDF1C', ['diamonds'], 1, 24
  ],
  '2668': [
        ['\u2668\uFE0F', '\u2668'], '\uE123', '\uDBB9\uDFFA', ['hotsprings'], 1, 25
  ],
  '267b': [
        ['\u267B\uFE0F', '\u267B'], '', '\uDBBA\uDF2C', ['recycle'], 1, 26
  ],
  '267f': [
        ['\u267F\uFE0F', '\u267F'], '\uE20A', '\uDBBA\uDF20', ['wheelchair'], 1, 27
  ],
  '2693': [
        ['\u2693\uFE0F', '\u2693'], '\uE202', '\uDBB9\uDCC1', ['anchor'], 1, 28
  ],
  '26a0': [
        ['\u26A0\uFE0F', '\u26A0'], '\uE252', '\uDBBA\uDF23', ['warning'], 1, 29
  ],
  '26a1': [
        ['\u26A1\uFE0F', '\u26A1'], '\uE13D', '\uDBB8\uDC04', ['zap'], 2, 0
  ],
  '26aa': [
        ['\u26AA\uFE0F', '\u26AA'], '\uE219', '\uDBBA\uDF65', ['white_circle'], 2, 1
  ],
  '26ab': [
        ['\u26AB\uFE0F', '\u26AB'], '\uE219', '\uDBBA\uDF66', ['black_circle'], 2, 2
  ],
  '26bd': [
        ['\u26BD\uFE0F', '\u26BD'], '\uE018', '\uDBB9\uDFD4', ['soccer'], 2, 3
  ],
  '26be': [
        ['\u26BE\uFE0F', '\u26BE'], '\uE016', '\uDBB9\uDFD1', ['baseball'], 2, 4
  ],
  '26c4': [
        ['\u26C4\uFE0F', '\u26C4'], '\uE048', '\uDBB8\uDC03', ['snowman'], 2, 5
  ],
  '26c5': [
        ['\u26C5\uFE0F', '\u26C5'], '\uE04A\uE049', '\uDBB8\uDC0F', ['partly_sunny'], 2, 6
  ],
  '26ce': [
        ['\u26CE'], '\uE24B', '\uDBB8\uDC37', ['ophiuchus'], 2, 7
  ],
  '26d4': [
        ['\u26D4\uFE0F', '\u26D4'], '\uE137', '\uDBBA\uDF26', ['no_entry'], 2, 8
  ],
  '26ea': [
        ['\u26EA\uFE0F', '\u26EA'], '\uE037', '\uDBB9\uDCBB', ['church'], 2, 9
  ],
  '26f2': [
        ['\u26F2\uFE0F', '\u26F2'], '\uE121', '\uDBB9\uDCBC', ['fountain'], 2, 10
  ],
  '26f3': [
        ['\u26F3\uFE0F', '\u26F3'], '\uE014', '\uDBB9\uDFD2', ['golf'], 2, 11
  ],
  '26f5': [
        ['\u26F5\uFE0F', '\u26F5'], '\uE01C', '\uDBB9\uDFEA', ['boat', 'sailboat'], 2, 12
  ],
  '26fa': [
        ['\u26FA\uFE0F', '\u26FA'], '\uE122', '\uDBB9\uDFFB', ['tent'], 2, 13
  ],
  '26fd': [
        ['\u26FD\uFE0F', '\u26FD'], '\uE03A', '\uDBB9\uDFF5', ['fuelpump'], 2, 14
  ],
  '2702': [
        ['\u2702\uFE0F', '\u2702'], '\uE313', '\uDBB9\uDD3E', ['scissors'], 2, 15
  ],
  '2705': [
        ['\u2705'], '', '\uDBBA\uDF4A', ['white_check_mark'], 2, 16
  ],
  '2708': [
        ['\u2708\uFE0F', '\u2708'], '\uE01D', '\uDBB9\uDFE9', ['airplane'], 2, 17
  ],
  '2709': [
        ['\u2709\uFE0F', '\u2709'], '\uE103', '\uDBB9\uDD29', ['email', 'envelope'], 2, 18
  ],
  '270a': [
        ['\u270A'], '\uE010', '\uDBBA\uDF93', ['fist'], 2, 19
  ],
  '270b': [
        ['\u270B'], '\uE012', '\uDBBA\uDF95', ['hand', 'raised_hand'], 2, 20
  ],
  '270c': [
        ['\u270C\uFE0F', '\u270C'], '\uE011', '\uDBBA\uDF94', ['v'], 2, 21
  ],
  '270f': [
        ['\u270F\uFE0F', '\u270F'], '\uE301', '\uDBB9\uDD39', ['pencil2'], 2, 22
  ],
  '2712': [
        ['\u2712\uFE0F', '\u2712'], '', '\uDBB9\uDD36', ['black_nib'], 2, 23
  ],
  '2714': [
        ['\u2714\uFE0F', '\u2714'], '', '\uDBBA\uDF49', ['heavy_check_mark'], 2, 24
  ],
  '2716': [
        ['\u2716\uFE0F', '\u2716'], '\uE333', '\uDBBA\uDF53', ['heavy_multiplication_x'], 2, 25
  ],
  '2728': [
        ['\u2728'], '\uE32E', '\uDBBA\uDF60', ['sparkles'], 2, 26
  ],
  '2733': [
        ['\u2733\uFE0F', '\u2733'], '\uE206', '\uDBBA\uDF62', ['eight_spoked_asterisk'], 2, 27
  ],
  '2734': [
        ['\u2734\uFE0F', '\u2734'], '\uE205', '\uDBBA\uDF61', ['eight_pointed_black_star'], 2, 28
  ],
  '2744': [
        ['\u2744\uFE0F', '\u2744'], '', '\uDBB8\uDC0E', ['snowflake'], 2, 29
  ],
  '2747': [
        ['\u2747\uFE0F', '\u2747'], '\uE32E', '\uDBBA\uDF77', ['sparkle'], 3, 0
  ],
  '274c': [
        ['\u274C'], '\uE333', '\uDBBA\uDF45', ['x'], 3, 1
  ],
  '274e': [
        ['\u274E'], '\uE333', '\uDBBA\uDF46', ['negative_squared_cross_mark'], 3, 2
  ],
  '2753': [
        ['\u2753'], '\uE020', '\uDBBA\uDF09', ['question'], 3, 3
  ],
  '2754': [
        ['\u2754'], '\uE336', '\uDBBA\uDF0A', ['grey_question'], 3, 4
  ],
  '2755': [
        ['\u2755'], '\uE337', '\uDBBA\uDF0B', ['grey_exclamation'], 3, 5
  ],
  '2757': [
        ['\u2757\uFE0F', '\u2757'], '\uE021', '\uDBBA\uDF04', ['exclamation', 'heavy_exclamation_mark'], 3, 6
  ],
  '2764': [
        ['\u2764\uFE0F', '\u2764'], '\uE022', '\uDBBA\uDF0C', ['heart'], 3, 7, '<3'
  ],
  '2795': [
        ['\u2795'], '', '\uDBBA\uDF51', ['heavy_plus_sign'], 3, 8
  ],
  '2796': [
        ['\u2796'], '', '\uDBBA\uDF52', ['heavy_minus_sign'], 3, 9
  ],
  '2797': [
        ['\u2797'], '', '\uDBBA\uDF54', ['heavy_division_sign'], 3, 10
  ],
  '27a1': [
        ['\u27A1\uFE0F', '\u27A1'], '\uE234', '\uDBBA\uDEFA', ['arrow_right'], 3, 11
  ],
  '27b0': [
        ['\u27B0'], '', '\uDBBA\uDF08', ['curly_loop'], 3, 12
  ],
  '27bf': [
        ['\u27BF'], '\uE211', '\uDBBA\uDC2B', ['loop'], 3, 13
  ],
  '2934': [
        ['\u2934\uFE0F', '\u2934'], '\uE236', '\uDBBA\uDEF4', ['arrow_heading_up'], 3, 14
  ],
  '2935': [
        ['\u2935\uFE0F', '\u2935'], '\uE238', '\uDBBA\uDEF5', ['arrow_heading_down'], 3, 15
  ],
  '2b05': [
        ['\u2B05\uFE0F', '\u2B05'], '\uE235', '\uDBBA\uDEFB', ['arrow_left'], 3, 16
  ],
  '2b06': [
        ['\u2B06\uFE0F', '\u2B06'], '\uE232', '\uDBBA\uDEF8', ['arrow_up'], 3, 17
  ],
  '2b07': [
        ['\u2B07\uFE0F', '\u2B07'], '\uE233', '\uDBBA\uDEF9', ['arrow_down'], 3, 18
  ],
  '2b1b': [
        ['\u2B1B\uFE0F', '\u2B1B'], '\uE21A', '\uDBBA\uDF6C', ['black_large_square'], 3, 19
  ],
  '2b1c': [
        ['\u2B1C\uFE0F', '\u2B1C'], '\uE21B', '\uDBBA\uDF6B', ['white_large_square'], 3, 20
  ],
  '2b50': [
        ['\u2B50\uFE0F', '\u2B50'], '\uE32F', '\uDBBA\uDF68', ['star'], 3, 21
  ],
  '2b55': [
        ['\u2B55\uFE0F', '\u2B55'], '\uE332', '\uDBBA\uDF44', ['o'], 3, 22
  ],
  '3030': [
        ['\u3030'], '', '\uDBBA\uDF07', ['wavy_dash'], 3, 23
  ],
  '303d': [
        ['\u303D\uFE0F', '\u303D'], '\uE12C', '\uDBBA\uDC1B', ['part_alternation_mark'], 3, 24
  ],
  '3297': [
        ['\u3297\uFE0F', '\u3297'], '\uE30D', '\uDBBA\uDF43', ['congratulations'], 3, 25
  ],
  '3299': [
        ['\u3299\uFE0F', '\u3299'], '\uE315', '\uDBBA\uDF2B', ['secret'], 3, 26
  ],
  '1f004': [
        ['\uD83C\uDC04\uFE0F', '\uD83C\uDC04'], '\uE12D', '\uDBBA\uDC0B', ['mahjong'], 3, 27
  ],
  '1f0cf': [
        ['\uD83C\uDCCF'], '', '\uDBBA\uDC12', ['black_joker'], 3, 28
  ],
  '1f170': [
        ['\uD83C\uDD70'], '\uE532', '\uDBB9\uDD0B', ['a'], 3, 29
  ],
  '1f171': [
        ['\uD83C\uDD71'], '\uE533', '\uDBB9\uDD0C', ['b'], 4, 0
  ],
  '1f17e': [
        ['\uD83C\uDD7E'], '\uE535', '\uDBB9\uDD0E', ['o2'], 4, 1
  ],
  '1f17f': [
        ['\uD83C\uDD7F\uFE0F', '\uD83C\uDD7F'], '\uE14F', '\uDBB9\uDFF6', ['parking'], 4, 2
  ],
  '1f18e': [
        ['\uD83C\uDD8E'], '\uE534', '\uDBB9\uDD0D', ['ab'], 4, 3
  ],
  '1f191': [
        ['\uD83C\uDD91'], '', '\uDBBA\uDF84', ['cl'], 4, 4
  ],
  '1f192': [
        ['\uD83C\uDD92'], '\uE214', '\uDBBA\uDF38', ['cool'], 4, 5
  ],
  '1f193': [
        ['\uD83C\uDD93'], '', '\uDBBA\uDF21', ['free'], 4, 6
  ],
  '1f194': [
        ['\uD83C\uDD94'], '\uE229', '\uDBBA\uDF81', ['id'], 4, 7
  ],
  '1f195': [
        ['\uD83C\uDD95'], '\uE212', '\uDBBA\uDF36', ['new'], 4, 8
  ],
  '1f196': [
        ['\uD83C\uDD96'], '', '\uDBBA\uDF28', ['ng'], 4, 9
  ],
  '1f197': [
        ['\uD83C\uDD97'], '\uE24D', '\uDBBA\uDF27', ['ok'], 4, 10
  ],
  '1f198': [
        ['\uD83C\uDD98'], '', '\uDBBA\uDF4F', ['sos'], 4, 11
  ],
  '1f199': [
        ['\uD83C\uDD99'], '\uE213', '\uDBBA\uDF37', ['up'], 4, 12
  ],
  '1f19a': [
        ['\uD83C\uDD9A'], '\uE12E', '\uDBBA\uDF32', ['vs'], 4, 13
  ],
  '1f201': [
        ['\uD83C\uDE01'], '\uE203', '\uDBBA\uDF24', ['koko'], 4, 14
  ],
  '1f202': [
        ['\uD83C\uDE02'], '\uE228', '\uDBBA\uDF3F', ['sa'], 4, 15
  ],
  '1f21a': [
        ['\uD83C\uDE1A\uFE0F', '\uD83C\uDE1A'], '\uE216', '\uDBBA\uDF3A', ['u7121'], 4, 16
  ],
  '1f22f': [
        ['\uD83C\uDE2F\uFE0F', '\uD83C\uDE2F'], '\uE22C', '\uDBBA\uDF40', ['u6307'], 4, 17
  ],
  '1f232': [
        ['\uD83C\uDE32'], '', '\uDBBA\uDF2E', ['u7981'], 4, 18
  ],
  '1f233': [
        ['\uD83C\uDE33'], '\uE22B', '\uDBBA\uDF2F', ['u7a7a'], 4, 19
  ],
  '1f234': [
        ['\uD83C\uDE34'], '', '\uDBBA\uDF30', ['u5408'], 4, 20
  ],
  '1f235': [
        ['\uD83C\uDE35'], '\uE22A', '\uDBBA\uDF31', ['u6e80'], 4, 21
  ],
  '1f236': [
        ['\uD83C\uDE36'], '\uE215', '\uDBBA\uDF39', ['u6709'], 4, 22
  ],
  '1f237': [
        ['\uD83C\uDE37'], '\uE217', '\uDBBA\uDF3B', ['u6708'], 4, 23
  ],
  '1f238': [
        ['\uD83C\uDE38'], '\uE218', '\uDBBA\uDF3C', ['u7533'], 4, 24
  ],
  '1f239': [
        ['\uD83C\uDE39'], '\uE227', '\uDBBA\uDF3E', ['u5272'], 4, 25
  ],
  '1f23a': [
        ['\uD83C\uDE3A'], '\uE22D', '\uDBBA\uDF41', ['u55b6'], 4, 26
  ],
  '1f250': [
        ['\uD83C\uDE50'], '\uE226', '\uDBBA\uDF3D', ['ideograph_advantage'], 4, 27
  ],
  '1f251': [
        ['\uD83C\uDE51'], '', '\uDBBA\uDF50', ['accept'], 4, 28
  ],
  '1f300': [
        ['\uD83C\uDF00'], '\uE443', '\uDBB8\uDC05', ['cyclone'], 4, 29
  ],
  '1f301': [
        ['\uD83C\uDF01'], '', '\uDBB8\uDC06', ['foggy'], 5, 0
  ],
  '1f302': [
        ['\uD83C\uDF02'], '\uE43C', '\uDBB8\uDC07', ['closed_umbrella'], 5, 1
  ],
  '1f303': [
        ['\uD83C\uDF03'], '\uE44B', '\uDBB8\uDC08', ['night_with_stars'], 5, 2
  ],
  '1f304': [
        ['\uD83C\uDF04'], '\uE04D', '\uDBB8\uDC09', ['sunrise_over_mountains'], 5, 3
  ],
  '1f305': [
        ['\uD83C\uDF05'], '\uE449', '\uDBB8\uDC0A', ['sunrise'], 5, 4
  ],
  '1f306': [
        ['\uD83C\uDF06'], '\uE146', '\uDBB8\uDC0B', ['city_sunset'], 5, 5
  ],
  '1f307': [
        ['\uD83C\uDF07'], '\uE44A', '\uDBB8\uDC0C', ['city_sunrise'], 5, 6
  ],
  '1f308': [
        ['\uD83C\uDF08'], '\uE44C', '\uDBB8\uDC0D', ['rainbow'], 5, 7
  ],
  '1f309': [
        ['\uD83C\uDF09'], '\uE44B', '\uDBB8\uDC10', ['bridge_at_night'], 5, 8
  ],
  '1f30a': [
        ['\uD83C\uDF0A'], '\uE43E', '\uDBB8\uDC38', ['ocean'], 5, 9
  ],
  '1f30b': [
        ['\uD83C\uDF0B'], '', '\uDBB8\uDC3A', ['volcano'], 5, 10
  ],
  '1f30c': [
        ['\uD83C\uDF0C'], '\uE44B', '\uDBB8\uDC3B', ['milky_way'], 5, 11
  ],
  '1f30d': [
        ['\uD83C\uDF0D'], '', '', ['earth_africa'], 5, 12
  ],
  '1f30e': [
        ['\uD83C\uDF0E'], '', '', ['earth_americas'], 5, 13
  ],
  '1f30f': [
        ['\uD83C\uDF0F'], '', '\uDBB8\uDC39', ['earth_asia'], 5, 14
  ],
  '1f310': [
        ['\uD83C\uDF10'], '', '', ['globe_with_meridians'], 5, 15
  ],
  '1f311': [
        ['\uD83C\uDF11'], '', '\uDBB8\uDC11', ['new_moon'], 5, 16
  ],
  '1f312': [
        ['\uD83C\uDF12'], '', '', ['waxing_crescent_moon'], 5, 17
  ],
  '1f313': [
        ['\uD83C\uDF13'], '\uE04C', '\uDBB8\uDC13', ['first_quarter_moon'], 5, 18
  ],
  '1f314': [
        ['\uD83C\uDF14'], '\uE04C', '\uDBB8\uDC12', ['moon', 'waxing_gibbous_moon'], 5, 19
  ],
  '1f315': [
        ['\uD83C\uDF15'], '', '\uDBB8\uDC15', ['full_moon'], 5, 20
  ],
  '1f316': [
        ['\uD83C\uDF16'], '', '', ['waning_gibbous_moon'], 5, 21
  ],
  '1f317': [
        ['\uD83C\uDF17'], '', '', ['last_quarter_moon'], 5, 22
  ],
  '1f318': [
        ['\uD83C\uDF18'], '', '', ['waning_crescent_moon'], 5, 23
  ],
  '1f319': [
        ['\uD83C\uDF19'], '\uE04C', '\uDBB8\uDC14', ['crescent_moon'], 5, 24
  ],
  '1f31a': [
        ['\uD83C\uDF1A'], '', '', ['new_moon_with_face'], 5, 25
  ],
  '1f31b': [
        ['\uD83C\uDF1B'], '\uE04C', '\uDBB8\uDC16', ['first_quarter_moon_with_face'], 5, 26
  ],
  '1f31c': [
        ['\uD83C\uDF1C'], '', '', ['last_quarter_moon_with_face'], 5, 27
  ],
  '1f31d': [
        ['\uD83C\uDF1D'], '', '', ['full_moon_with_face'], 5, 28
  ],
  '1f31e': [
        ['\uD83C\uDF1E'], '', '', ['sun_with_face'], 5, 29
  ],
  '1f31f': [
        ['\uD83C\uDF1F'], '\uE335', '\uDBBA\uDF69', ['star2'], 6, 0
  ],
  '1f320': [
        ['\uD83C\uDF20'], '', '\uDBBA\uDF6A', ['stars'], 6, 1
  ],
  '1f330': [
        ['\uD83C\uDF30'], '', '\uDBB8\uDC4C', ['chestnut'], 6, 2
  ],
  '1f331': [
        ['\uD83C\uDF31'], '\uE110', '\uDBB8\uDC3E', ['seedling'], 6, 3
  ],
  '1f332': [
        ['\uD83C\uDF32'], '', '', ['evergreen_tree'], 6, 4
  ],
  '1f333': [
        ['\uD83C\uDF33'], '', '', ['deciduous_tree'], 6, 5
  ],
  '1f334': [
        ['\uD83C\uDF34'], '\uE307', '\uDBB8\uDC47', ['palm_tree'], 6, 6
  ],
  '1f335': [
        ['\uD83C\uDF35'], '\uE308', '\uDBB8\uDC48', ['cactus'], 6, 7
  ],
  '1f337': [
        ['\uD83C\uDF37'], '\uE304', '\uDBB8\uDC3D', ['tulip'], 6, 8
  ],
  '1f338': [
        ['\uD83C\uDF38'], '\uE030', '\uDBB8\uDC40', ['cherry_blossom'], 6, 9
  ],
  '1f339': [
        ['\uD83C\uDF39'], '\uE032', '\uDBB8\uDC41', ['rose'], 6, 10
  ],
  '1f33a': [
        ['\uD83C\uDF3A'], '\uE303', '\uDBB8\uDC45', ['hibiscus'], 6, 11
  ],
  '1f33b': [
        ['\uD83C\uDF3B'], '\uE305', '\uDBB8\uDC46', ['sunflower'], 6, 12
  ],
  '1f33c': [
        ['\uD83C\uDF3C'], '\uE305', '\uDBB8\uDC4D', ['blossom'], 6, 13
  ],
  '1f33d': [
        ['\uD83C\uDF3D'], '', '\uDBB8\uDC4A', ['corn'], 6, 14
  ],
  '1f33e': [
        ['\uD83C\uDF3E'], '\uE444', '\uDBB8\uDC49', ['ear_of_rice'], 6, 15
  ],
  '1f33f': [
        ['\uD83C\uDF3F'], '\uE110', '\uDBB8\uDC4E', ['herb'], 6, 16
  ],
  '1f340': [
        ['\uD83C\uDF40'], '\uE110', '\uDBB8\uDC3C', ['four_leaf_clover'], 6, 17
  ],
  '1f341': [
        ['\uD83C\uDF41'], '\uE118', '\uDBB8\uDC3F', ['maple_leaf'], 6, 18
  ],
  '1f342': [
        ['\uD83C\uDF42'], '\uE119', '\uDBB8\uDC42', ['fallen_leaf'], 6, 19
  ],
  '1f343': [
        ['\uD83C\uDF43'], '\uE447', '\uDBB8\uDC43', ['leaves'], 6, 20
  ],
  '1f344': [
        ['\uD83C\uDF44'], '', '\uDBB8\uDC4B', ['mushroom'], 6, 21
  ],
  '1f345': [
        ['\uD83C\uDF45'], '\uE349', '\uDBB8\uDC55', ['tomato'], 6, 22
  ],
  '1f346': [
        ['\uD83C\uDF46'], '\uE34A', '\uDBB8\uDC56', ['eggplant'], 6, 23
  ],
  '1f347': [
        ['\uD83C\uDF47'], '', '\uDBB8\uDC59', ['grapes'], 6, 24
  ],
  '1f348': [
        ['\uD83C\uDF48'], '', '\uDBB8\uDC57', ['melon'], 6, 25
  ],
  '1f349': [
        ['\uD83C\uDF49'], '\uE348', '\uDBB8\uDC54', ['watermelon'], 6, 26
  ],
  '1f34a': [
        ['\uD83C\uDF4A'], '\uE346', '\uDBB8\uDC52', ['tangerine'], 6, 27
  ],
  '1f34b': [
        ['\uD83C\uDF4B'], '', '', ['lemon'], 6, 28
  ],
  '1f34c': [
        ['\uD83C\uDF4C'], '', '\uDBB8\uDC50', ['banana'], 6, 29
  ],
  '1f34d': [
        ['\uD83C\uDF4D'], '', '\uDBB8\uDC58', ['pineapple'], 7, 0
  ],
  '1f34e': [
        ['\uD83C\uDF4E'], '\uE345', '\uDBB8\uDC51', ['apple'], 7, 1
  ],
  '1f34f': [
        ['\uD83C\uDF4F'], '\uE345', '\uDBB8\uDC5B', ['green_apple'], 7, 2
  ],
  '1f350': [
        ['\uD83C\uDF50'], '', '', ['pear'], 7, 3
  ],
  '1f351': [
        ['\uD83C\uDF51'], '', '\uDBB8\uDC5A', ['peach'], 7, 4
  ],
  '1f352': [
        ['\uD83C\uDF52'], '', '\uDBB8\uDC4F', ['cherries'], 7, 5
  ],
  '1f353': [
        ['\uD83C\uDF53'], '\uE347', '\uDBB8\uDC53', ['strawberry'], 7, 6
  ],
  '1f354': [
        ['\uD83C\uDF54'], '\uE120', '\uDBBA\uDD60', ['hamburger'], 7, 7
  ],
  '1f355': [
        ['\uD83C\uDF55'], '', '\uDBBA\uDD75', ['pizza'], 7, 8
  ],
  '1f356': [
        ['\uD83C\uDF56'], '', '\uDBBA\uDD72', ['meat_on_bone'], 7, 9
  ],
  '1f357': [
        ['\uD83C\uDF57'], '', '\uDBBA\uDD76', ['poultry_leg'], 7, 10
  ],
  '1f358': [
        ['\uD83C\uDF58'], '\uE33D', '\uDBBA\uDD69', ['rice_cracker'], 7, 11
  ],
  '1f359': [
        ['\uD83C\uDF59'], '\uE342', '\uDBBA\uDD61', ['rice_ball'], 7, 12
  ],
  '1f35a': [
        ['\uD83C\uDF5A'], '\uE33E', '\uDBBA\uDD6A', ['rice'], 7, 13
  ],
  '1f35b': [
        ['\uD83C\uDF5B'], '\uE341', '\uDBBA\uDD6C', ['curry'], 7, 14
  ],
  '1f35c': [
        ['\uD83C\uDF5C'], '\uE340', '\uDBBA\uDD63', ['ramen'], 7, 15
  ],
  '1f35d': [
        ['\uD83C\uDF5D'], '\uE33F', '\uDBBA\uDD6B', ['spaghetti'], 7, 16
  ],
  '1f35e': [
        ['\uD83C\uDF5E'], '\uE339', '\uDBBA\uDD64', ['bread'], 7, 17
  ],
  '1f35f': [
        ['\uD83C\uDF5F'], '\uE33B', '\uDBBA\uDD67', ['fries'], 7, 18
  ],
  '1f360': [
        ['\uD83C\uDF60'], '', '\uDBBA\uDD74', ['sweet_potato'], 7, 19
  ],
  '1f361': [
        ['\uD83C\uDF61'], '\uE33C', '\uDBBA\uDD68', ['dango'], 7, 20
  ],
  '1f362': [
        ['\uD83C\uDF62'], '\uE343', '\uDBBA\uDD6D', ['oden'], 7, 21
  ],
  '1f363': [
        ['\uD83C\uDF63'], '\uE344', '\uDBBA\uDD6E', ['sushi'], 7, 22
  ],
  '1f364': [
        ['\uD83C\uDF64'], '', '\uDBBA\uDD7F', ['fried_shrimp'], 7, 23
  ],
  '1f365': [
        ['\uD83C\uDF65'], '', '\uDBBA\uDD73', ['fish_cake'], 7, 24
  ],
  '1f366': [
        ['\uD83C\uDF66'], '\uE33A', '\uDBBA\uDD66', ['icecream'], 7, 25
  ],
  '1f367': [
        ['\uD83C\uDF67'], '\uE43F', '\uDBBA\uDD71', ['shaved_ice'], 7, 26
  ],
  '1f368': [
        ['\uD83C\uDF68'], '', '\uDBBA\uDD77', ['ice_cream'], 7, 27
  ],
  '1f369': [
        ['\uD83C\uDF69'], '', '\uDBBA\uDD78', ['doughnut'], 7, 28
  ],
  '1f36a': [
        ['\uD83C\uDF6A'], '', '\uDBBA\uDD79', ['cookie'], 7, 29
  ],
  '1f36b': [
        ['\uD83C\uDF6B'], '', '\uDBBA\uDD7A', ['chocolate_bar'], 8, 0
  ],
  '1f36c': [
        ['\uD83C\uDF6C'], '', '\uDBBA\uDD7B', ['candy'], 8, 1
  ],
  '1f36d': [
        ['\uD83C\uDF6D'], '', '\uDBBA\uDD7C', ['lollipop'], 8, 2
  ],
  '1f36e': [
        ['\uD83C\uDF6E'], '', '\uDBBA\uDD7D', ['custard'], 8, 3
  ],
  '1f36f': [
        ['\uD83C\uDF6F'], '', '\uDBBA\uDD7E', ['honey_pot'], 8, 4
  ],
  '1f370': [
        ['\uD83C\uDF70'], '\uE046', '\uDBBA\uDD62', ['cake'], 8, 5
  ],
  '1f371': [
        ['\uD83C\uDF71'], '\uE34C', '\uDBBA\uDD6F', ['bento'], 8, 6
  ],
  '1f372': [
        ['\uD83C\uDF72'], '\uE34D', '\uDBBA\uDD70', ['stew'], 8, 7
  ],
  '1f373': [
        ['\uD83C\uDF73'], '\uE147', '\uDBBA\uDD65', ['egg'], 8, 8
  ],
  '1f374': [
        ['\uD83C\uDF74'], '\uE043', '\uDBBA\uDD80', ['fork_and_knife'], 8, 9
  ],
  '1f375': [
        ['\uD83C\uDF75'], '\uE338', '\uDBBA\uDD84', ['tea'], 8, 10
  ],
  '1f376': [
        ['\uD83C\uDF76'], '\uE30B', '\uDBBA\uDD85', ['sake'], 8, 11
  ],
  '1f377': [
        ['\uD83C\uDF77'], '\uE044', '\uDBBA\uDD86', ['wine_glass'], 8, 12
  ],
  '1f378': [
        ['\uD83C\uDF78'], '\uE044', '\uDBBA\uDD82', ['cocktail'], 8, 13
  ],
  '1f379': [
        ['\uD83C\uDF79'], '\uE044', '\uDBBA\uDD88', ['tropical_drink'], 8, 14
  ],
  '1f37a': [
        ['\uD83C\uDF7A'], '\uE047', '\uDBBA\uDD83', ['beer'], 8, 15
  ],
  '1f37b': [
        ['\uD83C\uDF7B'], '\uE30C', '\uDBBA\uDD87', ['beers'], 8, 16
  ],
  '1f37c': [
        ['\uD83C\uDF7C'], '', '', ['baby_bottle'], 8, 17
  ],
  '1f380': [
        ['\uD83C\uDF80'], '\uE314', '\uDBB9\uDD0F', ['ribbon'], 8, 18
  ],
  '1f381': [
        ['\uD83C\uDF81'], '\uE112', '\uDBB9\uDD10', ['gift'], 8, 19
  ],
  '1f382': [
        ['\uD83C\uDF82'], '\uE34B', '\uDBB9\uDD11', ['birthday'], 8, 20
  ],
  '1f383': [
        ['\uD83C\uDF83'], '\uE445', '\uDBB9\uDD1F', ['jack_o_lantern'], 8, 21
  ],
  '1f384': [
        ['\uD83C\uDF84'], '\uE033', '\uDBB9\uDD12', ['christmas_tree'], 8, 22
  ],
  '1f385': [
        ['\uD83C\uDF85'], '\uE448', '\uDBB9\uDD13', ['santa'], 8, 23
  ],
  '1f386': [
        ['\uD83C\uDF86'], '\uE117', '\uDBB9\uDD15', ['fireworks'], 8, 24
  ],
  '1f387': [
        ['\uD83C\uDF87'], '\uE440', '\uDBB9\uDD1D', ['sparkler'], 8, 25
  ],
  '1f388': [
        ['\uD83C\uDF88'], '\uE310', '\uDBB9\uDD16', ['balloon'], 8, 26
  ],
  '1f389': [
        ['\uD83C\uDF89'], '\uE312', '\uDBB9\uDD17', ['tada'], 8, 27
  ],
  '1f38a': [
        ['\uD83C\uDF8A'], '', '\uDBB9\uDD20', ['confetti_ball'], 8, 28
  ],
  '1f38b': [
        ['\uD83C\uDF8B'], '', '\uDBB9\uDD21', ['tanabata_tree'], 8, 29
  ],
  '1f38c': [
        ['\uD83C\uDF8C'], '\uE143', '\uDBB9\uDD14', ['crossed_flags'], 9, 0
  ],
  '1f38d': [
        ['\uD83C\uDF8D'], '\uE436', '\uDBB9\uDD18', ['bamboo'], 9, 1
  ],
  '1f38e': [
        ['\uD83C\uDF8E'], '\uE438', '\uDBB9\uDD19', ['dolls'], 9, 2
  ],
  '1f38f': [
        ['\uD83C\uDF8F'], '\uE43B', '\uDBB9\uDD1C', ['flags'], 9, 3
  ],
  '1f390': [
        ['\uD83C\uDF90'], '\uE442', '\uDBB9\uDD1E', ['wind_chime'], 9, 4
  ],
  '1f391': [
        ['\uD83C\uDF91'], '\uE446', '\uDBB8\uDC17', ['rice_scene'], 9, 5
  ],
  '1f392': [
        ['\uD83C\uDF92'], '\uE43A', '\uDBB9\uDD1B', ['school_satchel'], 9, 6
  ],
  '1f393': [
        ['\uD83C\uDF93'], '\uE439', '\uDBB9\uDD1A', ['mortar_board'], 9, 7
  ],
  '1f3a0': [
        ['\uD83C\uDFA0'], '', '\uDBB9\uDFFC', ['carousel_horse'], 9, 8
  ],
  '1f3a1': [
        ['\uD83C\uDFA1'], '\uE124', '\uDBB9\uDFFD', ['ferris_wheel'], 9, 9
  ],
  '1f3a2': [
        ['\uD83C\uDFA2'], '\uE433', '\uDBB9\uDFFE', ['roller_coaster'], 9, 10
  ],
  '1f3a3': [
        ['\uD83C\uDFA3'], '\uE019', '\uDBB9\uDFFF', ['fishing_pole_and_fish'], 9, 11
  ],
  '1f3a4': [
        ['\uD83C\uDFA4'], '\uE03C', '\uDBBA\uDC00', ['microphone'], 9, 12
  ],
  '1f3a5': [
        ['\uD83C\uDFA5'], '\uE03D', '\uDBBA\uDC01', ['movie_camera'], 9, 13
  ],
  '1f3a6': [
        ['\uD83C\uDFA6'], '\uE507', '\uDBBA\uDC02', ['cinema'], 9, 14
  ],
  '1f3a7': [
        ['\uD83C\uDFA7'], '\uE30A', '\uDBBA\uDC03', ['headphones'], 9, 15
  ],
  '1f3a8': [
        ['\uD83C\uDFA8'], '\uE502', '\uDBBA\uDC04', ['art'], 9, 16
  ],
  '1f3a9': [
        ['\uD83C\uDFA9'], '\uE503', '\uDBBA\uDC05', ['tophat'], 9, 17
  ],
  '1f3aa': [
        ['\uD83C\uDFAA'], '', '\uDBBA\uDC06', ['circus_tent'], 9, 18
  ],
  '1f3ab': [
        ['\uD83C\uDFAB'], '\uE125', '\uDBBA\uDC07', ['ticket'], 9, 19
  ],
  '1f3ac': [
        ['\uD83C\uDFAC'], '\uE324', '\uDBBA\uDC08', ['clapper'], 9, 20
  ],
  '1f3ad': [
        ['\uD83C\uDFAD'], '\uE503', '\uDBBA\uDC09', ['performing_arts'], 9, 21
  ],
  '1f3ae': [
        ['\uD83C\uDFAE'], '', '\uDBBA\uDC0A', ['video_game'], 9, 22
  ],
  '1f3af': [
        ['\uD83C\uDFAF'], '\uE130', '\uDBBA\uDC0C', ['dart'], 9, 23
  ],
  '1f3b0': [
        ['\uD83C\uDFB0'], '\uE133', '\uDBBA\uDC0D', ['slot_machine'], 9, 24
  ],
  '1f3b1': [
        ['\uD83C\uDFB1'], '\uE42C', '\uDBBA\uDC0E', ['8ball'], 9, 25
  ],
  '1f3b2': [
        ['\uD83C\uDFB2'], '', '\uDBBA\uDC0F', ['game_die'], 9, 26
  ],
  '1f3b3': [
        ['\uD83C\uDFB3'], '', '\uDBBA\uDC10', ['bowling'], 9, 27
  ],
  '1f3b4': [
        ['\uD83C\uDFB4'], '', '\uDBBA\uDC11', ['flower_playing_cards'], 9, 28
  ],
  '1f3b5': [
        ['\uD83C\uDFB5'], '\uE03E', '\uDBBA\uDC13', ['musical_note'], 9, 29
  ],
  '1f3b6': [
        ['\uD83C\uDFB6'], '\uE326', '\uDBBA\uDC14', ['notes'], 10, 0
  ],
  '1f3b7': [
        ['\uD83C\uDFB7'], '\uE040', '\uDBBA\uDC15', ['saxophone'], 10, 1
  ],
  '1f3b8': [
        ['\uD83C\uDFB8'], '\uE041', '\uDBBA\uDC16', ['guitar'], 10, 2
  ],
  '1f3b9': [
        ['\uD83C\uDFB9'], '', '\uDBBA\uDC17', ['musical_keyboard'], 10, 3
  ],
  '1f3ba': [
        ['\uD83C\uDFBA'], '\uE042', '\uDBBA\uDC18', ['trumpet'], 10, 4
  ],
  '1f3bb': [
        ['\uD83C\uDFBB'], '', '\uDBBA\uDC19', ['violin'], 10, 5
  ],
  '1f3bc': [
        ['\uD83C\uDFBC'], '\uE326', '\uDBBA\uDC1A', ['musical_score'], 10, 6
  ],
  '1f3bd': [
        ['\uD83C\uDFBD'], '', '\uDBB9\uDFD0', ['running_shirt_with_sash'], 10, 7
  ],
  '1f3be': [
        ['\uD83C\uDFBE'], '\uE015', '\uDBB9\uDFD3', ['tennis'], 10, 8
  ],
  '1f3bf': [
        ['\uD83C\uDFBF'], '\uE013', '\uDBB9\uDFD5', ['ski'], 10, 9
  ],
  '1f3c0': [
        ['\uD83C\uDFC0'], '\uE42A', '\uDBB9\uDFD6', ['basketball'], 10, 10
  ],
  '1f3c1': [
        ['\uD83C\uDFC1'], '\uE132', '\uDBB9\uDFD7', ['checkered_flag'], 10, 11
  ],
  '1f3c2': [
        ['\uD83C\uDFC2'], '', '\uDBB9\uDFD8', ['snowboarder'], 10, 12
  ],
  '1f3c3': [
        ['\uD83C\uDFC3'], '\uE115', '\uDBB9\uDFD9', ['runner', 'running'], 10, 13
  ],
  '1f3c4': [
        ['\uD83C\uDFC4'], '\uE017', '\uDBB9\uDFDA', ['surfer'], 10, 14
  ],
  '1f3c6': [
        ['\uD83C\uDFC6'], '\uE131', '\uDBB9\uDFDB', ['trophy'], 10, 15
  ],
  '1f3c7': [
        ['\uD83C\uDFC7'], '', '', ['horse_racing'], 10, 16
  ],
  '1f3c8': [
        ['\uD83C\uDFC8'], '\uE42B', '\uDBB9\uDFDD', ['football'], 10, 17
  ],
  '1f3c9': [
        ['\uD83C\uDFC9'], '', '', ['rugby_football'], 10, 18
  ],
  '1f3ca': [
        ['\uD83C\uDFCA'], '\uE42D', '\uDBB9\uDFDE', ['swimmer'], 10, 19
  ],
  '1f3e0': [
        ['\uD83C\uDFE0'], '\uE036', '\uDBB9\uDCB0', ['house'], 10, 20
  ],
  '1f3e1': [
        ['\uD83C\uDFE1'], '\uE036', '\uDBB9\uDCB1', ['house_with_garden'], 10, 21
  ],
  '1f3e2': [
        ['\uD83C\uDFE2'], '\uE038', '\uDBB9\uDCB2', ['office'], 10, 22
  ],
  '1f3e3': [
        ['\uD83C\uDFE3'], '\uE153', '\uDBB9\uDCB3', ['post_office'], 10, 23
  ],
  '1f3e4': [
        ['\uD83C\uDFE4'], '', '', ['european_post_office'], 10, 24
  ],
  '1f3e5': [
        ['\uD83C\uDFE5'], '\uE155', '\uDBB9\uDCB4', ['hospital'], 10, 25
  ],
  '1f3e6': [
        ['\uD83C\uDFE6'], '\uE14D', '\uDBB9\uDCB5', ['bank'], 10, 26
  ],
  '1f3e7': [
        ['\uD83C\uDFE7'], '\uE154', '\uDBB9\uDCB6', ['atm'], 10, 27
  ],
  '1f3e8': [
        ['\uD83C\uDFE8'], '\uE158', '\uDBB9\uDCB7', ['hotel'], 10, 28
  ],
  '1f3e9': [
        ['\uD83C\uDFE9'], '\uE501', '\uDBB9\uDCB8', ['love_hotel'], 10, 29
  ],
  '1f3ea': [
        ['\uD83C\uDFEA'], '\uE156', '\uDBB9\uDCB9', ['convenience_store'], 11, 0
  ],
  '1f3eb': [
        ['\uD83C\uDFEB'], '\uE157', '\uDBB9\uDCBA', ['school'], 11, 1
  ],
  '1f3ec': [
        ['\uD83C\uDFEC'], '\uE504', '\uDBB9\uDCBD', ['department_store'], 11, 2
  ],
  '1f3ed': [
        ['\uD83C\uDFED'], '\uE508', '\uDBB9\uDCC0', ['factory'], 11, 3
  ],
  '1f3ee': [
        ['\uD83C\uDFEE'], '\uE30B', '\uDBB9\uDCC2', ['izakaya_lantern', 'lantern'], 11, 4
  ],
  '1f3ef': [
        ['\uD83C\uDFEF'], '\uE505', '\uDBB9\uDCBE', ['japanese_castle'], 11, 5
  ],
  '1f3f0': [
        ['\uD83C\uDFF0'], '\uE506', '\uDBB9\uDCBF', ['european_castle'], 11, 6
  ],
  '1f400': [
        ['\uD83D\uDC00'], '', '', ['rat'], 11, 7
  ],
  '1f401': [
        ['\uD83D\uDC01'], '', '', ['mouse2'], 11, 8
  ],
  '1f402': [
        ['\uD83D\uDC02'], '', '', ['ox'], 11, 9
  ],
  '1f403': [
        ['\uD83D\uDC03'], '', '', ['water_buffalo'], 11, 10
  ],
  '1f404': [
        ['\uD83D\uDC04'], '', '', ['cow2'], 11, 11
  ],
  '1f405': [
        ['\uD83D\uDC05'], '', '', ['tiger2'], 11, 12
  ],
  '1f406': [
        ['\uD83D\uDC06'], '', '', ['leopard'], 11, 13
  ],
  '1f407': [
        ['\uD83D\uDC07'], '', '', ['rabbit2'], 11, 14
  ],
  '1f408': [
        ['\uD83D\uDC08'], '', '', ['cat2'], 11, 15
  ],
  '1f409': [
        ['\uD83D\uDC09'], '', '', ['dragon'], 11, 16
  ],
  '1f40a': [
        ['\uD83D\uDC0A'], '', '', ['crocodile'], 11, 17
  ],
  '1f40b': [
        ['\uD83D\uDC0B'], '', '', ['whale2'], 11, 18
  ],
  '1f40c': [
        ['\uD83D\uDC0C'], '', '\uDBB8\uDDB9', ['snail'], 11, 19
  ],
  '1f40d': [
        ['\uD83D\uDC0D'], '\uE52D', '\uDBB8\uDDD3', ['snake'], 11, 20
  ],
  '1f40e': [
        ['\uD83D\uDC0E'], '\uE134', '\uDBB9\uDFDC', ['racehorse'], 11, 21
  ],
  '1f40f': [
        ['\uD83D\uDC0F'], '', '', ['ram'], 11, 22
  ],
  '1f410': [
        ['\uD83D\uDC10'], '', '', ['goat'], 11, 23
  ],
  '1f411': [
        ['\uD83D\uDC11'], '\uE529', '\uDBB8\uDDCF', ['sheep'], 11, 24
  ],
  '1f412': [
        ['\uD83D\uDC12'], '\uE528', '\uDBB8\uDDCE', ['monkey'], 11, 25
  ],
  '1f413': [
        ['\uD83D\uDC13'], '', '', ['rooster'], 11, 26
  ],
  '1f414': [
        ['\uD83D\uDC14'], '\uE52E', '\uDBB8\uDDD4', ['chicken'], 11, 27
  ],
  '1f415': [
        ['\uD83D\uDC15'], '', '', ['dog2'], 11, 28
  ],
  '1f416': [
        ['\uD83D\uDC16'], '', '', ['pig2'], 11, 29
  ],
  '1f417': [
        ['\uD83D\uDC17'], '\uE52F', '\uDBB8\uDDD5', ['boar'], 12, 0
  ],
  '1f418': [
        ['\uD83D\uDC18'], '\uE526', '\uDBB8\uDDCC', ['elephant'], 12, 1
  ],
  '1f419': [
        ['\uD83D\uDC19'], '\uE10A', '\uDBB8\uDDC5', ['octopus'], 12, 2
  ],
  '1f41a': [
        ['\uD83D\uDC1A'], '\uE441', '\uDBB8\uDDC6', ['shell'], 12, 3
  ],
  '1f41b': [
        ['\uD83D\uDC1B'], '\uE525', '\uDBB8\uDDCB', ['bug'], 12, 4
  ],
  '1f41c': [
        ['\uD83D\uDC1C'], '', '\uDBB8\uDDDA', ['ant'], 12, 5
  ],
  '1f41d': [
        ['\uD83D\uDC1D'], '', '\uDBB8\uDDE1', ['bee', 'honeybee'], 12, 6
  ],
  '1f41e': [
        ['\uD83D\uDC1E'], '', '\uDBB8\uDDE2', ['beetle'], 12, 7
  ],
  '1f41f': [
        ['\uD83D\uDC1F'], '\uE019', '\uDBB8\uDDBD', ['fish'], 12, 8
  ],
  '1f420': [
        ['\uD83D\uDC20'], '\uE522', '\uDBB8\uDDC9', ['tropical_fish'], 12, 9
  ],
  '1f421': [
        ['\uD83D\uDC21'], '\uE019', '\uDBB8\uDDD9', ['blowfish'], 12, 10
  ],
  '1f422': [
        ['\uD83D\uDC22'], '', '\uDBB8\uDDDC', ['turtle'], 12, 11
  ],
  '1f423': [
        ['\uD83D\uDC23'], '\uE523', '\uDBB8\uDDDD', ['hatching_chick'], 12, 12
  ],
  '1f424': [
        ['\uD83D\uDC24'], '\uE523', '\uDBB8\uDDBA', ['baby_chick'], 12, 13
  ],
  '1f425': [
        ['\uD83D\uDC25'], '\uE523', '\uDBB8\uDDBB', ['hatched_chick'], 12, 14
  ],
  '1f426': [
        ['\uD83D\uDC26'], '\uE521', '\uDBB8\uDDC8', ['bird'], 12, 15
  ],
  '1f427': [
        ['\uD83D\uDC27'], '\uE055', '\uDBB8\uDDBC', ['penguin'], 12, 16
  ],
  '1f428': [
        ['\uD83D\uDC28'], '\uE527', '\uDBB8\uDDCD', ['koala'], 12, 17
  ],
  '1f429': [
        ['\uD83D\uDC29'], '\uE052', '\uDBB8\uDDD8', ['poodle'], 12, 18
  ],
  '1f42a': [
        ['\uD83D\uDC2A'], '', '', ['dromedary_camel'], 12, 19
  ],
  '1f42b': [
        ['\uD83D\uDC2B'], '\uE530', '\uDBB8\uDDD6', ['camel'], 12, 20
  ],
  '1f42c': [
        ['\uD83D\uDC2C'], '\uE520', '\uDBB8\uDDC7', ['dolphin', 'flipper'], 12, 21
  ],
  '1f42d': [
        ['\uD83D\uDC2D'], '\uE053', '\uDBB8\uDDC2', ['mouse'], 12, 22
  ],
  '1f42e': [
        ['\uD83D\uDC2E'], '\uE52B', '\uDBB8\uDDD1', ['cow'], 12, 23
  ],
  '1f42f': [
        ['\uD83D\uDC2F'], '\uE050', '\uDBB8\uDDC0', ['tiger'], 12, 24
  ],
  '1f430': [
        ['\uD83D\uDC30'], '\uE52C', '\uDBB8\uDDD2', ['rabbit'], 12, 25
  ],
  '1f431': [
        ['\uD83D\uDC31'], '\uE04F', '\uDBB8\uDDB8', ['cat'], 12, 26
  ],
  '1f432': [
        ['\uD83D\uDC32'], '', '\uDBB8\uDDDE', ['dragon_face'], 12, 27
  ],
  '1f433': [
        ['\uD83D\uDC33'], '\uE054', '\uDBB8\uDDC3', ['whale'], 12, 28
  ],
  '1f434': [
        ['\uD83D\uDC34'], '\uE01A', '\uDBB8\uDDBE', ['horse'], 12, 29
  ],
  '1f435': [
        ['\uD83D\uDC35'], '\uE109', '\uDBB8\uDDC4', ['monkey_face'], 13, 0
  ],
  '1f436': [
        ['\uD83D\uDC36'], '\uE052', '\uDBB8\uDDB7', ['dog'], 13, 1
  ],
  '1f437': [
        ['\uD83D\uDC37'], '\uE10B', '\uDBB8\uDDBF', ['pig'], 13, 2
  ],
  '1f438': [
        ['\uD83D\uDC38'], '\uE531', '\uDBB8\uDDD7', ['frog'], 13, 3
  ],
  '1f439': [
        ['\uD83D\uDC39'], '\uE524', '\uDBB8\uDDCA', ['hamster'], 13, 4
  ],
  '1f43a': [
        ['\uD83D\uDC3A'], '\uE52A', '\uDBB8\uDDD0', ['wolf'], 13, 5
  ],
  '1f43b': [
        ['\uD83D\uDC3B'], '\uE051', '\uDBB8\uDDC1', ['bear'], 13, 6
  ],
  '1f43c': [
        ['\uD83D\uDC3C'], '', '\uDBB8\uDDDF', ['panda_face'], 13, 7
  ],
  '1f43d': [
        ['\uD83D\uDC3D'], '\uE10B', '\uDBB8\uDDE0', ['pig_nose'], 13, 8
  ],
  '1f43e': [
        ['\uD83D\uDC3E'], '\uE536', '\uDBB8\uDDDB', ['feet', 'paw_prints'], 13, 9
  ],
  '1f440': [
        ['\uD83D\uDC40'], '\uE419', '\uDBB8\uDD90', ['eyes'], 13, 10
  ],
  '1f442': [
        ['\uD83D\uDC42'], '\uE41B', '\uDBB8\uDD91', ['ear'], 13, 11
  ],
  '1f443': [
        ['\uD83D\uDC43'], '\uE41A', '\uDBB8\uDD92', ['nose'], 13, 12
  ],
  '1f444': [
        ['\uD83D\uDC44'], '\uE41C', '\uDBB8\uDD93', ['lips'], 13, 13
  ],
  '1f445': [
        ['\uD83D\uDC45'], '\uE409', '\uDBB8\uDD94', ['tongue'], 13, 14
  ],
  '1f446': [
        ['\uD83D\uDC46'], '\uE22E', '\uDBBA\uDF99', ['point_up_2'], 13, 15
  ],
  '1f447': [
        ['\uD83D\uDC47'], '\uE22F', '\uDBBA\uDF9A', ['point_down'], 13, 16
  ],
  '1f448': [
        ['\uD83D\uDC48'], '\uE230', '\uDBBA\uDF9B', ['point_left'], 13, 17
  ],
  '1f449': [
        ['\uD83D\uDC49'], '\uE231', '\uDBBA\uDF9C', ['point_right'], 13, 18
  ],
  '1f44a': [
        ['\uD83D\uDC4A'], '\uE00D', '\uDBBA\uDF96', ['facepunch', 'punch'], 13, 19
  ],
  '1f44b': [
        ['\uD83D\uDC4B'], '\uE41E', '\uDBBA\uDF9D', ['wave'], 13, 20
  ],
  '1f44c': [
        ['\uD83D\uDC4C'], '\uE420', '\uDBBA\uDF9F', ['ok_hand'], 13, 21
  ],
  '1f44d': [
        ['\uD83D\uDC4D'], '\uE00E', '\uDBBA\uDF97', ['+1', 'thumbsup'], 13, 22
  ],
  '1f44e': [
        ['\uD83D\uDC4E'], '\uE421', '\uDBBA\uDFA0', ['-1', 'thumbsdown'], 13, 23
  ],
  '1f44f': [
        ['\uD83D\uDC4F'], '\uE41F', '\uDBBA\uDF9E', ['clap'], 13, 24
  ],
  '1f450': [
        ['\uD83D\uDC50'], '\uE422', '\uDBBA\uDFA1', ['open_hands'], 13, 25
  ],
  '1f451': [
        ['\uD83D\uDC51'], '\uE10E', '\uDBB9\uDCD1', ['crown'], 13, 26
  ],
  '1f452': [
        ['\uD83D\uDC52'], '\uE318', '\uDBB9\uDCD4', ['womans_hat'], 13, 27
  ],
  '1f453': [
        ['\uD83D\uDC53'], '', '\uDBB9\uDCCE', ['eyeglasses'], 13, 28
  ],
  '1f454': [
        ['\uD83D\uDC54'], '\uE302', '\uDBB9\uDCD3', ['necktie'], 13, 29
  ],
  '1f455': [
        ['\uD83D\uDC55'], '\uE006', '\uDBB9\uDCCF', ['shirt', 'tshirt'], 14, 0
  ],
  '1f456': [
        ['\uD83D\uDC56'], '', '\uDBB9\uDCD0', ['jeans'], 14, 1
  ],
  '1f457': [
        ['\uD83D\uDC57'], '\uE319', '\uDBB9\uDCD5', ['dress'], 14, 2
  ],
  '1f458': [
        ['\uD83D\uDC58'], '\uE321', '\uDBB9\uDCD9', ['kimono'], 14, 3
  ],
  '1f459': [
        ['\uD83D\uDC59'], '\uE322', '\uDBB9\uDCDA', ['bikini'], 14, 4
  ],
  '1f45a': [
        ['\uD83D\uDC5A'], '\uE006', '\uDBB9\uDCDB', ['womans_clothes'], 14, 5
  ],
  '1f45b': [
        ['\uD83D\uDC5B'], '', '\uDBB9\uDCDC', ['purse'], 14, 6
  ],
  '1f45c': [
        ['\uD83D\uDC5C'], '\uE323', '\uDBB9\uDCF0', ['handbag'], 14, 7
  ],
  '1f45d': [
        ['\uD83D\uDC5D'], '', '\uDBB9\uDCF1', ['pouch'], 14, 8
  ],
  '1f45e': [
        ['\uD83D\uDC5E'], '\uE007', '\uDBB9\uDCCC', ['mans_shoe', 'shoe'], 14, 9
  ],
  '1f45f': [
        ['\uD83D\uDC5F'], '\uE007', '\uDBB9\uDCCD', ['athletic_shoe'], 14, 10
  ],
  '1f460': [
        ['\uD83D\uDC60'], '\uE13E', '\uDBB9\uDCD6', ['high_heel'], 14, 11
  ],
  '1f461': [
        ['\uD83D\uDC61'], '\uE31A', '\uDBB9\uDCD7', ['sandal'], 14, 12
  ],
  '1f462': [
        ['\uD83D\uDC62'], '\uE31B', '\uDBB9\uDCD8', ['boot'], 14, 13
  ],
  '1f463': [
        ['\uD83D\uDC63'], '\uE536', '\uDBB9\uDD53', ['footprints'], 14, 14
  ],
  '1f464': [
        ['\uD83D\uDC64'], '', '\uDBB8\uDD9A', ['bust_in_silhouette'], 14, 15
  ],
  '1f465': [
        ['\uD83D\uDC65'], '', '', ['busts_in_silhouette'], 14, 16
  ],
  '1f466': [
        ['\uD83D\uDC66'], '\uE001', '\uDBB8\uDD9B', ['boy'], 14, 17
  ],
  '1f467': [
        ['\uD83D\uDC67'], '\uE002', '\uDBB8\uDD9C', ['girl'], 14, 18
  ],
  '1f468': [
        ['\uD83D\uDC68'], '\uE004', '\uDBB8\uDD9D', ['man'], 14, 19
  ],
  '1f469': [
        ['\uD83D\uDC69'], '\uE005', '\uDBB8\uDD9E', ['woman'], 14, 20
  ],
  '1f46a': [
        ['\uD83D\uDC6A'], '', '\uDBB8\uDD9F', ['family'], 14, 21
  ],
  '1f46b': [
        ['\uD83D\uDC6B'], '\uE428', '\uDBB8\uDDA0', ['couple'], 14, 22
  ],
  '1f46c': [
        ['\uD83D\uDC6C'], '', '', ['two_men_holding_hands'], 14, 23
  ],
  '1f46d': [
        ['\uD83D\uDC6D'], '', '', ['two_women_holding_hands'], 14, 24
  ],
  '1f46e': [
        ['\uD83D\uDC6E'], '\uE152', '\uDBB8\uDDA1', ['cop'], 14, 25
  ],
  '1f46f': [
        ['\uD83D\uDC6F'], '\uE429', '\uDBB8\uDDA2', ['dancers'], 14, 26
  ],
  '1f470': [
        ['\uD83D\uDC70'], '', '\uDBB8\uDDA3', ['bride_with_veil'], 14, 27
  ],
  '1f471': [
        ['\uD83D\uDC71'], '\uE515', '\uDBB8\uDDA4', ['person_with_blond_hair'], 14, 28
  ],
  '1f472': [
        ['\uD83D\uDC72'], '\uE516', '\uDBB8\uDDA5', ['man_with_gua_pi_mao'], 14, 29
  ],
  '1f473': [
        ['\uD83D\uDC73'], '\uE517', '\uDBB8\uDDA6', ['man_with_turban'], 15, 0
  ],
  '1f474': [
        ['\uD83D\uDC74'], '\uE518', '\uDBB8\uDDA7', ['older_man'], 15, 1
  ],
  '1f475': [
        ['\uD83D\uDC75'], '\uE519', '\uDBB8\uDDA8', ['older_woman'], 15, 2
  ],
  '1f476': [
        ['\uD83D\uDC76'], '\uE51A', '\uDBB8\uDDA9', ['baby'], 15, 3
  ],
  '1f477': [
        ['\uD83D\uDC77'], '\uE51B', '\uDBB8\uDDAA', ['construction_worker'], 15, 4
  ],
  '1f478': [
        ['\uD83D\uDC78'], '\uE51C', '\uDBB8\uDDAB', ['princess'], 15, 5
  ],
  '1f479': [
        ['\uD83D\uDC79'], '', '\uDBB8\uDDAC', ['japanese_ogre'], 15, 6
  ],
  '1f47a': [
        ['\uD83D\uDC7A'], '', '\uDBB8\uDDAD', ['japanese_goblin'], 15, 7
  ],
  '1f47b': [
        ['\uD83D\uDC7B'], '\uE11B', '\uDBB8\uDDAE', ['ghost'], 15, 8
  ],
  '1f47c': [
        ['\uD83D\uDC7C'], '\uE04E', '\uDBB8\uDDAF', ['angel'], 15, 9
  ],
  '1f47d': [
        ['\uD83D\uDC7D'], '\uE10C', '\uDBB8\uDDB0', ['alien'], 15, 10
  ],
  '1f47e': [
        ['\uD83D\uDC7E'], '\uE12B', '\uDBB8\uDDB1', ['space_invader'], 15, 11
  ],
  '1f47f': [
        ['\uD83D\uDC7F'], '\uE11A', '\uDBB8\uDDB2', ['imp'], 15, 12
  ],
  '1f480': [
        ['\uD83D\uDC80'], '\uE11C', '\uDBB8\uDDB3', ['skull'], 15, 13
  ],
  '1f481': [
        ['\uD83D\uDC81'], '\uE253', '\uDBB8\uDDB4', ['information_desk_person'], 15, 14
  ],
  '1f482': [
        ['\uD83D\uDC82'], '\uE51E', '\uDBB8\uDDB5', ['guardsman'], 15, 15
  ],
  '1f483': [
        ['\uD83D\uDC83'], '\uE51F', '\uDBB8\uDDB6', ['dancer'], 15, 16
  ],
  '1f484': [
        ['\uD83D\uDC84'], '\uE31C', '\uDBB8\uDD95', ['lipstick'], 15, 17
  ],
  '1f485': [
        ['\uD83D\uDC85'], '\uE31D', '\uDBB8\uDD96', ['nail_care'], 15, 18
  ],
  '1f486': [
        ['\uD83D\uDC86'], '\uE31E', '\uDBB8\uDD97', ['massage'], 15, 19
  ],
  '1f487': [
        ['\uD83D\uDC87'], '\uE31F', '\uDBB8\uDD98', ['haircut'], 15, 20
  ],
  '1f488': [
        ['\uD83D\uDC88'], '\uE320', '\uDBB8\uDD99', ['barber'], 15, 21
  ],
  '1f489': [
        ['\uD83D\uDC89'], '\uE13B', '\uDBB9\uDD09', ['syringe'], 15, 22
  ],
  '1f48a': [
        ['\uD83D\uDC8A'], '\uE30F', '\uDBB9\uDD0A', ['pill'], 15, 23
  ],
  '1f48b': [
        ['\uD83D\uDC8B'], '\uE003', '\uDBBA\uDC23', ['kiss'], 15, 24
  ],
  '1f48c': [
        ['\uD83D\uDC8C'], '\uE103\uE328', '\uDBBA\uDC24', ['love_letter'], 15, 25
  ],
  '1f48d': [
        ['\uD83D\uDC8D'], '\uE034', '\uDBBA\uDC25', ['ring'], 15, 26
  ],
  '1f48e': [
        ['\uD83D\uDC8E'], '\uE035', '\uDBBA\uDC26', ['gem'], 15, 27
  ],
  '1f48f': [
        ['\uD83D\uDC8F'], '\uE111', '\uDBBA\uDC27', ['couplekiss'], 15, 28
  ],
  '1f490': [
        ['\uD83D\uDC90'], '\uE306', '\uDBBA\uDC28', ['bouquet'], 15, 29
  ],
  '1f491': [
        ['\uD83D\uDC91'], '\uE425', '\uDBBA\uDC29', ['couple_with_heart'], 16, 0
  ],
  '1f492': [
        ['\uD83D\uDC92'], '\uE43D', '\uDBBA\uDC2A', ['wedding'], 16, 1
  ],
  '1f493': [
        ['\uD83D\uDC93'], '\uE327', '\uDBBA\uDF0D', ['heartbeat'], 16, 2
  ],
  '1f494': [
        ['\uD83D\uDC94'], '\uE023', '\uDBBA\uDF0E', ['broken_heart'], 16, 3, '<\/3'
  ],
  '1f495': [
        ['\uD83D\uDC95'], '\uE327', '\uDBBA\uDF0F', ['two_hearts'], 16, 4
  ],
  '1f496': [
        ['\uD83D\uDC96'], '\uE327', '\uDBBA\uDF10', ['sparkling_heart'], 16, 5
  ],
  '1f497': [
        ['\uD83D\uDC97'], '\uE328', '\uDBBA\uDF11', ['heartpulse'], 16, 6
  ],
  '1f498': [
        ['\uD83D\uDC98'], '\uE329', '\uDBBA\uDF12', ['cupid'], 16, 7
  ],
  '1f499': [
        ['\uD83D\uDC99'], '\uE32A', '\uDBBA\uDF13', ['blue_heart'], 16, 8, '<3'
  ],
  '1f49a': [
        ['\uD83D\uDC9A'], '\uE32B', '\uDBBA\uDF14', ['green_heart'], 16, 9, '<3'
  ],
  '1f49b': [
        ['\uD83D\uDC9B'], '\uE32C', '\uDBBA\uDF15', ['yellow_heart'], 16, 10, '<3'
  ],
  '1f49c': [
        ['\uD83D\uDC9C'], '\uE32D', '\uDBBA\uDF16', ['purple_heart'], 16, 11, '<3'
  ],
  '1f49d': [
        ['\uD83D\uDC9D'], '\uE437', '\uDBBA\uDF17', ['gift_heart'], 16, 12
  ],
  '1f49e': [
        ['\uD83D\uDC9E'], '\uE327', '\uDBBA\uDF18', ['revolving_hearts'], 16, 13
  ],
  '1f49f': [
        ['\uD83D\uDC9F'], '\uE204', '\uDBBA\uDF19', ['heart_decoration'], 16, 14
  ],
  '1f4a0': [
        ['\uD83D\uDCA0'], '', '\uDBBA\uDF55', ['diamond_shape_with_a_dot_inside'], 16, 15
  ],
  '1f4a1': [
        ['\uD83D\uDCA1'], '\uE10F', '\uDBBA\uDF56', ['bulb'], 16, 16
  ],
  '1f4a2': [
        ['\uD83D\uDCA2'], '\uE334', '\uDBBA\uDF57', ['anger'], 16, 17
  ],
  '1f4a3': [
        ['\uD83D\uDCA3'], '\uE311', '\uDBBA\uDF58', ['bomb'], 16, 18
  ],
  '1f4a4': [
        ['\uD83D\uDCA4'], '\uE13C', '\uDBBA\uDF59', ['zzz'], 16, 19
  ],
  '1f4a5': [
        ['\uD83D\uDCA5'], '', '\uDBBA\uDF5A', ['boom', 'collision'], 16, 20
  ],
  '1f4a6': [
        ['\uD83D\uDCA6'], '\uE331', '\uDBBA\uDF5B', ['sweat_drops'], 16, 21
  ],
  '1f4a7': [
        ['\uD83D\uDCA7'], '\uE331', '\uDBBA\uDF5C', ['droplet'], 16, 22
  ],
  '1f4a8': [
        ['\uD83D\uDCA8'], '\uE330', '\uDBBA\uDF5D', ['dash'], 16, 23
  ],
  '1f4a9': [
        ['\uD83D\uDCA9'], '\uE05A', '\uDBB9\uDCF4', ['hankey', 'poop', 'shit'], 16, 24
  ],
  '1f4aa': [
        ['\uD83D\uDCAA'], '\uE14C', '\uDBBA\uDF5E', ['muscle'], 16, 25
  ],
  '1f4ab': [
        ['\uD83D\uDCAB'], '\uE407', '\uDBBA\uDF5F', ['dizzy'], 16, 26
  ],
  '1f4ac': [
        ['\uD83D\uDCAC'], '', '\uDBB9\uDD32', ['speech_balloon'], 16, 27
  ],
  '1f4ad': [
        ['\uD83D\uDCAD'], '', '', ['thought_balloon'], 16, 28
  ],
  '1f4ae': [
        ['\uD83D\uDCAE'], '', '\uDBBA\uDF7A', ['white_flower'], 16, 29
  ],
  '1f4af': [
        ['\uD83D\uDCAF'], '', '\uDBBA\uDF7B', ['100'], 17, 0
  ],
  '1f4b0': [
        ['\uD83D\uDCB0'], '\uE12F', '\uDBB9\uDCDD', ['moneybag'], 17, 1
  ],
  '1f4b1': [
        ['\uD83D\uDCB1'], '\uE149', '\uDBB9\uDCDE', ['currency_exchange'], 17, 2
  ],
  '1f4b2': [
        ['\uD83D\uDCB2'], '\uE12F', '\uDBB9\uDCE0', ['heavy_dollar_sign'], 17, 3
  ],
  '1f4b3': [
        ['\uD83D\uDCB3'], '', '\uDBB9\uDCE1', ['credit_card'], 17, 4
  ],
  '1f4b4': [
        ['\uD83D\uDCB4'], '', '\uDBB9\uDCE2', ['yen'], 17, 5
  ],
  '1f4b5': [
        ['\uD83D\uDCB5'], '\uE12F', '\uDBB9\uDCE3', ['dollar'], 17, 6
  ],
  '1f4b6': [
        ['\uD83D\uDCB6'], '', '', ['euro'], 17, 7
  ],
  '1f4b7': [
        ['\uD83D\uDCB7'], '', '', ['pound'], 17, 8
  ],
  '1f4b8': [
        ['\uD83D\uDCB8'], '', '\uDBB9\uDCE4', ['money_with_wings'], 17, 9
  ],
  '1f4b9': [
        ['\uD83D\uDCB9'], '\uE14A', '\uDBB9\uDCDF', ['chart'], 17, 10
  ],
  '1f4ba': [
        ['\uD83D\uDCBA'], '\uE11F', '\uDBB9\uDD37', ['seat'], 17, 11
  ],
  '1f4bb': [
        ['\uD83D\uDCBB'], '\uE00C', '\uDBB9\uDD38', ['computer'], 17, 12
  ],
  '1f4bc': [
        ['\uD83D\uDCBC'], '\uE11E', '\uDBB9\uDD3B', ['briefcase'], 17, 13
  ],
  '1f4bd': [
        ['\uD83D\uDCBD'], '\uE316', '\uDBB9\uDD3C', ['minidisc'], 17, 14
  ],
  '1f4be': [
        ['\uD83D\uDCBE'], '\uE316', '\uDBB9\uDD3D', ['floppy_disk'], 17, 15
  ],
  '1f4bf': [
        ['\uD83D\uDCBF'], '\uE126', '\uDBBA\uDC1D', ['cd'], 17, 16
  ],
  '1f4c0': [
        ['\uD83D\uDCC0'], '\uE127', '\uDBBA\uDC1E', ['dvd'], 17, 17
  ],
  '1f4c1': [
        ['\uD83D\uDCC1'], '', '\uDBB9\uDD43', ['file_folder'], 17, 18
  ],
  '1f4c2': [
        ['\uD83D\uDCC2'], '', '\uDBB9\uDD44', ['open_file_folder'], 17, 19
  ],
  '1f4c3': [
        ['\uD83D\uDCC3'], '\uE301', '\uDBB9\uDD40', ['page_with_curl'], 17, 20
  ],
  '1f4c4': [
        ['\uD83D\uDCC4'], '\uE301', '\uDBB9\uDD41', ['page_facing_up'], 17, 21
  ],
  '1f4c5': [
        ['\uD83D\uDCC5'], '', '\uDBB9\uDD42', ['date'], 17, 22
  ],
  '1f4c6': [
        ['\uD83D\uDCC6'], '', '\uDBB9\uDD49', ['calendar'], 17, 23
  ],
  '1f4c7': [
        ['\uD83D\uDCC7'], '\uE148', '\uDBB9\uDD4D', ['card_index'], 17, 24
  ],
  '1f4c8': [
        ['\uD83D\uDCC8'], '\uE14A', '\uDBB9\uDD4B', ['chart_with_upwards_trend'], 17, 25
  ],
  '1f4c9': [
        ['\uD83D\uDCC9'], '', '\uDBB9\uDD4C', ['chart_with_downwards_trend'], 17, 26
  ],
  '1f4ca': [
        ['\uD83D\uDCCA'], '\uE14A', '\uDBB9\uDD4A', ['bar_chart'], 17, 27
  ],
  '1f4cb': [
        ['\uD83D\uDCCB'], '\uE301', '\uDBB9\uDD48', ['clipboard'], 17, 28
  ],
  '1f4cc': [
        ['\uD83D\uDCCC'], '', '\uDBB9\uDD4E', ['pushpin'], 17, 29
  ],
  '1f4cd': [
        ['\uD83D\uDCCD'], '', '\uDBB9\uDD3F', ['round_pushpin'], 18, 0
  ],
  '1f4ce': [
        ['\uD83D\uDCCE'], '', '\uDBB9\uDD3A', ['paperclip'], 18, 1
  ],
  '1f4cf': [
        ['\uD83D\uDCCF'], '', '\uDBB9\uDD50', ['straight_ruler'], 18, 2
  ],
  '1f4d0': [
        ['\uD83D\uDCD0'], '', '\uDBB9\uDD51', ['triangular_ruler'], 18, 3
  ],
  '1f4d1': [
        ['\uD83D\uDCD1'], '\uE301', '\uDBB9\uDD52', ['bookmark_tabs'], 18, 4
  ],
  '1f4d2': [
        ['\uD83D\uDCD2'], '\uE148', '\uDBB9\uDD4F', ['ledger'], 18, 5
  ],
  '1f4d3': [
        ['\uD83D\uDCD3'], '\uE148', '\uDBB9\uDD45', ['notebook'], 18, 6
  ],
  '1f4d4': [
        ['\uD83D\uDCD4'], '\uE148', '\uDBB9\uDD47', ['notebook_with_decorative_cover'], 18, 7
  ],
  '1f4d5': [
        ['\uD83D\uDCD5'], '\uE148', '\uDBB9\uDD02', ['closed_book'], 18, 8
  ],
  '1f4d6': [
        ['\uD83D\uDCD6'], '\uE148', '\uDBB9\uDD46', ['book', 'open_book'], 18, 9
  ],
  '1f4d7': [
        ['\uD83D\uDCD7'], '\uE148', '\uDBB9\uDCFF', ['green_book'], 18, 10
  ],
  '1f4d8': [
        ['\uD83D\uDCD8'], '\uE148', '\uDBB9\uDD00', ['blue_book'], 18, 11
  ],
  '1f4d9': [
        ['\uD83D\uDCD9'], '\uE148', '\uDBB9\uDD01', ['orange_book'], 18, 12
  ],
  '1f4da': [
        ['\uD83D\uDCDA'], '\uE148', '\uDBB9\uDD03', ['books'], 18, 13
  ],
  '1f4db': [
        ['\uD83D\uDCDB'], '', '\uDBB9\uDD04', ['name_badge'], 18, 14
  ],
  '1f4dc': [
        ['\uD83D\uDCDC'], '', '\uDBB9\uDCFD', ['scroll'], 18, 15
  ],
  '1f4dd': [
        ['\uD83D\uDCDD'], '\uE301', '\uDBB9\uDD27', ['memo', 'pencil'], 18, 16
  ],
  '1f4de': [
        ['\uD83D\uDCDE'], '\uE009', '\uDBB9\uDD24', ['telephone_receiver'], 18, 17
  ],
  '1f4df': [
        ['\uD83D\uDCDF'], '', '\uDBB9\uDD22', ['pager'], 18, 18
  ],
  '1f4e0': [
        ['\uD83D\uDCE0'], '\uE00B', '\uDBB9\uDD28', ['fax'], 18, 19
  ],
  '1f4e1': [
        ['\uD83D\uDCE1'], '\uE14B', '\uDBB9\uDD31', ['satellite'], 18, 20
  ],
  '1f4e2': [
        ['\uD83D\uDCE2'], '\uE142', '\uDBB9\uDD2F', ['loudspeaker'], 18, 21
  ],
  '1f4e3': [
        ['\uD83D\uDCE3'], '\uE317', '\uDBB9\uDD30', ['mega'], 18, 22
  ],
  '1f4e4': [
        ['\uD83D\uDCE4'], '', '\uDBB9\uDD33', ['outbox_tray'], 18, 23
  ],
  '1f4e5': [
        ['\uD83D\uDCE5'], '', '\uDBB9\uDD34', ['inbox_tray'], 18, 24
  ],
  '1f4e6': [
        ['\uD83D\uDCE6'], '\uE112', '\uDBB9\uDD35', ['package'], 18, 25
  ],
  '1f4e7': [
        ['\uD83D\uDCE7'], '\uE103', '\uDBBA\uDF92', ['e-mail'], 18, 26
  ],
  '1f4e8': [
        ['\uD83D\uDCE8'], '\uE103', '\uDBB9\uDD2A', ['incoming_envelope'], 18, 27
  ],
  '1f4e9': [
        ['\uD83D\uDCE9'], '\uE103', '\uDBB9\uDD2B', ['envelope_with_arrow'], 18, 28
  ],
  '1f4ea': [
        ['\uD83D\uDCEA'], '\uE101', '\uDBB9\uDD2C', ['mailbox_closed'], 18, 29
  ],
  '1f4eb': [
        ['\uD83D\uDCEB'], '\uE101', '\uDBB9\uDD2D', ['mailbox'], 19, 0
  ],
  '1f4ec': [
        ['\uD83D\uDCEC'], '', '', ['mailbox_with_mail'], 19, 1
  ],
  '1f4ed': [
        ['\uD83D\uDCED'], '', '', ['mailbox_with_no_mail'], 19, 2
  ],
  '1f4ee': [
        ['\uD83D\uDCEE'], '\uE102', '\uDBB9\uDD2E', ['postbox'], 19, 3
  ],
  '1f4ef': [
        ['\uD83D\uDCEF'], '', '', ['postal_horn'], 19, 4
  ],
  '1f4f0': [
        ['\uD83D\uDCF0'], '', '\uDBBA\uDC22', ['newspaper'], 19, 5
  ],
  '1f4f1': [
        ['\uD83D\uDCF1'], '\uE00A', '\uDBB9\uDD25', ['iphone'], 19, 6
  ],
  '1f4f2': [
        ['\uD83D\uDCF2'], '\uE104', '\uDBB9\uDD26', ['calling'], 19, 7
  ],
  '1f4f3': [
        ['\uD83D\uDCF3'], '\uE250', '\uDBBA\uDC39', ['vibration_mode'], 19, 8
  ],
  '1f4f4': [
        ['\uD83D\uDCF4'], '\uE251', '\uDBBA\uDC3A', ['mobile_phone_off'], 19, 9
  ],
  '1f4f5': [
        ['\uD83D\uDCF5'], '', '', ['no_mobile_phones'], 19, 10
  ],
  '1f4f6': [
        ['\uD83D\uDCF6'], '\uE20B', '\uDBBA\uDC38', ['signal_strength'], 19, 11
  ],
  '1f4f7': [
        ['\uD83D\uDCF7'], '\uE008', '\uDBB9\uDCEF', ['camera'], 19, 12
  ],
  '1f4f9': [
        ['\uD83D\uDCF9'], '\uE03D', '\uDBB9\uDCF9', ['video_camera'], 19, 13
  ],
  '1f4fa': [
        ['\uD83D\uDCFA'], '\uE12A', '\uDBBA\uDC1C', ['tv'], 19, 14
  ],
  '1f4fb': [
        ['\uD83D\uDCFB'], '\uE128', '\uDBBA\uDC1F', ['radio'], 19, 15
  ],
  '1f4fc': [
        ['\uD83D\uDCFC'], '\uE129', '\uDBBA\uDC20', ['vhs'], 19, 16
  ],
  '1f500': [
        ['\uD83D\uDD00'], '', '', ['twisted_rightwards_arrows'], 19, 17
  ],
  '1f501': [
        ['\uD83D\uDD01'], '', '', ['repeat'], 19, 18
  ],
  '1f502': [
        ['\uD83D\uDD02'], '', '', ['repeat_one'], 19, 19
  ],
  '1f503': [
        ['\uD83D\uDD03'], '', '\uDBBA\uDF91', ['arrows_clockwise'], 19, 20
  ],
  '1f504': [
        ['\uD83D\uDD04'], '', '', ['arrows_counterclockwise'], 19, 21
  ],
  '1f505': [
        ['\uD83D\uDD05'], '', '', ['low_brightness'], 19, 22
  ],
  '1f506': [
        ['\uD83D\uDD06'], '', '', ['high_brightness'], 19, 23
  ],
  '1f507': [
        ['\uD83D\uDD07'], '', '', ['mute'], 19, 24
  ],
  '1f508': [
        ['\uD83D\uDD08'], '', '', ['speaker'], 19, 25
  ],
  '1f509': [
        ['\uD83D\uDD09'], '', '', ['sound'], 19, 26
  ],
  '1f50a': [
        ['\uD83D\uDD0A'], '\uE141', '\uDBBA\uDC21', ['loud_sound'], 19, 27
  ],
  '1f50b': [
        ['\uD83D\uDD0B'], '', '\uDBB9\uDCFC', ['battery'], 19, 28
  ],
  '1f50c': [
        ['\uD83D\uDD0C'], '', '\uDBB9\uDCFE', ['electric_plug'], 19, 29
  ],
  '1f50d': [
        ['\uD83D\uDD0D'], '\uE114', '\uDBBA\uDF85', ['mag'], 20, 0
  ],
  '1f50e': [
        ['\uD83D\uDD0E'], '\uE114', '\uDBBA\uDF8D', ['mag_right'], 20, 1
  ],
  '1f50f': [
        ['\uD83D\uDD0F'], '\uE144', '\uDBBA\uDF90', ['lock_with_ink_pen'], 20, 2
  ],
  '1f510': [
        ['\uD83D\uDD10'], '\uE144', '\uDBBA\uDF8A', ['closed_lock_with_key'], 20, 3
  ],
  '1f511': [
        ['\uD83D\uDD11'], '\uE03F', '\uDBBA\uDF82', ['key'], 20, 4
  ],
  '1f512': [
        ['\uD83D\uDD12'], '\uE144', '\uDBBA\uDF86', ['lock'], 20, 5
  ],
  '1f513': [
        ['\uD83D\uDD13'], '\uE145', '\uDBBA\uDF87', ['unlock'], 20, 6
  ],
  '1f514': [
        ['\uD83D\uDD14'], '\uE325', '\uDBB9\uDCF2', ['bell'], 20, 7
  ],
  '1f515': [
        ['\uD83D\uDD15'], '', '', ['no_bell'], 20, 8
  ],
  '1f516': [
        ['\uD83D\uDD16'], '', '\uDBBA\uDF8F', ['bookmark'], 20, 9
  ],
  '1f517': [
        ['\uD83D\uDD17'], '', '\uDBBA\uDF4B', ['link'], 20, 10
  ],
  '1f518': [
        ['\uD83D\uDD18'], '', '\uDBBA\uDF8C', ['radio_button'], 20, 11
  ],
  '1f519': [
        ['\uD83D\uDD19'], '\uE235', '\uDBBA\uDF8E', ['back'], 20, 12
  ],
  '1f51a': [
        ['\uD83D\uDD1A'], '', '\uDBB8\uDC1A', ['end'], 20, 13
  ],
  '1f51b': [
        ['\uD83D\uDD1B'], '', '\uDBB8\uDC19', ['on'], 20, 14
  ],
  '1f51c': [
        ['\uD83D\uDD1C'], '', '\uDBB8\uDC18', ['soon'], 20, 15
  ],
  '1f51d': [
        ['\uD83D\uDD1D'], '\uE24C', '\uDBBA\uDF42', ['top'], 20, 16
  ],
  '1f51e': [
        ['\uD83D\uDD1E'], '\uE207', '\uDBBA\uDF25', ['underage'], 20, 17
  ],
  '1f51f': [
        ['\uD83D\uDD1F'], '', '\uDBBA\uDC3B', ['keycap_ten'], 20, 18
  ],
  '1f520': [
        ['\uD83D\uDD20'], '', '\uDBBA\uDF7C', ['capital_abcd'], 20, 19
  ],
  '1f521': [
        ['\uD83D\uDD21'], '', '\uDBBA\uDF7D', ['abcd'], 20, 20
  ],
  '1f522': [
        ['\uD83D\uDD22'], '', '\uDBBA\uDF7E', ['1234'], 20, 21
  ],
  '1f523': [
        ['\uD83D\uDD23'], '', '\uDBBA\uDF7F', ['symbols'], 20, 22
  ],
  '1f524': [
        ['\uD83D\uDD24'], '', '\uDBBA\uDF80', ['abc'], 20, 23
  ],
  '1f525': [
        ['\uD83D\uDD25'], '\uE11D', '\uDBB9\uDCF6', ['fire'], 20, 24
  ],
  '1f526': [
        ['\uD83D\uDD26'], '', '\uDBB9\uDCFB', ['flashlight'], 20, 25
  ],
  '1f527': [
        ['\uD83D\uDD27'], '', '\uDBB9\uDCC9', ['wrench'], 20, 26
  ],
  '1f528': [
        ['\uD83D\uDD28'], '\uE116', '\uDBB9\uDCCA', ['hammer'], 20, 27
  ],
  '1f529': [
        ['\uD83D\uDD29'], '', '\uDBB9\uDCCB', ['nut_and_bolt'], 20, 28
  ],
  '1f52a': [
        ['\uD83D\uDD2A'], '', '\uDBB9\uDCFA', ['hocho', 'knife'], 20, 29
  ],
  '1f52b': [
        ['\uD83D\uDD2B'], '\uE113', '\uDBB9\uDCF5', ['gun'], 21, 0
  ],
  '1f52c': [
        ['\uD83D\uDD2C'], '', '', ['microscope'], 21, 1
  ],
  '1f52d': [
        ['\uD83D\uDD2D'], '', '', ['telescope'], 21, 2
  ],
  '1f52e': [
        ['\uD83D\uDD2E'], '\uE23E', '\uDBB9\uDCF7', ['crystal_ball'], 21, 3
  ],
  '1f52f': [
        ['\uD83D\uDD2F'], '\uE23E', '\uDBB9\uDCF8', ['six_pointed_star'], 21, 4
  ],
  '1f530': [
        ['\uD83D\uDD30'], '\uE209', '\uDBB8\uDC44', ['beginner'], 21, 5
  ],
  '1f531': [
        ['\uD83D\uDD31'], '\uE031', '\uDBB9\uDCD2', ['trident'], 21, 6
  ],
  '1f532': [
        ['\uD83D\uDD32'], '\uE21A', '\uDBBA\uDF64', ['black_square_button'], 21, 7
  ],
  '1f533': [
        ['\uD83D\uDD33'], '\uE21B', '\uDBBA\uDF67', ['white_square_button'], 21, 8
  ],
  '1f534': [
        ['\uD83D\uDD34'], '\uE219', '\uDBBA\uDF63', ['red_circle'], 21, 9
  ],
  '1f535': [
        ['\uD83D\uDD35'], '\uE21A', '\uDBBA\uDF64', ['large_blue_circle'], 21, 10
  ],
  '1f536': [
        ['\uD83D\uDD36'], '\uE21B', '\uDBBA\uDF73', ['large_orange_diamond'], 21, 11
  ],
  '1f537': [
        ['\uD83D\uDD37'], '\uE21B', '\uDBBA\uDF74', ['large_blue_diamond'], 21, 12
  ],
  '1f538': [
        ['\uD83D\uDD38'], '\uE21B', '\uDBBA\uDF75', ['small_orange_diamond'], 21, 13
  ],
  '1f539': [
        ['\uD83D\uDD39'], '\uE21B', '\uDBBA\uDF76', ['small_blue_diamond'], 21, 14
  ],
  '1f53a': [
        ['\uD83D\uDD3A'], '', '\uDBBA\uDF78', ['small_red_triangle'], 21, 15
  ],
  '1f53b': [
        ['\uD83D\uDD3B'], '', '\uDBBA\uDF79', ['small_red_triangle_down'], 21, 16
  ],
  '1f53c': [
        ['\uD83D\uDD3C'], '', '\uDBBA\uDF01', ['arrow_up_small'], 21, 17
  ],
  '1f53d': [
        ['\uD83D\uDD3D'], '', '\uDBBA\uDF00', ['arrow_down_small'], 21, 18
  ],
  '1f550': [
        ['\uD83D\uDD50'], '\uE024', '\uDBB8\uDC1E', ['clock1'], 21, 19
  ],
  '1f551': [
        ['\uD83D\uDD51'], '\uE025', '\uDBB8\uDC1F', ['clock2'], 21, 20
  ],
  '1f552': [
        ['\uD83D\uDD52'], '\uE026', '\uDBB8\uDC20', ['clock3'], 21, 21
  ],
  '1f553': [
        ['\uD83D\uDD53'], '\uE027', '\uDBB8\uDC21', ['clock4'], 21, 22
  ],
  '1f554': [
        ['\uD83D\uDD54'], '\uE028', '\uDBB8\uDC22', ['clock5'], 21, 23
  ],
  '1f555': [
        ['\uD83D\uDD55'], '\uE029', '\uDBB8\uDC23', ['clock6'], 21, 24
  ],
  '1f556': [
        ['\uD83D\uDD56'], '\uE02A', '\uDBB8\uDC24', ['clock7'], 21, 25
  ],
  '1f557': [
        ['\uD83D\uDD57'], '\uE02B', '\uDBB8\uDC25', ['clock8'], 21, 26
  ],
  '1f558': [
        ['\uD83D\uDD58'], '\uE02C', '\uDBB8\uDC26', ['clock9'], 21, 27
  ],
  '1f559': [
        ['\uD83D\uDD59'], '\uE02D', '\uDBB8\uDC27', ['clock10'], 21, 28
  ],
  '1f55a': [
        ['\uD83D\uDD5A'], '\uE02E', '\uDBB8\uDC28', ['clock11'], 21, 29
  ],
  '1f55b': [
        ['\uD83D\uDD5B'], '\uE02F', '\uDBB8\uDC29', ['clock12'], 22, 0
  ],
  '1f55c': [
        ['\uD83D\uDD5C'], '', '', ['clock130'], 22, 1
  ],
  '1f55d': [
        ['\uD83D\uDD5D'], '', '', ['clock230'], 22, 2
  ],
  '1f55e': [
        ['\uD83D\uDD5E'], '', '', ['clock330'], 22, 3
  ],
  '1f55f': [
        ['\uD83D\uDD5F'], '', '', ['clock430'], 22, 4
  ],
  '1f560': [
        ['\uD83D\uDD60'], '', '', ['clock530'], 22, 5
  ],
  '1f561': [
        ['\uD83D\uDD61'], '', '', ['clock630'], 22, 6
  ],
  '1f562': [
        ['\uD83D\uDD62'], '', '', ['clock730'], 22, 7
  ],
  '1f563': [
        ['\uD83D\uDD63'], '', '', ['clock830'], 22, 8
  ],
  '1f564': [
        ['\uD83D\uDD64'], '', '', ['clock930'], 22, 9
  ],
  '1f565': [
        ['\uD83D\uDD65'], '', '', ['clock1030'], 22, 10
  ],
  '1f566': [
        ['\uD83D\uDD66'], '', '', ['clock1130'], 22, 11
  ],
  '1f567': [
        ['\uD83D\uDD67'], '', '', ['clock1230'], 22, 12
  ],
  '1f5fb': [
        ['\uD83D\uDDFB'], '\uE03B', '\uDBB9\uDCC3', ['mount_fuji'], 22, 13
  ],
  '1f5fc': [
        ['\uD83D\uDDFC'], '\uE509', '\uDBB9\uDCC4', ['tokyo_tower'], 22, 14
  ],
  '1f5fd': [
        ['\uD83D\uDDFD'], '\uE51D', '\uDBB9\uDCC6', ['statue_of_liberty'], 22, 15
  ],
  '1f5fe': [
        ['\uD83D\uDDFE'], '', '\uDBB9\uDCC7', ['japan'], 22, 16
  ],
  '1f5ff': [
        ['\uD83D\uDDFF'], '', '\uDBB9\uDCC8', ['moyai'], 22, 17
  ],
  '1f600': [
        ['\uD83D\uDE00'], '', '', ['grinning'], 22, 18, ':D'
  ],
  '1f601': [
        ['\uD83D\uDE01'], '\uE404', '\uDBB8\uDF33', ['grin'], 22, 19
  ],
  '1f602': [
        ['\uD83D\uDE02'], '\uE412', '\uDBB8\uDF34', ['joy'], 22, 20
  ],
  '1f603': [
        ['\uD83D\uDE03'], '\uE057', '\uDBB8\uDF30', ['smiley'], 22, 21, ':)'
  ],
  '1f604': [
        ['\uD83D\uDE04'], '\uE415', '\uDBB8\uDF38', ['smile'], 22, 22, ':)'
  ],
  '1f605': [
        ['\uD83D\uDE05'], '\uE415\uE331', '\uDBB8\uDF31', ['sweat_smile'], 22, 23
  ],
  '1f606': [
        ['\uD83D\uDE06'], '\uE40A', '\uDBB8\uDF32', ['satisfied'], 22, 24
  ],
  '1f607': [
        ['\uD83D\uDE07'], '', '', ['innocent'], 22, 25
  ],
  '1f608': [
        ['\uD83D\uDE08'], '', '', ['smiling_imp'], 22, 26
  ],
  '1f609': [
        ['\uD83D\uDE09'], '\uE405', '\uDBB8\uDF47', ['wink'], 22, 27, ';)'
  ],
  '1f60a': [
        ['\uD83D\uDE0A'], '\uE056', '\uDBB8\uDF35', ['blush'], 22, 28
  ],
  '1f60b': [
        ['\uD83D\uDE0B'], '\uE056', '\uDBB8\uDF2B', ['yum'], 22, 29
  ],
  '1f60c': [
        ['\uD83D\uDE0C'], '\uE40A', '\uDBB8\uDF3E', ['relieved'], 23, 0
  ],
  '1f60d': [
        ['\uD83D\uDE0D'], '\uE106', '\uDBB8\uDF27', ['heart_eyes'], 23, 1
  ],
  '1f60e': [
        ['\uD83D\uDE0E'], '', '', ['sunglasses'], 23, 2
  ],
  '1f60f': [
        ['\uD83D\uDE0F'], '\uE402', '\uDBB8\uDF43', ['smirk'], 23, 3
  ],
  '1f610': [
        ['\uD83D\uDE10'], '', '', ['neutral_face'], 23, 4
  ],
  '1f611': [
        ['\uD83D\uDE11'], '', '', ['expressionless'], 23, 5
  ],
  '1f612': [
        ['\uD83D\uDE12'], '\uE40E', '\uDBB8\uDF26', ['unamused'], 23, 6
  ],
  '1f613': [
        ['\uD83D\uDE13'], '\uE108', '\uDBB8\uDF44', ['sweat'], 23, 7
  ],
  '1f614': [
        ['\uD83D\uDE14'], '\uE403', '\uDBB8\uDF40', ['pensive'], 23, 8
  ],
  '1f615': [
        ['\uD83D\uDE15'], '', '', ['confused'], 23, 9
  ],
  '1f616': [
        ['\uD83D\uDE16'], '\uE407', '\uDBB8\uDF3F', ['confounded'], 23, 10
  ],
  '1f617': [
        ['\uD83D\uDE17'], '', '', ['kissing'], 23, 11
  ],
  '1f618': [
        ['\uD83D\uDE18'], '\uE418', '\uDBB8\uDF2C', ['kissing_heart'], 23, 12
  ],
  '1f619': [
        ['\uD83D\uDE19'], '', '', ['kissing_smiling_eyes'], 23, 13
  ],
  '1f61a': [
        ['\uD83D\uDE1A'], '\uE417', '\uDBB8\uDF2D', ['kissing_closed_eyes'], 23, 14
  ],
  '1f61b': [
        ['\uD83D\uDE1B'], '', '', ['stuck_out_tongue'], 23, 15, ':p'
  ],
  '1f61c': [
        ['\uD83D\uDE1C'], '\uE105', '\uDBB8\uDF29', ['stuck_out_tongue_winking_eye'], 23, 16, ';p'
  ],
  '1f61d': [
        ['\uD83D\uDE1D'], '\uE409', '\uDBB8\uDF2A', ['stuck_out_tongue_closed_eyes'], 23, 17
  ],
  '1f61e': [
        ['\uD83D\uDE1E'], '\uE058', '\uDBB8\uDF23', ['disappointed'], 23, 18, ':('
  ],
  '1f61f': [
        ['\uD83D\uDE1F'], '', '', ['worried'], 23, 19
  ],
  '1f620': [
        ['\uD83D\uDE20'], '\uE059', '\uDBB8\uDF20', ['angry'], 23, 20
  ],
  '1f621': [
        ['\uD83D\uDE21'], '\uE416', '\uDBB8\uDF3D', ['rage'], 23, 21
  ],
  '1f622': [
        ['\uD83D\uDE22'], '\uE413', '\uDBB8\uDF39', ['cry'], 23, 22, ":'("
  ],
  '1f623': [
        ['\uD83D\uDE23'], '\uE406', '\uDBB8\uDF3C', ['persevere'], 23, 23
  ],
  '1f624': [
        ['\uD83D\uDE24'], '\uE404', '\uDBB8\uDF28', ['triumph'], 23, 24
  ],
  '1f625': [
        ['\uD83D\uDE25'], '\uE401', '\uDBB8\uDF45', ['disappointed_relieved'], 23, 25
  ],
  '1f626': [
        ['\uD83D\uDE26'], '', '', ['frowning'], 23, 26
  ],
  '1f627': [
        ['\uD83D\uDE27'], '', '', ['anguished'], 23, 27
  ],
  '1f628': [
        ['\uD83D\uDE28'], '\uE40B', '\uDBB8\uDF3B', ['fearful'], 23, 28
  ],
  '1f629': [
        ['\uD83D\uDE29'], '\uE403', '\uDBB8\uDF21', ['weary'], 23, 29
  ],
  '1f62a': [
        ['\uD83D\uDE2A'], '\uE408', '\uDBB8\uDF42', ['sleepy'], 24, 0
  ],
  '1f62b': [
        ['\uD83D\uDE2B'], '\uE406', '\uDBB8\uDF46', ['tired_face'], 24, 1
  ],
  '1f62c': [
        ['\uD83D\uDE2C'], '', '', ['grimacing'], 24, 2
  ],
  '1f62d': [
        ['\uD83D\uDE2D'], '\uE411', '\uDBB8\uDF3A', ['sob'], 24, 3, ":'("
  ],
  '1f62e': [
        ['\uD83D\uDE2E'], '', '', ['open_mouth'], 24, 4
  ],
  '1f62f': [
        ['\uD83D\uDE2F'], '', '', ['hushed'], 24, 5
  ],
  '1f630': [
        ['\uD83D\uDE30'], '\uE40F', '\uDBB8\uDF25', ['cold_sweat'], 24, 6
  ],
  '1f631': [
        ['\uD83D\uDE31'], '\uE107', '\uDBB8\uDF41', ['scream'], 24, 7
  ],
  '1f632': [
        ['\uD83D\uDE32'], '\uE410', '\uDBB8\uDF22', ['astonished'], 24, 8
  ],
  '1f633': [
        ['\uD83D\uDE33'], '\uE40D', '\uDBB8\uDF2F', ['flushed'], 24, 9
  ],
  '1f634': [
        ['\uD83D\uDE34'], '', '', ['sleeping'], 24, 10
  ],
  '1f635': [
        ['\uD83D\uDE35'], '\uE406', '\uDBB8\uDF24', ['dizzy_face'], 24, 11
  ],
  '1f636': [
        ['\uD83D\uDE36'], '', '', ['no_mouth'], 24, 12
  ],
  '1f637': [
        ['\uD83D\uDE37'], '\uE40C', '\uDBB8\uDF2E', ['mask'], 24, 13
  ],
  '1f638': [
        ['\uD83D\uDE38'], '\uE404', '\uDBB8\uDF49', ['smile_cat'], 24, 14
  ],
  '1f639': [
        ['\uD83D\uDE39'], '\uE412', '\uDBB8\uDF4A', ['joy_cat'], 24, 15
  ],
  '1f63a': [
        ['\uD83D\uDE3A'], '\uE057', '\uDBB8\uDF48', ['smiley_cat'], 24, 16
  ],
  '1f63b': [
        ['\uD83D\uDE3B'], '\uE106', '\uDBB8\uDF4C', ['heart_eyes_cat'], 24, 17
  ],
  '1f63c': [
        ['\uD83D\uDE3C'], '\uE404', '\uDBB8\uDF4F', ['smirk_cat'], 24, 18
  ],
  '1f63d': [
        ['\uD83D\uDE3D'], '\uE418', '\uDBB8\uDF4B', ['kissing_cat'], 24, 19
  ],
  '1f63e': [
        ['\uD83D\uDE3E'], '\uE416', '\uDBB8\uDF4E', ['pouting_cat'], 24, 20
  ],
  '1f63f': [
        ['\uD83D\uDE3F'], '\uE413', '\uDBB8\uDF4D', ['crying_cat_face'], 24, 21
  ],
  '1f640': [
        ['\uD83D\uDE40'], '\uE403', '\uDBB8\uDF50', ['scream_cat'], 24, 22
  ],
  '1f645': [
        ['\uD83D\uDE45'], '\uE423', '\uDBB8\uDF51', ['no_good'], 24, 23
  ],
  '1f646': [
        ['\uD83D\uDE46'], '\uE424', '\uDBB8\uDF52', ['ok_woman'], 24, 24
  ],
  '1f647': [
        ['\uD83D\uDE47'], '\uE426', '\uDBB8\uDF53', ['bow'], 24, 25
  ],
  '1f648': [
        ['\uD83D\uDE48'], '', '\uDBB8\uDF54', ['see_no_evil'], 24, 26
  ],
  '1f649': [
        ['\uD83D\uDE49'], '', '\uDBB8\uDF56', ['hear_no_evil'], 24, 27
  ],
  '1f64a': [
        ['\uD83D\uDE4A'], '', '\uDBB8\uDF55', ['speak_no_evil'], 24, 28
  ],
  '1f64b': [
        ['\uD83D\uDE4B'], '\uE012', '\uDBB8\uDF57', ['raising_hand'], 24, 29
  ],
  '1f64c': [
        ['\uD83D\uDE4C'], '\uE427', '\uDBB8\uDF58', ['raised_hands'], 25, 0
  ],
  '1f64d': [
        ['\uD83D\uDE4D'], '\uE403', '\uDBB8\uDF59', ['person_frowning'], 25, 1
  ],
  '1f64e': [
        ['\uD83D\uDE4E'], '\uE416', '\uDBB8\uDF5A', ['person_with_pouting_face'], 25, 2
  ],
  '1f64f': [
        ['\uD83D\uDE4F'], '\uE41D', '\uDBB8\uDF5B', ['pray'], 25, 3
  ],
  '1f680': [
        ['\uD83D\uDE80'], '\uE10D', '\uDBB9\uDFED', ['rocket'], 25, 4
  ],
  '1f681': [
        ['\uD83D\uDE81'], '', '', ['helicopter'], 25, 5
  ],
  '1f682': [
        ['\uD83D\uDE82'], '', '', ['steam_locomotive'], 25, 6
  ],
  '1f683': [
        ['\uD83D\uDE83'], '\uE01E', '\uDBB9\uDFDF', ['railway_car'], 25, 7
  ],
  '1f684': [
        ['\uD83D\uDE84'], '\uE435', '\uDBB9\uDFE2', ['bullettrain_side'], 25, 8
  ],
  '1f685': [
        ['\uD83D\uDE85'], '\uE01F', '\uDBB9\uDFE3', ['bullettrain_front'], 25, 9
  ],
  '1f686': [
        ['\uD83D\uDE86'], '', '', ['train2'], 25, 10
  ],
  '1f687': [
        ['\uD83D\uDE87'], '\uE434', '\uDBB9\uDFE0', ['metro'], 25, 11
  ],
  '1f688': [
        ['\uD83D\uDE88'], '', '', ['light_rail'], 25, 12
  ],
  '1f689': [
        ['\uD83D\uDE89'], '\uE039', '\uDBB9\uDFEC', ['station'], 25, 13
  ],
  '1f68a': [
        ['\uD83D\uDE8A'], '', '', ['tram'], 25, 14
  ],
  '1f68b': [
        ['\uD83D\uDE8B'], '', '', ['train'], 25, 15
  ],
  '1f68c': [
        ['\uD83D\uDE8C'], '\uE159', '\uDBB9\uDFE6', ['bus'], 25, 16
  ],
  '1f68d': [
        ['\uD83D\uDE8D'], '', '', ['oncoming_bus'], 25, 17
  ],
  '1f68e': [
        ['\uD83D\uDE8E'], '', '', ['trolleybus'], 25, 18
  ],
  '1f68f': [
        ['\uD83D\uDE8F'], '\uE150', '\uDBB9\uDFE7', ['busstop'], 25, 19
  ],
  '1f690': [
        ['\uD83D\uDE90'], '', '', ['minibus'], 25, 20
  ],
  '1f691': [
        ['\uD83D\uDE91'], '\uE431', '\uDBB9\uDFF3', ['ambulance'], 25, 21
  ],
  '1f692': [
        ['\uD83D\uDE92'], '\uE430', '\uDBB9\uDFF2', ['fire_engine'], 25, 22
  ],
  '1f693': [
        ['\uD83D\uDE93'], '\uE432', '\uDBB9\uDFF4', ['police_car'], 25, 23
  ],
  '1f694': [
        ['\uD83D\uDE94'], '', '', ['oncoming_police_car'], 25, 24
  ],
  '1f695': [
        ['\uD83D\uDE95'], '\uE15A', '\uDBB9\uDFEF', ['taxi'], 25, 25
  ],
  '1f696': [
        ['\uD83D\uDE96'], '', '', ['oncoming_taxi'], 25, 26
  ],
  '1f697': [
        ['\uD83D\uDE97'], '\uE01B', '\uDBB9\uDFE4', ['car', 'red_car'], 25, 27
  ],
  '1f698': [
        ['\uD83D\uDE98'], '', '', ['oncoming_automobile'], 25, 28
  ],
  '1f699': [
        ['\uD83D\uDE99'], '\uE42E', '\uDBB9\uDFE5', ['blue_car'], 25, 29
  ],
  '1f69a': [
        ['\uD83D\uDE9A'], '\uE42F', '\uDBB9\uDFF1', ['truck'], 26, 0
  ],
  '1f69b': [
        ['\uD83D\uDE9B'], '', '', ['articulated_lorry'], 26, 1
  ],
  '1f69c': [
        ['\uD83D\uDE9C'], '', '', ['tractor'], 26, 2
  ],
  '1f69d': [
        ['\uD83D\uDE9D'], '', '', ['monorail'], 26, 3
  ],
  '1f69e': [
        ['\uD83D\uDE9E'], '', '', ['mountain_railway'], 26, 4
  ],
  '1f69f': [
        ['\uD83D\uDE9F'], '', '', ['suspension_railway'], 26, 5
  ],
  '1f6a0': [
        ['\uD83D\uDEA0'], '', '', ['mountain_cableway'], 26, 6
  ],
  '1f6a1': [
        ['\uD83D\uDEA1'], '', '', ['aerial_tramway'], 26, 7
  ],
  '1f6a2': [
        ['\uD83D\uDEA2'], '\uE202', '\uDBB9\uDFE8', ['ship'], 26, 8
  ],
  '1f6a3': [
        ['\uD83D\uDEA3'], '', '', ['rowboat'], 26, 9
  ],
  '1f6a4': [
        ['\uD83D\uDEA4'], '\uE135', '\uDBB9\uDFEE', ['speedboat'], 26, 10
  ],
  '1f6a5': [
        ['\uD83D\uDEA5'], '\uE14E', '\uDBB9\uDFF7', ['traffic_light'], 26, 11
  ],
  '1f6a6': [
        ['\uD83D\uDEA6'], '', '', ['vertical_traffic_light'], 26, 12
  ],
  '1f6a7': [
        ['\uD83D\uDEA7'], '\uE137', '\uDBB9\uDFF8', ['construction'], 26, 13
  ],
  '1f6a8': [
        ['\uD83D\uDEA8'], '\uE432', '\uDBB9\uDFF9', ['rotating_light'], 26, 14
  ],
  '1f6a9': [
        ['\uD83D\uDEA9'], '', '\uDBBA\uDF22', ['triangular_flag_on_post'], 26, 15
  ],
  '1f6aa': [
        ['\uD83D\uDEAA'], '', '\uDBB9\uDCF3', ['door'], 26, 16
  ],
  '1f6ab': [
        ['\uD83D\uDEAB'], '', '\uDBBA\uDF48', ['no_entry_sign'], 26, 17
  ],
  '1f6ac': [
        ['\uD83D\uDEAC'], '\uE30E', '\uDBBA\uDF1E', ['smoking'], 26, 18
  ],
  '1f6ad': [
        ['\uD83D\uDEAD'], '\uE208', '\uDBBA\uDF1F', ['no_smoking'], 26, 19
  ],
  '1f6ae': [
        ['\uD83D\uDEAE'], '', '', ['put_litter_in_its_place'], 26, 20
  ],
  '1f6af': [
        ['\uD83D\uDEAF'], '', '', ['do_not_litter'], 26, 21
  ],
  '1f6b0': [
        ['\uD83D\uDEB0'], '', '', ['potable_water'], 26, 22
  ],
  '1f6b1': [
        ['\uD83D\uDEB1'], '', '', ['non-potable_water'], 26, 23
  ],
  '1f6b2': [
        ['\uD83D\uDEB2'], '\uE136', '\uDBB9\uDFEB', ['bike'], 26, 24
  ],
  '1f6b3': [
        ['\uD83D\uDEB3'], '', '', ['no_bicycles'], 26, 25
  ],
  '1f6b4': [
        ['\uD83D\uDEB4'], '', '', ['bicyclist'], 26, 26
  ],
  '1f6b5': [
        ['\uD83D\uDEB5'], '', '', ['mountain_bicyclist'], 26, 27
  ],
  '1f6b6': [
        ['\uD83D\uDEB6'], '\uE201', '\uDBB9\uDFF0', ['walking'], 26, 28
  ],
  '1f6b7': [
        ['\uD83D\uDEB7'], '', '', ['no_pedestrians'], 26, 29
  ],
  '1f6b8': [
        ['\uD83D\uDEB8'], '', '', ['children_crossing'], 27, 0
  ],
  '1f6b9': [
        ['\uD83D\uDEB9'], '\uE138', '\uDBBA\uDF33', ['mens'], 27, 1
  ],
  '1f6ba': [
        ['\uD83D\uDEBA'], '\uE139', '\uDBBA\uDF34', ['womens'], 27, 2
  ],
  '1f6bb': [
        ['\uD83D\uDEBB'], '\uE151', '\uDBB9\uDD06', ['restroom'], 27, 3
  ],
  '1f6bc': [
        ['\uD83D\uDEBC'], '\uE13A', '\uDBBA\uDF35', ['baby_symbol'], 27, 4
  ],
  '1f6bd': [
        ['\uD83D\uDEBD'], '\uE140', '\uDBB9\uDD07', ['toilet'], 27, 5
  ],
  '1f6be': [
        ['\uD83D\uDEBE'], '\uE309', '\uDBB9\uDD08', ['wc'], 27, 6
  ],
  '1f6bf': [
        ['\uD83D\uDEBF'], '', '', ['shower'], 27, 7
  ],
  '1f6c0': [
        ['\uD83D\uDEC0'], '\uE13F', '\uDBB9\uDD05', ['bath'], 27, 8
  ],
  '1f6c1': [
        ['\uD83D\uDEC1'], '', '', ['bathtub'], 27, 9
  ],
  '1f6c2': [
        ['\uD83D\uDEC2'], '', '', ['passport_control'], 27, 10
  ],
  '1f6c3': [
        ['\uD83D\uDEC3'], '', '', ['customs'], 27, 11
  ],
  '1f6c4': [
        ['\uD83D\uDEC4'], '', '', ['baggage_claim'], 27, 12
  ],
  '1f6c5': [
        ['\uD83D\uDEC5'], '', '', ['left_luggage'], 27, 13
  ],
  '0023-20e3': [
        ['\u0023\uFE0F\u20E3', '\u0023\u20E3'], '\uE210', '\uDBBA\uDC2C', ['hash'], 27, 14
  ],
  '0030-20e3': [
        ['\u0030\uFE0F\u20E3', '\u0030\u20E3'], '\uE225', '\uDBBA\uDC37', ['zero'], 27, 15
  ],
  '0031-20e3': [
        ['\u0031\uFE0F\u20E3', '\u0031\u20E3'], '\uE21C', '\uDBBA\uDC2E', ['one'], 27, 16
  ],
  '0032-20e3': [
        ['\u0032\uFE0F\u20E3', '\u0032\u20E3'], '\uE21D', '\uDBBA\uDC2F', ['two'], 27, 17
  ],
  '0033-20e3': [
        ['\u0033\uFE0F\u20E3', '\u0033\u20E3'], '\uE21E', '\uDBBA\uDC30', ['three'], 27, 18
  ],
  '0034-20e3': [
        ['\u0034\uFE0F\u20E3', '\u0034\u20E3'], '\uE21F', '\uDBBA\uDC31', ['four'], 27, 19
  ],
  '0035-20e3': [
        ['\u0035\uFE0F\u20E3', '\u0035\u20E3'], '\uE220', '\uDBBA\uDC32', ['five'], 27, 20
  ],
  '0036-20e3': [
        ['\u0036\uFE0F\u20E3', '\u0036\u20E3'], '\uE221', '\uDBBA\uDC33', ['six'], 27, 21
  ],
  '0037-20e3': [
        ['\u0037\uFE0F\u20E3', '\u0037\u20E3'], '\uE222', '\uDBBA\uDC34', ['seven'], 27, 22
  ],
  '0038-20e3': [
        ['\u0038\uFE0F\u20E3', '\u0038\u20E3'], '\uE223', '\uDBBA\uDC35', ['eight'], 27, 23
  ],
  '0039-20e3': [
        ['\u0039\uFE0F\u20E3', '\u0039\u20E3'], '\uE224', '\uDBBA\uDC36', ['nine'], 27, 24
  ],
  '1f1e8-1f1f3': [
        ['\uD83C\uDDE8\uD83C\uDDF3'], '\uE513', '\uDBB9\uDCED', ['cn'], 27, 25
  ],
  '1f1e9-1f1ea': [
        ['\uD83C\uDDE9\uD83C\uDDEA'], '\uE50E', '\uDBB9\uDCE8', ['de'], 27, 26
  ],
  '1f1ea-1f1f8': [
        ['\uD83C\uDDEA\uD83C\uDDF8'], '\uE511', '\uDBB9\uDCEB', ['es'], 27, 27
  ],
  '1f1eb-1f1f7': [
        ['\uD83C\uDDEB\uD83C\uDDF7'], '\uE50D', '\uDBB9\uDCE7', ['fr'], 27, 28
  ],
  '1f1ec-1f1e7': [
        ['\uD83C\uDDEC\uD83C\uDDE7'], '\uE510', '\uDBB9\uDCEA', ['gb', 'uk'], 27, 29
  ],
  '1f1ee-1f1f9': [
        ['\uD83C\uDDEE\uD83C\uDDF9'], '\uE50F', '\uDBB9\uDCE9', ['it'], 28, 0
  ],
  '1f1ef-1f1f5': [
        ['\uD83C\uDDEF\uD83C\uDDF5'], '\uE50B', '\uDBB9\uDCE5', ['jp'], 28, 1
  ],
  '1f1f0-1f1f7': [
        ['\uD83C\uDDF0\uD83C\uDDF7'], '\uE514', '\uDBB9\uDCEE', ['kr'], 28, 2
  ],
  '1f1f7-1f1fa': [
        ['\uD83C\uDDF7\uD83C\uDDFA'], '\uE512', '\uDBB9\uDCEC', ['ru'], 28, 3
  ],
  '1f1fa-1f1f8': [
        ['\uD83C\uDDFA\uD83C\uDDF8'], '\uE50C', '\uDBB9\uDCE6', ['us'], 28, 4
  ]
}

Config.smileys = {
  '<3': 'heart',
  '<\/3': 'broken_heart',
  ':)': 'blush',
  '(:': 'blush',
  ':-)': 'blush',
  'C:': 'smile',
  'c:': 'smile',
  ':D': 'smile',
  ':-D': 'smile',
  ';)': 'wink',
  ';-)': 'wink',
  '):': 'disappointed',
  ':(': 'disappointed',
  ':-(': 'disappointed',
  ":'(": 'cry',
  '=)': 'smiley',
  '=-)': 'smiley',
  ':*': 'kiss',
  ':-*': 'kiss',
  ':>': 'laughing',
  ':->': 'laughing',
  '8)': 'sunglasses',
  ':\\\\': 'confused',
  ':-\\\\': 'confused',
  ':\/': 'confused',
  ':-\/': 'confused',
  ':|': 'neutral_face',
  ':-|': 'neutral_face',
  ':o': 'open_mouth',
  ':-o': 'open_mouth',
  '>:(': 'angry',
  '>:-(': 'angry',
  ':p': 'stuck_out_tongue',
  ':-p': 'stuck_out_tongue',
  ':P': 'stuck_out_tongue',
  ':-P': 'stuck_out_tongue',
  ':b': 'stuck_out_tongue',
  ':-b': 'stuck_out_tongue',
  ';p': 'stuck_out_tongue_winking_eye',
  ';-p': 'stuck_out_tongue_winking_eye',
  ';b': 'stuck_out_tongue_winking_eye',
  ';-b': 'stuck_out_tongue_winking_eye',
  ';P': 'stuck_out_tongue_winking_eye',
  ';-P': 'stuck_out_tongue_winking_eye',
  ':o)': 'monkey_face',
  'D:': 'anguished'
}

Config.inits = {}
Config.map = {}

Config.mapcolon = {}
var a = []
Config.reversemap = {}

Config.init_emoticons = function () {
  if (Config.inits.emoticons) { return }
  Config.init_colons() // we require this for the emoticons map
  Config.inits.emoticons = 1

  var a = []
  Config.map.emoticons = {}
  for (var i in Config.emoticons_data) {
        // because we never see some characters in our text except as
        // entities, we must do some replacing
    var emoticon = i.replace(/\&/g, '&amp;').replace(/\</g, '&lt;')
            .replace(/\>/g, '&gt;')

    if (!Config.map.colons[emoji.emoticons_data[i]]) { continue }

    Config.map.emoticons[emoticon] = Config.map.colons[Config.emoticons_data[i]]
    a.push(Config.escape_rx(emoticon))
  }
  Config.rx_emoticons = new RegExp(
        ('(^|\\s)(' + a.join('|') + ')(?=$|[\\s|\\?\\.,!])'), 'g')
}
Config.init_colons = function () {
  if (Config.inits.colons) { return }
  Config.inits.colons = 1
  Config.rx_colons = new RegExp('\:[^\\s:]+\:', 'g')
  Config.map.colons = {}
  for (var i in Config.data) {
    for (var j = 0; j < Config.data[i][3].length; j++) {
      Config.map.colons[emoji.data[i][3][j]] = i
    }
  }
}
Config.init_unified = function () {
  if (Config.inits.unified) { return }
  Config.inits.unified = 1

  buildMap()
}

Config.escape_rx = function (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

function buildMap () {
  var colons = [], codes = []
  for (var i in Config.emoji_data) {
    for (var j = 0; j < Config.emoji_data[i][0].length; j++) {
      colons.push(Config.escape_rx(':' + Config.emoji_data[i][3][0]) + ':')
      codes.push(Config.emoji_data[i][0][0])

            // it is a map of {"colon smiley":"unicode char"}
      Config.map[Config.emoji_data[i][3][0]] = Config.emoji_data[i][0][0]
      Config.mapcolon[':' + Config.emoji_data[i][3][0] + ':'] = Config.emoji_data[i][0][0]
            // it is a map of {"unicode char": "colon smiley"}
      Config.reversemap[Config.emoji_data[i][0][0]] = Config.emoji_data[i][3][0]
    }

    Config.rx_colons = new RegExp('(' + colons.join('|') + ')', 'g')
    Config.rx_codes = new RegExp('(' + codes.join('|') + ')', 'g')
  }
}

/* harmony default export */ var config = (Config);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("7t+N");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/tether/dist/js/tether.js
var tether = __webpack_require__("6BCL");
var tether_default = /*#__PURE__*/__webpack_require__.n(tether);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/blank.gif
var blank = __webpack_require__("Hn9x");
var blank_default = /*#__PURE__*/__webpack_require__.n(blank);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/emoji_spritesheet_0.png
var emoji_spritesheet_0 = __webpack_require__("PqHv");
var emoji_spritesheet_0_default = /*#__PURE__*/__webpack_require__.n(emoji_spritesheet_0);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/emoji_spritesheet_1.png
var emoji_spritesheet_1 = __webpack_require__("mqJx");
var emoji_spritesheet_1_default = /*#__PURE__*/__webpack_require__.n(emoji_spritesheet_1);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/emoji_spritesheet_2.png
var emoji_spritesheet_2 = __webpack_require__("H+iO");
var emoji_spritesheet_2_default = /*#__PURE__*/__webpack_require__.n(emoji_spritesheet_2);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/emoji_spritesheet_3.png
var emoji_spritesheet_3 = __webpack_require__("CBuq");
var emoji_spritesheet_3_default = /*#__PURE__*/__webpack_require__.n(emoji_spritesheet_3);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/emoji_spritesheet_4.png
var emoji_spritesheet_4 = __webpack_require__("IlDD");
var emoji_spritesheet_4_default = /*#__PURE__*/__webpack_require__.n(emoji_spritesheet_4);

// CONCATENATED MODULE: ./node_modules/emoji-vue/src/lib/js/jquery.emojiarea.js










const getGuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const emojiareaPlugin = ($, window, document) => {
  var ELEMENT_NODE = 1
  var TEXT_NODE = 3
  var TAGS_BLOCK = [ 'p', 'div', 'pre', 'form' ]
  var KEY_ESC = 27
  var KEY_TAB = 9
  /**  Keys that are not intercepted and canceled when the textbox has reached its max length:
  *	Backspace, Tab, Ctrl, Alt, Left Arrow, Up Arrow, Right Arrow, Down Arrow, Cmd Key, Delete
  */
  var MAX_LENGTH_ALLOWED_KEYS = [8, 9, 17, 18, 37, 38, 39, 40, 91, 46]

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/*
	 * ! MODIFICATION START Options 'spritesheetPath', 'spritesheetDimens',
	 * 'iconSize' added by Andre Staltz.
	 */
  $.emojiarea = {
    assetsPath: '',
    iconSize: 25,
    icons: {}
  }
  var defaultRecentEmojis = ':joy:,:kissing_heart:,:heart:,:heart_eyes:,:blush:,:grin:,:+1:,:relaxed:,:pensive:,:smile:,:sob:,:kiss:,:unamused:,:flushed:,:stuck_out_tongue_winking_eye:,:see_no_evil:,:wink:,:smiley:,:cry:,:stuck_out_tongue_closed_eyes:,:scream:,:rage:,:smirk:,:disappointed:,:sweat_smile:,:kissing_closed_eyes:,:speak_no_evil:,:relieved:,:grinning:,:yum:,:laughing:,:ok_hand:,:neutral_face:,:confused:'
			.split(',')
	/* ! MODIFICATION END */

  $.fn.emojiarea = function (options) {
    options = $.extend({}, options)
    return this
			.each(function () {
  var originalInput = $(this)
  var id = getGuid()

  if ('contentEditable' in document.body &&
					options.wysiwyg !== false) {
    new EmojiArea_WYSIWYG(originalInput, id, $.extend({}, options))
  } else {
    new EmojiArea_Plain(originalInput, id, options)
  }

  originalInput.attr(
    {
      'data-emojiable': 'converted',
      'data-id': id,
      'data-type': 'original-input'
    })
})
  }

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  var util = {}

  util.restoreSelection = (function () {
    if (window.getSelection) {
      return function (savedSelection) {
        var sel = window.getSelection()
        sel.removeAllRanges()
        for (var i = 0, len = savedSelection.length; i < len; ++i) {
          sel.addRange(savedSelection[i])
        }
      }
    } else if (document.selection && document.selection.createRange) {
      return function (savedSelection) {
        if (savedSelection) {
          savedSelection.select()
        }
      }
    }
  })()

  util.saveSelection = (function () {
    if (window.getSelection) {
      return function () {
        var sel = window.getSelection(), ranges = []
        if (sel.rangeCount) {
          for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            ranges.push(sel.getRangeAt(i))
          }
        }
        return ranges
      }
    } else if (document.selection && document.selection.createRange) {
      return function () {
        var sel = document.selection
        return (sel.type.toLowerCase() !== 'none') ? sel.createRange()
						: null
      }
    }
  })()

  util.replaceSelection = (function () {
    if (window.getSelection) {
      return function (content) {
        var range, sel = window.getSelection()
        var node = typeof content === 'string' ? document
						.createTextNode(content) : content
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0)
          range.deleteContents()
					// range.insertNode(document.createTextNode(''));
          range.insertNode(node)
          range.setStart(node, 0)

          window.setTimeout(function () {
            range = document.createRange()
            range.setStartAfter(node)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
          }, 0)
        }
      }
    } else if (document.selection && document.selection.createRange) {
      return function (content) {
        var range = document.selection.createRange()
        if (typeof content === 'string') {
          range.text = content
        } else {
          range.pasteHTML(content.outerHTML)
        }
      }
    }
  })()

  util.insertAtCursor = function (text, el) {
    text = ' ' + text
    var val = el.value, endIndex, startIndex, range
    if (typeof el.selectionStart !== 'undefined' &&
				typeof el.selectionEnd !== 'undefined') {
      startIndex = el.selectionStart
      endIndex = el.selectionEnd
      el.value = val.substring(0, startIndex) + text +
					val.substring(el.selectionEnd)
      el.selectionStart = el.selectionEnd = startIndex + text.length
    } else if (typeof document.selection !== 'undefined' &&
				typeof document.selection.createRange !== 'undefined') {
      el.focus()
      range = document.selection.createRange()
      range.text = text
      range.select()
    }
  }

  util.extend = function (a, b) {
    if (typeof a === 'undefined' || !a) {
      a = {}
    }
    if (typeof b === 'object') {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key]
        }
      }
    }
    return a
  }

  util.escapeRegex = function (str) {
    return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
  }

  util.htmlEntities = function (str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
				.replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }

	/*
	 * ! MODIFICATION START This function was added by Igor Zhukov to save
	 * recent used emojis.
	 */
  util.emojiInserted = function (emojiKey, menu) {
    ConfigStorage.get('emojis_recent', function (curEmojis) {
      curEmojis = curEmojis || defaultRecentEmojis || []

      var pos = curEmojis.indexOf(emojiKey)
      if (!pos) {
        return false
      }
      if (pos != -1) {
        curEmojis.splice(pos, 1)
      }
      curEmojis.unshift(emojiKey)
      if (curEmojis.length > 42) {
        curEmojis = curEmojis.slice(42)
      }

      ConfigStorage.set({
        emojis_recent: curEmojis
      })
    })
  }
	/* ! MODIFICATION END */

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  var EmojiArea = function () {
  }

  EmojiArea.prototype.setup = function () {
    var self = this

    this.$editor.on('focus', function () {
      self.hasFocus = true
      const val = self.$textarea[0].value
      self.$editor.lastValue = val
      if (self.$editor.lastValue !== val) { self.options.onChangecontent(val) }
    })
    this.$editor.on('blur', function () {
      self.hasFocus = false
      const val = self.$textarea[0].value

      if (self.$editor.lastValue !== val) { self.options.onChangecontent(val) }
    })

    // Assign a unique instance of an emojiMenu to
    self.emojiMenu = new EmojiMenu(self)

    this.setupButton()
  }

  EmojiArea.prototype.setupButton = function () {
    var self = this
    var $button = $('[data-id=' + this.id + '][data-type=picker]')

    $button.on('click', function (e) {
      self.emojiMenu.show(self)
    })

    this.$button = $button
    this.$dontHideOnClick = 'emoji-picker'
  }

	/*
	 * ! MODIFICATION START This function was modified by Andre Staltz so that
	 * the icon is created from a spritesheet.
	 */
  EmojiArea.createIcon = function (emoji, menu) {
    const sprites = [emoji_spritesheet_0_default.a, emoji_spritesheet_1_default.a, emoji_spritesheet_2_default.a, emoji_spritesheet_3_default.a, emoji_spritesheet_4_default.a]
    var category = emoji[0]
    var row = emoji[1]
    var column = emoji[2]
    var name = emoji[3]
    var iconSize = menu && config.Mobile ? 26 : $.emojiarea.iconSize
    var xoffset = -(iconSize * column)
    var yoffset = -(iconSize * row)
    var scaledWidth = (config.EmojiCategorySpritesheetDimens[category][1] * iconSize)
    var scaledHeight = (config.EmojiCategorySpritesheetDimens[category][0] * iconSize)

    var style = 'display:inline-block;'
    style += 'width:' + iconSize + 'px;'
    style += 'height:' + iconSize + 'px;'

    const smileyCategoryFilename = sprites[category]

    style += `background:url('${smileyCategoryFilename}')
		 ${xoffset}px
		  ${yoffset}px no-repeat;
		   background-size:${scaledWidth}px ${scaledHeight}px;`
    return `<img src="${blank_default.a}" class="img" style="${style}" alt="${util.htmlEntities(name)}">`
  }

  $.emojiarea.createIcon = EmojiArea.createIcon
	/* ! MODIFICATION END */

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	/**
	 * Editor (plain-text)
	 *
	 * @constructor
	 * @param {object}
	 *            $textarea
	 * @param {object}
	 *            options
	 */

  var EmojiArea_Plain = function ($textarea, id, options) {
    this.options = options
    this.$textarea = $textarea
    this.$editor = $textarea
    this.id = id
    this.setup()
  }

  EmojiArea_Plain.prototype.insert = function (emoji) {
    if (!$.emojiarea.icons.hasOwnProperty(emoji)) { return }
    util.insertAtCursor(emoji, this.$textarea[0])
		/*
		 * MODIFICATION: Following line was added by Igor Zhukov, in order to
		 * save recent emojis
		 */
    util.emojiInserted(emoji, this.menu)
    this.$textarea.trigger('change')
  }

  EmojiArea_Plain.prototype.val = function () {
    if (this.$textarea == '\n') { return '' }
    return this.$textarea.val()
  }

  util.extend(EmojiArea_Plain.prototype, EmojiArea.prototype)

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	/**
	 * Editor (rich)
	 *
	 * @constructor
	 * @param {object}
	 *            $textarea
	 * @param {object}
	 *            options
	 */

  var EmojiArea_WYSIWYG = function ($textarea, id, options) {
    var self = this

    this.options = options || {}
    if ($($textarea).attr('data-emoji-input') === 'unicode') { this.options.inputMethod = 'unicode' } else			{ this.options.inputMethod = 'image' }
    this.id = id
    this.$textarea = $textarea
    this.emojiPopup = options.emojiPopup
    this.$editor = $('<div>').addClass('emoji-wysiwyg-editor').addClass($($textarea)[0].className)
    this.$editor.data('self', this)

    this.$editor.lastValue

    if ($textarea.attr('maxlength')) {
      this.$editor.attr('maxlength', $textarea.attr('maxlength'))
    }
    var unicodeToImageText = this.emojiPopup.unicodeToImage($textarea.val())
    this.$editor.html(unicodeToImageText)
    this.$editor.attr({
      'data-id': id,
      'data-type': 'input',
      'placeholder': $textarea.attr('placeholder'),
      'contenteditable': 'true'
    })

		/*
		 * ! MODIFICATION START Following code was modified by Igor Zhukov, in
		 * order to improve rich text paste
		 */
    var changeEvents = 'blur change'
    if (!this.options.norealTime) {
      changeEvents += ' keyup'
    }
    this.$editor.on(changeEvents, function (e) {
      return self.onChange.apply(self, [ e ])
    })
		/* ! MODIFICATION END */

    this.$editor.on('mousedown focus', function () {
      document.execCommand('enableObjectResizing', false, false)
    })
    this.$editor.on('blur', function () {
      document.execCommand('enableObjectResizing', true, true)
    })

    var editorDiv = this.$editor
    this.$editor.on('change keydown keyup resize scroll', function (e) {
      if (MAX_LENGTH_ALLOWED_KEYS.indexOf(e.which) == -1 &&
				!((e.ctrlKey || e.metaKey) && e.which == 65) && // Ctrl + A
				!((e.ctrlKey || e.metaKey) && e.which == 67) && // Ctrl + C
				editorDiv.text().length + editorDiv.find('img').length >= editorDiv.attr('maxlength')) {
        e.preventDefault()
      }
	  self.updateBodyPadding(editorDiv)

	  const val = self.$textarea[0].value
	  if (self.$editor.lastValue !== val)		  { self.options.onChangecontent(val) }
    })

    if (this.options.onPaste) {
      var self = this
      this.$editor.on('paste', function (e) {
        e.preventDefault()

        if ((e.originalEvent || e).clipboardData) {
          var content = (e.originalEvent || e).clipboardData.getData('text/plain')
          var finalText = self.options.onPaste(content)
          document.execCommand('insertText', false, finalText)
        } else if (window.clipboardData) {
          var content = window.clipboardData.getData('Text')
          var finalText = self.options.onPaste(content)
          document.selection.createRange().pasteHTML(finalText)
        }
        editorDiv.scrollTop(editorDiv[0].scrollHeight)
      })
    }

    $textarea.after("<i class='emoji-picker-icon emoji-picker " + this.options.popupButtonClasses + "' data-id='" + id + "' data-type='picker'></i>")

    $textarea.hide().after(this.$editor)
    this.setup()

		/*
		 * MODIFICATION: Following line was modified by Igor Zhukov, in order to
		 * improve emoji insert behaviour
		 */
    $(document.body).on('mousedown', function () {
      if (self.hasFocus) {
        self.selection = util.saveSelection()
      }
    })
  }

  EmojiArea_WYSIWYG.prototype.updateBodyPadding = function (target) {
    var emojiPicker = $('[data-id=' + this.id + '][data-type=picker]')
    if ($(target).hasScrollbar()) {
      if (!(emojiPicker.hasClass('parent-has-scroll'))) { emojiPicker.addClass('parent-has-scroll') }
      if (!($(target).hasClass('parent-has-scroll'))) { $(target).addClass('parent-has-scroll') }
    } else {
      if ((emojiPicker.hasClass('parent-has-scroll'))) { emojiPicker.removeClass('parent-has-scroll') }
      if (($(target).hasClass('parent-has-scroll'))) { $(target).removeClass('parent-has-scroll') }
    }
  }

  EmojiArea_WYSIWYG.prototype.onChange = function (e) {
    this.$textarea.val(this.val()).trigger('change')
  }

  EmojiArea_WYSIWYG.prototype.insert = function (emoji) {
    var content
		/*
		 * MODIFICATION: Following line was modified by Andre Staltz, to use new
		 * implementation of createIcon function.
		 */
    var insertionContent = ''
    if (this.options.inputMethod == 'unicode') {
      insertionContent = this.emojiPopup.colonToUnicode(emoji)
    } else {
      var $img = $(EmojiArea.createIcon($.emojiarea.icons[emoji]))
      if ($img[0].attachEvent) {
        $img[0].attachEvent('onresizestart', function (e) {
          e.returnValue = false
        }, false)
      }
      insertionContent = $img[0]
    }

    this.$editor.trigger('focus')
    if (this.selection) {
      util.restoreSelection(this.selection)
    }
    try {
      util.replaceSelection(insertionContent)
    } catch (e) {
    }

		/*
		 * MODIFICATION: Following line was added by Igor Zhukov, in order to
		 * save recent emojis
		 */
    util.emojiInserted(emoji, this.menu)

    this.onChange()
  }

  EmojiArea_WYSIWYG.prototype.val = function () {
    var lines = []
    var line = []
    var emojiPopup = this.emojiPopup

    var flush = function () {
      lines.push(line.join(''))
      line = []
    }

    var sanitizeNode = function (node) {
      if (node.nodeType === TEXT_NODE) {
        line.push(node.nodeValue)
      } else if (node.nodeType === ELEMENT_NODE) {
        var tagName = node.tagName.toLowerCase()
        var isBlock = TAGS_BLOCK.indexOf(tagName) !== -1

        if (isBlock && line.length) { flush() }

        if (tagName === 'img') {
          var alt = node.getAttribute('alt') || ''
          if (alt) {
            line.push(alt)
          }
          return
        } else if (tagName === 'br') {
          flush()
        }

        var children = node.childNodes
        for (var i = 0; i < children.length; i++) {
					 sanitizeNode(children[i])
        }

        if (isBlock && line.length) { flush() }
      }
    }

    var children = this.$editor[0].childNodes
    for (var i = 0; i < children.length; i++) {
      sanitizeNode(children[i])
    }

    if (line.length) { flush() }

    var returnValue = lines.join('\n')
    return emojiPopup.colonToUnicode(returnValue)
  }

  util.extend(EmojiArea_WYSIWYG.prototype, EmojiArea.prototype)

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  jquery_default.a.fn.hasScrollbar = function () {
    var scrollHeight = this.get(0).scrollHeight

    // safari's scrollHeight includes padding
    // if ($.browser.safari)
//      scrollHeight -= parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));
    if (this.outerHeight() < scrollHeight) { return true } else { return false }
  }

	/**
	 * Emoji Dropdown Menu
	 *
	 * @constructor
	 * @param {object}
	 *            emojiarea
	 */
  var EmojiMenu = function (emojiarea) {
    var self = this
    self.id = emojiarea.id
    var $body = $(document.body)
    var $window = $(window)

    this.visible = false
    this.emojiarea = emojiarea
    EmojiMenu.menuZIndex = 5000
    this.$menu = $('<div>')
    this.$menu.addClass('emoji-menu')
    this.$menu.attr('data-id', self.id)
    this.$menu.attr('data-type', 'menu')
    this.$menu.hide()

		/*
		 * ! MODIFICATION START Following code was modified by Igor Zhukov, in
		 * order to add scrollbars and tail to EmojiMenu Also modified by Andre
		 * Staltz, to include tabs for categories, on the menu header.
		 */
    this.$itemsTailWrap = $('<div class="emoji-items-wrap1"></div>')
				.appendTo(this.$menu)
    this.$categoryTabs = $(
				'<table class="emoji-menu-tabs"><tr>' +
						'<td><a class="emoji-menu-tab icon-recent" ></a></td>' +
						'<td><a class="emoji-menu-tab icon-smile" ></a></td>' +
						'<td><a class="emoji-menu-tab icon-flower"></a></td>' +
						'<td><a class="emoji-menu-tab icon-bell"></a></td>' +
						'<td><a class="emoji-menu-tab icon-car"></a></td>' +
						'<td><a class="emoji-menu-tab icon-grid"></a></td>' +
						'</tr></table>').appendTo(this.$itemsTailWrap)
    this.$itemsWrap = $(
				'<div class="emoji-items-wrap nano mobile_scrollable_wrap"></div>')
				.appendTo(this.$itemsTailWrap)
    this.$items = $('<div class="emoji-items nano-content">').appendTo(
				this.$itemsWrap)
		/* ! MODIFICATION END */

    $body.append(this.$menu)

		/*
		 * ! MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
		 * to add scrollbars to EmojiMenu
		 */

		  if (!config.Mobile) {
		  this.$itemsWrap.nanoScroller({preventPageScrolling: true,
    tabIndex:
		  -1})
  }

		// this.$itemsWrap.nanoScroller({preventPageScrolling: true, tabIndex:* -1});

    $body.on('keydown', function (e) {
      if (e.keyCode === KEY_ESC || e.keyCode === KEY_TAB) {
        self.hide()
      }
    })

		/*
		 * ! MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
		 * to hide menu on message submit with keyboard
		 */
    $body.on('message_send', function (e) {
      self.hide()
    })

    $body.on('mouseup', function (e) {
			/*
			 * ! MODIFICATION START Following code was added by Igor Zhukov, in
			 * order to prevent close on click on EmojiMenu scrollbar
			 */
      e = e.originalEvent || e
      var target = e.originalTarget || e.target || window

      if ($(target).hasClass(self.emojiarea.$dontHideOnClick)) {
        return
      }

      while (target && target != window) {
        target = target.parentNode
        if (target == self.$menu[0] || self.emojiarea &&
						target == self.emojiarea.$button[0]) {
          return
        }
      }
			/* ! MODIFICATION END */
      self.hide()
    })

    $window.on('resize', function () {
      if (self.visible) { self.reposition() }
    })

    this.$menu.on('mouseup', 'a', function (e) {
      e.stopPropagation()
      return false
    })

    this.$menu.on('click', 'a', function (e) {
      self.emojiarea.updateBodyPadding(self.emojiarea.$editor)
			/*
			 * ! MODIFICATION START Following code was modified by Andre Staltz,
			 * to capture clicks on category tabs and change the category
			 * selection.
			 */
      if ($(this).hasClass('emoji-menu-tab')) {
        if (self.getTabIndex(this) !== self.currentCategory) {
          self.selectCategory(self.getTabIndex(this))
        }
        return false
      }
			/* ! MODIFICATION END */
      var emoji = $('.label', $(this)).text()
      window.setTimeout(function () {
        self.onItemSelected(emoji)
				/*
				 * ! MODIFICATION START Following code was modified by Igor
				 * Zhukov, in order to close only on ctrl-, alt- emoji select
				 */
        if (e.ctrlKey || e.metaKey) {
          self.hide()
        }
				/* ! MODIFICATION END */
      }, 0)
      e.stopPropagation()
      return false
    })

		/*
		 * MODIFICATION: Following line was modified by Andre Staltz, in order
		 * to select a default category.
		 */
    this.selectCategory(0)
  }

	/*
	 * ! MODIFICATION START Following code was added by Andre Staltz, to
	 * implement category selection.
	 */
  EmojiMenu.prototype.getTabIndex = function (tab) {
    return this.$categoryTabs.find('.emoji-menu-tab').index(tab)
  }

  EmojiMenu.prototype.selectCategory = function (category) {
    var self = this
    this.$categoryTabs.find('.emoji-menu-tab').each(function (index) {
      if (index === category) {
        this.className += '-selected'
      } else {
        this.className = this.className.replace('-selected', '')
      }
    })
    this.currentCategory = category
    this.load(category)

		 if (!config.Mobile) {
   this.$itemsWrap.nanoScroller({ scroll: 'top'
		 })
 }
  }
	/* ! MODIFICATION END */

  EmojiMenu.prototype.onItemSelected = function (emoji) {
    if (this.emojiarea.$editor.text().length + this.emojiarea.$editor.find('img').length >= this.emojiarea.$editor.attr('maxlength')) {
      return
    }
    this.emojiarea.insert(emoji)
  }

	/*
	 * MODIFICATION: The following function argument was modified by Andre
	 * Staltz, in order to load only icons from a category. Also function was
	 * modified by Igor Zhukov in order to display recent emojis from
	 * localStorage
	 */
  EmojiMenu.prototype.load = function (category) {
    var html = []
    var options = $.emojiarea.icons
    var path = $.emojiarea.assetsPath
    var self = this
    if (path.length && path.charAt(path.length - 1) !== '/') {
      path += '/'
    }

		/*
		 * ! MODIFICATION: Following function was added by Igor Zhukov, in order
		 * to add scrollbars to EmojiMenu
		 */
    var updateItems = function () {
      self.$items.html(html.join(''))

			  if (!config.Mobile) {
    setTimeout(function () {
			  self.$itemsWrap.nanoScroller()
    }, 100)
  }
    }

    if (category > 0) {
      for (var key in options) {
				/*
				 * MODIFICATION: The following 2 lines were modified by Andre
				 * Staltz, in order to load only icons from the specified
				 * category.
				 */
        if (options.hasOwnProperty(key) &&
						options[key][0] === (category - 1)) {
          html.push('<a href="javascript:void(0)" title="' +
							util.htmlEntities(key) + '">' +
							EmojiArea.createIcon(options[key], true) +
							'<span class="label">' + util.htmlEntities(key) +
							'</span></a>')
        }
      }
      updateItems()
    } else {
      ConfigStorage.get('emojis_recent', function (curEmojis) {
        curEmojis = curEmojis || defaultRecentEmojis || []
        var key, i
        for (i = 0; i < curEmojis.length; i++) {
          key = curEmojis[i]
          if (options[key]) {
            html.push('<a href="javascript:void(0)" title="' +
								util.htmlEntities(key) + '">' +
								EmojiArea.createIcon(options[key], true) +
								'<span class="label">' +
								util.htmlEntities(key) + '</span></a>')
          }
        }
        updateItems()
      })
    }0
  }

  EmojiMenu.prototype.reposition = function () {
    if (!this.tether) {
      this.tether = new tether_default.a({
        element: '[data-id="' + this.id + '"][data-type="menu"]',
        target: '[data-id="' + this.id + '"][data-type="picker"]',
        attachment: 'left center',
        targetAttachment: 'bottom left',
        offset: '0 12px',
        constraints: [
          {
            to: 'html',
            pin: true
          }
        ]
      })
    }
  }

  EmojiMenu.prototype.hide = function (callback) {
    this.visible = false
    this.$menu.hide('fast')
  }

  EmojiMenu.prototype.show = function (emojiarea) {
    /*
     * MODIFICATION: Following line was modified by Igor Zhukov, in order to
     * improve EmojiMenu behaviour
     */
    if (this.visible) { return this.hide() }
    this.reposition()
    $(this.$menu).css('z-index', ++EmojiMenu.menuZIndex)
    this.$menu.show('fast')
    /*
     * MODIFICATION: Following 3 lines were added by Igor Zhukov, in order
     * to update EmojiMenu contents
     */
    if (!this.currentCategory) {
      this.load(0)
    }
    this.visible = true
  }
}

// CONCATENATED MODULE: ./node_modules/emoji-vue/src/lib/js/emoji-picker.js



const emoji_picker_$ = jquery_default.a

emojiareaPlugin(jquery_default.a, window, document)
class emoji_picker_EmojiPicker {
  constructor (options) {
    var ref, ref1
    if (options == null) {
      options = {}
    }
    emoji_picker_$.emojiarea.iconSize = (ref = options.iconSize) != null ? ref : 25
    emoji_picker_$.emojiarea.assetsPath = (ref1 = options.assetsPath) != null ? ref1 : ''
    this.generateEmojiIconSets(options)
    if (!options.emojiable_selector) {
      options.emojiable_selector = '[data-emojiable=true]'
    }
    this.options = options
  }
  clear () {
    console.log('clear')  
    debugger
  }
  discover () {
    var isiOS
    isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    if (isiOS) {
      return
    }
    return emoji_picker_$(this.options.emojiable_selector).emojiarea(emoji_picker_$.extend({
      emojiPopup: this,
      norealTime: true
    }, this.options))
  };

  generateEmojiIconSets (options) {
    var column, dataItem, i, icons, j, name, reverseIcons, row, totalColumns
    icons = {}
    reverseIcons = {}
    i = void 0
    j = void 0
    name = void 0
    dataItem = void 0
    row = void 0
    column = void 0
    totalColumns = void 0
    j = 0
    while (j < config.EmojiCategories.length) {
      totalColumns = config.EmojiCategorySpritesheetDimens[j][1]
      i = 0
      while (i < config.EmojiCategories[j].length) {
        dataItem = config.Emoji[config.EmojiCategories[j][i]]
        name = dataItem[1][0]
        row = Math.floor(i / totalColumns)
        column = i % totalColumns
        icons[':' + name + ':'] = [j, row, column, ':' + name + ':']
        reverseIcons[name] = dataItem[0]
        i++
      }
      j++
    }
    emoji_picker_$.emojiarea.icons = icons
    emoji_picker_$.emojiarea.reverseIcons = reverseIcons
    return emoji_picker_$.emojiarea.reverseIcons
  }

  colonToUnicode (input) {
    if (!input) {
      return ''
    }
    if (!config.rx_colons) {
      config.init_unified()
    }
    return input.replace(config.rx_colons, function (m) {
      var val
      val = config.mapcolon[m]
      if (val) {
        return val
      } else {
        return ''
      }
    })
  }

  unicodeToImage (input) {
    if (!input) {
      return ''
    }
    if (!config.rx_codes) {
      config.init_unified()
    }
    return input.replace(config.rx_codes, function (m) {
      var $img, val
      val = config.reversemap[m]
      if (val) {
        val = ':' + val + ':'
        $img = emoji_picker_$.emojiarea.createIcon(emoji_picker_$.emojiarea.icons[val])
        return $img
      } else {
        return ''
      }
    })
  }

  colonToImage (input) {
    if (!input) {
      return ''
    }
    if (!config.rx_colons) {
      config.init_unified()
    }
    return input.replace(config.rx_colons, function (m) {
      var $img
      if (m) {
        $img = emoji_picker_$.emojiarea.createIcon(emoji_picker_$.emojiarea.icons[m])
        return $img
      } else {
        return ''
      }
    })
  }
  }

// # sourceMappingURL=emoji-picker.js.map

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/IconsetSmiles.png
var IconsetSmiles = __webpack_require__("nTHN");
var IconsetSmiles_default = /*#__PURE__*/__webpack_require__.n(IconsetSmiles);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/IconsetSmiles_1x.png
var IconsetSmiles_1x = __webpack_require__("ezRD");
var IconsetSmiles_1x_default = /*#__PURE__*/__webpack_require__.n(IconsetSmiles_1x);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/IconsetW.png
var IconsetW = __webpack_require__("9Z4A");
var IconsetW_default = /*#__PURE__*/__webpack_require__.n(IconsetW);

// EXTERNAL MODULE: ./node_modules/emoji-vue/src/lib/img/IconsetW_1x.png
var IconsetW_1x = __webpack_require__("iHZe");
var IconsetW_1x_default = /*#__PURE__*/__webpack_require__.n(IconsetW_1x);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/emoji-vue/src/VueEmoji.vue
//
//
//
//
//
//
//
//















/* harmony default export */ var VueEmoji = ({
  name: 'VueEmoji',
  data: function data() {
    return {
      id: getGuid()
    };
  },

  props: {
    width: {
      type: String,
      default: '500'
    },
    height: {
      type: String,
      default: '30'
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: function value(newVal) {
      var _this = this;

      vue_esm["default"].nextTick(function () {
        _this.$el.querySelector('.emoji-wysiwyg-editor').innerHTML = newVal;
      });
    }
  },
  methods: {
    clear: function clear() {
      this.$el.querySelector('.emoji-wysiwyg-editor').innerHTML = '';
    },
    initEmojiPlugin: function initEmojiPlugin() {
      var _this2 = this;

      window.emojiPicker = new emoji_picker_EmojiPicker({
        emojiable_selector: '#' + this.id + ' [data-vue-emojiable=true]',
        assetsPath: '',
        popupButtonClasses: 'smile-icon',
        onChangecontent: function onChangecontent(textAreaValue) {
          _this2.$emit('input', { data: textAreaValue });
        }
      });
      window.emojiPicker.discover();
      vue_esm["default"].nextTick(function () {
        var editor = _this2.$el.querySelector('.emoji-wysiwyg-editor');
        editor.style.width = _this2.width + 'px';
        editor.style.height = _this2.height + 'px';
        _this2.$el.querySelector('.emoji-picker-container').style.width = Number(_this2.width) + 50 + 'px';
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    vue_esm["default"].nextTick(function () {
      js_util();
      _this3.initEmojiPlugin();
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-313273e6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/emoji-vue/src/VueEmoji.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emoji-vue-wraper",attrs:{"id":_vm.id}},[_c('div',{staticClass:"emoji-picker-container"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.value),expression:"value"}],staticClass:"emoji-vue-textarea",attrs:{"type":"text","data-vue-emojiable":"true","placeholder":"请输入..."},domProps:{"value":(_vm.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.value=$event.target.value}}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_VueEmoji = (esExports);
// CONCATENATED MODULE: ./node_modules/emoji-vue/src/VueEmoji.vue
function injectStyle (ssrContext) {
  __webpack_require__("UHME")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  VueEmoji,
  src_VueEmoji,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var emoji_vue_src_VueEmoji = (Component.exports);

// CONCATENATED MODULE: ./node_modules/emoji-vue/index.js
/* unused concated harmony import VueEmoji */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return emoji_vue_src_VueEmoji; });


/* harmony default export */ var emoji_vue = __webpack_exports__["a"] = (emoji_vue_src_VueEmoji);


/***/ })

});
//# sourceMappingURL=2.4f3f6d820c0a8870eb11.js.map