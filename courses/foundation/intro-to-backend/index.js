import express from "express";
import knexLibrary  from "knex";

const app = express();
app.use(express.json());

const dbFile = "./database.sqlite3";

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

app.listen(3000, () => {
    console.log("Server 3000 is running")
})

app.get("/", (request, response)=>{
    response.send("<h1>Welcome to Node server");
})

app.get("/add", (request, response)=>{
    console.log("Your query: ", request.query);

    if (!request.query.a || !request.query.b) {
        return response.send(`
            <h1>No values add, please add a and b </h1>
        `)
    }

    const {a, b} = request.query;
    const sum = Number(a) + Number(b);

    response.send(sum);
})