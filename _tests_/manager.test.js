// bring in the Manager class to be tested
const Manager = require("../lib/ManagerClass");

// these tests, while basic and probably unnecessary, check that the constructor and prototype functions work
describe("Manager", () => {
  describe("Initialization", () => {
    it("should set Office Number via constructor arguments", () => {
      const officeNum = "23";
      const manager = new Manager("Alice", 300, "email@email.com", officeNum);
      expect(manager.officeNumber).toBe(officeNum);
    });
    describe("Getter methods", () => {
      it("Should get role via getRole()", () => {
        const role = "Manager";
        const manager = new Manager("Alice", 100, "test@testarooni.com", 100);
        const managerRole = manager.getRole();
        expect(managerRole).toBe(role);
      });

      it("Should get office number via getOfficeNumber()", () => {
        const officeNum = 29;
        const manager = new Manager(
          "Alice",
          213,
          "test@testarooni.com",
          officeNum
        );
        const managerOffice = manager.getOfficeNumber();
        expect(managerOffice).toBe(officeNum);
      });
    });
  });
});
