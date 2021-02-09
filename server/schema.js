const { gql } = require('apollo-server-express');

const typeDefs = gql`

    #named file bc it could technically be any content-type
    type File {
        url: String!
        # once upload configured we will add more metadata info
        # id: ID! #unique
        # userUploader: String! #unique
        # videoName: String!
    }

    #Will come back to it
    type Query {
        getTopTen: [File]
        getVideoByID(id: ID!): File!
        hello(word: String!): String!
    }

    #Currently testing upload video 
    type Mutation {
        uploadFile(file: Upload!): File!
    }

`

module.exports = typeDefs;