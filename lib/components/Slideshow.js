"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slideshow = exports.Slide = void 0;

var _react = _interopRequireDefault(require("react"));

var _url = require("../utils/url.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  useState,
  cloneElement,
  Children,
  memo
} = _react.default;

const generateChildrenIds = (id, children) => {
  const childrenIds = [];
  const total = Children.count(children);

  for (let i = 1; i <= total; i++) childrenIds.push(`${id}-slide-${i}`);

  return childrenIds;
};

const Slide = ({
  id,
  title,
  description,
  cssBackgroundImage,
  activated
}) => {
  return _react.default.createElement("article", {
    className: `slide${activated ? ' active' : ''}`,
    id: id
  }, _react.default.createElement("div", {
    className: "content"
  }, _react.default.createElement("h1", null, title), _react.default.createElement("p", null, description)), _react.default.createElement("div", {
    className: "background",
    style: {
      backgroundImage: cssBackgroundImage
    }
  }), _react.default.createElement("div", {
    className: "mask"
  }));
};

exports.Slide = Slide;
const Slideshow = memo(({
  id = 'main',
  children
}) => {
  const childrenIds = generateChildrenIds(id, children);
  const [activeSlideId, setActiveSlide] = useState((0, _url.getUrlHash)() || childrenIds[0]);

  const activateSlide = id => () => {
    setActiveSlide(id);
  };

  return _react.default.createElement("section", {
    className: "slides"
  }, Children.map(children, (child, index) => cloneElement(child, {
    id: childrenIds[index],
    key: childrenIds[index],
    activated: activeSlideId === childrenIds[index]
  })), _react.default.createElement("nav", {
    className: "pagination"
  }, childrenIds.map((id, index) => _react.default.createElement("a", {
    href: `#${id}`,
    key: id,
    onClick: activateSlide(id),
    className: activeSlideId === id ? 'active' : null
  }, index + 1))));
});
exports.Slideshow = Slideshow;
Slideshow.Slide = Slide;
var _default = Slideshow;
exports.default = _default;