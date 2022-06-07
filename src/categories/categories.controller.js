const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../asyncErrorBoundary/asyncErrorBoundary");

async function list(req, res, next) {
  const categoriesData = await categoriesService.list();
  res.json({ data: categoriesData });
}

// or
// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

module.exports = {
  list: [asyncErrorBoundary(list)],
};
