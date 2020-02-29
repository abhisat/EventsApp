const organiser = (sequelize, DataTypes) => {
  const Organiser = sequelize.define("organiser", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    }
  });
  Organiser.associate = models => {
    Organiser.belongsTo(models.Event);
  };
  return Organiser;
};
export default organiser;
