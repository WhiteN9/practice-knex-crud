const knex = require("../db/connection");
//requires the Knex instance initialized in ./db/connection.js.

function list() {
  return knex("categories").select("*");
}

module.exports = {
  list,
};
