const express = require("express");
const app = express();

//middlewares
app.use(express.json());

//routers

//not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  res.status(status).send({ error: message });
});

modules.export = app;
