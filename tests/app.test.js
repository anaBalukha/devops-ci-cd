const request = require("supertest");
const app = require("../index");

test("GET / returns Hello CI/CD!", async () => {
  const res = await request(app).get("/");
  expect(res.text).toContain("Hello, I'm Anna Balukhashvili");
});
