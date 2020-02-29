import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    organisers(eventId: Int!): [Organiser!]
    organiser(id: ID!): Organiser!
  }

  extend type Mutation {
    createOrganiser(name: String!): Organiser!
  }

  type Organiser {
    name: String!
  }
`;
