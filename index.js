const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

// Get all users route
app.get("/users", (req, res) => {
  res.json({ message: "Get all users" });
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} - http://localhost:${PORT}`)
);
