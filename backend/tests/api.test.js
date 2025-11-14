const chai = require("chai");
const expect = chai.expect;
const request = require("supertest");
const app = require("../server");   // Uses exported app from server.js

describe("CRUD API Tests", () => {
  
  let studentId;

  // CREATE
  it("POST /students - should create a student", async () => {
    const res = await request(app)
      .post("/students")
      .send({
        name: "Sharanya",
        age: 21,
        course: "CSE"
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("id");
    studentId = res.body.id;
  });

  // READ
  it("GET /students - should return all students", async () => {
    const res = await request(app).get("/students");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  // UPDATE
  it("PATCH /students/:id - should update a student", async () => {
    const res = await request(app)
      .patch(`/students/${studentId}`)
      .send({ age: 22 });

    expect(res.status).to.equal(200);
    expect(res.body.age).to.equal(22);
  });

  // DELETE
  it("DELETE /students/:id - should delete a student", async () => {
    const res = await request(app).delete(`/students/${studentId}`);

    expect(res.status).to.equal(204);
  });

});
