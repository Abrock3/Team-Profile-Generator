// bring in the Intern class to be tested
const Intern = require("../lib/InternClass");

// these tests, while basic and probably unnecessary, check that the constructor and prototype functions work
describe("Intern", () => {
  describe("Initialization", () => {
    it("should set school via constructor arguments", () => {
      const school = "GA Tech";
      const intern = new Intern("Alice", 300, "email@email.com", school);
      expect(intern.school).toBe(school);
    });
    describe("Getter methods", () => {
      it("Should get role via getRole()", () => {
        const role = "Intern";
        const intern = new Intern(
          "Alice",
          100,
          "test@testarooni.com",
          "GA Tech"
        );
        const internRole = intern.getRole();
        expect(internRole).toBe(role);
      });

      it("Should get school via getSchool()", () => {
        const school = "GA Tech";
        const intern = new Intern("Alice", 213, "test@testarooni.com", school);
        const internOffice = intern.getSchool();
        expect(internOffice).toBe(school);
      });
    });
  });
});
