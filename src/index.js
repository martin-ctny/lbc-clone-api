const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const connectMongo = require("./config/database.config.js");
connectMongo();

const PostRouter = require("./routers/posts.router.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const ENDPOINT = "/api";
app.use(`${ENDPOINT}`, PostRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
