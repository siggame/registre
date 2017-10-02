import * as dotenv from "dotenv";
dotenv.config();

import * as winston from "winston";
import {Request, Response, NextFunction} from "express";
import * as express from "express";

import * as csv from "./csv";
import * as vars from "./vars";
import * as bodyParser from "body-parser";
import { body, validationResult} from "express-validator/check";

winston.configure({
    transports: [
        new (winston.transports.Console)({
            timestamp: true
        })
    ]
});

const app = express();

app.use(express.static('static'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
// Body parser for handling request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
   res.render('form', {errors: []});
});

app.post('/', [
    body('name', 'Please enter a name').not().isEmpty(),
    body('email', 'Please enter an email').not().isEmpty(),
    body('email', 'Invalid email - please use a valid email address.').isEmail(),
    ], (req: Request, res: Response) => {
    const errors = validationResult(req).array();
    if(errors.length > 0) {
        res.render('form', {errors: errors});
    } else {
        csv.writeRow(req.body).then(() => {
            res.redirect('/submitted.html');
        }).catch((err) => {
            winston.error(err);
            res.redirect('/error.html');
        });
    }
});

app.listen(vars.PORT, () => {
    winston.info(`Starting application on port ${vars.PORT}...`);
    csv.initialize();
});
