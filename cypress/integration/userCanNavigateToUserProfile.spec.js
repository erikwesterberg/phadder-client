describe("User can log in", () => {
  beforeEach(() => {
    cy.server();
  });

  it("Successfully logs in", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_log_in.json"
    });
    cy.user_login("johndoe@mail.com", "password");
    cy.contains("Welcome John!");
    cy.wait(2000)
  });

 it("If user click on profile page in navbar they should se a perosnal greeting", () => {
    cy.get("#profile-button").click();
    cy.contains("Welcome John, to your profile page!");
  });
});