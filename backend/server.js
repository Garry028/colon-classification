const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();
const controller = require('./colonClassificationController');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post('/colon-classification', controller.generateColonClassification);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    }
);

