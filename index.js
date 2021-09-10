const config = require("config");
const buildServer = require("./src/application/server");

async function run() {
  const PORT = config.get("app.port");
  const server = buildServer();

  server.listen(PORT || 3000, () => {
    console.log("SERVER STARTED ON:", PORT || 3000);
  });
}

run().catch((err) => {
  console.error();
  "Error on start", err;
});
