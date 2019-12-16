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
  return a => {
    if (document.documentElement.scrollTop > y) {
      callback(true);
    } else {
      callback(false);
    }
  };
};

var _default = ({
  logo,
  items = []
}) => {
  const [over, setOver] = (0, _react.useState)(false);
  const [pathname, setPathname] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    setPathname(window.location.pathname);
    window.addEventListener('scroll', scrollOver(112, setOver));
    return () => {
      window.removeEventListener('scroll', scrollOver(112, setOver));
    };
  });
  let matchedItem = items.find(item => item.url === pathname);
  if (!matchedItem) matchedItem = items.find(item => pathname && pathname.match(new RegExp(`^${item.url}`)));
  const navItems = items.map((item, index) => {
    return {
      index,
      ...item,
      className: matchedItem === item ? 'active' : null
    };
  });
  return _react.default.createElement("nav", {
    className: `nav${over ? ' over' : ''}`
  }, _react.default.createElement("a", {
    href: "/",
    className: "logo"
  }, logo), _react.default.createElement("ul", {
    className: "menu"
  }, navItems.map(item => _react.default.createElement("li", {
    key: `nav-item-${item.index}`,
    className: item.className
  }, _react.default.createElement("a", {
    href: item.url
  }, item.label)))));
};

exports.default = _default;