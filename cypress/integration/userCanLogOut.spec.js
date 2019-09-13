describe("User Log-Out", () => {
  beforeEach(() => {
   cy.server();
 });

 it("User can successfully log out", () => {
   cy.route({
     method: "DELETE",
     url: "http://localhost:3000/api/auth/sign_out",
     response: "fixture:successful_user_logout.json",
   })
   cy.visit("http://localhost:3001")
   cy.user_login("johndoe@mail.com", "wrong_password");
   cy.get("#logout-button").should("exist");
   cy.get("#logout-button").click();
   cy.get("#flash").should("contain",  "You have successfully logged out.")
   cy.get("#login-button").should("exist");
 });
}) 