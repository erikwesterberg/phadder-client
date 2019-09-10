describe("User can get location providing post code", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:3001");
  });

  it("Location is updated with post-code", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/post_code_queries",
      response: "fixture:successful_fetching_city_response.json",
      status: 200
    });
    cy.get("#get-location-button").click();
    cy.get("#post-code-input").type("11240");
    cy.contains("Stockholm, Stockholm");
  });

  it("Invalid post code is inserted", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/post_code_queries",
      response: "fixture:unsuccessful_fetching_city_response.json",
      status: 200
    });
    cy.get("#get-location-button").click();
    cy.get("#post-code-input").type("95869");
    cy.contains(
      "Please enter valid post code before going ahead with posting a request"
    );
  });

  it("Not possible to connect with API", () => {
    cy.get("#get-location-button").click();
    cy.get("#post-code-input").type("11234");
    cy.wait(5000);
    cy.contains("Connection failed");
  });
});
