/*// Requirements
// mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.12cbbzj.mongodb.net/?retryWrites=true&w=majority
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.12cbbzj.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Successfully connected to MongoDB.");
  database = client.db("onlineshop");
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
*/
