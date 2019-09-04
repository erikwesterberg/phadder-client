describe("Visitor can sign up", () => {
  beforeEach(function () {
    cy.server();
  });
  it("Can successfully sign up as a client", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:successful_client_signup_response.json"
    });
    cy.client_successful_signup(
      "John",
      "Doe",
      "johndoe@email.com",
      "password",
      "password"
    );
    cy.get("#submit-account-button").click();
    cy.contains("Welcome John!");
  });
})