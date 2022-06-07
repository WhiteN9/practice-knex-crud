const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];
//^^ it is storing the database configuration object based on the env value;

// Initialize a Knex instance by passing `config` as an argument to the Knex module
const knex = require("knex")(config);

module.exports = knex;

//You won't be able to test the connection between the server and the database just yet.
//During 35.6 we will start using this
