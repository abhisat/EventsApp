export default {
  Query: {
    participants: async (parent, { eventId }, { models }) => {
      return await models.Participants.findAll({
        where: {
          event_id: eventId
        }
      });
    }
  },
  Mutation: {
    createParticipant: async (parent, { name }, { models }) => {
      return await models.Participant.create({
        name: name
      });
    }
  }
};
