import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import bugRoutes from "../../src/routes/bugRoutes.js";
import { MongoMemoryServer } from "mongodb-memory-server";

const app = express();
app.use(express.json());
app.use("/api/bugs", bugRoutes);

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Bug Routes", () => {
  it("POST /api/bugs creates a bug", async () => {
    const res = await request(app).post("/api/bugs").send({ title: "Bug 1", description: "Desc", status: "open" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Bug 1");
  });

  it("GET /api/bugs returns bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
