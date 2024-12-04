import config from "./config/config.js";
import express from "express";
import errorHandler from "./utils/errorHandler.js";
import meteorsController from "./controllers/meteors.controller.js";
import nunjucks from "nunjucks";

const { PORT } = config;

const app = express();

app.set('view engine', 'nunjucks');

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(meteorsController);

app.get("/", function (request, response) {
  response.send("Page not found!");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`The server running on port ${PORT}`);
});
