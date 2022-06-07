/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return knex.schema.hasTable("products_categories").then(function (exists) {
    if (!exists) {
      return knex.schema.createTableIfNotExists(
        "products_categories",
        (table) => {
          table.integer("product_id").unsigned().notNullable();
          table
            .foreign("product_id")
            .references("product_id")
            .inTable("products")
            .onDelete("CASCADE");
          table.integer("category_id").unsigned().notNullable();
          table
            .foreign("category_id")
            .references("category_id")
            .inTable("categories")
            .onDelete("CASCADE");
          table.timestamps(true, true);
        }
      );
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products_categories");
};
