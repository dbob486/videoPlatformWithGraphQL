const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const QueryAPI = require('./dataAPI/queryAPI');
const MutationAPI = require('./dataAPI/mutationAPI');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        queryAPI: new QueryAPI,
        mutationAPI: new MutationAPI,
    })
});

const app = express()

server.applyMiddleware({ app })
app.use(cors())

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)