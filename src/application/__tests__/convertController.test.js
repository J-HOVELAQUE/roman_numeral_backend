const supertest = require("supertest");
const config = require("config");

const buildServer = require("../server");
const PORT = config.get("app.port");

const server = buildServer();

describe("GET /roman/:romanValue", () => {
  beforeAll(() => {
    server.listen(PORT || 3000, () => {
      console.log("SERVER STARTED ON:", PORT || 3000);
    });
  });

  afterAll(() => {
    server.close();
  });

  describe("Given that I wish to convert a valid roman number in arab number", () => {
    describe("When I give a valid params to /roman endpoint", () => {
      it("I receive the answer and 200 status", async () => {
        const answer = await supertest(server).get("/roman/LXIII").expect(200);

        expect(answer.body).toEqual({
          nombreEnChiffreArabe: 63,
          nombreEnChiffreRomain: "LXIII",
        });
      });
    });
  });

  describe("Given that I wish to convert a invalid roman number in arab number", () => {
    describe("When I give a invalid params to /roman endpoint", () => {
      it("I receive a status 400", async () => {
        const answer = await supertest(server).get("/roman/LXIIIs").expect(400);

        expect(answer.body).toEqual({
          erreur: "LXIIIs is an invalid roman numerals",
        });
      });
    });
  });
});
