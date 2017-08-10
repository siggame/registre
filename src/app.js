const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const csv = require("./csv.js");
const vars = require("./vars");

const app = express();

app.use(express.static('static'));

app.post('/user_input', (req, res) => {
    // TODO: Verify user input
    // TODO: Log user input to CSV
    //
});

app.listen(vars.PORT, () => {
   csv.initialize();
});
