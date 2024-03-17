const { Client } = require('pg');
require('dotenv').config();
// Connect to the database
const client = new Client({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false
    }

});

client.connect()
    .then(() => console.log('connected to DB!!'))
    .catch(err => console.error('connection error', err));

module.exports = client;
