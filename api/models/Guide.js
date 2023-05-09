// Reqs
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Guide {
  constructor(guideId, name, description, imgUrl) {
    this.guideId = new ObjectId(guideId);
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  async save() {
    return await getDB().collection("guides").insertOne(this);
  }

  static async fetchAll() {
    return await getDB().collection("guides").find().toArray();
  }

  static async findById(id) {
    return await getDB()
      .collection("guides")
      .findOne({ _id: new ObjectId(id) });
  }
};
