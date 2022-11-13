//Call the parent file
const Employee = require("./employee.js");

//Extend parent to child object
class Manager extends Employee {
  constructor(empName, id, email, officeNumber) {
    super(empName, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
