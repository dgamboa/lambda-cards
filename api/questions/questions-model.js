const db = require("../../data/dbConfig.js");

module.exports = {
  get
};

function get(id) {
  let query = db("questions as q");

  if (id) {
    return query.where("q.id", id).first();
  } else {
    return query
  }
};