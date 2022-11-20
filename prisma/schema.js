const ApolloServer = require('@apollo/server').ApolloServer;
const gql = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: String!
    email: String!
    name: String
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    addUser(data: UserCreateInput): User!
  }

  input UserCreateInput {
    email: String!
    name: String
  }
`;

const resolvers = {
  Query: {
    allUsers: async (obj, args, context) => {
      return await context.db.user.findMany();
    },
  },
  Mutation: {
    addUser: (_, args, context) => {
      return context.db.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
        },
      });
    },
  },
};

module.exports.server = new ApolloServer({
  typeDefs,
  resolvers,
});
