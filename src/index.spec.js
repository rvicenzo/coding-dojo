const { insertValue, checkValue } = require("./index");

describe("FAIL", () => {
  it("Receber valor de entrada", () => {
    const value = 10;
    const result = insertValue(value);
    expect(result).toBeTruthy();
  });

  it("deverá retornar true se o valor for maior que minhas notas", () => {
    const inputValue = 10;
    const check = checkValue(inputValue);
    expect(check).toBe(true);
  });
});
