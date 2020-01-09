const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("server online in port 3333"));

