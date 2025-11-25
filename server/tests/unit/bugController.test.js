import { createBug } from "../../src/controllers/bugController.js";
import Bug from "../../src/models/Bug.js";

jest.mock("../../src/models/Bug.js");

describe("Bug Controller - createBug", () => {
  it("creates a new bug", async () => {
    const req = { body: { title: "Test", description: "Test desc", status: "open" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    Bug.prototype.save = jest.fn().mockResolvedValue(req.body);

    await createBug(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
