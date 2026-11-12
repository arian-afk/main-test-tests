import { test } from "node:test";
import assert from "node:assert/strict";

const baseUrl = process.env.API_BASE_URL;

test("GET /health returns ok", { skip: !baseUrl && "API_BASE_URL not set" }, async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.status, "ok");
});
