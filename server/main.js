const express = require("express");
const lookupPark = require("./lookup");

const port = 4000;

const app = express();

app.get("/park-lookup", (req, res) => {
  const response = {
    info: lookupPark(req.query.park),
  };

  res.send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
