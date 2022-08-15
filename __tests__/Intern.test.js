const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Constructor", () => {
    it("should return an object containing 'name' 'id', 'email' and 'school' properties when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("role" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("should set 'role' to Intern", () => {
      const obj = new Intern();
      expect(obj.role).toEqual("Intern");
    });
  });

  describe("internGetters", () => {
    const name = "Helena";
    const id = "6";
    const email = "helena@gmail.com";
    const school = "ESMT";

    it("should return correct id", () => {
      const obj = new Intern(name, id);
      expect(obj.getId()).toEqual(id);
    });

    it("should return correct name", () => {
      const obj = new Intern(name, id, email);
      expect(obj.getName()).toEqual(name);
    });

    it("should return correct email", () => {
      const obj = new Intern(name, id, email);
      expect(obj.getEmail()).toEqual(email);
    });

    it("should return correct school name", () => {
      const obj = new Intern(name, id, email, school);
      expect(obj.getSchool()).toEqual(school);
    });

    it("should return correct role", () => {
      const obj = new Intern(name, id, email);
      expect(obj.getRole()).toEqual("Intern");
    });
  });
});
