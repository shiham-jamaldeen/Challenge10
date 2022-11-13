const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialisation of the Constructor", () => {
    it("Creates a new employee object", () => {
      const newObject = new Employee("Jared", "1", "jared@company.com.au");
      expect(newObject.empName).toEqual("Jared");
      expect(newObject.id).toEqual("1");
      expect(newObject.email).toEqual("jared@company.com.au");
    });
  });
  describe("Test the getName method", () => {
    it("Get the name of the employee", () => {
      const newObject = new Employee("Jared", "1", "jared@company.com.au");
      expect(newObject.getName()).toEqual(newObject.empName);
    });
  });
  describe("Test the getID method", () => {
    it("Get the employee ID of the employee", () => {
      const newObject = new Employee("Jared", "1", "jared@company.com.au");
      expect(newObject.getID()).toEqual(newObject.id);
    });
  });
  describe("Test the getEmail method", () => {
    it("Get the email address of the employee", () => {
      const newObject = new Employee("Jared", "1", "jared@company.com.au");
      expect(newObject.getEmail()).toEqual(newObject.email);
    });
  });
  describe("Test the getRole method", () => {
    it("Get the job role of the employee", () => {
      const newObject = new Employee("Jared", "1", "jared@company.com.au");
      expect(newObject.getRole()).toEqual("Employee");
    });
  });
});
