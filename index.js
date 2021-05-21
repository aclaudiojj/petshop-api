const customExpress = require("./config/customExpress");
const connection = require("./infra/db/connection");
const Tables = require("./infra/db/tables");
const config = require("config");

connection.connect((error) => {
  if (error) {
    console.log(error);

    return;
  }

  Tables.init(connection);

  const app = customExpress();
  const apiPort = config.get("api.port");

  app.listen(apiPort, () => console.log(`running ${apiPort} port`));
});
