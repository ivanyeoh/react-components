"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MenuIcon = _interopRequireDefault(require("./icons/MenuIcon"));

var _CloseIcon = _interopRequireDefault(require("./icons/CloseIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const scrollOver = (y, callback) => {
  return a => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > y) {
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
  const [expanded, setExpanded] = (0, _react.useState)(false);
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
    className: `nav${over ? ' over' : ''}${expanded ? ' expanded' : ''}`
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
  }, item.label)))), _react.default.createElement("a", {
    className: "menu-toggle",
    role: "button",
    onClick: () => {
      setExpanded(!expanded);
    }
  }, _react.default.createElement(_MenuIcon.default, null)), _react.default.createElement("a", {
    className: "menu-close",
    role: "button",
    onClick: () => {
      setExpanded(false);
    }
  }, _react.default.createElement(_CloseIcon.default, null)));
};

exports.default = _default;