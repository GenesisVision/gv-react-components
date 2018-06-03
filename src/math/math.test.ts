import add from "./math";

describe("math", () => {
  it("should be equal add(2 + 2) , 4", () => {
    expect(add(2, 2)).toEqual(4);
  });
});
