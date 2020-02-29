const participant = (sequelize, DataTypes) => {
  const Participant = sequelize.define("participant", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  });
  Participant.associate = models => {
    Participant.belongsTo(models.Event);
  };
  return Participant;
};
export default participant;
