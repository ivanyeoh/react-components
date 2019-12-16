"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlHash = void 0;

const getUrlHash = () => {
  return location.hash.substr(1);
};

exports.getUrlHash = getUrlHash;