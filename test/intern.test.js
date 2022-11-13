const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Initialisation of the Constructor", () => {
    it("Create a new Intern object", () => {
      const newObject = new Intern(
        "Grace",
        "3",
        "grace@company.com.au",
        "UZuniversity"
      );
      expect(newObject.empName).toEqual("Grace");
      expect(newObject.id).toEqual("3");
      expect(newObject.email).toEqual("grace@company.com.au");
      expect(newObject.school).toEqual("UZuniversity");
    });
  });
  describe("Test the getSchool method", () => {
    it("Get the name of the intern's school", () => {
      const newObject = new Intern(
        "Grace",
        "3",
        "grace@company.com.au",
        "UZuniversity"
      );

      expect(newObject.getSchool()).toEqual("UZuniversity");
    });
  });
  describe("Test the getRole method", () => {
    it("Get the job role of the intern", () => {
      const newObject = new Intern(
        "Grace",
        "3",
        "grace@company.com.au",
        "UZuniversity"
      );
      expect(newObject.getRole()).toEqual("Intern");
    });
  });
});
