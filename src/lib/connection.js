const knex = require("knex");
const dbConfig = require("../knexfile");

let connection;

export const getDatabaseConnector = () => {
  return () => {
    const configByEnvironment = dbConfig[process.env.NODE_ENV || "development"];
    if (!configByEnvironment) {
      throw new Error(
        `Failed to get knex configuration for env:${process.env.NODE_ENV}`
      );
    }
    connection = knex(configByEnvironment);
    return connection;
  };
};
