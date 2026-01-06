import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import knex from "knex";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, 
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/user-count", async (request, response) => {
  const result = await knexInstance.raw(`SELECT COUNT(*) AS totalUser FROM users`);
  response.json({totalUser: result[0].totalUser});
});

app.get("/completed-task", async (request, response) => {
  const completed = await knexInstance.raw(`SELECT title FROM task WHERE status_id = (SELECT id FROM status WHERE name = 'Done' LIMIT 1);`);
  response.json({completed});
});

app.get("/status-and-task", async (request, response) => {
  const totalTaskByStatus = await knexInstance.raw(`SELECT s.name AS status, COUNT(t.id) AS tasks FROM status s JOIN task t ON t.status_id = s.id GROUP BY s.id;`);
  response.json({totalTaskByStatus});
});

app.get("/task-status", async (request, response) => {
  const taskStatus = await knexInstance.raw(`SELECT t.title AS task, s.name AS status FROM task t JOIN status s ON t.status_id = s.id;`);
  response.json({taskStatus});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});