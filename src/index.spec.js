const { insertValue } = require("./index");

describe("FAIL", () => {
  it("Receber valor de entrada", () => {
    const value = 10;
    const result = insertValue(value);
    expect(result).toBeTruthy();
  });

  it("deverá retornar sacar o valor correto", () => {
    const value = 50;
    expect(value).toBe([10,20,20])
  });
  
});
