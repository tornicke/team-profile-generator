const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Constructor", () => {
    it("should return an object containing 'name' 'id', 'email' and 'school' properties when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("role" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });

    it("should set 'role' to Manager", () => {
      const obj = new Manager();
      expect(obj.role).toEqual("Manager");
    });
  });

  describe("managerGetters", () => {
    const name = "Tina";
    const id = "7";
    const email = "tina@gmail.com";
    const officeNumber = "678";

    it("should return correct id", () => {
      const obj = new Manager(name, id);
      expect(obj.getId()).toEqual(id);
    });

    it("should return correct name", () => {
      const obj = new Manager(name, id, email);
      expect(obj.getName()).toEqual(name);
    });

    it("should return correct email", () => {
      const obj = new Manager(name, id, email);
      expect(obj.getEmail()).toEqual(email);
    });

    it("should return correct role", () => {
      const obj = new Manager(name, id, email);
      expect(obj.getRole()).toEqual("Manager");
    });
  });
});
