import { config, createSchema } from "@keystone-next/keystone/schema";
import { create } from "domain";
import "dotenv/config"; //to use hidden .env lines
const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/guitpro";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 630, // how long signed in?
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    //add data seed
  },

  lists: createSchema({
    //schema
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});
