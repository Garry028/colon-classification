"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../../controller/titles/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Titles = _express["default"].Router();
Titles.get("/:id", _index["default"].getTitlesBySubject);
var _default = exports["default"] = Titles;