require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const PORT = 8000;
const URL = process.env.DB_URL+ process.env.DB_NAME

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected sucessfully...."))
    .catch((err) => console.log("Mongodb connection failed", err.message));

app.listen(PORT, console.log(`Server listening on ${PORT}`));