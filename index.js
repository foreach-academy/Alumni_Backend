const express = require ("express");
const cors = require ("cors");
const app = express();
const connectionDB = require('./Database')

app.use(cors());
app.use(express.json());

module.exports = app ;