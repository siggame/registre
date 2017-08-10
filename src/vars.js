const _ = require("lodash");

exports.PORT = _.defaultTo(process.env.PORT, 3000);
