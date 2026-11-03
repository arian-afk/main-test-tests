import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { pathToFileURL } from "node:url";

const mainRepo = process.env.MAIN_REPO ?? path.resolve("../main-test-");
const calc = await import(pathToFileURL(path.join(mainRepo, "src", "calculator.js")).href);

test("add", () => {
  assert.equal(calc.add(2, 3), 5);
  assert.equal(calc.add(-1, 1), 0);
});

test("subtract", () => {
  assert.equal(calc.subtract(10, 4), 6);
});

test("multiply", () => {
  assert.equal(calc.multiply(3, 4), 12);
  assert.equal(calc.multiply(5, 0), 0);
});

test("divide", () => {
  assert.equal(calc.divide(10, 2), 5);
});

test("divide by zero throws", () => {
  assert.throws(() => calc.divide(1, 0), /divide by zero/);
});
