import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    participants(eventId: Int!): [Participant!]
    participant(id: ID!): Participant!
  }

  extend type Mutation {
    createParticipant(name: String!): Participant!
  }

  type Participant {
    name: String!
  }
`;
