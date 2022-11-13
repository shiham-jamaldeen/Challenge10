//call the employee parent class
const Employee = require("./employee.js");

//extend employee to engineer
class Engineer extends Employee {
  constructor(empName, id, email, gitHubHandle) {
    super(empName, id, email);
    this.gitHubHandle = gitHubHandle;
  }
  getGitHub() {
    return `https://github.com/` + this.gitHubHandle;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
