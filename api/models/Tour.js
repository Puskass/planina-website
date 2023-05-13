// Reqs
const { getDB } = require("../util/database");
const { ObjectId } = require("bson");

module.exports = class Tour {
  constructor(
    name,
    location,
    imgUrl,
    date,
    description,
    condition,
    technique,
    price,
    guideId
  ) {
    this.name = name;
    this.location = location;
    this.imgUrl = imgUrl;
    this.date = date;
    this.description = description;
    this.condition = condition;
    this.technique = technique;
    this.price = price;
    this.guideId = new ObjectId(guideId);
  }

  async save() {
    return await getDB().collection("tours").insertOne(this);
  }

  static async fetchAll() {
    return await getDB().collection("tours").find().toArray();
  }

  static async findById(id) {
    return await getDB()
      .collection("tours")
      .findOne({ _id: new ObjectId(id) });
  }
};
