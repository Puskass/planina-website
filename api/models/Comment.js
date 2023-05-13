// Requirements
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Comment {
  constructor(comment, tourId) {
    this.comment = comment;
    this.tourId = new ObjectId(tourId);
  }

  async save() {
    return await getDB().collection("comments").insertOne(this);
  }

  static async fetchAll(tourId) {
    return await getDB()
      .collection("comments")
      .find({ tourId: new ObjectId(tourId) })
      .toArray();
  }
};