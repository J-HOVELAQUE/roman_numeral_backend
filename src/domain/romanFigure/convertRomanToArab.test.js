const convertRomanToArab = require("./convertRomanToArab");

describe("Testing function for converting roman value to arab value", () => {
  describe("Given that I wish to convert 'III' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'III' as args", () => {
      it("Then I receive 3", () => {
        expect(convertRomanToArab("III")).toBe(3);
      });
    });
  });

  describe("Given that I wish to convert 'V' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'III' as args", () => {
      it("Then I receive 5", () => {
        expect(convertRomanToArab("V")).toBe(5);
      });
    });
  });

  describe("Given that I wish to convert 'X' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'X' as args", () => {
      it("Then I receive 10", () => {
        expect(convertRomanToArab("X")).toBe(10);
      });
    });
  });

  describe("Given that I wish to convert 'IV' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'IV' as args", () => {
      it("Then I receive 4", () => {
        expect(convertRomanToArab("IV")).toBe(4);
      });
    });
  });

  describe("Given that I wish to convert 'IX' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'IX' as args", () => {
      it("Then I receive 9", () => {
        expect(convertRomanToArab("IX")).toBe(9);
      });
    });
  });

  describe("Given that I wish to convert 'XIV' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'XIV' as args", () => {
      it("Then I receive 14", () => {
        expect(convertRomanToArab("XIV")).toBe(14);
      });
    });
  });

  describe("Given that I wish to convert 'XLIV' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'XLIV' as args", () => {
      it("Then I receive 44", () => {
        expect(convertRomanToArab("XLIV")).toBe(44);
      });
    });
  });

  describe("Given that I wish to convert 'CMXCIII' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'CMXCIII' as args", () => {
      it("Then I receive 993", () => {
        expect(convertRomanToArab("CMXCIII")).toBe(993);
      });
    });
  });

  describe("Given that I wish to convert 'MMCDLIV' to arab value", () => {
    describe("When I call the function convertRomanToArab with 'MMCDLIV' as args", () => {
      it("Then I receive 2454", () => {
        expect(convertRomanToArab("MMCDLIV")).toBe(2454);
      });
    });
  });

  describe("Given that I wish to convert an array to arab value", () => {
    describe("When I call the function convertRomanToArab with an array as args", () => {
      it("Then it throw with 'TYPE_ERROR'", () => {
        expect(() => {
          convertRomanToArab([23, "SSEF"]);
        }).toThrow("TYPE_ERROR");
      });
    });
  });

  describe("Given that I wish to convert a roman figure with invalid character to arab value", () => {
    describe("When I call the function convertRomanToArab with an invalid character as args", () => {
      it("Then it throw with 'TYPE_ERROR'", () => {
        expect(() => {
          convertRomanToArab("CXK");
        }).toThrow("K is an invalid character");
      });
    });
  });
});
