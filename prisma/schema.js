import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
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
      return await context.prisma.user.findMany();
    },
  },
  Mutation: {
    addUser: (_, args, context) => {
      return context.prisma.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
        },
      });
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
