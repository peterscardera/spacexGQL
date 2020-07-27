const { ApolloServer } = require("apollo-server")
const express = require("express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const { readFileSync } = require("fs");

const resolvers = require("./resolvers");