describe("User can get location providing post code", () => {
  beforeEach(() => {
    cy.server();
  });

  it("Location is updated with post-code", () => {
    cy.get("#get-location-button").click();
    cy
      .get("#post-code-input")
      .type(
        "11240"
      );
    cy.contains("Stockholm, Stockholm");
  });

})