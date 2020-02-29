import Sequelize from "sequelize";

export default {
  Query: {
    events: async (parent, args, { models }) => {
      return await models.Event.findAll();
    }
  },
  Mutation: {
    createEvent: async (
      parent,
      { name, description, dateTime },
      { models }
    ) => {
      return await models.Event.create({
        name: name,
        description: description,
        date_time: dateTime
      });
    }
  }
};
