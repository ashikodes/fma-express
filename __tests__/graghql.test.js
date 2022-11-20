const { app } = require('../server/express');
const supertest = require('supertest-graphql');
const gql = require('graphql-tag');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const request = supertest.default;

beforeEach(async () => {
  await prisma.user.deleteMany({});
});

test('A sample test', async () => {
  await request(app)
    .mutate(
      gql`
        mutation {
          addUser(data: { email: "first@gmail.com", name: "first user" }) {
            name
          }
        }
      `
    )
    .expectNoErrors();

  const {
    data: { allUsers },
  } = await request(app)
    .query(
      gql`
        query {
          allUsers {
            name
          }
        }
      `
    )
    .expectNoErrors();

  expect(allUsers).toHaveLength(1);
  expect(allUsers[0].name).toEqual('first user');
});
