const PORT = 4000;
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    helloWithName(name: String!): String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "hello from server",
    helloWithName: (parent, args) => {
      const { name } = args;
      return `Hello ${name}`;
    },
  },
};
const init = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`> Server runing on http://localhost:${PORT} ⚡⚡`);
    console.log(
      `> Apollo Server runing on http://localhost:${PORT}${server.graphqlPath} ⚡⚡`
    );
  });
};

init();
