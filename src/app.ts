import * as dotenv from "dotenv";
dotenv.config();

import * as winston from "winston";
import {Request, Response, NextFunction} from "express";
import * as express from "express";

import * as csv from "./csv";
import * as vars from "./vars";

winston.configure({
    transports: [
        new (winston.transports.Console)({
            timestamp: true
        })
    ]
});

const app = express();

app.use(express.static('static'));

app.use((req: Request, res: Response, next: NextFunction) => {
    winston.info(`${req.method}\t${req.url}`);
});

app.post('/user_input', (req: Request, res: Response) => {
    // TODO: Verify user input
    // TODO: Log user input to CSV
    //
});

app.listen(vars.PORT, () => {
    winston.info(`Starting application on port ${vars.PORT}...`);
    csv.initialize();
});
