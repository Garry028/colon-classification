import cors from "cors";
import express from "express";
import https from "https";
import config from "./config";
import db from "./models";
import routes from "./routes/index";
const app = express();
const PORT = process.env.PORT || config.server.port;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

routes(app);

const pingInterval = 864000;

function sendPingRequest (url) {
    https
        .get(url, res => {
            console.log(`Ping sent to ${url}. Status: ${res.statusCode === 200 ? "Server is alive" : "Error"}`);
        })
        .on("error", err => {
            console.error(`Ping error for ${url}: ${err.message}`);
        });
}

setInterval(() => {
    sendPingRequest("https://colon-classification.onrender.com/");
}, pingInterval);

process
    .on("unhandledRejection", (reason, p) => {
        console.error(reason, "Unhandled Rejection at Promise", p);
    })
    .on("uncaughtException", err => {
        console.error(err, "Uncaught Exception thrown");
        process.exit(1);
    });

db.sequelize
    .authenticate()
    .then(function () {
        db.sequelize.sync({ force: false }).then(() => {
            app.listen(PORT, function () {
                console.log(`Server is listening on port ${PORT}`);
            });
        });
    })
    .catch(err => {
        console.error(`Error Connection to Databse ${err}`);
        process.exit(1);
    });

module.exports = app;
