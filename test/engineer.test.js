const Engineer = require("../lib/engineer.js");
describe("Engineer", () => {
  describe("Initialisation of the Constructor", () => {
    it("Creates a new engineer object", () => {
      const newObject = new Engineer(
        "Alec",
        "2",
        "alec@company.com.au",
        "ibealec"
      );
      expect(newObject.empName).toEqual("Alec");
      expect(newObject.id).toEqual("2");
      expect(newObject.email).toEqual("alec@company.com.au");
      expect(newObject.gitHubHandle).toEqual("ibealec");
    });
  });
  describe("Test the getRole method", () => {
    it("Get the job role of the engineer", () => {
      const newObject = new Engineer(
        "Alec",
        "2",
        "alec@company.com.au",
        "ibealec"
      );
      expect(newObject.getRole()).toEqual("Engineer");
    });
  });
  describe("Test the getGitHub method", () => {
    it("Get the job role of the engineer", () => {
      const newObject = new Engineer(
        "Alec",
        "2",
        "alec@company.com.au",
        "ibealec"
      );
      expect(newObject.getGitHub()).toEqual("https://github.com/ibealec");
    });
  });
});
