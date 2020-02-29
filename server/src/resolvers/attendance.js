import Sequelize from "sequelize";

export default {
  Query: {
    attendances: async (parent, { eventId }, { models }) => {
      return await models.Attendance.findAll({
        where: {
          event_id: eventId
        }
      });
    }
  },
  Mutation: {
    createAttendance: async (
      parent,
      { participantId, eventId, paid, attended },
      { models }
    ) => {
      return await models.Attendance.create({
        participant_id: participantId,
        event_id: eventId,
        paid: paid,
        attended: attended
      });
    }
  }
};
