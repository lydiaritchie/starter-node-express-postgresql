// Update with your config settings.
const path = require('path');
require("dotenv").config();

const { DATABASE_URL } = process.env;

//console.log(process.env);
console.log(DATABASE_URL);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

};
