const express = require("express");
const morgan = require("morgan");
const http = require("http");
const createError = require("http-errors");
const path = require("path");

function buildServer() {
  const app = express();
  const server = http.createServer(app);

  // Middlewares
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Set the header for CORS policy //
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  return server;
}

module.exports = buildServer;
