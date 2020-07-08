import Datastore from "nedb"

export function initDB() {
  var db = new Datastore("./contacts.json");
  db.loadDatabase();
};