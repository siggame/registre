import * as dotenv from "dotenv";
dotenv.config();

import * as express from "express";

import * as csv from "./csv";
import * as vars from "./vars";

const app = express();

app.use(express.static('static'));

app.post('/user_input', (req: express.Request, res: express.Response) => {
    // TODO: Verify user input
    // TODO: Log user input to CSV
    //
});

app.listen(vars.PORT, () => {
   csv.initialize();
});
