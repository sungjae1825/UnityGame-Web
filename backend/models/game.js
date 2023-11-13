const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class Game {
  constructor(text) {
    this.text = text;
  }

  save() {
    const db = getDb();
    return db.collection("games").insertOne(this);
  }

  static findById(data) {
    const db = getDb();
    return db.collection("games").findOne({ id: data.userId });
  }
}

exports.User = User;
