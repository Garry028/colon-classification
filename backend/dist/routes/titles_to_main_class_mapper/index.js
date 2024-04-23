"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../../controller/titles_to_main_class_mapper/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TitlesToMainClassMapper = _express["default"].Router();
TitlesToMainClassMapper.get("/:id", _index["default"].getTitlesToMainClassMapper);
var _default = exports["default"] = TitlesToMainClassMapper;