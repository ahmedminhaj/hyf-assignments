import express from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("<h1>Hello from exercise 1!</h1>");
});

app.get("/currentYear", (request, response) => {
  const currentYear = new Date().getFullYear();
  response.send(`<h3>This is ${currentYear}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});