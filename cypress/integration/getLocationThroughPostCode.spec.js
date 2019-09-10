describe("User can get location providing post code", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/post_code_queries",
      response: "fixture:successful_fetching_city_response.json",
      status: 200
    });
  });

  it("Location is updated with post-code", () => {
    cy.visit("http://localhost:3001")
    cy.get("#get-location-button").click();
    cy
      .get("#post-code-input")
      .type(
        "11240"
      );
    cy.contains("Stockholm, Stockholm");
  });

})