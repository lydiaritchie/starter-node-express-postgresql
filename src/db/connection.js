const env = "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

console.log(config.client);

module.exports = knex;