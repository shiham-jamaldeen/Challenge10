//employee constructor
class Employee {
  constructor(empNname, id, email) {
    this.empName = empNname;
    this.id = id;
    this.email = email;
  }
  //getter?
  getName() {
    return this.empName;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
