"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = void 0;

const uniqueId = prefix => {
  return `${prefix}-` + Math.random().toString(36).substr(2, 3);
};

exports.uniqueId = uniqueId;