import Sequelize from "sequelize";
const sequelize = new Sequelize("event_app-db", "abs", "admin", {
  host: "db",
  port: "5432",
  dialect: "postgres"
});

const models = {
  Event: sequelize.import("./event"),
  Participant: sequelize.import("./participant"),
  Organiser: sequelize.import("./organiser"),
  Attendance: sequelize.import("./attendance")
};

Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { models, sequelize };
