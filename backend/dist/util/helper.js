"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = exports.cloneDeep = exports.OK = void 0;
var throwError = exports.throwError = function throwError(res, e) {
  console.error("Error()- ".concat(e.message || e));
  res.status(500).json({
    error: e,
    message: e === null || e === void 0 ? void 0 : e.message
  });
};
var OK = exports.OK = function OK(errorCode, res, jsonValue) {
  res.status(errorCode).json(Object.assign({
    success: true
  }, jsonValue));
};
var cloneDeep = exports.cloneDeep = function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
};