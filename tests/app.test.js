const request = require("supertest");
const createApp = require("../src/app");

describe("Express app", () => {
  test("GET / should return All Set", async () => {
    const app = createApp();

    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "All Set" });
  });

  test("unknown route should return 404", async () => {
    const app = createApp();
    const res = await request(app).get("/abcd");

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });
});
