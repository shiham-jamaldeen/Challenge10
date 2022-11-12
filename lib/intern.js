//call the employee parent class
const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(empName, id, email, school) {
    super(empName, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "intern";
  }
}
module.exports = Intern;
