"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var sequelize = new _sequelize["default"](_config["default"].db.database, _config["default"].db.username, _config["default"].db.password, {
  dialect: _config["default"].db.dialect,
  host: _config["default"].db.host,
  logging: false
});
global.Sequelize = _sequelize["default"];
var _default = exports["default"] = sequelize;