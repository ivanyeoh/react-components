"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  content
}) => {
  return _react.default.createElement("div", {
    className: "hero"
  }, _react.default.createElement("div", {
    className: "content"
  }, content), _react.default.createElement("div", {
    className: "mask"
  }));
};

exports.default = _default;