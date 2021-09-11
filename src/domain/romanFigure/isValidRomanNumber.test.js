const isValidRomanNumber = require("./isValidRomanNumber");

describe("Testing isValidRomanNumber function", () => {
  describe("Given that I test a valid roman numerals", () => {
    describe("When I call the function isValidRomanNumber with a valid number as args (cccviii)", () => {
      test("Then it return true", () => {
        expect(isValidRomanNumber("cccviii")).toBe(true);
      });
    });
  });

  describe("Given that I test a valid roman numerals", () => {
    describe("When I call the function isValidRomanNumber with a valid number as args (mmxciv)", () => {
      test("Then it return true", () => {
        expect(isValidRomanNumber("mmxciv")).toBe(true);
      });
    });
  });

  describe("Given that I test a INvalid roman numerals", () => {
    describe("When I call the function isValidRomanNumber with a INvalid number as args (LMVI)", () => {
      test("Then it return FALSE", () => {
        expect(isValidRomanNumber("LMVI")).toBe(false);
      });
    });
  });

  describe("Given that I test a INvalid roman numerals", () => {
    describe("When I call the function isValidRomanNumber with a INvalid number as args (AXX)", () => {
      test("Then it return FALSE", () => {
        expect(isValidRomanNumber("AXX")).toBe(false);
      });
    });
  });

  describe("Given that I test a INvalid roman numerals", () => {
    describe("When I call the function isValidRomanNumber with an array as args", () => {
      test("Then it return FALSE", () => {
        expect(isValidRomanNumber(["x", "x"])).toBe(false);
      });
    });
  });
});
