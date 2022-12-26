const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const tradeRoute = require("./routes/tradeRoute");
const accountRoute = require("./routes/accountRoute");
require("dotenv").config();

const app = express();
var http = require("http").Server(app);
const port = 5000;

app.use(bodyParser.json());


app.use(express.json()); //for parsing application/json


// Routes
app.use("/users", userRoute);
app.use("/trades", tradeRoute);
app.use("/accounts", accountRoute);

// 404 not found page (it will be end of the routes)
app.use((req, res, next) => {
  res.status(404).json({
    Status: 'Failed'
  });
});


var server = http.listen(port, () => {
  console.log(`App started on port ${port}`);
});
