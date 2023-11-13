const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(id, nickname, password) {
    this.id = id;
    this.nickname = nickname;
    this.password = password;
    this.achievements = [];
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(data) {
    const db = getDb();
    return db.collection("users").findOne({ id: data.userId });
  }

  static findByNickname(data) {
    const db = getDb();
    return db.collection("users").findOne({ nickname: data.nickname });
  }

  static updateAchievementsByNickname(data) {
    const db = getDb();

    const { nickname, achievements } = { ...data };

    return db.collection("users").updateOne({ nickname: nickname }, { $set: { achievements: achievements } });
  }
}

exports.User = User;
