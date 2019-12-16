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
  content,
  figure,
  figcaption
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, title), _react.default.createElement("figure", null, figure, _react.default.createElement("figcaption", null, figcaption)), content);

const SplitArticle = ({
  title,
  content,
  figure
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
  className: "left"
}, _react.default.createElement("h2", null, title), content), _react.default.createElement("div", {
  className: "right"
}, figure));

const PlainArticle = ({
  title,
  content
}) => _react.default.createElement(_react.Fragment, null, _react.default.createElement("h2", null, title), _react.default.createElement("div", {
  className: "content"
}, content), _react.default.createElement("div", {
  className: "mask"
}));

const renderArticle = (type, props) => {
  switch (type) {
    case 'right-figure':
      _react.default.createElement(RightFigureArticle, props);

      break;

    case 'split':
      _react.default.createElement(SplitArticle, props);

      break;

    default:
      _react.default.createElement(PlainArticle, props);

      break;
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