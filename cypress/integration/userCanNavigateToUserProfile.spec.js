describe("User can access profile page", () => {
  beforeEach(() => {
    cy.server();
  });

  it("Logged in user can access profile page", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_log_in.json"
    });
    cy.user_login("johndoe@mail.com", "password");
    cy.get("#profile-button").click();
    cy.contains("Welcome John, to your profile page!");
  });

  it("Unregistered visitor should not see profile button", () => {
    cy.visit("http://localhost:3001");
    cy.get("#profile-button").should("not.exist");
  });
});
