describe("User can log in", () => {
  beforeEach(() => {
    cy.server();
  });

  it("Successfully logs in", () => {
    cy.user_login("johndoe@mail.com", "password");
    cy.contains("Welcome John!");
  });

  it("Attempts to log in with invalid credentials", () => {
    cy.user_wrong_login("johndoe@mail.com", "wrong_password");
    cy.contains("Invalid login credentials. Please try again.");
  });
});
