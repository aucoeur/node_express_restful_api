const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password123",
  database: "hackthegap",
});

module.exports = pool;
