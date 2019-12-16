"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  items
}) => _react.default.createElement("ul", {
  className: "tags"
}, items.map((item, i) => _react.default.createElement("li", {
  key: i
}, item)));

exports.default = _default;