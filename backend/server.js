const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const expressPlayground = require("graphql-playground-middleware-express")
    .default;
const typeDefs = require("./schema");


const app = express();

const server = new ApolloServer({
    typeDefs,
});

server.applyMiddleware({ app });

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
app.get("/", (req, res) => res.end("Welcome to the PhotoShare API"));

app.listen({ port: 4000 }, () =>
    console.log(
        `GraphQL Server running @ http://localhost:4000${server.graphqlPath}`
    )
);
