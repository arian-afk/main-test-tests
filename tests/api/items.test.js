import { test } from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.API_BASE_URL;

test("GET /items returns the seeded rows", { skip: !baseUrl && "API_BASE_URL not set" }, async () => {
  const res = await fetch(`${baseUrl}/items`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "cherry" },
  ]);
});
