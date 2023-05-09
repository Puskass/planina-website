// Reqs
const express = require("express");
const cors = require("cors");
const tourRoutes = require("./routes/tours.routes");

// Server Setup
const app = express();

app.use(cors());
app.use(express.json());

// Routing
app.use(tourRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// DB Connection
const { connect } = require("./util/database");
/*connect().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});*/
