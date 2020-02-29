import { gql } from "apollo-server-express";
import event from "./event";
import attendance from "./attendance";
import organiser from "./organiser";
import participant from "./participant";

const stitchedSchema = gql`
  type Query {
    _: String!
  }
  type Mutation {
    _: String!
  }
`;
export default [stitchedSchema, event, attendance, organiser, participant];
