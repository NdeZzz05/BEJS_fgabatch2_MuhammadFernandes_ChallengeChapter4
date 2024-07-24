var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
// var customerRouter = require("./routes/customer");
// var accountRouter = require("./routes/account");
// var transactionRouter = require("./routes/transaction");

const INDEX_ROUTES = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(INDEX_ROUTES);

// app.use("/", indexRouter);
// app.use("/api/v1/users", usersRouter);
// app.use("/api/v1/customers", customerRouter);
// app.use("/api/v1/accounts", accountRouter);
// app.use("/api/v1/transactions", transactionRouter);

module.exports = app;
