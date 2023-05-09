const mongodb = require("mongodb");
const keys = require("../config/keys");
const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect(keys.mongoURI);
  console.log("Successfully connected to MongoDB.");
  database = client.db("mountaineering");
}

function getDB() {
  if (!database) {
    throw new Error("Database connection failed!");
  }
  return database;
}

module.exports = {
  connect,
  getDB,
};
