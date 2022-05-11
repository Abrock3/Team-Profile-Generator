// bring in the Engineer class to be tested
const Engineer = require("../lib/EngineerClass");

// these tests, while basic and probably unnecessary, check that the constructor and prototype functions work
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set github via constructor arguments", () => {
      const github = "abrock3";
      const engineer = new Engineer("Alice", 300, "email@email.com", github);
      expect(engineer.github).toBe(github);
    });
    describe("Getter methods", () => {
      it("Should get role via getRole()", () => {
        const role = "Engineer";
        const engineer = new Engineer("Alice", 100, "test@testarooni.com", "abrock3");
        const engineerRole = engineer.getRole();
        expect(engineerRole).toBe(role);
      });

      it("Should get github via getGithub()", () => {
        const github = "abrock3";
        const engineer = new Engineer(
          "Alice",
          213,
          "test@testarooni.com",
          github
        );
        const engineerGithub = engineer.getGithub();
        expect(engineerGithub).toBe(github);
      });
    });
  });
});
