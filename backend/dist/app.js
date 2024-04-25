"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _https = _interopRequireDefault(require("https"));
var _config = _interopRequireDefault(require("./config"));
var _models = _interopRequireDefault(require("./models"));
var _index = _interopRequireDefault(require("./routes/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var PORT = process.env.PORT || _config["default"].server.port;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"]["static"]("public"));
(0, _index["default"])(app);
var pingInterval = 864000;
function sendPingRequest(url) {
  _https["default"].get(url, function (res) {
    console.log("Ping sent to ".concat(url, ". Status: ").concat(res.statusCode === 200 ? "Server is alive" : "Error"));
  }).on("error", function (err) {
    console.error("Ping error for ".concat(url, ": ").concat(err.message));
  });
}
setInterval(function () {
  sendPingRequest("https://colon-classification.onrender.com/");
}, pingInterval);
process.on("unhandledRejection", function (reason, p) {
  console.error(reason, "Unhandled Rejection at Promise", p);
}).on("uncaughtException", function (err) {
  console.error(err, "Uncaught Exception thrown");
  process.exit(1);
});
_models["default"].sequelize.authenticate().then(function () {
  _models["default"].sequelize.sync({
    force: false
  }).then(function () {
    app.listen(PORT, function () {
      console.log("Server is listening on port ".concat(PORT));
    });
  });
})["catch"](function (err) {
  console.error("Error Connection to Databse ".concat(err));
  process.exit(1);
});
module.exports = app;