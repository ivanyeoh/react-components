"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ImageGallery = exports.Image = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Image = ({
  title,
  description,
  imageUrl,
  link
}) => {
  return _react.default.createElement("a", {
    href: link
  }, _react.default.createElement("figure", null, _react.default.createElement("div", {
    className: "image"
  }, _react.default.createElement("img", {
    src: imageUrl,
    loading: "lazy"
  })), _react.default.createElement("figcaption", null, _react.default.createElement("strong", null, title), description)));
};

exports.Image = Image;

const ImageGallery = ({
  title,
  children,
  className = ''
}) => {
  return _react.default.createElement("section", {
    className: `image-gallery ${className}`
  }, title ? title : null, _react.default.createElement("ul", null, _react.Children.map(children, (child, index) => _react.default.createElement("li", {
    className: "image-gallery-item",
    key: index
  }, (0, _react.cloneElement)(child, {})))));
};

exports.ImageGallery = ImageGallery;
ImageGallery.Image = Image;
var _default = ImageGallery;
exports.default = _default;