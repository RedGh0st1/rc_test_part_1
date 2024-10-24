const express = require("express");
const cors = require("cors");
const pgp = require("pg-promise")();
const logger = require("morgan");
const helmet = require("helmet");
const app = express();
require("dotenv").config();

app.use(helmet());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
};

const db = pgp(cn);

app.get("/users", async (req, res) => {
  try {
    const result = await db.any("SELECT * FROM users");
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const result = await db.any("SELECT * FROM movies");
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

app.get("/search", async (req, res) => {
  const { title } = req.query;
  // if statement for here input validation
  const query = `
                SELECT *
                FROM movies
                WHERE title ILIKE $1
              `;
  try {
    const result = await db.any(query, [title]); // paramaterize
    res.json(result);
  } catch (err) {
    console.error(err.message); // logging errors for internal debugging
    res.status(500).send("An Error has occurred"); // dont want to expose sensitive error messages to users change (err.message)
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
