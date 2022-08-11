const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name' 'id' and 'email' properties when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("role" in obj).toEqual(true);

    });

    it("should set 'role' to Employee", () => {
        const obj = new Employee();
  
        expect(obj.role).toEqual("Employee");
      });

    it("should set 'name' when created", () => {
      const name = "Tom";

      const obj = new Employee(name);

      expect(obj.name).toEqual(name);
    });

// Create a separate test for getName, getId and getEmail

  });
