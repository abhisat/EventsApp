import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    attendances(eventId: Int): [Attendance!]
    attendance(id: ID!): Attendance
  }
  extend type Mutation {
    createAttendance(
      participantId: Int!
      eventId: Int!
      paid: Boolean
      attended: Boolean
    ): Attendance!
  }
  type Attendance {
    id: ID!
    participant_id: Int!
    event_id: Int!
    paid: Boolean!
    attended: Boolean
  }
`;
