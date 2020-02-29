import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    events: [Event!]
    event(id: ID!): Event
  }
  extend type Mutation {
    createEvent(name: String!, description: String!, dateTime: String): Event!
  }
  type Event {
    id: ID!
    name: String!
    description: String!
    date_time: String!
  }
`;
