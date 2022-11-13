const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialisation of the Constructor", () => {
    it("Creates a new manager object", () => {
      const newObject = new Manager(
        "Jared",
        "1",
        "jared@company.com.au",
        "08 123 2345"
      );
      expect(newObject.empName).toEqual("Jared");
      expect(newObject.id).toEqual("1");
      expect(newObject.email).toEqual("jared@company.com.au");
      expect(newObject.officeNumber).toEqual("08 123 2345");
    });
  });
  describe("Test the getRole method", () => {
    it("Get the role of the employee", () => {
      const newObject = new Manager(
        "Jared",
        "1",
        "jared@company.com.au",
        "08 123 2345"
      );
      expect(newObject.getRole()).toEqual("Manager");
    });
  });
});
