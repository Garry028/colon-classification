"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../../controller/subject/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Subject = _express["default"].Router();
Subject.get("/", _index["default"].getAllSubjects);
var _default = exports["default"] = Subject;