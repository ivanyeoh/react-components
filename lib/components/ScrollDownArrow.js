"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const scrollOver = (y, callback) => {
  return () => {
    if (document.documentElement.scrollTop > y) {
      callback(true);
    } else {
      callback(false);
    }
  };
};

var _default = () => {
  const [scrolled, setScrolled] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    window.addEventListener('scroll', scrollOver(10, setScrolled));
    return () => {
      window.removeEventListener('scroll', scrollOver(10, setScrolled));
    };
  });
  return _react.default.createElement("div", {
    className: `scroll-down-arrow${scrolled ? ' scrolled' : ''}`,
    title: "scroll down"
  }, _react.default.createElement("span", null), _react.default.createElement("span", null), _react.default.createElement("span", null));
};

exports.default = _default;