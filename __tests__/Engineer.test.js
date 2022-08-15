const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Constructor", () => {
    it("should return an object containing 'name' 'id', 'email' and 'github' properties when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("role" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });

    it("should set 'role' to Engineer", () => {
      const obj = new Engineer();

      expect(obj.role).toEqual("Engineer");
    });
  });

  describe("engineerGetters", () => {
    const name = "Harry";
    const id = "4";
    const email = "harry@gmail.com";
    const github = "harryscodingworld";

    it("should return correct id", () => {
      const obj = new Engineer(name, id);
      expect(obj.getId()).toEqual(id);
    });

    it("should return correct name", () => {
      const obj = new Engineer(name, id, email);
      expect(obj.getName()).toEqual(name);
    });

    it("should return correct email", () => {
      const obj = new Engineer(name, id, email);
      expect(obj.getEmail()).toEqual(email);
    });

    it("should return correct GitHub username", () => {
      const obj = new Engineer(name, id, email, github);
      expect(obj.getGithub()).toEqual(github);
    });

    it("should return correct role", () => {
      const obj = new Engineer(name, id, email);
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});
