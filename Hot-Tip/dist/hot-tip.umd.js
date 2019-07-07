(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = global || self, factory(global.HotTip = {}, global.React, global.PropTypes));
}(this, function (exports, React, PropTypes) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

  var HotTipContext = React.createContext({});
  var HotTipConsumer = HotTipContext.Consumer;

  var UPDATE_TOOLTIP = 'HOT_TIP::UPDATE_TOOLTIP';

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

  var getBottom = function (bounds, force) {
    var left = bounds.left,
        top = bounds.top,
        width = bounds.width,
        height = bounds.height,
        clientWidth = bounds.clientWidth,
        clientHeight = bounds.clientHeight;

    if (!force && top + height + 40 >= clientHeight) {
      return getTop(bounds, true); // eslint-disable-line
    }

    var x = left + width / 2;
    var leftOffset = x < 100;
    var layoutClass = leftOffset ? 'left-offset' : !leftOffset && x + 100 > clientWidth ? 'right-offset' : 'centred'; // eslint-disable-line

    return {
      x: x,
      y: top + height,
      positionClass: 'bottom',
      layoutClass: layoutClass
    };
  };
  var getTop = function (bounds, force) {
    var top = bounds.top;
    var bottom = getBottom(bounds, true);

    if (!force && top - 40 <= 0) {
      return bottom;
    }

    return _extends({}, bottom, {
      y: top,
      positionClass: 'top'
    });
  };
  var getRight = function (bounds, force) {
    var left = bounds.left,
        top = bounds.top,
        width = bounds.width,
        height = bounds.height,
        clientWidth = bounds.clientWidth,
        clientHeight = bounds.clientHeight;

    if (!force && left + width + 200 >= clientWidth) {
      return getLeft(bounds, true); // eslint-disable-line
    }

    var y = top + height / 2;
    var topOffset = y < 50;
    var layoutClass = topOffset ? 'top-offset' : !topOffset && y + 50 > clientHeight ? 'bottom-offset' : 'mid'; // eslint-disable-line

    return {
      x: left + width,
      y: y,
      positionClass: 'right',
      layoutClass: layoutClass
    };
  };
  var getLeft = function (bounds, force) {
    var left = bounds.left;
    var right = getRight(bounds, force);

    if (!force && left - 200 <= 0) {
      return right;
    }

    return _extends({}, right, {
      x: left,
      positionClass: 'left'
    });
  };
  var getPosition = function (position) {
    switch (position) {
      case 'top':
        return getTop;

      case 'right':
        return getRight;

      case 'left':
        return getLeft;

      case 'bottom':
      default:
        return getBottom;
    }
  };
  var getBounds = function (e) {
    var _e$currentTarget$getB = e.currentTarget.getBoundingClientRect(),
        top = _e$currentTarget$getB.top,
        left = _e$currentTarget$getB.left,
        width = _e$currentTarget$getB.width,
        height = _e$currentTarget$getB.height;

    var _window = window,
        pageXOffset = _window.pageXOffset,
        pageYOffset = _window.pageYOffset;
    var _document$body = document.body,
        scrollTop = _document$body.scrollTop,
        clientTop = _document$body.clientTop,
        scrollLeft = _document$body.scrollLeft,
        clientLeft = _document$body.clientLeft,
        clientWidth = _document$body.clientWidth,
        clientHeight = _document$body.clientHeight;
    var absTop = top + Math.max(pageYOffset, scrollTop) - clientTop;
    var absLeft = left + Math.max(pageXOffset, scrollLeft) - clientLeft;
    return {
      top: absTop,
      left: absLeft,
      width: width,
      height: height,
      clientWidth: clientWidth,
      clientHeight: clientHeight
    };
  };
  var utils = {
    getBounds: getBounds,
    getPosition: getPosition
  };

  function HotTip(_ref) {
    var _ref$position = _ref.position,
        position = _ref$position === void 0 ? "bottom" : _ref$position,
        tip = _ref.tip,
        children = _ref.children;
    var dispatch = React.useContext(HotTipContext)[1];
    React.useEffect(function () {
      return function () {
        dispatch(clearTooltip());
      };
    }, []);

    function handleMouseEnter(e) {
      var bounds = getBounds(e);
      var actualPosition = getPosition(position)(bounds);
      dispatch(addTooltip(tip, actualPosition));
    }

    var handleMouseOut = function () {
      return dispatch(clearTooltip());
    };

    if (tip) {
      if (typeof children === "string") {
        return React.createElement("span", {
          onMouseOver: handleMouseEnter,
          onMouseOut: handleMouseOut
        }, children);
      }

      return React.cloneElement(children, {
        onMouseOver: handleMouseEnter,
        onMouseOut: handleMouseOut
      });
    }

    return children;
  }
  HotTip.defaultProps = {
    position: "bottom",
    tip: ""
  };
  HotTip.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
    tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
  };
  function addTooltip(tip, position) {
    return {
      type: UPDATE_TOOLTIP,
      payload: {
        tip: tip,
        visible: true,
        position: position
      }
    };
  }
  function clearTooltip() {
    return {
      type: UPDATE_TOOLTIP,
      payload: {
        visible: false
      }
    };
  }

  function HotTipAnchor() {
    var _useContext = React.useContext(HotTipContext),
        state = _useContext[0];

    var tip = state.tip,
        positionClass = state.positionClass,
        layoutClass = state.layoutClass,
        visible = state.visible,
        x = state.x,
        y = state.y;
    var className = ["hot-tip", positionClass, layoutClass].join(" ");
    return Boolean(visible) && React__default.createElement("div", {
      className: className,
      style: {
        top: y,
        left: x
      }
    }, React__default.createElement("div", {
      className: "ht-point"
    }), React__default.createElement("div", {
      className: "ht-body"
    }, typeof tip !== "function" ? tip : tip()));
  }
  HotTipAnchor.displayName = "HotTipAnchor";

  function hotTipReducer(state, _ref) {
    if (state === void 0) {
      state = {};
    }

    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case UPDATE_TOOLTIP:
        return _extends({}, state, {
          tip: payload.tip,
          visible: payload.visible
        }, payload.position);

      default:
        return state;
    }
  }

  function HotTipProvider(_ref) {
    var children = _ref.children;
    var context = React.useReducer(hotTipReducer, {});
    return React__default.createElement(HotTipContext.Provider, {
      value: context
    }, React__default.createElement(React__default.Fragment, null, React__default.createElement(HotTipAnchor, null), children));
  }
  HotTipProvider.propTypes = {
    children: PropTypes.node
  };

  exports.HotTip = HotTip;
  exports.HotTipProvider = HotTipProvider;
  exports.default = HotTip;
  exports.positionUtils = utils;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=hot-tip.umd.js.map
