const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const userRoute = require("../app/routes/userRoute");
const cartRoute = require("../app/routes/cartRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/user", userRoute);
app.use("/cart", cartRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
