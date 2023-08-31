const { insertValue, checkValue, modValue } = require("./index");

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

  it("deverá retornar false se o valor for menor que minhas notas", () => {
    const inputValue = 5;
    const check = checkValue(inputValue);
    expect(check).toBe(false);
  });

  it("deverá retornar false se o valor não for inteiro", () => {
    const inputValue = 12.50;
    const check = modValue(inputValue);
    expect(check).toBe(false);
  });

  it("deverá retornar true se o valor for inteiro", () => {
    const inputValue = 12.50;
    const check = modValue(inputValue);
    expect(check).toBe(false);
  });

});
