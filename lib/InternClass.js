const Employee = require("./EmployeeClass");

// creation of a child class of employee, sharing its attributes and adding more, with extra prototype functions
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// allows this class to be imported by other files
module.exports = Intern;