!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r){e.exports=require("@apollo/server/express4")},function(e,r,t){const n=t(7).ApolloServer,o=t(8)`
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
`;e.exports.server=new n({typeDefs:o,resolvers:{Query:{allUsers:async(e,r,t)=>await t.db.user.findMany()},Mutation:{addUser:(e,r,t)=>t.db.user.create({data:{name:r.data.name,email:r.data.email}})}}})},function(e,r,t){const n=new(0,t(9).PrismaClient);e.exports.context={db:n}},function(e,r,t){const{app:n,router:o}=t(4),{server:s}=t(1),{context:u}=t(2),{expressMiddleware:i}=t(0),a=t(10);s.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests(),n.use("/.netlify/functions/app",o),n.use(i(s,{context:()=>u})),e.exports.handler=a(n)},function(e,r,t){const n=t(5),o=t(6),{expressMiddleware:s}=t(0),{server:u}=t(1),{context:i}=t(2),a=n(),l=n.Router();l.get("/",(e,r)=>{r.writeHead(200,{"Content-Type":"text/html"}),r.write("<h1>Hello from Express.js!</h1>"),r.end()}),a.use(o()),a.use(n.json()),a.use(n.urlencoded({extended:!0}));e.exports={app:a,router:l,apolloServerGraphQL:()=>{u.start().then(()=>{a.use("/graphql",s(u,{context:()=>i}))})}}},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("@apollo/server")},function(e,r){e.exports=require("graphql-tag")},function(e,r){e.exports=require("@prisma/client")},function(e,r){e.exports=require("serverless-http")}]));