const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("../app/routes/userRoute");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));