const express = require('express');
const port = 3000;
const app = express();

app.get("/", function (req, res) {
  console.log(req.params);
  res.send("hello world");
});

app.listen(port, () => {
  console.log("serve is listening on ", port);
});