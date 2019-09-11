describe("Client can create service request", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:3001");
  });

  it("Request is posted successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/language_queries",
      response: "fixture:successful_language_detection_response.json",
      status: 200
    });
    cy.get("#create-request-button").click();
    cy.get("#request-form").within(() => {
      cy.get("#title").type("Build my webpage");
      cy.get('select[id="category"]').select("IT Service");
      cy.get("#details").type("My roof just fell down because of the storm and I need someone qualified to fix it. This is an urgent request. ");
      cy.wait(2000);
      cy.get("#en").should("be.checked");
    });
    cy.contains("You are writing in English...");
  });
})