import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books, reviews, authors } from "./mockData.js";
import { Resolvers, Book } from "./generated/graphql";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import gql from "graphql-tag";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaPath = resolve(__dirname, "schema.graphql");

const typeDefs = gql`
  ${readFileSync(schemaPath, { encoding: "utf-8" })}
`;

const resolvers: Resolvers = {
  Query: {
    books: () => books,
    reviews: () => reviews,
    authors: () => authors,
  },
  Mutation: {
    addBook: (_, { input }): Book[] => {
      const book: Book = {
        id: String(books.length + 1),
        title: input.title,
        platform: input.platform,
      };

      books.push(book);
      return books;
    },
  },
};

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 Server ready at: ${url}`);
}

startServer();
