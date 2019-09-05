describe("Client can create service request", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: "http://localhost:3000/api/v0/service_request",
      response: "fixture:requests.json",
      status: 200
    })
  });

  it("Request is posted successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/service_request",
      response: "fixture:successful_saving_requests_response.json",
      status: 200
    });
    cy.get("#create-request-button").click();
    cy.get("#create-request-form").within(() => {
      cy.get("#title").type("Build my webpage");
      cy.get("#category").type("It service");
      cy.get("#details").type("Im a proffensional painter, I want a website to show the world my art");
      cy.get("#budget").type("big");
      cy.get("#submit-request-button").click();
    });
    cy.contains("Request successfully created");
    cy.get("#create-request-form").should("not.exist");
  });

  it("Request is not created successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v0/service_request",
      response: "fixture:unsuccessful_creating_request_response.json",
      status: 422
    });
    cy.get("#create-request-button").click();
    cy.get("#create-request-form").within(() => {
      cy.get("#category").type("It service");
      cy.get("#details").type("Im a proffensional painter, I want a website to show the world my art");
      cy.get("#budget").type("big");
      cy.get("#submit-request-button").click();
    });
    cy.contains("Title can't be blank.")
  })
});