const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Yay Node!");
})

app.get("/node", function (req, res) {
  res.send("Node!");
})

app.get("/cyf", function (req, res) {
  res.send("CYF!");
})

app.get("/search", function (req, res) {
  let searchQuery = req.query.search.me;
  res.send("Hello World! You searched for " + searchQuery);
});
//http://localhost:3000/search?search=hungry

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
