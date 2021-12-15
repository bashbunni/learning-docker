const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const PORT = 6969;

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("I'm from the backend :o");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
