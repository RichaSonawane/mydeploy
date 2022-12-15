require("dotenv").config();
const express = require("express");
const path = require("path");
const { ROLLBAR_TOKEN } = process.env;
const app = express();

app.use(express.static("public"));
//app.use(express.static(`${__dirname}/public))

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(4000, () => console.log(`gliding on 4000`));
