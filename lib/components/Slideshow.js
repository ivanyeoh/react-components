"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slideshow = exports.Slide = void 0;

var _react = _interopRequireWildcard(require("react"));

var _url = require("../utils/url.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const generateChildrenIds = (id, children) => {
  const childrenIds = [];

  const total = _react.Children.count(children);

  for (let i = 1; i <= total; i++) childrenIds.push(`${id}-slide-${i}`);

  return childrenIds;
};

const Slide = ({
  id,
  title,
  description,
  bottomContent,
  cssBackgroundImage,
  activated
}) => {
  return _react.default.createElement("article", {
    className: `slide${activated ? ' active' : ''}`,
    id: id
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("h1", null, title), description ? _react.default.createElement("p", null, description) : null, bottomContent ? bottomContent : null), _react.default.createElement("div", {
    className: "background",
    style: {
      backgroundImage: cssBackgroundImage
    }
  }), _react.default.createElement("div", {
    className: "mask"
  }));
};

exports.Slide = Slide;

const Pagination = ({
  childrenIds,
  activeSlideId,
  activateSlide
}) => _react.default.createElement("nav", {
  className: "pagination"
}, childrenIds.map((id, index) => _react.default.createElement("a", {
  href: `#${id}`,
  key: id,
  onClick: activateSlide(id),
  className: activeSlideId === id ? 'active' : null
}, index + 1)));

const Slideshow = (0, _react.memo)(({
  id = 'main',
  children
}) => {
  const childrenIds = generateChildrenIds(id, children);
  const [activeSlideId, setActiveSlide] = (0, _react.useState)(childrenIds[0]);

  const activateSlide = id => () => {
    setActiveSlide(id);
  };

  (0, _react.useEffect)(() => {
    setActiveSlide((0, _url.getUrlHash)() || childrenIds[0]);
  });
  return _react.default.createElement("section", {
    className: "slides"
  }, _react.Children.map(children, (child, index) => (0, _react.cloneElement)(child, {
    id: childrenIds[index],
    key: childrenIds[index],
    activated: activeSlideId === childrenIds[index]
  })), childrenIds.length > 1 ? _react.default.createElement(Pagination, {
    childrenIds: childrenIds,
    activeSlideId: activeSlideId,
    activateSlide: activateSlide
  }) : null);
});
exports.Slideshow = Slideshow;
Slideshow.Slide = Slide;
var _default = Slideshow;
exports.default = _default;