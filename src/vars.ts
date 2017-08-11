const _ = require("lodash");

export const PORT: number = _.defaultTo(process.env.PORT, 3000);
