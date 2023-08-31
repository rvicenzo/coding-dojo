const { insertValue } = require("./index");

describe("FAIL", () => {
  it("Receber valor de entrada", () => {
    const value = 10;
    const result = insertValue(value);
    expect(result).toBeTruthy();
  });
});
