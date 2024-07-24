var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const INDEX_ROUTES = require("./routes/index");
var app = express();
const POOL = require("./config/db/index");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(INDEX_ROUTES);

// Check connection status
POOL.connect((error) => {
  if (error) {
    console.error("Error connecting to PostgreSQL database:", error.stack);
    return;
  }
  console.log("Connected to PostgreSQL database successfully");
});

module.exports = app;
