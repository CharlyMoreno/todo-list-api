import { Sequelize } from "sequelize";

import { DB } from "../utils/config";

const sequelize = new Sequelize(DB.DB_DATABASE,DB.DB_USERNAME,DB.DB_PASSWORD, {
  host: DB.DB_HOST,
  dialect: "mysql",
});

const createConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error); 
  }
};

export {createConnection,sequelize}

