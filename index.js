const express = require("express");
const app = express();

require("./app/db")();
require("./app/prod")(app);
require("./app/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening to port ${port}`));

module.exports = server;
