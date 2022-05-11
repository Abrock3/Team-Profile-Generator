const Employee = require("./EmployeeClass");

// creation of a child class of employee, sharing its attributes and adding more, with extra prototype functions
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

// allows this class to be imported by other files
module.exports = Engineer;