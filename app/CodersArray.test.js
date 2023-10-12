import CodersArray from "./CodersArray";

describe("Given a lenght method", () => {
  describe("When it receives 4 values", () => {
    test("Then it should return 4", () => {
      const numbers = new CodersArray(3, 8, 10, 2);
      const expectedLength = 4;

      const length = numbers.lenght();

      expect(length).toBe(expectedLength);
    });
  });
});
