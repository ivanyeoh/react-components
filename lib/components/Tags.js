"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  items
}) => React.createElement("ul", {
  className: "tags"
}, items.map((item, i) => React.createElement("li", {
  key: i
}, item)));

exports.default = _default;