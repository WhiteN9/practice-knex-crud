const knex = require("../db/connection");

//pay attention to different parameters can shorten or lengthen the {}
function read(supplierId) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: supplierId })
    .first();
}
//Although the API doesn't have to support a GET /suppliers/:supplierId endpoint,
//you are creating read() so that you can use this function for validation
//in the route handlers later on.

function create(supplier) {
  return knex("suppliers")
    .insert(supplier)
    .returning("*")
    .then((createdRecords) => createdRecords[0]); // to return only the one inserted record.
}

function update(updatedSupplier) {
  return knex("suppliers")
    .select("*")
    .where({ supplier_id: updatedSupplier.supplier_id })
    .update(updatedSupplier,"*")
    .then((updatedRecords) => updatedRecords[0]); // to return only the one updated record.
}

function destroy(supplier_id) {
  return knex("suppliers").where({ supplier_id }).del(); //
}

module.exports = {
  read,
  create,
  update,
  delete: destroy,
};
