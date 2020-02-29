import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import { models, sequelize } from "./models";
import schema from "./schemas";
import resolvers from "./resolvers";

const app = express();
const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    const message = error.message
      .replace("SequelizeValidationError: ", "")
      .replace("Validation error: ", "");

    return {
      ...error,
      message
    };
  },
  context: { models }
});
server.applyMiddleware({ app, path: "/graphql" });
app.use(cors());
app.listen({ port: 8000 }, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Apollo Server on http://localhost:8000/graphql");
  } catch (err) {
    console.log(err);
  }
});
