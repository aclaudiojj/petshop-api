const connection = require("./connection");

const execQuery = (query, parameters = "") => {
  return new Promise((resolve, reject) => {
    connection.query(query, parameters, (errors, results, fields) => {
      if (errors) {
        reject(errors);
        return;
      }

      resolve(results);
    });
  });
};

module.exports = execQuery;
