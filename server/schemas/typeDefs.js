const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    # authors:String
    description:String
    title:String
    image:String
    link:String
  }
`;

module.exports = typeDefs;