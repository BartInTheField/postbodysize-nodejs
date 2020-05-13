const express = require("express");
const bodyParser = require("body-parser");
const sizeOf = require("object-sizeof");

const PORT = 3000;

const app = express();

app.use(bodyParser.json({ limit: "100mb" }));

app.post("*", (req, res) => {
  const bodySize = sizeOf(req.body);

  console.log(bodySize);

  res.status(200).send(bodySize + "");
});

app.listen(PORT, () =>
  console.log(`BodySizeLoger is listening at http://localhost:${PORT}`)
);
