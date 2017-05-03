import { describe, it, assert } from "./test-helper";
import factorize from "../src/index";

describe("Sample test", () => {
  it("Validate factorial func", () => {
    assert.equals(factorize(5), 3125);
  });
});
