import { test } from "node:test";
import assert from "node:assert/strict";
import { orderTotal } from "../index.js";

test("sums price x quantity and applies a discount", () => {
  assert.equal(orderTotal([{ price: 10, quantity: 2 }, { price: 5, quantity: 1 }]), 25);
  assert.equal(orderTotal([{ price: 10, quantity: 2 }], 10), 18);
});
