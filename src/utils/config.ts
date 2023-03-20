import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8080;
export const DB = {
  DB_DATABASE: process.env.DB_DATABASE || "todo_list",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "root",
  DB_HOST: process.env.DB_HOST || "localhost"
};
