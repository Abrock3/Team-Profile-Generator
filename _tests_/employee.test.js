// Bring in the employee class to be tested
const Employee = require("../lib/EmployeeClass.js");

// while basic and probably uneccesary, these tests ensure that the constructor and prototype functions work
describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate an Employee instance", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });
    it("should set name via constructor arguments", () => {
      const name = "Alice";
      const employee = new Employee(name);
      expect(employee.name).toBe(name);
    });
    it("should set id via constructor arguments", () => {
      const id = "300";
      const employee = new Employee("Alice", id);
      expect(employee.id).toBe(id);
    });
    it("should set id via constructor arguments", () => {
      const email = "test@testarooni.com";
      const employee = new Employee("Alice", 300, email);
      expect(employee.email).toBe(email);
    });
  });
  describe("Getter methods", () => {
    it("Should get name via getName()", () => {
      const name = "Alice";
      const employee = new Employee(name, 100, "test@testarooni.com");
      const employeeName = employee.getName();
      expect(employeeName).toBe(name);
    });

    it("Should get ID via getID()", () => {
      const id = "11234222";
      const employee = new Employee(
        "Alice",
        id,
        "test@testarooni.com"
      );
      const employeeID = employee.getID();
      expect(employeeID).toBe(id);
    });
    it("Should get email via getEmail()", () => {
      const email ="test@testarooni.com";
      const employee = new Employee(
        "Alice",
        "112341",
        email
      );
      const employeeEmail = employee.getEmail();
      expect(employeeEmail).toBe(email);
      
    });
       it("Should return 'Employee' via getRole()", () => {
         const employee = new Employee("Alice", "112341", "test@testarooni.com");
         const employeeRole = employee.getRole();
         expect(employeeRole).toBe("Employee");
       });
  });
});
