const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { pool } = require("./config.js");

const app = express();
const PORT = process.env.PORT || 5000;

// const userRoute = require("./routes/users");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const addUser = (request, response) => {
  const { firstname, lastname, password, emailaddress, role } = request.body;

  pool.query(
    "INSERT INTO users (firstname, lastname, password, emailaddress, role) VALUES ($1, $2, $3, $4, $5)",
    [firstname, lastname, password, emailaddress, role],
    (error) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ status: "success", message: "user added." });
    }
  );
};

app.route("/api/users").get(getUsers);

app.route("/api/users/add").post(addUser);

// app.use("/api/users", userRoute);

app.listen(PORT, console.log(`Server running at port: ${PORT}`));
