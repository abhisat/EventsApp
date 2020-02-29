const attendance = (sequelize, DataTypes) => {
  const Attendance = sequelize.define("attendance", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    participant_id: {
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.INTEGER
    },
    paid: {
      type: DataTypes.BOOLEAN
    },
    attended: {
      type: DataTypes.BOOLEAN
    }
  });
  Attendance.associate = models => {
    Attendance.hasMany(models.Participant, { onDelete: "CASCADE" });
  };
  return Attendance;
};
export default attendance;
