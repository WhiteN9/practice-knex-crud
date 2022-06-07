const products_categories = require("../fixtures/productsCategories");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE");
  await knex("products_categories").insert(products_categories);
};
