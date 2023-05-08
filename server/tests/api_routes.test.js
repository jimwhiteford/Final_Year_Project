const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DB_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET hive types", () => {
  it("should return all hive types with status code 200", async () => {
    const res = await request(app).get("/getHiveTypes");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET bee breeds", () => {
  it("should return all bee breeds with status code 200", async () => {
    const res = await request(app).get("/getBreeds");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET apiarys", () => {
  it("should return all users apiarys with status code 200", async () => {
    const res = await request(app).get("/getApiarys/jim.whiteford@hotmail.com");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET hives", () => {
  it("should return all users hives specific to the apiary with status code 200", async () => {
    const res = await request(app).get(
      "/getHives/apiary-1/jim.whiteford@hotmail.com"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET a hive", () => {
  it("should return one specific hive with status code 200", async () => {
    const res = await request(app).get(
      "/getHive/apiary-1/clover-hive/jim.whiteford@hotmail.com"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Clover Hive");
  });
});

describe("POST an apiary", () => {
  it("should post an apiary with status code 200", async () => {
    const res = await request(app)
      .post("/createApiary")
      .send({
        _id: mongoose.Types.ObjectId("645667ac7aa39ccfe4b91f64"),
        user: "test@buzzz.com",
        title: "A Test Apiary",
        slug: "a-test-apiary",
        photo: "aphotoURL",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("A Test Apiary");
  });
});

describe("POST an hive", () => {
  it("should post a hive with status code 200", async () => {
    const res = await request(app)
      .post("/createHive")
      .send({
        _id: mongoose.Types.ObjectId("645667ac7aa39ccfe4b91f65"),
        user: "test@buzzz.com",
        apiary: "a-test-apiary",
        title: "A Test Hive",
        slug: "a-test-hive",
        photo: "aphotoURL",
        hiveType: "",
        breed: "",
        queenId: "",
        queenNote: "",
        hiveNote: "",
        broodBox: "",
        supers: "",
        topBar: "",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("A Test Hive");
  });
});

describe("PUT details of a hive", () => {
  it("should update the details of a hive with status code 200 ", async () => {
    const res = await request(app)
      .put("/updateHive/645667ac7aa39ccfe4b91f65")
      .send({
        hiveType: "Layens",
      });
    expect(res.statusCode).toBe(200);
  });
});

describe("DELETE an apiary", () => {
  it("should delete an apiary with status code 200", async () => {
    const res = await request(app).delete(
      "/deleteApiary/645667ac7aa39ccfe4b91f64"
    );
    expect(res.statusCode).toBe(200);
  });
});

describe("DELETE a hive", () => {
  it("should delete an hive with status code 200", async () => {
    const res = await request(app).delete(
      "/deleteHive/645667ac7aa39ccfe4b91f65"
    );
    expect(res.statusCode).toBe(200);
  });
});
