const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb+srv://dks729927:dks729927@cluster0.x0xx2st.mongodb.net/user?retryWrites=true")
    .then((client) => {
      console.log("Mongo Conneted!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log("Mongo err:", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

// const getNextSequence = name => {
//   var ret = _db.colleciotn("counter").findAndModify({
//     query: { _id: name },
//     update: { $inc: { seq: 1 } },
//     new: true,
//   });
//   return ret.seq;
// };

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
// exports.getNextSequence = getNextSequence;
