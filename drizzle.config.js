export default {
    dialect: "postgresql",
    schema: "./src/utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: process.env.NEON_CONNECTION_STRING,
      connectionString: process.env.NEON_CONNECTION_STRING,
    },
  };
  