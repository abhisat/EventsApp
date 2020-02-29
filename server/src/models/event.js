const event = (sequelize, DataTypes) => {
  const Event = sequelize.define("event", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    date_time: {
      type: DataTypes.STRING
    }
  });
  Event.associate = models => {
    Event.hasMany(models.Participant, { onDelete: "CASCADE" });
  };
  return Event;
};
export default event;
