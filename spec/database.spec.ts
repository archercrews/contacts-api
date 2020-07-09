import Datastore from "nedb";
import { Database } from "src/data/database";

const contacts = require("./data/contacts.json");

describe("database service", () => {
  let dbService: Database;
  let dbSpy: jasmine.SpyObj<Datastore>;
  beforeEach(() => {
    dbSpy = jasmine.createSpyObj<Datastore>([
      "getAllData",
      "findOne",
      "insert",
      "update",
      "remove",
    ]);
  })
  describe("getAllContacts", () => {
    it("should return contacts", async () => {
      // arrange
      dbService = new Database();
      dbService.db = dbSpy;
      // act
      dbService.getAllContacts();
      // assert
      expect(dbSpy.getAllData).toHaveBeenCalledTimes(1);
    })
  })
  describe("getById", () => {
    it("should return a specific contact", async () => {
      // arrange
      dbService = new Database();
      dbService.db = dbSpy;
      // act
      dbService.getById("123");
      // assert
      expect(dbSpy.findOne).toHaveBeenCalledTimes(1);
    })
    // test error handling
  })
  // etc...not much to test here since it's basically a wrapper around the Datastore.
})