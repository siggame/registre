import * as dotenv from "dotenv";
dotenv.config();

import * as winston from "winston";
import {Request, Response, NextFunction} from "express";
import * as express from "express";

import * as csv from "./csv";
import * as vars from "./vars";
import * as bodyParser from "body-parser";

winston.configure({
    transports: [
        new (winston.transports.Console)({
            timestamp: true
        })
    ]
});

const app = express();

app.use(express.static('static'));
// Body parser for handling request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user_input', (req: Request, res: Response) => {
    csv.writeRow(req.body).then(() => {
        // TODO: Validation and redirection to actual pages
        res.redirect('/');
    }).catch((err) => {
        winston.error(err);
        res.redirect('/500/');
    });
});

app.listen(vars.PORT, () => {
    winston.info(`Starting application on port ${vars.PORT}...`);
    csv.initialize();
});
