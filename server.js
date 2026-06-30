require("dotenv").config();

const createApp = require("./src/app");
const connectToDb = require("./src/config/connect");

const requiredEnvVars = [
  "MONGO_URL",
  "ACCESS_TOKEN_SECRET",
  "REFRESH_TOKEN_SECRET",
  "SALT_ROUNDS",
  "PASSKEY",
];

for (const varName of requiredEnvVars) {
  if (!process.env[varName]) {
    throw new Error(`${varName} not found`);
  }
}

async function startServer() {
  await connectToDb();

  const app = createApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

if (require.main === module) {
  startServer().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { startServer };
