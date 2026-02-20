import { config as conf } from "dotenv";
import { access } from "fs";
conf();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
  refreshTokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
  hashingSecret: process.env.HASH_SECRET,
  emailUsername: process.env.EMAIL_USERNAME as string,
  emailPassword: process.env.EMAIL_PASSWORD as string,
};

export const config = Object.freeze(_config);
