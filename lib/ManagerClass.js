const Employee = require("./EmployeeClass");

// creation of a child class of employee, sharing its attributes and adding more, with extra prototype functions
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

// allows this class to be imported by other files
module.exports = Manager;