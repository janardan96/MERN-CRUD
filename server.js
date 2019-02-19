const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

//mongo connect
const port = process.env.PORT || 5000;
mongoose
  .connect("mongodb://localhost/MERN_YOUTUBE_PRACTICE")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//use routes
app.use("/api/items", items);

app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
