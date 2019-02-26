// #1
const MenuController = require("../controllers/MenuController");
 describe("MenuController", () => {
   beforeEach(() => {
   this.menu = new MenuController();
 });
   describe("#getContactCount()", () => {

// #2
     it("should return Learning is a life-long pursuit", () => {
          expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
     });
   });

   });
