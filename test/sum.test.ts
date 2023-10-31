import { sum } from "../src/sum";

describe("sum", () => {
  test("returns sum of a plus b", () => {
    const value = sum(1, 2);
    expect(value).toEqual(3);
  });
});
