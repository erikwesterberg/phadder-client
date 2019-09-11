describe("User must be logged in to acces profile page", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:successful_log_in.json"
    });
    cy.user_login("johndoe@mail.com", "password"); 
  });

  it("User logging in", () => {
    cy.get("#profile-button").click();
    cy.contains("Welcome John, to your profile page!");
    cy.get("#edit-profile-pic-button").click()
  });
})