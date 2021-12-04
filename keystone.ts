import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";
import "dotenv/config"; //to use hidden .env lines
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";

const databaseURL = process.env.DATABASE_URL || "mongodb://localhost/guitpro";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
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
      User,
    }),
    ui: {
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`,
    }),
  })
);
