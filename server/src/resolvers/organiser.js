export default {
  Query: {
    organisers: async (parent, { eventId }, { models }) => {
      return await models.Organiser.findAll({
        where: {
          event_id: eventId
        }
      });
    }
  },
  Mutation: {
    createOrganiser: async (parent, { name }, { models }) => {
      return await models.Organiser.create({
        name: name
      });
    }
  }
};
