const suppliers = require("../fixtures/suppliers");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE");
  await knex("suppliers").insert(suppliers);
};
