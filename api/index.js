// Reqs
const express = require("express");
const cors = require("cors");
const tourRoutes = require("./routes/tours.routes");
const { connect, getDB } = require("./util/database");

// Server Setup
const app = express();

app.use(cors());
app.use(express.json());

// Routing
app.use(tourRoutes);

connect().then(() => {
  app.listen(5000);
});
