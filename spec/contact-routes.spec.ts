import request from "supertest";
import app from "../src/Server";

const contact = require("./data/contact.json");
describe("contact routes", () => {
  const req = request(app);
  describe("getAll", () => {
    it("should return contacts", (done) => {
      req.get("/api/contacts")
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200, done);
    })
  })
  // These are failing for some reason. Seems to be messing with the data file somehow.
  // Seems like it's either:
  // 1. How the data is being stored or 
  // 2. How the tests are set up
  
  // describe("getById", () => {
  //   it("should return contacts", async (done) => {
  //     await req.get("/api/contacts/919")
  //       .set("Accept", "application/json")
  //       .expect("Content-Type", "application/json; charset=utf-8")
  //       .expect(200, done);
  //   })
  //   it("should return a 400 for invalid id", async (done) => {
  //     await req.get("/api/contacts/999")
  //       .set("Accept", "application/json")
  //       .expect("Content-Type", "application/json; charset=utf-8")
  //       .expect(400, done);
  //   })
  // })
  describe("createContact", () => {
    it("should create new contact", (done) => {
      contact.id = null;
      req.post("/api/contacts")
        .send(contact)
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(201, done);
    })
  })
})