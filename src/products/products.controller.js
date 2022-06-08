const productsService = require("./products.service");
const asyncErrorBoundary = require("../asyncErrorBoundary/asyncErrorBoundary");

async function list(req, res, next) {
  // productsService
  //   .list()
  //   .then((productsData) => res.json({ data: productsData }))
  //   .catch((error) => next(error));
  // or
  const data = await productsService.list();
  res.json({ data: data });
}

function read(req, res, next) {
  // console.log(req.params);
  // { productId: '1' }
  // console.log(res.locals);
  // console.log(res.locals.product);
  const { product: data } = res.locals; // change key name from product to data
  res.json({ data: { data } });
}

async function productExists(req, res, next) {
  // console.log(req.params);
  // { productId: '1' }

  // productsService
  //   .read(req.params.productId)
  //   .then((product) => {
  //     if (product) {
  //       res.locals.product = product;
  //       return next();
  //     }
  //     next({ status: 404, message: `Product cannot be found.` });
  //   })
  //   .catch(next); // (error => next(error))

  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}
module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: [asyncErrorBoundary(list)],
};
