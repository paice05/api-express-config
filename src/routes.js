const { Router } = require("express");

const { index, store } = require("./controller/user");

const auth = require('./middleware/auth');

const routes = Router();

routes.get("/:id", auth, index);
routes.post("/", auth, store);

module.exports = routes;