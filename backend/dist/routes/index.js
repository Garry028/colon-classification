"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classification = _interopRequireDefault(require("./classification"));
var _subjects = _interopRequireDefault(require("./subjects"));
var _titles = _interopRequireDefault(require("./titles"));
var _titles_to_main_class_mapper = _interopRequireDefault(require("./titles_to_main_class_mapper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var routes = function routes(app) {
  // app.use("/", (req, res) => {
  //     res.status(200).send({ message: "Welcome to the API" });
  // });
  app.use("/subjects", _subjects["default"]);
  app.use("/titles_to_main_class_mapper", _titles_to_main_class_mapper["default"]);
  app.use("/titles", _titles["default"]);
  app.use("/classification", _classification["default"]);
};
var _default = exports["default"] = routes;