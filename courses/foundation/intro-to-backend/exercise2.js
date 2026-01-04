import express from "express";
import knex from "knex";

const app = express();
const port = 3000;
app.use(express.json());

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from exercise 2!</h1>");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const users = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.send(users);
});

app.post("/all-users", async (request, response) => {
  console.log(request.body);
  const { id, first_name, last_name, email } = request.body;

  if (!id || !first_name || !last_name || first_name.length === 0 || last_name.length === 0 || !email) return response.sendStatus(400);

  await knexInstance("users").insert({
    id,
    first_name,
    last_name,
    email
  });

  response.sendStatus(200);
});

// TODO implement more routes here

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});