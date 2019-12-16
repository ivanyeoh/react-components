"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  items
}) => React.createElement("ul", {
  className: "icon-grid"
}, items.map((item, i) => React.createElement("li", {
  key: i
}, React.createElement("figure", null, React.createElement("img", {
  src: item.src
}), React.createElement("figcaption", null, "item.caption")))));

exports.default = _default;