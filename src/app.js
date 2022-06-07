const express = require("express");
const app = express();
const productsRouter = require("./products/products.router");
const categoriesRouter = require("./categories/categories.router");
const suppliersRouter = require("./suppliers/suppliers.router");

//middlewares
app.use(express.json());

//routers
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/suppliers", suppliersRouter);

//not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

//error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  res.status(status).send({ error: message });
});

module.exports = app;
