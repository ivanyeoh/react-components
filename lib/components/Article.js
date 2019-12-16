"use strict";

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RightFigureArticle = ({
  title,
  children,
  figure,
  figcaption
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, title), _react.default.createElement("figure", null, figure, _react.default.createElement("figcaption", null, figcaption)), children);

const SplitArticle = ({
  title,
  left,
  right
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
  className: "left"
}, _react.default.createElement("h2", null, title), left), _react.default.createElement("div", {
  className: "right"
}, right));

const PlainArticle = ({
  title,
  children
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, title), _react.default.createElement("div", {
  className: "content"
}, children), _react.default.createElement("div", {
  className: "mask"
}));

const renderArticle = (type, props) => {
  switch (type) {
    case 'right-figure':
      return _react.default.createElement(RightFigureArticle, props);

    case 'split':
      return _react.default.createElement(SplitArticle, props);

    default:
      return _react.default.createElement(PlainArticle, props);
  }
};

var _default = props => {
  const {
    theme = 'dark',
    type
  } = props;
  return _react.default.createElement("article", {
    className: `${theme} ${type}`
  }, renderArticle(type, props));
};

exports.default = _default;