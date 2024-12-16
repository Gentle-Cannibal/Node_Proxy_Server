import config from "./config/config.js";
import express from "express";
import commonErrorHandler from "./utils/commonErrorHandler.js";
import meteorsController from "./controllers/meteors.controller.js";
import marsRoverPhotosController from "./controllers/marsRoverPhotos.controller.js";
import nunjucks from "nunjucks";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { PORT } = config;

const app = express();

app.set('view engine', 'nunjucks');

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.urlencoded({ extended: false }));

app.use(meteorsController);
app.use(marsRoverPhotosController);

app.get("/", function (request, response) {
  response.send("Page not found!");
});

app.use(commonErrorHandler);

app.listen(PORT, () => {
  console.log(`The server running on port ${PORT}`);
});
